import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProjectsDashImg from '../Components/ProjectsDashImg'
import PriceCard from '../Components/PriceCard'
import Work from '../Components/Work'

const Projects = () => {
    return (
        <div>
            <NavBar />
            <ProjectsDashImg heading="PROJECTS." text="Some of my most recent works" />
            <Work />
            <PriceCard />
            <Footer />
        </div>
    )
}

export default Projects