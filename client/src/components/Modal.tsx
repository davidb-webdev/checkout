import { useContext } from "react";
import { ModalActionType } from "../reducers/ModalReducer";
import StyledModal from "../styled/StyledModal";
import ModalContext from "../contexts/ModalContext";
import StyledMiniButton from "../styled/StyledMiniButton";

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
        <StyledMiniButton
          className="closeModalButton"
          onClick={() => {
            dispatch({
              type: ModalActionType.CLOSED
            });
          }}
        >
          𝗫
        </StyledMiniButton>
      </StyledModal>
    )
  );
};

export default Modal;
