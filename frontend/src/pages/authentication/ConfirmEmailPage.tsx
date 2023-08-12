import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { checkAuthentication } from "../../utils/middleware";

export default function ConfirmEmailPage() {
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
        <div className="authentication-form w-2/5 flex flex-col justify-center content-center self-center p-5 bg-white">
          <h3 className="self-start font-bold text-xl">Enter the code from your email</h3>
          <div className="border my-4"></div>
          <p className="mb-4">Let us know that this email address belongs to you. Enter the code from the email sent to {}</p>

          <div>
            <input type="text" name="emailOrMobileNumber" className="w-40 border border-solid border-[#dfe0e3] my-2 p-3" placeholder="FB- " />
          </div>

          <a className="text-[#6486d1]">send email again</a>

          <div className="border mt-4 mb-5"></div>
          <div className="h-fit flex justify-end">
            <a href="#" className="w-44 bg-[#ecedf1] px-3 py-2 mt-3 font-bold rounded-lg text-center">
              Update Contact Info
            </a>
            <div className="mx-2"></div>
            <a href="#" className="w-40 bg-[#ecedf1] text-[#c3c5cc] px-3 py-2 mt-3 font-bold rounded-lg text-center">
              Continue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
