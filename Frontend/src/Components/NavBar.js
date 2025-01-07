import React, { useState, useEffect } from 'react';
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []);

    const handleClick = () => setClick(!click);

    return (
        <div className={color ? 'Header Header-bg' : 'Header'}>
            <Link to='/' className='port'>
                Portfolio
            </Link>
            <ul
                className={click ? 'nav-menu active' : 'nav-menu'}
                onClick={() => setClick(false)}
            >
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/projects'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (
                    <FaTimes size={20} style={{ color: '#fff' }} />
                ) : (
                    <FaBars size={20} style={{ color: '#fff' }} />
                )}
            </div>
        </div>
    );
};

export default NavBar;
