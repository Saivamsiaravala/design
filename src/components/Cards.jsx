import React, { useEffect, useState } from "react";
import Card from "./Card";
// import { data } from "../data";
import { IoCalendarNumber } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineFall } from "react-icons/ai";

import increase from "./../assets/increase.png";
import decrease from "./../assets/decrease.png";

function Cards() {
  const [cropData, setCropData] = useState({
    highestProduction: {
      title: "Highest Production",
      crop: "SugarCane",
      value: "14100kg",
      year: "2022-23",
      icon: increase,
    },
    highestYield: {
      title: "Highest Yield",
      crop: "SugarCane",
      value: "72308kg/ha",
      year: "2022-23",
      icon: increase,
    },
    lowestProduction: {
      title: "Lowest Production",
      crop: "GroundNut",
      value: "763kg",
      year: "2022-23",
      icon: decrease,
    },
    lowestYield: {
      title: "Lowest Yield",
      crop: "Cotton",
      value: "2879kg/ha",
      year: "2022-23",
      icon: decrease,
    },
  });
  const { highestProduction, highestYield, lowestProduction, lowestYield } =
    cropData;
  return (
    <div className="cards">
      <Card {...highestProduction} />
      <Card {...lowestProduction} />
      <Card {...highestYield} />
      <Card {...lowestYield} />
    </div>
  );
}

export default Cards;
