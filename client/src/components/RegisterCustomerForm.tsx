import { ChangeEvent, useContext, useState } from "react";
import { registerUser } from "../services/stripeServices";
import RegisterUserFormData from "../models/RegisterUserFormData";
import { AuthContext } from "../contexts/AuthContext";
import SignInUserFormData from "../models/SignInUserFormData";
import StyledForm from "../styled/StyledForm";

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
    <StyledForm
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
        <span>Create password:</span>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        <span>Your name:</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        <span>Address line 1:</span>
        <input
          type="text"
          name="addressLine1"
          value={formData.addressLine1}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        <span>Address line 2:</span>
        <input
          type="text"
          name="addressLine2"
          value={formData.addressLine2}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        <span>Postal Code:</span>
        <input
          type="text"
          name="postal_code"
          value={formData.postal_code}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        <span>City:</span>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleFormChange}
          required
        />
      </label>
      <label>
        <span>Country:</span>
        <input
          type="text"
          name="country"
          value="SE"
          onChange={handleFormChange}
          required
          disabled
        />
      </label>
      <label>
        <span>Phone:</span>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleFormChange}
          required
        />
      </label>
      <button>Register</button>
    </StyledForm>
  );
};

export default RegisterUserForm;
