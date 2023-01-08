import React from 'react'
import "./Profile.css"
import NavBar2 from '../components/NavBar2'
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
export default function Profile() {
  return (
    <>
      {/* {
        !localStorage.getItem('login') ? <NavBar2 /> : <NavBar />
      } */}
      <NavBar />
          <div className='Profile-card' >
            <h1>Welcome </h1>
          </div>
          <Footer />
    </>
  )
}
