import { gql } from "@apollo/client";

export const UPLOAD_FILE = gql`
  mutation createLecture(
    $lecturer: String!
    $title: String!
    $category: String!
    $subCategory: String!
    $files: [Upload!]!
    $description: String!
  ) {
    createLecture(
      createLectureInput: {
        lecturer: $lecturer
        title: $title
        category: $category
        subCategory: $subCategory
        files: $files
        description: $description
      }
    )
  }
`;

export const FETCH_CATEGORY = gql`
  query {
    fetchCategory {
      id
      name
      subCategory {
        name
      }
    }
  }
`;
