import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { Table, message } from "antd";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/loaderSlice";
import { getAllMovies } from "../../api/movie";

const MovieList = () => {
  const [movies, SetMovies] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getAllMovies();
      const allMovies = response?.data;
      SetMovies(allMovies);
    } catch (error) {
      message.error(error);
    } finally {
      dispatch(hideLoading());
    }
  };

  const tableHeadings = [
    {
      title: "Poster",
      dataIndex: "poster",
      render: (text, data) => {
        return (
          <img
            width="75"
            height="115"
            style={{ objectFit: "cover" }}
            src={data?.poster}
          />
        );
      },
    },
    {
      title: "Movie Name",
      dataIndex: "movieName",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      render: (text) => {
        return `${text} Min`;
      },
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Language",
      dataIndex: "language",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      render: (text, data) => {
        return DateTime.fromISO(text).toFormat("dd-MM-yyyy");
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Table columns={tableHeadings} dataSource={movies} />
    </div>
  );
};

export default MovieList;
