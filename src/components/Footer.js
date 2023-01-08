import "./FooterStyles.css"
import React from 'react'
import { FaFacebook, FaFacebookMessenger, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                
                    <FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>
                        <p>THis is our location</p>
                        <p>You can visit us here</p>        
                      <h4>
                          <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                          1234567890
                      </h4>
                    <h4>
                        <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                        123456@gmail.com
                    </h4>
            </div>
            <div className="right">
                <h4>About this conference</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat a, repellat error distinctio architecto illum laboriosam voluptatum harum autem itaque. Facilis unde fugit sit enim ab sed distinctio eos voluptates!</p>
                <div className="social">
                      <FaFacebookMessenger size={30} style={{ color: "white", marginRight: "2rem" }} />
                      <FaFacebook size={30} style={{ color: "white", marginRight: "2rem" }} />
                      <FaInstagram size={30} style={{ color: "white", marginRight: "2rem" }} />
                      <FaTwitter size={30} style={{ color: "white", marginRight: "2rem" }} />
                </div>
            </div>
        </div>
    </div>
  )
}
