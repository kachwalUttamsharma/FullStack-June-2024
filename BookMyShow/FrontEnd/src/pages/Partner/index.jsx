import React from "react";
import { Tabs } from "antd";
import TheatreList from "./TheatreList";

function Partner() {
  const items = [
    {
      key: "theatre",
      label: "Theatres",
      children: <TheatreList />,
    },
  ];
  return (
    <div>
      <h1>Partner Page</h1>
      <Tabs items={items} />
    </div>
  );
}

export default Partner;
