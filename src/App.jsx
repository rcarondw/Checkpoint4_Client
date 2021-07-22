import React, { useState } from "react";
import "./App.css";
import NavBar from "../components/NavBar";
import "./index.css";
import Layout from "../components/Layout";

function App() {
  return (
    <div className="w-full h-screen bg-homeDark">
      <NavBar />
      <div>
        <Layout />
      </div>
    </div>
  );
}

export default App;
