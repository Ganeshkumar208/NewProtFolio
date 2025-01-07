import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProjectsDashImg from '../Components/ProjectsDashImg'
import AboutContent from '../Components/AboutContent'

const About = () => {
    return (
        <div>
            <NavBar />
            <ProjectsDashImg heading="ABOUT." text="Im a friendly Full Stack Web Developer"
                // headingColor="black"
                textColor="green" />
            <AboutContent />
            <Footer />
        </div>)
}

export default About