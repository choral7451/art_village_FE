import { gql } from "@apollo/client";

export const FETCH_LOGINUSER = gql`
  query {
    fetchLoginUser {
      email
      name
    }
  }
`;
