import Webtitle from "../../components/common/Webtitle";
import RegisterForm from "../../components/authentication/RegisterForm";

export default function Register() {
  return (
    <div className="bg-[#f0f2f5] h-screen w-screen pt-14">
      <div className="flex flex flex-col ">
        <Webtitle className="text-center mb-5" />
        <div className="authentication-form flex flex-col flex-wrap justify-center content-center self-center p-5 bg-white">
          <h3 className="flex-auto text-center font-semibold text-xl">Create a new account</h3>
          <h4 className="text-center mb-4">it's quick and easy.</h4>
          <RegisterForm />

          <a href="" className="flex-auto text-center my-2 text-sm text-[#275bbc]">
            Already have an account?
          </a>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
}
