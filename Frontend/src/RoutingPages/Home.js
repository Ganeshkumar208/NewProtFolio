import React from 'react'
import NavBar from '../Components/NavBar'
import DashBoardImg from '../Components/DashBoardImg'
import Footer from '../Components/Footer'
import Work from '../Components/Work'


const Home = () => {
    return (
        <div>
            <NavBar />
            <DashBoardImg />
            <Work />
            <Footer />
        </div>
    )
}

export default Home