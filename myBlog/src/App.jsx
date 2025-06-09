import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Header, Footer } from "./components/index";
import authServices from "./appwrite/authServices/authServices";
import { login, logout } from "./features/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServices
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return !loading ? (
    <div className="min-h-screen bg-tahiti">
      <div className="w-full block">
        <Header />
        <main>{/* <Outlet /> */}</main>
        {/* <Footer /> */}
      </div>
    </div>
  ) : null;
}

export default App;
