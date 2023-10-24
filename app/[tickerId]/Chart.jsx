"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
import Head from "next/head";
import ButtonGroup from "@components/card/buttons/buttonGroup";
var processedData;
const Chart = ({ params, id }) => {
  var currentYear = new Date().getFullYear();
  var Year = [2023, 2022, 2021, 2020, 2019];
  const [chartLoaded, setChartLoaded] = useState(false);
  const [outputfunc, setOutputfunc] = useState([]); // Use state to store outputfunc
  const [chartData, setChartData] = useState(null);

  const processData = async () => {
    try {
      const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo");
      // const response = await fetch(
      //   `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${params.ticker}&apikey=${process.env.COLLEGE_ALPHAVANTAGE_KEY}`
      // );
      const respData = await response.json();
      // console.log(respData);

      const chartData = [];
      for (var date in respData["Monthly Time Series"]) {
        var dataEntry = respData["Monthly Time Series"][date];
        var closePrice = parseFloat(dataEntry["4. close"]);
        chartData.push([date, closePrice]);
      }
      // console.log(chartData);

      processedData = chartData
        .map((item) => {
          const [dateStr, value] = item;
          const [year, month, day] = dateStr.split("-").map(Number);
          return [new Date(year, month - 1, day), value];
        })
        // .filter((item) => item[0].getFullYear() === currentYear);
        .filter((item) => Year.includes(item[0].getFullYear()));
      console.log(processedData);
      setOutputfunc(processedData); // Set the state when data is ready
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const drawChart = () => {
    var data = new google.visualization.DataTable();
    data.addColumn("date", "Time of Day");
    data.addColumn("number", "Rating");
    data.addRows(processedData);

    var options = {
      // title: "Rate the Day on a Scale of 1 to 10",
      width: 750,
      height: 450,
      hAxis: {
        format: "M/d/yy",
        gridlines: { count: 15 },
      },
      vAxis: {
        gridlines: { color: "none" },
        minValue: 0,
      },
      chartArea: { backgroundColor: "transparent" },
    };

    var chart = new google.visualization.LineChart(document.getElementById("chart_div"));

    chart.draw(data, options);

    var button = document.getElementById("change");

    button.onclick = function () {
      // If the format option matches, change it to the new option,
      // if not, reset it to the original format.
      options.hAxis.format === "M/d/yy" ? (options.hAxis.format = "MMM dd, yyyy") : (options.hAxis.format = "M/d/yy");

      chart.draw(data, options);
    };
  };

  useEffect(() => {
    processData();
  }, []);

  useEffect(() => {
    if (typeof google !== "undefined") {
      // console.log(typeof google);
      // console.log("if cond");
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
    } else {
      // console.log(google);
      // console.log(google.visualization);
      // console.log("else cond");
      // google.charts.load("current", { packages: ["corechart"] });
      // google.charts.setOnLoadCallback(drawChart);
    }
  }, [outputfunc]);

  // Rest of your component

  return (
    <>
      <section className="text-center py-4 background-transparent">
        <div className="">
          <div className="flex justify-between">
            <ButtonGroup />
            <button id="change" className="bg-slate-300 text-slate-800 text-xs font-semibold px-2 py-1 rounded-md mb-2">
              change date format
            </button>
          </div>
          <div id="chart_div" className="w-full h-36 md:h-48 lg:h-64"></div>
        </div>
      </section>
    </>
  );
};

export default Chart;
