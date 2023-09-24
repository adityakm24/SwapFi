import "./styles/global.css";
import "../assets/styles/SearchButton.module.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import UnifiedNavbar from "@/components/UnifiedNavbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
