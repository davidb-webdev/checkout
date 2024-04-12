import { useEffect, useState } from "react";
import { authorizeUser, signIn, signOut } from "../services/authServices";
import IAuthContext from "../models/IAuthContext";
import UserFormData from "../models/UserFormData";
import { AuthContext } from "../contexts/AuthContext.ts";

interface IAuthProps {
  children: React.ReactNode;
}

function Auth({ children }: IAuthProps) {
  const [authState, setAuthState] = useState<IAuthContext>({
    signedIn: null,
    statusMessage: "",
    clearStatusMessage: () => {},
    handleSignIn: () => {},
    handleSignOut: () => {}
  });

  useEffect(() => {
    if (authState.signedIn !== null) return;
    const reAuth = async () => {
      try {
        await authorizeUser();
        setAuthState({
          ...authState,
          signedIn: true
        });
      } catch (error) {
        setAuthState({
          ...authState,
          signedIn: false
        });
      }
    };
    reAuth();
  });

  authState.clearStatusMessage = () => {
    setAuthState({
      ...authState,
      statusMessage: ""
    });
  };

  authState.handleSignIn = async (userFormData: UserFormData) => {
    try {
      await signIn(userFormData);
      setAuthState({
        ...authState,
        signedIn: true
      });
    } catch (error) {
      setAuthState({
        ...authState,
        statusMessage: String(error)
      });
    }
  };

  authState.handleSignOut = async () => {
    try {
      await signOut();
      setAuthState({
        ...authState,
        signedIn: false
      });
    } catch (error) {
      setAuthState({
        ...authState,
        statusMessage: String(error)
      });
    }
  };

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
}

export default Auth;
