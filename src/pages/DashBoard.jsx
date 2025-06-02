import React from "react";
import Cards from "../components/Cards";
import Chart from "../components/Chart";

function DashBoard() {
  return (
    <div className="dashboard">
      <Cards />
      <Chart />
    </div>
  );
}

export default DashBoard;
