import { gql } from "@apollo/client";

export const FETCH_LECTURE = gql`
  query {
    fetchLecture {
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
