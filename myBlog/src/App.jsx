import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Header, Footer } from "./components/index";
import authServices from "./appwrite/authServices/authServices.js";
import { login, logout } from "./features/authSlice";
import { Outlet } from "react-router-dom";
import PingTest from "./components/PingTest.jsx";

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
        <PingTest />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
