import { gql } from "@apollo/client";

export const FETCH_LECTURERS = gql`
  query {
    fetchLecturers {
      id
      name
      email
      phone
      image
      profile
    }
  }
`;

export const FIND_LECTURER = gql`
  query findLecturer($name: String!) {
    findLecturer(name: $name) {
      id
      name
      phone
      email
      image
      profile
    }
  }
`;
