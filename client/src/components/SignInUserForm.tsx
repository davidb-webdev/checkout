import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import SignInUserFormData from "../models/SignInUserFormData";
import StyledForm from "../styled/StyledForm";

const SignInUserForm = () => {
  const { handleSignIn } = useContext(AuthContext);
  const [formData, setFormData] = useState<SignInUserFormData>(
    new SignInUserFormData("", "")
  );
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        handleSignIn(formData);
      }}
    >
      <label>
        <span>E-mail:</span>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        <span>Password:</span>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleFormChange}
          required
        />
      </label>
      <button>Sign In</button>
    </StyledForm>
  );
};

export default SignInUserForm;
