import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { AccessTokenState } from "../../../commons/store";
import { useRecoilState } from "recoil";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);

  const client = new ApolloClient({
    uri: "http://localhost:3000/graphql",
    credentials: "include",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
