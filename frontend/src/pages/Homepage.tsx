import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkAuthentication } from "../utils/middleware";
import Navbar from "../components/common/Navbar";
import ProfileSection from "../components/Home/ProfileSection";
import { decodeJwtToken } from "../utils/JwtDecode";
import { useMutation, useQuery } from "@apollo/client";
import { GetUserQuery, LikePostQuery, UpdatePostQuery, DeleteLikePostQuery } from "../queries/Queries";
import UploadPostComponent from "../components/Home/UploadPostComponent";
import PostComponent from "../components/Home/PostComponent";
import Modal from "react-modal";

interface User {
  userid: string;
  firstName: string;
  surName: string;
  email: string;
  mobileNumber: string;
  dob: string;
  profilePicture: string;
  gender: string;
}

interface Post {
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

Modal.setAppElement("#root"); // Assuming "#root" is the ID of your root element

export default function HomePage() {
  const navigate = useNavigate();

  const token = localStorage.getItem("JwtToken");
  const [userData, setUserData] = useState<User | null>(null);

  // Fetch user data
  const userId = token ? decodeJwtToken(token).id : null;
  // console.log("id : ", userId);
  const {
    loading: userLoading,
    error: userError,
    data: userDataResponse,
  } = useQuery(GetUserQuery, {
    variables: { id: userId },
    skip: !userId,
  });

  useEffect(() => {
    if (token === null || !checkAuthentication(token)) {
      navigate("/login");
    }
  }, [navigate, token]);

  useEffect(() => {
    // Check if the user data is available and not loading
    if (!userLoading && !userError && userDataResponse) {
      setUserData(userDataResponse.getUser);
    }
  }, [userLoading, userError, userDataResponse]);

  // Define your mutations
  const [likePostMutation] = useMutation(LikePostQuery);
  const [updatePostMutation] = useMutation(UpdatePostQuery);
  const [deleteLikePost] = useMutation(DeleteLikePostQuery);

  const likePost = (currentPost: Post) => {
    // Call the likePost mutation
    likePostMutation({
      variables: {
        newLike: {
          postId: currentPost.postId,
          userId: userData?.userid,
        },
      },
    })
      .then((response) => {
        // Handle the response if needed
        console.log("Liked post:", response.data.createLikePost);

        // After liking the post, you can also update the post like count
        // Call the updatePost mutation to increment the like count
        updatePostMutation({
          variables: {
            postId: currentPost.postId,
            inputPost: {
              userId: userData?.userid,
              photo: currentPost.photo,
              text: currentPost.text,
              postDate: currentPost.postDate,
              visibilityType: currentPost.visibilityType,
              numberOfShares: currentPost.numberOfShares,
              numberOfComments: currentPost.numberOfComments,
              numberOfLikes: userData?.userid ? currentPost.numberOfLikes + 1 : currentPost.numberOfLikes,
            },
          },
        })
          .then((updateResponse) => {
            // Handle the response if needed
            console.log("Updated post:", updateResponse.data.updatePost);
          })
          .catch((updateError) => {
            // Handle errors if the update fails
            console.error("Error updating post:", updateError);
          });
        // window.location.reload();
      })
      .catch((error) => {
        // Handle errors if the like fails
        console.error("Error liking post. post id :", error);

        deleteLikePost({
          variables: {
            likeid: error,
          },
        });

        updatePostMutation({
          variables: {
            postId: currentPost.postId,
            inputPost: {
              userId: userData?.userid,
              photo: currentPost.photo,
              text: currentPost.text,
              postDate: currentPost.postDate,
              visibilityType: currentPost.visibilityType,
              numberOfShares: currentPost.numberOfShares,
              numberOfComments: currentPost.numberOfComments,
              numberOfLikes: userData?.userid ? currentPost.numberOfLikes - 1 : currentPost.numberOfLikes,
            },
          },
        })
          .then((updateResponse) => {
            // Handle the response if needed
            console.log("Updated post:", updateResponse.data.updatePost);
          })
          .catch((updateError) => {
            // Handle errors if the update fails
            console.error("Error updating post:", updateError);
          });
      });
  };

  // Render the component only when user data is available
  if (userLoading) {
    // You can render a loading indicator here if needed
    return <div>Loading...</div>;
  }

  if (userError) {
    // Handle the error case here
    return <div>Error: {userError.message}</div>;
  }

  if (!userData) {
    // Handle the case when user data is not available
    return <div>No user data available</div>;
  }

  return (
    <div className="flex flex-col h-screen bg-[#f0f2f5]">
      <Navbar />
      <div className="flex-1 overflow-y-hidden flex">
        <div className="w-80 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <ProfileSection />
        </div>

        <div className="flex flex-col items-center flex-grow pt-7 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <UploadPostComponent user={userData} />
          <PostComponent likePost={likePost} />
        </div>

        <div className="w-80 "></div>
      </div>
    </div>
  );
}
