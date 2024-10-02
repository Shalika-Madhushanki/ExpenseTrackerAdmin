import React from "react";


import CardBlock from "./CardBlock";
import GraphBlock from "./GraphBlock";
import ListBlock from "./ListBlock";
import { Divider } from "antd";

const Dashboard = () => {
  return (
    <>
      <CardBlock />
      <Divider/>
      <GraphBlock />
      <Divider/>

      <ListBlock />
    </>

  );
}

export default Dashboard;