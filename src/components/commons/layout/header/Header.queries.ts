import { gql } from "@apollo/client";

export const MUTATION_LOGOUT = gql`
  mutation {
    logout
  }
`;
