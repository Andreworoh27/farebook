import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { checkAuthentication } from "../utils/middleware";
import Navbar from "../components/common/Navbar";
import ProfileSection from "../components/Home/ProfileSection";

export default function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const token = localStorage.getItem("JwtToken");
    if (token === null || !checkAuthentication(token)) {
      navigate("/login");
    }
  });

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 overflow-y-hidden flex">
        {/* profile section */}
        <div className="w-80 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <ProfileSection />
        </div>

        {/* feeds section */}
        <div className="flex-grow"></div>

        {/* friends pages section */}
        <div className="w-80 "></div>
      </div>
    </div>
  );
}
