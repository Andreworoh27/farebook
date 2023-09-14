import { User } from "../../utils/Interfaces";
import CreatePostComponent from "./CreatePostComponent";

interface CreatePostContentProps {
  user: User | null;
  closeModal: () => void;
}

export default function CreatePostModal({ user, closeModal }: CreatePostContentProps) {
  return (
    <>
      <div className="mx-auto bg-white p-2 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="font-bold text-2xl  flex-grow text-center">Create Post</div>
          <div onClick={closeModal} className="flex items-center justify-center bg-[#E4E6EB] w-10 h-10 rounded-full">
            X
          </div>
        </div>
      </div>
      <div className="border my-2"></div>
      <CreatePostComponent user={user} closeModal={closeModal} />
    </>
  );
}
