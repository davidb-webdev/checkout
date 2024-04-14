import { ChangeEvent, useContext, useState } from "react";
import { registerUser } from "../services/stripeServices";
import RegisterUserFormData from "../models/RegisterUserFormData";
import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import SignInUserFormData from "../models/SignInUserFormData";

const StyledRegisterUserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    margin-left: 1em;
  }
`;

const RegisterUserForm = () => {
  const { handleSignIn } = useContext(AuthContext);
  const [formData, setformData] = useState<RegisterUserFormData>(
    new RegisterUserFormData("", "", "", "", "", "", "", "", "")
  );
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value
    });
  };

  return (
    <StyledRegisterUserForm
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          const data = await registerUser(formData);
          console.log(data);
          handleSignIn(
            new SignInUserFormData(formData.email, formData.password)
          );
        } catch (error) {
          console.error(error);
        }
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
        Create password:
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        Your name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        Address line 1:
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        Address line 2:
        <input
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        Postal Code:
        <input
          type="text"
          name="addressPostalCode"
          value={formData.postal_code}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="addressCity"
          value={formData.city}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          name="addressCountry"
          value={formData.country}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleFormChange}
          required
        />
      </label>
      <button>Register</button>
    </StyledRegisterUserForm>
  );
};

export default RegisterUserForm;
