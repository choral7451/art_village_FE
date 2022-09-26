import { gql } from "@apollo/client";

export const CREATE_LECTURER = gql`
  mutation createLecturer(
    $name: String!
    $phone: String!
    $email: String!
    $profile: String!
    $image: [Upload!]!
  ) {
    createLecturer(
      createLecturerInput: {
        name: $name
        phone: $phone
        email: $email
        profile: $profile
        image: $image
      }
    )
  }
`;
