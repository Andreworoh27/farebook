export interface User {
  userid: string;
  firstName: string;
  surName: string;
  email: string;
  mobileNumber: string;
  dob: string;
  profilePicture: string;
  gender: string;
}

export interface Post {
  postId: string;
  userId: string;
  video: string | null;
  photo: string | null;
  text: string;
  postDate: string;
  visibilityType: string;
  numberOfLikes: number;
  numberOfShares: number;
  numberOfComments: number;
}
