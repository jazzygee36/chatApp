import { useContext, useEffect } from "react";
import { UserContext } from "../hooks/userContext";
import { useNavigate } from "react-router-dom";

const ChatRoom = () => {
  const navigate = useNavigate();

  const { handleLogOut } = useContext(UserContext);
  useEffect(() => {
    const checkToken = localStorage.getItem("token");
    if (!checkToken) {
      navigate("/");
    }
  });
  return (
    <div>
      <h1>ChatRoom</h1>

      <button onClick={handleLogOut}>Logout</button>
    </div>
  );
};

export default ChatRoom;
