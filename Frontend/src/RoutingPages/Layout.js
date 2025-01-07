import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Particles from 'react-tsparticles';
import particlesConfig from '../Particles/particles.config';
import '../index.css'; // Import your CSS styles

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh' }}>
            {/* Particles background */}
            <div className="particles-background">
                <Particles params={particlesConfig} />
            </div>

            {/* Main content */}
            <div className="content">
                <NavBar />
                {children}
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
