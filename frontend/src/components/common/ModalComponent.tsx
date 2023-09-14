import Modal from "react-modal";
import CreatePostModal from "../post/CreatePostModal";
import { User } from "../../utils/Interfaces";

interface ModalMountingProps {
  user: User | null;
  isOpen: boolean;
  closeModal: () => void;
}

function ModalMountingComponent({ user, isOpen, closeModal }: ModalMountingProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal" overlayClassName="modal-overlay" contentLabel="Create Post Modal">
      <CreatePostModal user={user} closeModal={closeModal} />
    </Modal>
  );
}

export default ModalMountingComponent;
