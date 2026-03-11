import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);

  if (!state.isLoggedIn) {
    return null;
  }

  return (
    <div>
      <h3>Dashboard</h3>

      <button
        onClick={() => {
            dispatch({ type: "LOGOUT" });
            navigate("/");
        }}
      >
        Logout
      </button>



    </div>
  );
}

export default Dashboard;