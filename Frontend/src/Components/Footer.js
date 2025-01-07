import './FooterStyles.css';
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaHome, FaLinkedinIn, FaMailBulk, FaPhone, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logosX from '../Images/twitterXlogo.png';
import gitHub from '../Images/social_10090288.png'

const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={40} style={{ color: 'white', marginRight: '2rem' }} />
                        <div>
                            <p className='parafoot'>Block No-14, House No-s8, Srikanth Nagar,
                                Arilova Colony, Visakhapatnam Pin-530040, Andhra Pradesh, India</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4 className='parafootn'>
                            <FaPhone size={20} style={{ color: 'white', marginRight: '2rem' }} />
                            +91 8328602239
                        </h4>
                    </div>
                    <div className='email'>
                        <h4 className='parafootn'>
                            <FaMailBulk size={20} style={{ color: 'white', marginRight: '2rem' }} />
                            ganeshkumarakula@gmail.com
                        </h4>
                    </div>
                </div>
                <div className='right'>
                    <h2>About My Freelancing</h2>
                    <p className='parafoot'>As a dedicated freelance developer, I have successfully completed a range of projects that demonstrate my ability to deliver high-quality work independently. My portfolio includes a fully functional Todo List application, a comprehensive personal portfolio, and several other custom projects. Each of these projects reflects my commitment to clean, efficient code, user-friendly design, and attention to detail.</p>
                    <div className='social'>
                        <a href="https://www.facebook.com/saiganesh.abd/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={25} style={{ color: '#4267b2', marginRight: '2rem' }} alt="Facebook icon" />
                        </a>
                        <a href="https://x.com/Ganesh171492325?s=09" target="_blank" rel="noopener noreferrer">
                            <img
                                src={logosX}
                                alt="X Icon"
                                style={{ width: '25px', height: '25px', marginRight: '2rem' }}
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/ganesh-kumar-akula-439259253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn size={25} style={{ color: '#0077B5', marginRight: '2rem' }} alt="LinkedIn icon" />
                        </a>
                        <a href="https://www.instagram.com/ganesh_kumar_802" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={22} style={{ color: '#ff99c8', marginRight: '2rem' }} alt="Instagram icon" />
                        </a>
                        <a href="https://wa.me/919553787707" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={25} style={{ color: '#80ed99', marginRight: '2rem' }} alt="whatsapp icon" />
                        </a>
                        <a href="https://github.com/dashboard" target="_blank" rel="noopener noreferrer">
                            <img
                                src={gitHub}
                                alt="GitHub Icon"
                                style={{ width: '25px', height: '25px', marginRight: '2rem', color: '#9a8c98' }}
                            />
                        </a>
                    </div>
                </div>
            </div>

            {showButton && (
                <button
                    onClick={scrollToTop}
                    className="back-to-top-button"
                >
                    ↑
                </button>
            )}
        </div>
    );
};

export default Footer;
