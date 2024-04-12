import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const SignOutButton = () => {
  const { handleSignOut } = useContext(AuthContext);

  return <button onClick={handleSignOut}>Sign out</button>;
};

export default SignOutButton;
