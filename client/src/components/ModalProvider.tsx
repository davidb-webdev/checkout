import { useReducer } from "react";
import ModalContext from "../contexts/ModalContext";
import ModalReducer from "../reducers/ModalReducer";

interface IModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: IModalProviderProps) => {
  const [modal, dispatch] = useReducer(ModalReducer, "");

  return (
    <ModalContext.Provider value={{ modal, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
