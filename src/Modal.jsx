import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>The Great Surprise</h3>
        <p>
          Get ready for a delightful surprise that awaits you inside this
          magical modal. Discover something special, something extraordinary,
          and something that will bring a smile to your face. Open the door to
          excitement and let the wonder unfold!
        </p>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};
export default Modal;
