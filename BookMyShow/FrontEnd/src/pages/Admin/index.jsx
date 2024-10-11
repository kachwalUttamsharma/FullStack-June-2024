import React from "react";
import { Tabs } from "antd";
import MovieList from "./MovieList";
import TheatreTable from "./TheatreTable";

function Admin() {
  const tabItems = [
    {
      key: "movies",
      label: "Movies",
      children: <MovieList />,
    },
    {
      key: "theatre",
      label: "Theatres",
      children: <TheatreTable />,
    },
  ];
  return (
    <div>
      <h1>Admin Page</h1>
      <Tabs items={tabItems} />
    </div>
  );
}

export default Admin;
