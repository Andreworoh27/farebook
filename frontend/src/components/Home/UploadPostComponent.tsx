import PropTypes from "prop-types"; // Import PropTypes
import Modal from "react-modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../utils/Interfaces";
import ModalMountingComponent from "../common/ModalComponent";

interface UploadPostComponentProps {
  user: User | null; // Define the type of 'user'
}

export default function UploadPostComponent({ user }: UploadPostComponentProps) {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage the modal

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  const navigate = useNavigate();

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  const firstName = user ? user.firstName : "";

  return (
    <div className="flex flex-col w-4/5  h-28 border rounded-xl justify-center bg-white shadow-sm py-2">
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal " overlayClassName="modal-overlay" contentLabel="Example Modal">
        <ModalMountingComponent isOpen={isModalOpen} closeModal={closeModal} user={user} />
      </Modal>

      <div className="flex h-1/2 p-2 items-center justify-evenly">
        <img src="../../../public/assets/Home Page Icons/default profile.png" alt="" className="h-8 w-8" />
        <div onClick={openModal} className="w-[90%] h-[90%]">
          <input type="text" className="bg-[#f0f2f5] w-full h-full rounded-3xl px-3 text-black" placeholder={`What's on your mind, ${firstName}?`} />
        </div>
      </div>
      <div className="border w-[97%] mx-auto"></div>
      <div className="flex h-1/2 p-1 items-center justify-around">
        <div onClick={openModal} className="w-[30%] h-[90%] flex justify-center items-center">
          <img src="../../../public/assets/Upload Post Components/live stream.png" alt="" className="h-8 w-8 mx-3" />
          <div className="w-fit text-center">Live video</div>
        </div>
        <div onClick={openModal} className="w-[30%] h-[90%] flex justify-center items-center">
          <img src="../../../public/assets/Upload Post Components/photo or vidio.png" alt="" className="h-8 w-8 mx-3" />
          <div className="w-fit text-center">Photo/video</div>
        </div>
        <div onClick={openModal} className="w-[30%] h-[90%] flex justify-center items-center">
          <img src="../../../public/assets/Upload Post Components/feeling.png" alt="" className="h-8 w-8 mx-3" />
          <div className="w-fit text-center">Feeling/activity</div>
        </div>
      </div>
    </div>
  );
}

// Define the PropTypes
UploadPostComponent.propTypes = {
  user: PropTypes.shape({
    userid: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    surName: PropTypes.string.isRequired,
    email: PropTypes.string,
    mobileNumber: PropTypes.string,
    dob: PropTypes.string.isRequired,
    profilePicture: PropTypes.string,
    gender: PropTypes.string.isRequired,
  }).isRequired,
};
