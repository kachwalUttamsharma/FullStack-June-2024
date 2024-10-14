import { Table, Button, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { getAllTheatresForAdmin, updateTheatre } from "../../api/theatre";

const TheatreTable = () => {
  const dispatch = useDispatch();
  const [theatres, setTheatres] = useState([]);

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getAllTheatresForAdmin();
      if (response.success) {
        const allTheatres = response.data;
        setTheatres(
          allTheatres.map(function (item) {
            return { ...item, key: `theatre${item._id}` };
          })
        );
      }
    } catch (err) {
      message.error(err);
    } finally {
      dispatch(hideLoading());
    }
  };

  const handleStatusChange = async (theatre) => {
    try {
      dispatch(showLoading());
      const values = {
        ...theatre,
        theatreId: theatre._id,
        isActive: !theatre.isActive,
      };
      const response = await updateTheatre(values);
      if (response.success) {
        message.success(response.message);
        getData();
      }
    } catch (err) {
      message.error(err);
    } finally {
      dispatch(hideLoading());
    }
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Owner",
      dataIndex: "owner",
      render: (text, data) => {
        return data.owner && data.owner.name;
      },
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (status, data) => {
        if (data.isActive) {
          return "Approved";
        } else {
          return "Pending/ Blocked";
        }
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, data) => {
        return (
          <div className="d-flex align-items-center gap-10">
            {data.isActive ? (
              <Button onClick={() => handleStatusChange(data)}>Block</Button>
            ) : (
              <Button onClick={() => handleStatusChange(data)}>Approve</Button>
            )}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Table dataSource={theatres} columns={columns} />
    </div>
  );
};

export default TheatreTable;
