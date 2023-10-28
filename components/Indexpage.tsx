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

    const createWidget = () => {
      // Remove any existing widgets
      const existingWidgets = document.querySelectorAll("#widget");
      existingWidgets.forEach((widget) => widget.remove());

      // Create a new widget
      const widgetElement = document.createElement("div");
      widgetElement.id = "widget";
      document.body.appendChild(widgetElement);

      // Initialize the widget
      const onMetaWidgetInstance = new onMetaWidget({
        elementId: "widget",
        apiKey: "0c73fa12-8923-4740-8a14-cb78b178b12c",
      });
      onMetaWidgetInstance.init();
      onMetaWidgetInstance.on("ALL_EVENTS", (status: any) => console.log(status));
    };

    loadWidget().then(createWidget);
  }, []); // Only runs on component mount (initial render)

  return (
    <div>
      <Head>
        <title>SwapFi- Buy Crypto</title>
      </Head>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="widget"></div>
    </div>
  );
};

export default IndexPage;