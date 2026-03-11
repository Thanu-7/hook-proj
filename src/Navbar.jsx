import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Navbar() {

  const { state } = useContext(AuthContext);

  return (
    <div>
      {state.isLoggedIn
        ? <h2>Welcome, {state.user.name}</h2>
        : <h2>Please Login</h2>
      }
    </div>
  );
}

export default Navbar;