import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import SignOutButton from "./SignOutButton";
import RegisterUserForm from "./RegisterUserForm";
import SignInUserForm from "./SignInUserForm";

const UserFormSwitcher = () => {
  const { signedIn } = useContext(AuthContext);
  const [showAlternate, setShowAlternate] = useState(false);

  return signedIn ? (
    <SignOutButton />
  ) : (
    <>
      <button onClick={() => setShowAlternate(false)}>Sign In</button>
      <button onClick={() => setShowAlternate(true)}>Register</button>
      <h2>{showAlternate ? "Register New Customer" : "Sign In"}</h2>
      {showAlternate ? <RegisterUserForm /> : <SignInUserForm />}
    </>
  );
};

export default UserFormSwitcher;
