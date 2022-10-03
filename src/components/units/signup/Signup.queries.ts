import { gql } from "@apollo/client";

export const Signup = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(
      createUserInput: { email: $email, password: $password, name: $name }
    )
  }
`;

export const SendToken = gql`
  mutation sendEmailCheckToken($email: String!) {
    sendEmailCheckToken(email: $email)
  }
`;

export const CheckToken = gql`
  mutation checkEmailToken($token: String!) {
    checkEmailToken(token: $token)
  }
`;
