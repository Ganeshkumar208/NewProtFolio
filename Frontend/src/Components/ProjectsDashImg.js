import React from 'react'
import './ProjectsDashImgStyles.css'
import projectsimg3 from '../Images/projectspic3.jpg'


const ProjectsDashImg = (props) => {
    return (
        <div className='hero-img'>
            <div className='heading'>
                <img src={projectsimg3} className='img' alt='project-intro Img'></img>
                <h1 className='parahead'>{props.heading}</h1>
                <p className='parapro'>{props.text}</p>
            </div>
        </div>
    )
}

export default ProjectsDashImg;
