import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../store/slices/users";

const ChatRoom = () => {
  //   const dispatch = useDispatch();
  //   const user = useSelector(selectUser);
  //   const handleLogout = () => {
  //     dispatch(logout());
  //   };
  const dispatch = useDispatch();
  //   const user = useSelector(selectUser);

  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <h1>ChatRoom</h1>
      <h1> welcome </h1>
      <button onClick={(e) => handleLogout(e)}>Logout</button>
    </div>
  );
};

export default ChatRoom;
