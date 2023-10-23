import Chart from "./chart/Chart";
import Script from "next/script";
import CardWrapper from "./card/CardWrapper";
const product = () => {
  return (
    <section className=" flex flex-col gap-3">
      <Script src="https://www.gstatic.com/charts/loader.js" strategy="beforeInteractive" />
      <CardWrapper>
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <div className="ticker-logo">LOGO</div>
            <div className="flex flex-col gap-0.5">
              <p className="text-base text-slate-900 font-bold ">APPLE INC</p>
              <p className="text-xs text-slate-600 font-semibold">AAPL, Common stock</p>
              <p className="text-xs text-slate-600 font-semibold">NSQ</p>
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-slate-900 font-bold">$177.15</p>
            <p className="text-xs font-semibold">+0.41%up</p>
          </div>
        </div>
      </CardWrapper>
      <Chart />

      <div className="mt-56 mb-24">
        <CardWrapper>
          <div className="flex flex-col gap-3">
            <div className="text-base font-bold">About APPLE INC</div>
            <hr />
            <div className="text-xs font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis accusamus, assumenda, nulla blanditiis, aliquid nesciunt exercitationem eligendi
              temporibus illum deleniti labore rerum dolorum dolorem laborum? A, inventore amet delectus ullam architecto enim non quas error nobis in, eveniet
              ratione consequuntur.
            </div>

            <div className="ticker-tag">
              <span className="bg-slate-300 text-slate-800 text-xs font-semibold px-2 py-1 rounded-3xl">Industry: Electronic computeres</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-10 mt-6">
              {/* <div className="grid grid-cols-5 gap-x-4 gap-y-10 mt-6"> */}
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">52-week Low</p>
                <p className="text-xs font-bold">$123.64</p>
              </div>
              <div className="col-span-3">2</div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">52-week High</p>
                <p className="text-xs font-bold">$197.64</p>
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">Market Cap</p>
                <p className="text-xs font-bold">$2.77T</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">P/E Ratio</p>
                <p className="text-xs font-bold">27.77</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">Beta</p>
                <p className="text-xs font-bold">1.308</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">Dividend Yield</p>
                <p className="text-xs font-bold">0.54</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold">Profit Margin</p>
                <p className="text-xs font-bold">0.247</p>
              </div>
            </div>
          </div>
        </CardWrapper>
      </div>
    </section>
  );
};

export default product;
