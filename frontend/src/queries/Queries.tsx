import { gql } from "@apollo/client";

export const GetAllUsersQuery = gql`
  query GetAllUsers {
    getAllUsers {
      userid
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
      userid
      firstName
      surName
      email
      mobileNumber
      dob
      gender
    }
  }
`;

export const GetUserQuery = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      userid
      firstName
      surName
      email
      mobileNumber
      dob
      profilePicture
      gender
    }
  }
`;

export const LoginQuery = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const GetPostQuery = gql`
  query GetPost($postId: ID!) {
    getPost(postId: $postId) {
      postId
      userId
      vidio
      photo
      text
      postDate
      visibilityType
      numberOfComments
      numberOfShares
      numberOfLikes
    }
  }
`;

export const GetAllPublicPostQuery = gql`
  query GetAllPublicPost {
    getAllPublicPost {
      postId
      userId
      vidio
      photo
      text
      postDate
      visibilityType
      numberOfLikes
      numberOfShares
      numberOfComments
    }
  }
`;
