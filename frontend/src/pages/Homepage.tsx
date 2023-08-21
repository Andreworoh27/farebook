import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkAuthentication } from "../utils/middleware";
import Navbar from "../components/common/Navbar";
import ProfileSection from "../components/Home/ProfileSection";
import { decodeJwtToken } from "../utils/JwtDecode";
import { useQuery } from "@apollo/client";
import { GetUserQuery } from "../queries/Queries";
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
          <PostComponent />
        </div>

        <div className="w-80 "></div>
      </div>
    </div>
  );
}
