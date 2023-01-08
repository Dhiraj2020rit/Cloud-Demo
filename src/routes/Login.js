import React,{useState} from 'react'
import NavBar from '../components/NavBar'
import "./Login.css"
import Footer from "../components/Footer"
import { Link,useNavigate } from 'react-router-dom'
import { RiMailSendLine } from "react-icons/ri"
export default function Login() {
  const Navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [reset,setReset] = useState(false);
  const [mail,setMail] = useState("");
  const [pwd,setPwd] = useState("");
  const [Ma, setMa] = useState("");
  const [old, setOld] = useState("");
  const [newp, setNew] = useState("");
  const [reg, setReg] = useState("");
  const toggleModal = () =>{
    setModal(!modal);
  }
  const toggleReset = () => {
    setReset(!reset);
  }
  
  const Check = () => {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if(!regEx.test(mail)){
      alert("Enter valid mail id");
    }
    else if (mail === "" || pwd === "") {
      alert("Fill all the fields");
    }
    else{
      alert("Successfully Logged in");
      localStorage.setItem('login',true)
      Navigate("/");
    }
  }
  const setE = (e) =>{
    setMail(e.target.value);
  }
  const setMai = (e) => {
    setMa(e.target.value);
  }
  const setOldp = (e) => {
    setOld(e.target.value);
    console.log(old);
  }
  const setNewp = (e) => {
    setNew(e.target.value);
    console.log(newp);
  }
  const setP = (e) => {
    setPwd(e.target.value);
    console.log(pwd);
  }
  const serRegmail = (e)=>{
    setReg(e.target.value);
  }
  const Check2=()=>{
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (reg === "") {
      alert("Enter the Registered mail id");
    }
    else if (!regEx.test(reg)) {
      alert("Enter valid mail id");
    }
    else {
      //alert("your new password have been saved");
      Navigate('/CPwd');
    }
  }
  const CheckReg = () => {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
    const nameEx = /^[a-zA-Z\-]+$/;
    if (Ma === "" || old === "" || newp === "") {
      alert("Fill all the fields");
    }
    else if (!regEx.test(Ma)) {
      alert("Enter valid mail id");
    }
    else if(old === newp){
      alert("Your Old Password Can't be your new password");
    }
    // else if(!newp.match(pattern)){
    //   alert("your password should between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter");
    // }
    else {
      alert("Password Changed Successfully");
      Navigate('/');
    }
  }

  return (
    <div>
      {/* {
        !localStorage.getItem('login') ? <NavBar2 /> : <NavBar />
      } */}
      <NavBar />
      <div className='loginform'>
      <div className='container'>
        <h1>Login</h1><br/>
          <input type="email" placeholder='Registered Email ID' value={mail} onChange={setE}/><br/><br/>
          <input type="password" placeholder='Enter Password' value={pwd} onChange={setP} /><br/><br/>
        <button className='btn btn-light' onClick={()=>{Check()
        }}>Login</button><br/><br/>
        <div className='pointers'>
            <Link onClick={toggleModal}><span>forget password?</span></Link><br/><br/>
            <Link to={'/Register'}><span>Haven't Registered?</span></Link><br/><br/>
            <Link onClick={toggleReset} ><span>Reset Password ?</span></Link>
        </div>
      </div>
      </div>
      <Footer/>
      {
        modal && 
        (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h1>Forgot Password ?</h1><br /><hr /><br />
              <p>Enter Registered Mail</p><br/>
              <input type="email" placeholder="Enter Registered Mail" onChange={serRegmail}/><br/><br/>
              <button className="close-modal" onClick={toggleModal}>X</button>
              <div className="buttonC">
                <button className="btn btn-light" onClick={Check2} ><Link>Sent Reset Link{<RiMailSendLine size={15} style={{ color: "white", marginRight: "1rem" }} />}</Link></button>
              </div>
            </div>
          </div>
        )
      }
      {
        reset && (
          <div className="modal">
            <div className="overlay"></div>
            <div className="modal-content">
              <h1>Reset Current Password ?</h1><br /><hr /><br />
              <p>Enter Email</p>
              <input type="email" required placeholder="Enter email id" onChange={setMai} /><br />
              <p>Enter Old Password</p>
              <input type="password" required placeholder="Enter Old password" onChange={setOldp} /><br />
              <p>Enter New Password</p>
              <input type="password" required placeholder="Enter New password" onChange={setNewp} /><br />
              <button className="close-modal" onClick={toggleReset}>X</button><br/>
              <div className="buttonC">
                <button className="btn btn-light" onClick={CheckReg} ><Link >Submit</Link></button>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
