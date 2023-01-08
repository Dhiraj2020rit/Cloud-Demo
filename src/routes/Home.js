import React from 'react'
import NavBar from '../components/NavBar'
import NavBar2 from '../components/NavBar2'
import Image from "../components/Image"
import Footer from "../components/Footer"
import Events from "../components/Events"
export default function Home() {
  return (
    <div>
      {/* {
        !localStorage.getItem('login') ? <NavBar2 /> : <NavBar />
      } */}
      <NavBar/>
      <Image/>
      <Events/>
      <Footer/>
    </div>
  )
}
