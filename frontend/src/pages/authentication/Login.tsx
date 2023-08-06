import Webtitle from "../../components/common/Webtitle";
import LoginForm from "../../components/authentication/LoginForm";

export default function Login() {
  return (
    <div className="bg-[#f0f2f5] h-screen w-screen pt-20">
      <div className="flex flex flex-col ">
        <Webtitle className="text-center mb-5" />
        <div className="authentication-form flex flex-col flex-wrap justify-center content-center self-center p-5 bg-white">
          <h3 className="flex-auto mb-4 text-center">Login in to Facebook</h3>
          <LoginForm />
          <a href="" className="flex-auto text-center mt-2 text-sm">
            Forgotten account?
          </a>
          <div className="flex content-center justify-center h-1/6">
            <div className="w-2/5 h-px my-auto mx-auto border"></div>
            <div className="align-self-center font-light text-sm text-slate-500 m-2">or</div>
            <div className="w-2/5 h-px my-auto mx-auto border"></div>
          </div>
          <a href="#" className="w-fit bg-[#42b72a] text-white p-3 mt-1 mx-auto font-bold rounded-lg">
            Create new account
          </a>
        </div>
      </div>

      {/* <Footer/> */}
    </div>
  );
}
