import { gql } from "@apollo/client";

export const FIND_LECTURE = gql`
  query findLecture($num: Float!) {
    findLecture(num: $num) {
      title
      introduce
      tag
      description
      lecturer {
        name
        image
        profile
      }
      category {
        name
      }
      subCategory {
        name
      }
      video {
        index
        title
        url
      }
    }
  }
`;
