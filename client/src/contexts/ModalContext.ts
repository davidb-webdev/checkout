import { Dispatch, createContext } from "react";
import { IModalAction } from "../reducers/ModalReducer";

interface IModalContext {
  modal: string | null;
  dispatch: Dispatch<IModalAction>;
}

const ModalContext = createContext<IModalContext>({
  modal: null,
  dispatch: () => {}
});

export default ModalContext;
