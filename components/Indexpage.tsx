import React, { useEffect } from "react";
import Head from "next/head";
import UnifiedNavbar from "./UnifiedNavbar";

const IndexPage = () => {
useEffect(() => {
const loadWidget = () => {
return new Promise((resolve) => {
const script = document.createElement("script");
script.src = "https://stg.platform.onmeta.in/onmeta-sdk.js";
script.onload = resolve;
document.body.appendChild(script);
});
};
loadWidget().then(() => {
  const createWidget = new onMetaWidget({
    elementId: "widget",
    apiKey: "0c73fa12-8923-4740-8a14-cb78b178b12c",
  });
  createWidget.init();
  createWidget.on("ALL_EVENTS", (status: any) => console.log(status));
});
}, []); // Ensure this code only runs on the client side

return (
<div>
<Head>
<title>SwapFi- Buy Crypto</title>
</Head>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
<div id="widget"></div>
</div>
);
};

export default IndexPage;