import React, { useState } from 'react'
import "../routes/ContactStyles.css"
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar'
import NavBar2 from '../components/NavBar2'
import Footer from "../components/Footer"
export default function Contact() {
  const Navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [textarea, setTextarea] = useState("");
  const [name, setName] = useState("");
  const Check = () => {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (regEx.test(mail)) {
      alert("Enter valid mail id");
    }
    else if (mail === "" || textarea === "") {
      alert("Fill all the fields");
    }
    else {
      alert("Successfully Registered");
      Navigate("/");
    }
  }
  const setE = (e) => {
    setMail(e.target.value);
  }
  const setT = (e) => {
    setTextarea(e.target.value);
  }
  const setN = (e) => {
    setName(e.target.value);
  }
  return (
    <div>
      {/* {
        !localStorage.getItem('login') ? <NavBar2 /> : <NavBar />
      } */}
      <NavBar />
      <div className='form'>
        <br /><br />
        <div className='c-container'>
          <div className='left'>
            <h1>Map</h1><br />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3935.3044558264232!2d77.51209821470735!3d9.48222569320733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06e889902bcc45%3A0x789aff6d63c7062a!2sRamco%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1672644200672!5m2!1sen!2sin" width={"500rem"} height={"420rem"}></iframe>
          </div>
          <div className='right'>
            <h1>Contact Us</h1><br />
            <input type="text" placeholder='Enter Name' value={name} onChange={setN} /><br /><br />
            <input type="email" placeholder='Enter Email ID' value={mail} onChange={setE} /><br /><br />
            <p>Enter Your Query:</p>
            <textarea name="" id="" cols="50" rows="10" placeholder='Enter your Query' onChange={setT}></textarea><br/><br/>
            <button className='btn btn-light' onClick={() => {
              Check();
            }}>Submit</button><br />
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}
