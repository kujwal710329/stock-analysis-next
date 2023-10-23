"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";
var processedData;
const Chart = () => {
  var currentYear = new Date().getFullYear();
  const [chartLoaded, setChartLoaded] = useState(false);
  const [outputfunc, setOutputfunc] = useState([]); // Use state to store outputfunc

  const processData = async () => {
    try {
      const response = await fetch("https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=IBM&apikey=demo");
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
        .filter((item) => item[0].getFullYear() === currentYear);
      // console.log(processedData);
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
      title: "Rate the Day on a Scale of 1 to 10",
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
    processData(); // Call processData to fetch and process data
  }, []);

  useEffect(() => {
    // ... (rest of your code)

    if (processedData) {
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
    }
  }, [chartLoaded, outputfunc]);

  // Rest of your component

  return (
    <>
      <section className="text-center py-4 background-transparent">
        <Script src="https://www.gstatic.com/charts/loader.js" strategy="beforeInteractive" />
        <div className="">
          <button id="change">Click to change the format</button>
          <div id="chart_div" className="w-full h-36 md:h-48 lg:h-64"></div>
        </div>
      </section>
    </>
  );
};

export default Chart;
