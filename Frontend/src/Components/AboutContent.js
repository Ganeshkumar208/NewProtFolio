/* eslint-disable jsx-a11y/img-redundant-alt */
import './AboutContentStyles.css';
import React from 'react';
import { Link } from 'react-router-dom';
import AboutImg1 from '../Images/aboutimg1.jpeg';
import AboutImg2 from '../Images/aboutimg2.png';

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1 className='abouthead'>Who Am I?</h1>
                <p className='paraabout'>
                    I am a passionate developer, constantly pushing the boundaries of technology to create impactful solutions.
                    With a love for coding and a commitment to continuous learning, I specialize in crafting clean and efficient code.
                    I thrive on solving problems, building projects that matter, and transforming ideas into reality. Let’s collaborate to bring your vision to life!
                </p>
                <Link to='/contact'>
                    <button className='contact-btns'>Contact</button>
                </Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img className='imgs' src={AboutImg1} alt='Image 1' />
                    </div>
                    <div className='img-stack bottom'>
                        <img className='imgs' src={AboutImg2} alt='Image 2' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;
