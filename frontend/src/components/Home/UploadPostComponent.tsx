import { Link } from "react-router-dom";
import { GetUserQuery } from "../../queries/Queries";
import { decodeJwtToken } from "../../utils/JwtDecode";
import { useQuery } from "@apollo/client";

export default function UploadPostComponent() {
  const userId = decodeJwtToken(localStorage.getItem("JwtToken")!).id;

  console.log(userId);
  const { loading, error, data } = useQuery(GetUserQuery, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data);

  const firstName = data.getUser.firstName;
  return (
    <div className="flex flex-col w-4/5  h-28 border rounded-xl justify-center bg-white shadow-sm">
      <div className="flex h-1/2 p-2 items-center justify-evenly">
        <img src="../../../public/assets/Home Page Icons/default profile.png" alt="" className="h-8 w-8" />
        <Link to="/postform" className="w-[90%] h-[90%]">
          <input type="text" className="bg-[#f0f2f5] w-full h-full rounded-3xl px-3 text-black" placeholder={`What's on your mind, ${firstName}?`} />
        </Link>
      </div>
      <div className="border w-[97%] mx-auto"></div>
      <div className="flex h-1/2 p-1 items-center justify-around">
        <Link to="/postform" className="w-[30%] h-[90%] flex justify-center items-center">
          <img src="../../../public/assets/Upload Post Components/live stream.png" alt="" className="h-8 w-8 mx-3" />
          <div className="w-fit text-center">Live video</div>
        </Link>
        <Link to="/postform" className="w-[30%] h-[90%] flex justify-center items-center">
          <img src="../../../public/assets/Upload Post Components/photo or vidio.png" alt="" className="h-8 w-8 mx-3" />
          <div className="w-fit text-center">Photo/video</div>
        </Link>
        <Link to="/postform" className="w-[30%] h-[90%] flex justify-center items-center">
          <img src="../../../public/assets/Upload Post Components/feeling.png" alt="" className="h-8 w-8 mx-3" />
          <div className="w-fit text-center">Feeling/activity</div>
        </Link>
      </div>
    </div>
  );
}
