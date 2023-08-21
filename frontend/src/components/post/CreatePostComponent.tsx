import { useState, ChangeEvent, useRef, CSSProperties } from "react";
import PropTypes from "prop-types";
import VisibilitySelectorComponent from "./VisibilitySelectorComponent";
import { useMutation } from "@apollo/client";
import { AddNewPostQuery } from "../../queries/Queries";
import { useNavigate } from "react-router-dom";

interface User {
  userid: string;
  firstName: string;
  surName: string;
  email: string | null;
  mobileNumber: string | null;
  dob: string;
  profilePicture: string | null;
  gender: string;
}

interface UploadPostComponentProps {
  user: User | null;
}

interface PostData {
  userId: string;
  vidio: File | null;
  photo: File | null;
  text: string;
  postDate: string;
  visibilityType: string;
  numberOfComments: number;
  numberOfShares: number;
  numberOfLikes: number;
}

export default function CreatePostComponent({ user }: UploadPostComponentProps) {
  const initialPostData: PostData = {
    userId: user!.userid,
    vidio: null,
    photo: null,
    text: "",
    postDate: new Date().toISOString(),
    visibilityType: "",
    numberOfComments: 0,
    numberOfShares: 0,
    numberOfLikes: 0,
  };

  const [postData, setPostData] = useState<PostData>(initialPostData);
  const [postVisibility, setPostVisibility] = useState<string>("Public");
  const [selectedPhotos, setSelectedPhotos] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleVisibilityChange = (visibility: string) => {
    setPostVisibility(visibility);
  };

  const handleTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setPostData({ ...postData, text: event.target.value });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    setSelectedPhotos(files);

    if (files && files.length > 0) {
      const selectedFile = files[0];

      if (selectedFile.type.startsWith("image/")) {
        setPostData({ ...postData, photo: selectedFile, vidio: null });
      } else if (selectedFile.type.startsWith("video/")) {
        setPostData({ ...postData, vidio: selectedFile, photo: null });
      }

      const imageUrl = URL.createObjectURL(selectedFile);

      const img = new Image();
      img.src = imageUrl;
      img.onload = () => {
        const height = img.height > 400 ? 400 : img.height;
        setInputBackground({
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          height: `${height}px`,
        });
      };
    } else {
      setPostData({ ...postData, photo: null, vidio: null });
      setInputBackground({});
    }
  };

  const handleAddPhotoClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDeletePhoto = () => {
    setSelectedPhotos(null);
    setInputBackground({});
  };

  const uploadFile = async (file: File | null) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ma9rr3ej");

        // Use the Cloudinary upload API
        const response = await fetch("https://api.cloudinary.com/v1_1/dcabwxknp/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Image uploaded to Cloudinary:", data);
          return data.url;
        } else {
          console.error("Error uploading image to Cloudinary");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const [addNewPost] = useMutation(AddNewPostQuery);
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePostClick = async () => {
    try {
      // Check if postData has a photo or video
      if (postData.photo || postData.vidio || postData.text) {
        let vidioLink = "";
        let photoLink = "";
        if (postData.vidio) {
          vidioLink = await uploadFile(postData.vidio);
        }
        if (postData.photo) {
          photoLink = await uploadFile(postData.photo);
        }
        // Construct the inputPost object for the mutation
        const inputPost = {
          userId: postData.userId,
          vidio: postData.vidio ? vidioLink : null,
          photo: postData.photo ? photoLink : null,
          text: postData.text ? postData.text : null,
          postDate: postData.postDate,
          visibilityType: postVisibility,
          numberOfComments: postData.numberOfComments,
          numberOfShares: postData.numberOfShares,
          numberOfLikes: postData.numberOfLikes,
        };

        console.log("input post", inputPost);

        // Call the mutation
        const { data } = await addNewPost({
          variables: { inputPost },
        });

        if (data) {
          console.log(data);
          navigate("/");
        }
      } else {
        console.error("please add a text, photo, or a vidio before posting");
      }
    } catch (error) {
      console.error("Error posting:", error);
    }
  };

  const [inputBackground, setInputBackground] = useState<CSSProperties>({});

  return (
    <div className="p-1 overflow-y-auto">
      <div className="flex">
        <img src={user?.profilePicture || "../../../public/assets/Profile Section Icons/profile.png"} alt="" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col justify-center ml-2">
          <div className="font-semibold">
            {user?.firstName} {user?.surName}
          </div>
          <div>
            <VisibilitySelectorComponent onChange={handleVisibilityChange} />
          </div>
          <div>final visibility : {postVisibility}</div>
        </div>
      </div>
      <div className="mt-2">
        <textarea
          placeholder={`What's on your mind, ${user?.firstName}?`}
          className="w-full bg-transparent border border-transparent rounded focus:outline-none resize-none p-1"
          style={{
            overflow: "hidden",
            height: "auto",
            maxHeight: "10rem",
          }}
          value={postData.text}
          onChange={handleTextChange}
        />
      </div>
      <div className="overflow-y-auto">
        {selectedPhotos ? (
          <div className="w-15 h-40 bg-cover overflow-y-auto" style={inputBackground}>
            <div className="flex items-center justify-center bg-[#E4E6EB] w-10 h-10 rounded-full cursor-pointer" onClick={handleDeletePhoto}>
              X
            </div>
          </div>
        ) : (
          <div onClick={handleAddPhotoClick} className="flex flex-col items-center justify-center cursor-pointer border-dashed border-2 border-gray-300 p-4 rounded-lg mt-2 h-40">
            <img src="../../../public/assets/Upload Post Components/add-button.png" alt="" className="w-10 h-10 opacity-60" />
            <div className="mt-2">Add Photo/Videos</div>
          </div>
        )}
        <input type="file" ref={fileInputRef} accept="image/*,video/*" multiple className="hidden" onChange={handleFileChange} />
      </div>
      <button type="submit" className="w-full bg-[#1877f2] text-white p-2 mt-1 font-bold rounded-lg mt-3" onClick={handlePostClick}>
        Post
      </button>
    </div>
  );
}

CreatePostComponent.propTypes = {
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
