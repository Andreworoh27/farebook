import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { checkAuthentication } from "../utils/middleware";

export default function HomePage() {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const token = localStorage.getItem("JwtToken");
    if (token === null || !checkAuthentication(token)) {
      navigate("/login");
    }
  });

  return <div>homepage</div>;
}
