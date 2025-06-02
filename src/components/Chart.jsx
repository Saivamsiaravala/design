import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const Chart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const cropData = [
      {
        year: "2013-14",
        Rice: 7200,
        Maize: 2500,
        Groundnut: 947,
        Cotton: 3500,
        Sugarcane: 12000,
      },
      {
        year: "2014-15",
        Rice: 6900,
        Maize: 2600,
        Groundnut: 394,
        Cotton: 3300,
        Sugarcane: 12500,
      },
      {
        year: "2015-16",
        Rice: 7000,
        Maize: 2550,
        Groundnut: 856,
        Cotton: 3400,
        Sugarcane: 12300,
      },
      {
        year: "2016-17",
        Rice: 7300,
        Maize: 2700,
        Groundnut: 561,
        Cotton: 3450,
        Sugarcane: 12700,
      },
      {
        year: "2017-18",
        Rice: 7500,
        Maize: 2750,
        Groundnut: 1529,
        Cotton: 3550,
        Sugarcane: 13000,
      },
      {
        year: "2018-19",
        Rice: 7600,
        Maize: 2800,
        Groundnut: 683,
        Cotton: 3600,
        Sugarcane: 13200,
      },
      {
        year: "2019-20",
        Rice: 7700,
        Maize: 2850,
        Groundnut: 754,
        Cotton: 3650,
        Sugarcane: 13500,
      },
      {
        year: "2020-21",
        Rice: 7800,
        Maize: 2900,
        Groundnut: 860,
        Cotton: 3700,
        Sugarcane: 13700,
      },
      {
        year: "2021-22",
        Rice: 7900,
        Maize: 2950,
        Groundnut: 678,
        Cotton: 3750,
        Sugarcane: 13900,
      },
      {
        year: "2022-23",
        Rice: 8000,
        Maize: 3000,
        Groundnut: 763,
        Cotton: 3800,
        Sugarcane: 14100,
      },
    ];

    const years = cropData.map((item) => item.year);

    const crops = ["Rice", "Maize", "Groundnut", "Cotton", "Sugarcane"];
    const series = crops.map((crop) => ({
      name: crop,
      type: "line",
      data: cropData.map((item) => item[crop]),
    }));

    chartInstance.setOption({
      title: {
        text: "Crop Production in Andhra Pradesh (2013-2023)",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        top: 30,
        data: crops,
      },
      xAxis: {
        type: "category",
        data: years,
      },
      yAxis: {
        type: "value",
        name: "Production (000 Tonnes)",
      },
      series: series,
      grid: {
        left: "5%",
        right: "5%",
        bottom: "10%",
        containLabel: true,
      },
    });

    const resizeObserver = new ResizeObserver(() => {
      chartInstance.resize();
    });
    resizeObserver.observe(chartRef.current);

    return () => {
      chartInstance.dispose();
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={chartRef}
      // style={{ height: "300px", width: "900px" }}
      className="chart"
    />
  );
};

export default Chart;
