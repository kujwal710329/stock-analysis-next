"use client";

import Chart from "./Chart";
import Script from "next/script";
import Image from "next/image";
import CardWrapper from "../../components/card/CardWrapper";
import { useState, useEffect } from "react";
const product = ({ params }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchTicker = async () => {
      try {
        const alphaResponse = await fetch("https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo");
        // const alphaResponse = await fetch(
        //   `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${params.tickerId}&apikey=${process.env.COLLEGE_ALPHAVANTAGE_KEY}`
        // );
        const respData = await alphaResponse.json();
        console.log(respData);
        setData(respData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTicker();
  }, []);

  return (
    <section className=" flex flex-col gap-3 w-2/3">
      <Script
        src="https://www.gstatic.com/charts/loader.js"
        onLoad={() => {
          console.log("home script loaded");
        }}
        strategy="beforeInteractive"
        as="script"
      />

      <CardWrapper>
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <div className="ticker-logo">
              <Image src="/assets/images/groww_logo.png" alt="logo" width={50} height={50} className="object-contain" />
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-base text-slate-900 font-bold ">{data.Name}</p>
              <p className="text-xs text-slate-600 font-semibold">{`${data.Symbol}, ${data.AssetType}`}</p>
              <p className="text-xs text-slate-600 font-semibold">{data.Symbol}</p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            {/* <p className="text-sm text-slate-900 font-bold">$177.15</p>
            <p className="text-xs font-semibold">+0.41%up</p> */}
            {/* "\u2191" : "\u2193" */}
            <p className="text-sm text-gray-800 font-bold">$177.15</p>
            <p className={`text-xs text-green-600 font-semibold`}>0.41% &uarr;</p>
          </div>
        </div>
      </CardWrapper>
      <Chart params={params} />

      <div className="mt-56 mb-24">
        <CardWrapper>
          <div className="flex flex-col gap-3">
            <div className="text-base font-bold">About {data.Name}</div>
            <hr />
            <div className="text-xs font-semibold">{data.Description}</div>

            <div className="ticker-tag flex gap-1">
              <span className="bg-slate-300 text-slate-800 text-xs font-semibold px-2 py-1 rounded-3xl">Industry: {data.Industry}</span>
              <span className="bg-slate-300 text-slate-800 text-xs font-semibold px-2 py-1 rounded-3xl">Sector: {data.Sector}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 mt-6">
              {/* <div className="grid grid-cols-5 gap-x-4 gap-y-10 mt-6"> */}
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">52-week Low</p>
                <p className="text-xs font-bold">{data["52WeekLow"]}</p>
              </div>
              <div className="col-span-3">
                <div className="flex items-center justify-center bg-gray-900">
                  <input
                    type="range"
                    min={data["52WeekLow"]}
                    max={data["52WeekHigh"]}
                    value="0"
                    className="appearance-none bg-transparent w-80 focus:outline-red-500 slider-thumb"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">52-week High</p>
                <p className="text-xs font-bold">{data["52WeekHigh"]}</p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">Market Cap</p>
                <p className="text-xs font-bold">{data.MarketCapitalization}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">P/E Ratio</p>
                <p className="text-xs font-bold">{data.PERatio}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">Beta</p>
                <p className="text-xs font-bold">{data.Beta}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">Dividend Yield</p>
                <p className="text-xs font-bold">{data.DividendYield}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">Profit Margin</p>
                <p className="text-xs font-bold">{data.ProfitMargin}</p>
              </div>
            </div>
          </div>
        </CardWrapper>
      </div>
    </section>
  );
};

export default product;
