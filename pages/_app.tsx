import "./styles/global.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import UnifiedNavbar from "@/components/UnifiedNavbar";
import { url } from "inspector";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      style={{
        backgroundImage: "url('/ggs.png')", // Use a relative URL from the public directory
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
