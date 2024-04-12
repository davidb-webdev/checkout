import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { registerUser } from "../services/authServices";
import UserForm from "./UserForm";
import SignOutButton from "./SignOutButton";

const UserFormSwitcher = () => {
  const { signedIn, handleSignIn } = useContext(AuthContext);
  const [showAlternate, setShowAlternate] = useState(false);

  return signedIn ? (
    <SignOutButton />
  ) : (
    <>
      <button onClick={() => setShowAlternate(false)}>Sign In</button>
      <button onClick={() => setShowAlternate(true)}>Register</button>
      <UserForm
        submitFunction={(userFormData) =>
          showAlternate
            ? registerUser(userFormData)
            : handleSignIn(userFormData)
        }
        label={showAlternate ? "Register" : "Sign In"}
      />
    </>
  );
};

export default UserFormSwitcher;
