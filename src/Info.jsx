import React from 'react'
import hiyoshi from './img/hiyoshi_image.JPG'
import './styles/Info.css'

const Info = () => {
  return (
    <div>
      <img src= {hiyoshi} className = 'image_hiyoshi' alt="hiyoshi"/>
    </div>
  )
}

export default Info
