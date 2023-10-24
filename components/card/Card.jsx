"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CardWrapper from "./CardWrapper";

const Card = ({ data, type }) => {
  // const [overviewData, setOverviewData] = useState({});

  // useEffect(() => {
  //   const fetchTicker = async () => {
  //     try {
  //       const alphaResponse = await fetch(
  //         `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${data.ticker}&apikey=${process.env.COLLEGE_ALPHAVANTAGE_KEY}`
  //       );
  //       const respData = await alphaResponse.json();
  //       setOverviewData(respData);
  //       console.log(respData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchTicker();
  // }, []);
  return (
    <>
      <CardWrapper>
        <div className="">
          <Image src="/assets/images/groww_logo.png" alt="logo" width={50} height={50} className="object-contain" />
          {/* <p className="text-xs text-slate-600 font-semibold">Apple, Inc(AAPL)</p> */}

          <h5 className="mb-1 text-base font-semibold tracking-tight text-gray-800 ">{data.ticker}</h5>
          <div className="flex justify-between mt-3 items-center">
            <p className="text-sm text-gray-800 font-bold">{data.price}</p>
            <p className={`text-xs ${type === "gainers" ? "text-green-600" : "text-red-600"} font-semibold`}>
              {data.change_amount} {type === "gainers" ? "\u2191" : "\u2193"}
            </p>
          </div>
        </div>
        {/* </Link> */}
      </CardWrapper>
    </>
  );
};

export default Card;
