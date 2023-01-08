import "./EventsStyles.css"
import React,{useState} from 'react';
import eve1 from "../asserts/drawing.jpg"
import { Link,useNavigate } from "react-router-dom";

const Events = () => {
    const Navigate = useNavigate();
    const [modal, setModal] = useState(false);
    const [more, setMore] = useState(false);
    const [event, setEvent] = useState("event1");
    const [pre, setpre] = useState("Mr");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [mno, setMno] = useState("");
    const [wno, setWno] = useState("");
    const [mail, setmail] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("Tamil Nadu");
    const [doing, setDoing] = useState("School");
    const [clg, setClg] = useState("");
    const [msg, setMsg] = useState("");
    const [flag, setFlag] = useState(false);
    const [status, setStatus] = useState(false);
    const setP=(e)=>{
        setpre(e.target.value);
    }
    const setF = (e) => {
        setFname(e.target.value);
    }
    const setL = (e) => {
        setLname(e.target.value);
    }
    const setM = (e) => {
        setMno(e.target.value);
    }
    const setW = (e) => {
        setWno(e.target.value);
    }
    const setMa = (e) => {
        setmail(e.target.value);
    }
    const setCi = (e) => {
        setCity(e.target.value);
    }
    const setS = (e) => {
        setState(e.target.value);
    }
    const setD = (e) => {
        setDoing(e.target.value);
    }
    const setCl = (e) => {
        setClg(e.target.value);
    }
    const toggleMore = () => {
        setMore(!more);
    }
    if (more) {
        document.body.classList.add('active-more')
    } else {
        document.body.classList.remove('active-more')
    }
    const toggleModal = () =>{
        setModal(!modal);
    }
    if(modal){
        document.body.classList.add('active-modal')
    }else{
        document.body.classList.remove('active-modal')
    }

    const CheckReg=()=>{
        const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
        const nameEx = /^[a-zA-Z\-]+$/;
        if (mail === "" || pre === "" || fname === "" || lname === "" || clg === "") {
            alert("Fill all the fields");
        }
        else if (!fname.match(nameEx)) {
            alert("Enter valid first name");
        }
        else if (!lname.match(nameEx)) {
            alert("Enter valid last name");
        }
        else if (!regEx.test(mail)) {
            alert("Enter valid mail id");
        } 
        else if(mno.length!==10){
            alert("Enter valid mobile number");
        }
        else if (wno.length !== 10) {
            alert("Enter valid whatsapp number");
        }
        else {
            alert("Successfully Registered");
            Navigate('/Abstract');
        }
    }
    
    return (
        <>
        <div className="card-container">
            <h1 className="event-name">Events</h1>
            <div className="event-container">
                <div className="event-card">
                    <img src={eve1} alt="Event1"/>
                    <h2 className="event-title">Event 1</h2>
                    <div className="event-details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id impedit voluptatem nisi </p><br/>
                            <p className="more-show" onClick={toggleMore}>Read More</p>
                        <div className="event-btn" onClick={toggleModal}>Register</div>
                    </div>
                </div>
                <div className="event-card">
                        <img src={eve1} alt="Event2" />
                    <h2 className="event-title">Event 2</h2>
                    <div className="event-details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id impedit voluptatem nisi </p><br />
                            <p className="more-show" onClick={toggleMore}>Read More</p>
                            <div className="event-btn" onClick={toggleModal}>Register</div>
                            
                    </div>
                </div>
                <div className="event-card">
                        <img src={eve1} alt="Event3" />
                        <h2 className="event-title">Event 3</h2>
                    <div className="event-details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium id impedit voluptatem nisi </p><br />
                            <p className="more-show" onClick={toggleMore}>Read More</p>
                            <div className="event-btn" onClick={toggleModal}>Register</div>
                    </div>
                </div>
            </div>
            
        </div>
        {
            modal && (
                    <div className="modal">
                        <div className="overlay"></div>
                        <div className="modal-content">
                            <h1>Event Registration</h1><br/><hr/><br/>
                            <p>Prefix
                                <select required className="select3" onChange={setP}>
                                    <option>Mr.</option>
                                    <option>Ms.</option>
                                </select>
                            </p><br />
                            <p>Enter First name</p>
                            <input type="text" required placeholder="First Name" onChange={setF} /><br />
                            <p>Enter Last name</p>
                            <input type="text" required placeholder="Last Name" onChange={setL} /><br />
                            <p>Enter Mobile Number</p>
                            <input type="number" required placeholder="Mobile Number" onChange={setM} /><br />
                            <p>Enter Whats app Number</p>
                            <input type="number" placeholder="Whats app number" onChange={setW} /><br />
                            <p>Enter Email</p>
                            <input type="email" required placeholder="Enter email id" onChange={setMa} /><br />
                            <p>Are you from?</p>
                            <input type="text" required placeholder="City Name" onChange={setCi} /><br /><br/>
                            <p>State
                                <select required className="select2" onChange={setS}>
                                    <option>Tamil Nadu</option>
                                    <option>Delhi</option>
                                    <option>Kerala</option>
                                    <option>AP</option>
                                </select>
                            </p><br/>
                            <p>What are you doing currently?
                                <select required className="select1" onChange={setD}>
                                <option>School</option>
                                <option>College</option>
                                <option>Working</option>
                                </select></p><br />
                            <p>Enter your College Name or Company Name (optional)</p>
                            <input type="text" required placeholder="College / Company Name" onChange={setCl} /><br/><br/>
                            <button className="close-modal" onClick={toggleModal}>X</button>
                            <div className="buttonC">
                                <button className="btn btn-light" onClick={CheckReg} ><Link to="">Submit</Link></button>
                            </div>
                        </div>
                    </div>
            )
        }
            {
                more && (
                    <div className="modal">
                        <div className="overlay"></div>
                        <div className="modal-content">
                            <h1>Description</h1>{event}<br /><hr /><br />
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid expedita corporis repellendus illum, in ducimus doloremque placeat perferendis nobis ipsa aut quod, quam quisquam repellat, quasi quae tempore consectetur at? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, cumque unde temporibus quisquam, ullam deleniti saepe, maiores aliquam impedit fugiat et voluptas doloremque. Quia iste architecto sequi fugit sunt? Ipsa. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet numquam qui fugiat aliquid suscipit nisi inventore, recusandae magnam tempora iure doloremque odit non autem, quo expedita provident consequuntur! Animi, vel?</p>
                            <button className="close-modal" onClick={toggleMore}>X</button>
                        </div>
                    </div>
                )
            }
            {
                flag && Navigate('/')
            }
        
        </>
    );
}

export default Events;
