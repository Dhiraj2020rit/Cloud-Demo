import React,{useState} from 'react'
import NavBar from '../components/NavBar'
import NavBar2 from '../components/NavBar2'
import "./Login.css"
import Footer from "../components/Footer"
import { Link, useNavigate } from 'react-router-dom'
export default function Register() {
  const Navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [pwd, setPwd] = useState("");
  const [name, setName] = useState("");
  const [cpwd, setCPwd] = useState("");
  const Check = () => {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    const nameEx = /^[a-zA-Z\-]+$/;
      if (!regEx.test(mail)) {
        alert("Enter valid mail id");
      }
      else if (!name.match(nameEx)) {
        alert("Enter valid name");
      }
      // else if (!pwd.match(pattern)) {
      //   alert("your password should between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter");
      // }
      else if (mail === "" || pwd === "") {
        alert("Fill all the fields");
      }
      else if(pwd !== cpwd){
        alert("Please Enter Correct Password in Confirm Password Field");
      }
      
      else {
        alert("Successfully Registered");
        Navigate("/");
      }
    }
  const setE = (e) => {
      setMail(e.target.value);
    }
  const setP = (e) => {
      setPwd(e.target.value);
    }
  const setC = (e) => {
    setCPwd(e.target.value);
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
      <div className='loginform'>
        <div className='container'>
          <h1>Register</h1><br />
          <input type="text" placeholder='Enter Name' value={name} onChange={setN} /><br /><br />
          <input type="email" placeholder='Enter Email ID' value={mail} onChange={setE} /><br /><br/>
          <input type="password" placeholder='Enter Password' value={pwd} onChange={setP} /><br /><br />
          <input type="password" placeholder='Confirm Password' value={cpwd} onChange={setC} /><br /><br />
          <p><input type="checkbox" required /> I accept all the terms and conditions</p><br/>
          <button className='btn btn-light' onClick={() => {
            Check();
          }}>Register</button><br /><br />
          <div className='pointers'>
            <Link to={'/Login'}><span>Have already registered? Login Here</span></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
