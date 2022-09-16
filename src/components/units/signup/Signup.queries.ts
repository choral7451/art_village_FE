import { gql } from "@apollo/client";

export const Signup = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(
      createUserInput: { email: $email, password: $password, name: $name }
    )
  }
`;
