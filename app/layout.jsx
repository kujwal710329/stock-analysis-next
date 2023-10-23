import "@styles/globals.css";
import Nav from "@components/Nav";
// import Head from "next/head";
// import Script from "next/script";

export const metadata = {
  title: "GrowwStonks",
  description: "Groww - Online Demat, Trading and Direct Mutual Fund",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
