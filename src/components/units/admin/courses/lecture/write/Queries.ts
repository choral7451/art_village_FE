import { gql } from "@apollo/client";

export const CREATE_LECTURE = gql`
  mutation createLecture(
    $lecturer: Float!
    $title: String!
    $tag: String
    $category: Float!
    $subCategory: Float!
    $subTitle: [String!]!
    $files: [Upload!]!
    $description: String!
  ) {
    createLecture(
      createLectureInput: {
        lecturer: $lecturer
        title: $title
        tag: $tag
        category: $category
        subCategory: $subCategory
        subTitle: $subTitle
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
        id
        name
      }
    }
  }
`;
