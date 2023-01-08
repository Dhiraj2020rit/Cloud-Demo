import "./ImageStyles.css"
import Img1 from "../asserts/Conference.jpg"
import React from 'react';
import { Link } from "react-router-dom";

const Image = () => {
    return (
        <div className="image">
            <div className="mask">
                <img className="intro-img" src={Img1} alt="Image for Home Page" />
            </div>
            <div className="content">
                <p>Home Page</p>
                <h1>This a Conference for Zoho Model by Dhiraj. N</h1>
                <div>
                    <Link to={'/Login'} className="btn">Login         </Link>
                    <Link to={'/Register'} className="btn btn-light">Register</Link>
                </div>
            </div>
        </div>
    );
}

export default Image;
