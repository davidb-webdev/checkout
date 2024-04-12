import { createContext } from "react";
import IAuthContext from "../models/IAuthContext";

export const AuthContext = createContext<IAuthContext>({
  signedIn: null,
  statusMessage: "",
  clearStatusMessage: () => {},
  handleSignIn: () => {},
  handleSignOut: () => {}
});
