import { gql } from "@apollo/client";

export const GetAllUsersQuery = gql`
  query GetAllUsers {
    getAllUsers {
      id
      firstName
      surName
      email
      mobileNumber
      dob
      gender
    }
  }
`;

export const AddNewUserQuery = gql`
  mutation CreateUser($inputUser: NewUser!) {
    createUser(inputUser: $inputUser) {
      id
      firstName
      surName
      email
      mobileNumber
      dob
      gender
    }
  }
`;

export const LoginQuery = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;
