import React, { useState } from "react";
import "./App.css";
import NavBar from "../components/NavBar";
import "./index.css";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import AOFShowComp from "../components/AOFShowComp";

function App() {
  const AOFShow = useSelector(state => state.AOFClick)

  return (
    <div className="w-full h-screen bg-homeDark relative">
      <div className={AOFShow ? "bg-black bg-opacity-80 absolute z-50 w-full h-screen" : "hidden"}>
       <AOFShowComp />
      </div>
      <NavBar />
      <div>
        <Layout />
      </div>
    </div>
  );
}

export default App;
