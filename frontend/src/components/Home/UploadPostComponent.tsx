import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

interface User {
  firstName: string; 
  // Add other properties here as needed
}

interface UploadPostComponentProps {
  user: User | null; // Define the type of 'user'
}

export default function UploadPostComponent({ user }: UploadPostComponentProps) {
  const firstName = user ? user.firstName : "";

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

// Define the PropTypes
UploadPostComponent.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    // Add other PropTypes for user properties as needed
  }),
};
