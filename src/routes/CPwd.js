import React,{useState} from 'react'
import NavBar from '../components/NavBar'
import "./Login.css"
import Footer from "../components/Footer"
import { Link, useNavigate } from 'react-router-dom'
export default function CPwd() {
  const Navigate = useNavigate();
  const [pwd, setPwd] = useState("");
  const [cpwd, setCPwd] = useState("");
  const Check=()=>{
    if(cpwd===pwd){
      return true;
    }
    alert("Password Entered is mismatching");
    return false;
  }
  const CheckE = () => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    if (cpwd === "" || pwd === "") {
      alert("Fill all the fields");
    }
    else if (!pwd.match(pattern)){
      alert("your password should between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter");
    }
    else {
      if(Check()){
        alert("Password Resetted Successfully");
        Navigate('/Login');
      }
    }
  }
  const setP = (e) => {
    setPwd(e.target.value);
  }
  const setC = (e) => {
    setCPwd(e.target.value);
  }
    return (
      <div>
        <NavBar />
        <div className='loginform'>
          <div className='container'><br/><br/>
            <h1>Reset Your Password</h1><br />
            <input type="password" placeholder='Enter Password' value={pwd} onChange={setP} /><br /><br />
            <input type="password" placeholder='ReEnter Password' value={cpwd} onChange={setC} /><br /><br />
            <button className='btn btn-light' onClick={() => {
              console.log(pwd);
              console.log(cpwd);
              CheckE();
            }}>Reset Password</button><br /><br />
            <div className='pointers'>
              <Link to={'/Register'}><span>Haven't Registered?</span></Link>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
}