import "./styles/global.css";
import { AppProps } from "next/app";
import Layout from "@/components/Layout";
import UnifiedNavbar from "@/components/UnifiedNavbar";
import { url } from "inspector";
import "@rainbow-me/rainbowkit/styles.css";

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID?? "Undefined" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: '0d14b50049d1cc2cd65249d04099fc27',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

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
          <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default MyApp;
