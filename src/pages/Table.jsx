import React from "react";
// import "./CropTable.scss";

import { data } from "./../data";

const CropTable = () => {
  const last5YearsData = data.slice(-5);

  const cropNames = ["Rice", "Maize", "Groundnut", "Cotton", "Sugarcane"];

  return (
    <div className="table-container">
      <h2>Crop Data (Last 5 Years)</h2>
      <table className="crop-table">
        <thead>
          <tr>
            <th>Year</th>
            {cropNames.map((crop) => (
              <th key={crop} colSpan="3">
                {crop}
              </th>
            ))}
          </tr>
          <tr>
            <th></th>
            {cropNames.map((crop) => (
              <React.Fragment key={`${crop}-sub`}>
                <th>Area</th>
                <th>Production</th>
                <th>Yield</th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {last5YearsData.map((yearData) => (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              {cropNames.map((crop) => {
                const cropData = yearData.crops.find((c) => c.name === crop);
                return cropData ? (
                  <React.Fragment key={crop}>
                    <td>{cropData.area}</td>
                    <td>{cropData.production}</td>
                    <td>{cropData.yield}</td>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={crop}>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </React.Fragment>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="units">
        <div className="area">Area in 1000hectares</div>
        <div className="production">Production in kg </div>
        <div className="yield">Yield in kg/ha</div>
      </div>
    </div>
  );
};

export default CropTable;
