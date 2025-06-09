import React, { use } from "react";
import { useDispatch } from "react-redux";
import authServices from "../../appwrite/authServices/authServices";
import { logout } from "../../features/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authServices.logout().then(() => {
      dispatch(logout());
    });
  };
  return (
    <div>
      {" "}
      <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
        Logout
      </button>{" "}
    </div>
  );
};

export default LogoutBtn;
