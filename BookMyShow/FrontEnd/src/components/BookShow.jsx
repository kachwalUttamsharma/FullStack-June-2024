import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { getShowById } from "../api/show";
import { useNavigate, useParams } from "react-router-dom";
import { message, Card, Row, Col, Button } from "antd";
import moment from "moment";
import StripeCheckout from "react-stripe-checkout";
import { bookShow, makePayment, makePaymentAndBookShow } from "../api/booking";

const BookShow = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getShowById({ showId: params.id });
      if (response.success) {
        setShow(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(hideLoading());
    } catch (err) {
      message.error(err.message);
      dispatch(hideLoading());
    }
  };

  const getSeats = () => {
    let columns = 12;
    let totalSeats = show.totalSeats;
    let rows = Math.ceil(totalSeats / columns);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="w-100 max-width-600 mx-auto mb-25px">
          <p className="text-center mb-10px">
            Screen this side, you will be watching in this direction
          </p>
          <div className="screen-div"></div>
          <ul className="seat-ul justify-content-center">
            {Array.from(Array(rows).keys()).map((row) => {
              // to be discussed how we are spliting it into multiple rows
              return Array.from(Array(columns).keys()).map((column) => {
                let seatNumber = row * columns + column + 1;
                let seatClass = "seat-btn";
                if (selectedSeats.includes(seatNumber)) {
                  seatClass += " selected";
                }
                if (show.bookedSeats.includes(seatNumber)) {
                  seatClass += " booked";
                }
                if (seatNumber <= totalSeats)
                  return (
                    <li>
                      <button
                        onClick={() => {
                          if (!seatClass.split(" ").includes("booked")) {
                            if (selectedSeats.includes(seatNumber)) {
                              setSelectedSeats(
                                selectedSeats.filter(
                                  (curSeatNumber) =>
                                    curSeatNumber !== seatNumber
                                )
                              );
                            } else {
                              setSelectedSeats([...selectedSeats, seatNumber]);
                            }
                          }
                        }}
                        className={seatClass}
                      >
                        {seatNumber}
                      </button>
                    </li>
                  );
              });
            })}
          </ul>
        </div>
      </div>
    );
  };

  // const book = async (transactionId) => {
  //   try {
  //     dispatch(showLoading());
  //     const response = await bookShow({
  //       show: params.id,
  //       transactionId,
  //       seats: selectedSeats,
  //       user: user._id,
  //     });
  //     if (response.success) {
  //       message.success("Show Booking done!");
  //       navigate("/profile");
  //     } else {
  //       message.error(response.message);
  //     }
  //     dispatch(hideLoading());
  //   } catch (err) {
  //     message.error(err.message);
  //     dispatch(hideLoading());
  //   }
  // };

  // const onToken = async (token) => {
  //   try {
  //     dispatch(showLoading());
  //     const response = await makePayment(
  //       token,
  //       selectedSeats.length * show.ticketPrice
  //     );
  //     if (response.success) {
  //       message.success(response.message);
  //       book(response.data);
  //       console.log(response);
  //     } else {
  //       message.error(response.message);
  //     }
  //     dispatch(hideLoading());
  //   } catch (err) {
  //     message.error(err.message);
  //     dispatch(hideLoading());
  //   }
  // };

  const bookAndPay = async (token) => {
    try {
      dispatch(showLoading());
      const response = await makePaymentAndBookShow({
        token,
        amount: selectedSeats.length * show.ticketPrice * 100,
        show: params.id,
        seats: selectedSeats,
        user: user._id,
      });
      if (response.success) {
        message.success("Show Booking done!");
        navigate("/profile");
      } else {
        message.error(response.message);
      }
    } catch (err) {
      message.error(err);
    } finally {
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      {show && (
        <Row gutter={24}>
          <Col span={24}>
            <Card
              title={
                <div className="movie-title-details">
                  <h1>{show.movie.movieName}</h1>
                  <p>
                    Theatre: {show.theatre.name}, {show.theatre.address}
                  </p>
                </div>
              }
              extra={
                <div className="show-name py-3">
                  <h3>
                    <span>Show Name:</span> {show.name}
                  </h3>
                  <h3>
                    <span>Date & Time: </span>
                    {moment(show.date).format("MMM Do YYYY")} at
                    {moment(show.time, "HH:mm").format("hh:mm A")}
                  </h3>
                  <h3>
                    <span>Ticket Price:</span> Rs. {show.ticketPrice}/-
                  </h3>
                  <h3>
                    <span>Total Seats:</span> {show.totalSeats}
                    <span> &nbsp;|&nbsp; Available Seats:</span>
                    {show.totalSeats - show.bookedSeats.length}
                  </h3>
                </div>
              }
              style={{ width: "100%" }}
            >
              {getSeats()}

              {selectedSeats.length > 0 && (
                <StripeCheckout
                  token={bookAndPay}
                  amount={selectedSeats.length * show.ticketPrice}
                  billingAddress
                  stripeKey="pk_test_51O5zcBSBDTkZoZSYLMhGUO2MTmaOGJ2zaVA8RuqLn35meiJiQUAzM8HKHgNYXJAGnRSf335yH7rYZQCJ8G6uPIrU00VLrpUJX9"
                >
                  <div className="max-width-600 mx-auto">
                    <Button type="primary" shape="round" size="large" block>
                      Pay Now
                    </Button>
                  </div>
                </StripeCheckout>
              )}
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default BookShow;
