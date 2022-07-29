import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import './Recipe.css'
import { Button } from '@mui/material';

function Recipe({image, name, calories, time, link}) {
  return (
    <div className="container">
        <div className='title'>
            <p>{name}</p>
        </div>
        <div className='dishImage'>
            <img src = {image} alt="" />
        </div>
        <div className="calTimeLabel">
            <div className="cal">
                Calories:
            </div>
            <div className="time">
                Time:
            </div>
        </div>
        <div className="calTimeInfo">
            <div className="calInfo">
                <LocalFireDepartmentOutlinedIcon />
                <div>{Math.floor(calories)}</div>
            </div>
            <div className="timeInfo">
                <AccessTimeIcon />
                <div>{time ? time:"As required"}</div>
            </div>
        </div>
        <div className="recipeLink">
            <Button href={link} variant='contained' >Get Recipe</Button>
        </div>        
    </div>
  )
}

export default Recipe