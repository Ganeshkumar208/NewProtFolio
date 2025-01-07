import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import ProjectsDashImg from '../Components/ProjectsDashImg'
import Form from '../Components/Form'

const Contact = () => {
    return (
        <div>
            <NavBar />
            <ProjectsDashImg heading="CONTACT." text="Lets have a Chat" />
            <Form />
            <Footer />
        </div>
    )
}

export default Contact