import { gql } from "@apollo/client";

export const FETCH_LECTURE = gql`
  query {
    fetchLecture {
      id
      lecturer
      title
      category {
        name
      }
      subCategory {
        name
      }
    }
  }
`;
