import Webtitle from "../../components/common/Webtitle";
import RegisterForm from "../../components/authentication/RegisterForm";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { checkAuthentication } from "../../utils/middleware";

export default function Register() {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const token = localStorage.getItem("JwtToken");
    if (token !== null && checkAuthentication(token)) {
      navigate("/");
    }
  });

  return (
    <div className="bg-[#f0f2f5] h-screen w-screen pt-14">
      <div className="flex flex-col ">
        <Webtitle className="text-center mb-5" />
        <div className="authentication-form flex flex-col flex-wrap justify-center content-center self-center p-5 bg-white">
          <h3 className="flex-auto text-center font-semibold text-xl">Create a new account</h3>
          <h4 className="text-center mb-4">it's quick and easy.</h4>
          <RegisterForm />

          <Link to="/login" className="flex-auto text-center my-2 text-sm text-[#275bbc]">
            Already have an account?
          </Link>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
}
