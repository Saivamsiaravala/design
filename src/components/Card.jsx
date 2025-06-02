import React from "react";
import { IoCalendarNumber } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";
import crops from "./../assets/crops.png";
import calendar from "./../assets/calendar.png";
import cropimg from "./../assets/wheat.png";

function Card({ title, crop, value, year, icon }) {
  return (
    <div className="card">
      <div className="title">
        {title}
        <img src={icon} alt="" style={{ width: "20px" }} />
      </div>
      <div className="detail">
        <div className="crop">
          {crop}

          <img src={cropimg} alt="" style={{ width: "20px" }} />
        </div>
        <div className="value">
          {value}
          <img src={crops} alt="" style={{ width: "20px" }} />
        </div>
      </div>
      <div className="year">
        {year}
        <img src={calendar} alt="" style={{ width: "20px" }} />
      </div>
    </div>
  );
}
export default Card;
