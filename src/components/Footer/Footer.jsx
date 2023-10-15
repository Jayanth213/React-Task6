import React from 'react'
import './Footer.css'
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "5px" }} />
                        <div>
                        <p>Gudivada ,AndhraPradesh</p>
                            <p>India</p>
                        </div>
                    </div>

                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "white", marginRight: "5px" }} /> 8790441358
                        </h4>
                    </div>

                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "white"}} />  jayanthreddy3912@gmail.com
                        </h4>
                    </div>

                </div>
                <div className="right">
                    <h4>Something about me </h4>
                    <p>I enjoy group discussions and  enthusiastic to learn new technologies.</p>
                    <div className="social">
                    
                    <a href="https://instagram.com/__just___jay__?igshid=OGQ5ZDc2ODk2ZA=="> <FaInstagram size={30} style={{ color: "white" }} />  </a>
                    <a href="https://x.com/Jayanth1159?t=B4CHsT0qpXVjcDMhJAvavQ&s=08"><FaTwitter size={30} style={{ color: "white" }} /></a>
                    <a href="https://github.com/Jayanth213"><FaGithub size={30} style={{ color: "white"}} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
