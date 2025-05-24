import { useState } from "react";

const App = () => {
  const [data, setData] = useState({ message: "No Data" });

  const apiUri = import.meta.env.VITE_API_URI;

  const getTodos = async () => {
    try {
      const response = await fetch(apiUri + "/todos", {
        credentials: "include",
      });
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.log(error);
      setData({ message: "Unauthorized please login" });
    }
  };

  const handleLogin = async () => {
    try {
      fetch(apiUri + "/login", { credentials: "include" })
        .then((res) => res.json())
        .then((result) => {
          window.location.href = result.congnitoLoginURL;
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {JSON.stringify(data)}
        <br />
        <button onClick={getTodos}>Fetch Todos</button>
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};
export default App;
