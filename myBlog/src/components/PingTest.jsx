import React from "react";
import authServices from "../appwrite/authServices/authServices.js"; // adjust path if needed

export default function PingTest() {
  const handlePing = async () => {
    const user = await authServices.getCurrentUser();
    console.log("Ping result:", user);
  };

  return <button onClick={handlePing}>Send a Ping</button>;
}
