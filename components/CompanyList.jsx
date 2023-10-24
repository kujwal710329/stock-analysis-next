"use client";
import Card from "./card/card";
import Link from "next/link";
import { useState, useEffect } from "react";

const CompanyList = ({ type }) => {
  const [alphaTickerList, setAlphaTickerList] = useState([]);

  const fetchAlphaTickerList = async () => {
    const alphaResponse = await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`);
    const tempAlphaData = await alphaResponse.json();
    console.log(tempAlphaData);
    const tickerType = `top_${type}`;
    const alphaData = tempAlphaData[tickerType];
    console.log(alphaData);
    setAlphaTickerList(alphaData);
  };

  useEffect(() => {
    fetchAlphaTickerList();
  }, [type]);

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {alphaTickerList.map((tickerData, index) => (
        <Link href={`/${tickerData.ticker}`} key={index}>
          <Card data={tickerData} type={type} />
        </Link>
      ))}
    </section>
  );
};

export default CompanyList;
