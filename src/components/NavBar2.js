import "./NavBarStyles.css"
import React from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";
const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }
    const val = () =>{
        // localStorage.setItem('login',false)
        localStorage.clear()
    }

    window.addEventListener("scroll", changeColor);

    return (
        <div className={
            color ? "header header-bg" : "header"
        }>
            <Link to="/"><h1>ZoCon</h1></Link>
            <ul className={
                click ? "nav-menu active" : "nav-menu"
            }>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                <li ><Link to="" onClick={{val}} >Logout</Link></li>
            </ul>
            <div className="navicon" onClick={handleclick}>
                {
                    click ? (<FaTimes size={20} style={{ color: "#fff", cursor: "pointer" }} />) : (<FaBars size={20} style={{ color: "#fff", cursor: "pointer" }} />)
                }
            </div>
        </div>
    );
}

export default NavBar;
