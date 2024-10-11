import React from "react";
import { Tabs } from "antd";
import MovieList from "./MovieList";
import TheatreTable from "./TheatreTable";

// Admin -> Movie (CRUD) and Theatre
// Tabs
// each Tab -> Movie -> set of information
// form -> add a movie
// Table
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
