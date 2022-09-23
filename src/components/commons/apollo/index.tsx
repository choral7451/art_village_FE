import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { AccessTokenState } from "../../../commons/store";
import { useRecoilState } from "recoil";
import { createUploadLink } from "apollo-upload-client";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(AccessTokenState);

  const uploadLink = createUploadLink({
    uri: "http://localhost:3000/graphql",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
