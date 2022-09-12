import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import Layout from "../src/components/commons/layout/Layout";
import globalStyles from "../src/commons/styles/globalStyles";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
