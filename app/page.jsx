"use client";
import { useState } from "react";
import CompanyList from "@components/CompanyList";
const Home = () => {
  const [tickerType, setTickerType] = useState("gainers");

  const handleGainer = () => {
    console.log("gainer function called");
    if (tickerType !== "gainers") {
      setTickerType("gainers");
    }
  };
  const handleLoser = () => {
    console.log("losers function called");
    if (tickerType !== "losers") {
      setTickerType("losers");
    }
  };
  return (
    <section className="w-4/5">
      <div className="flex gap-4 mb-8">
        <button className={`w-30 h-12 ${tickerType === "gainers" ? "border-b-4  border-b-indigo-500 text-base font-bold" : ""} p-2`} onClick={handleGainer}>
          Top Gainers
        </button>
        <button className={`w-30 h-12 ${tickerType === "losers" ? "border-b-4  border-b-indigo-500 text-base font-bold" : ""} p-2`} onClick={handleLoser}>
          Top Losers
        </button>
      </div>
      <CompanyList type={tickerType} />
    </section>
  );
};

export default Home;
