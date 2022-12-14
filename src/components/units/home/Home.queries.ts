import { gql } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
      email
      name
    }
  }
`;

export const FETCH_LECTURE = gql`
  query {
    fetchLecture(num: 5) {
      id
      image
      title
      lecturer {
        name
      }
      tag
    }
  }
`;
