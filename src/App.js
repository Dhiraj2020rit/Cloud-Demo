import React,{useState} from "react"
import "./index.css"
import Home from "./routes/Home"
import Login from "./routes/Login"
import CPwd from "./routes/CPwd"
import Register from "./routes/Register"
import Contact from "./routes/Contact"
import Abstract from "./components/Abstract"
import Profile from "./components/Profile"
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CPwd" element={<CPwd />} />
        <Route path="/Abstract" element={<Abstract />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
