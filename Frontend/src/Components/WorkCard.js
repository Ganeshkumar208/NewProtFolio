/* eslint-disable jsx-a11y/img-redundant-alt */
import './WorkCardStyles.css'
import React from 'react'

const WorkCard = (props) => {
    return (
        <div className='project-card'>
            <div className='image'>
                <img src={props.imgsrc} alt='image'></img>
            </div>
            <div className='project-title'>
                <h2>{props.title}</h2>
            </div>
            <div>
                <div>
                    <p className='paraprocard'>{props.text}</p>
                </div>
            </div>
            <div className='pro-btns'>
                <a href={props.view} target='_blank' rel='noopener noreferrer' className='btns'>View</a>
                <a href={props.source} target='_blank' rel='noopener noreferrer' className='btns'>Source</a>
            </div>
        </div>
    )
}

export default WorkCard;
