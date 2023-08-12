import Webtitle from "../../components/common/Webtitle";
import LoginForm from "../../components/authentication/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { checkAuthentication } from "../../utils/middleware";

export default function Login() {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const token = localStorage.getItem("JwtToken");
    if (token !== null && checkAuthentication(token)) {
      navigate("/");
    }
  });

  return (
    <div className="bg-[#f0f2f5] h-screen w-screen pt-20">
      <div className="flex flex-col ">
        <Webtitle className="text-center mb-5" />
        <div className="authentication-form flex flex-col flex-wrap justify-center content-center self-center p-5 bg-white">
          <h3 className="flex-auto mb-4 text-center">Login in to Facebook</h3>
          <LoginForm />
          <Link to="/forgotAccount" className="flex-auto text-center mt-2 text-sm">
            Forgotten account?
          </Link>
          <div className="flex content-center justify-center h-1/6">
            <div className="w-2/5 h-px my-auto mx-auto border"></div>
            <div className="align-self-center font-light text-sm text-slate-500 m-2">or</div>
            <div className="w-2/5 h-px my-auto mx-auto border"></div>
          </div>
          <Link to="/register" className="w-fit bg-[#42b72a] text-white p-3 mt-1 mx-auto font-bold rounded-lg">
            Create new account
          </Link>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
}
