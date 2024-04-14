import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import SignInUserFormData from "../models/SignInUserFormData";
import styled from "styled-components";

const StyledSignInUserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    margin-left: 1em;
  }
`;

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
    <StyledSignInUserForm
      onSubmit={(e) => {
        e.preventDefault();
        handleSignIn(formData);
      }}
    >
      <label>
        E-mail:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleFormChange}
          required
        />
      </label>
      <button>Sign In</button>
    </StyledSignInUserForm>
  );
};

export default SignInUserForm;
