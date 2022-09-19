import { gql } from "@apollo/client";

export const Signup = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(
      createUserInput: { email: $email, password: $password, name: $name }
    )
  }
`;

export const SendToken = gql`
  mutation sendToken($email: String!) {
    sendToken(email: $email)
  }
`;

export const CheckToken = gql`
  mutation checkToken($token: String!) {
    checkToken(token: $token)
  }
`;
