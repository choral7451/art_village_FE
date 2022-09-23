import { gql } from "@apollo/client";

export const FetchUsers = gql`
  query {
    fetchUsers {
      id
      email
      name
      membership
      createdAt
    }
  }
`;
