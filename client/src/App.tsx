const App = () => {
  const handlePayment = async () => {
    const url =
      import.meta.env.VITE_BACKEND_URL + "/pay/create-checkout-session";
    const payload = {
      method: "POST"
    };
    const response = await fetch(url, payload);
    const data = await response.json();
    console.log(data);
    window.location = data.url;
  };

  return (
    <>
      <button onClick={handlePayment}>Pay now</button>
    </>
  );
};

export default App;
