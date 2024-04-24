import RegisterCustomerForm from "../components/RegisterCustomerForm";

const RegisterCustomerPage = () => {
  return (
    <>
      <h1>Register new customer</h1>
      <p>Please note that we can only deliver to Sweden</p>
      <RegisterCustomerForm />
    </>
  );
};

export default RegisterCustomerPage;
