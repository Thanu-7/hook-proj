import { useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import {useNavigate} from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={
        ()=>
        {dispatch({ type: "LOGIN", payload: username });
        navigate("/dashboard")}
}>Login</button>

    </div>
  );
}

export default Login;