import { ChangeEvent, useState } from "react";
import UserFormData from "../models/UserFormData";

interface IUserFormProps {
  submitFunction: (userFormData: UserFormData) => void;
  label: string;
}

const UserForm = ({ submitFunction, label }: IUserFormProps) => {
  const [formData, setFormData] = useState<UserFormData>(
    new UserFormData("", "")
  );

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <h2>{label}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitFunction(formData);
        }}
      >
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleFormChange}
        />
        <button>{label}</button>
      </form>
    </>
  );
};

export default UserForm;
