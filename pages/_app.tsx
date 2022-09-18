import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout/Layout";
import globalStyles from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
