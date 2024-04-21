import { useContext } from "react";
import { ModalActionType } from "../reducers/ModalReducer";
import StyledModal from "../styled/StyledModal";
import ModalContext from "../contexts/ModalContext";

interface IModalProps {
  modalName: string;
  children: React.ReactNode;
}

const Modal = ({ modalName, children }: IModalProps) => {
  const { modal, dispatch } = useContext(ModalContext);

  return (
    modal === modalName && (
      <StyledModal>
        {children}
        <button
          className="closeModalButton"
          onClick={() => {
            dispatch({
              type: ModalActionType.CLOSED
            });
          }}
        >
          𝗫
        </button>
      </StyledModal>
    )
  );
};

export default Modal;
