import React from 'react'
import hiyoshi from './img/hiyoshi_image.JPG'
import './styles/Info.css'
import tree from './img/tree_image.PNG';

const Info = () => {
  return (
    <div>
      <img src= {hiyoshi} className = 'image_hiyoshi' alt="hiyoshi"/>
      <img src= {tree} className ='image_hiyoshi' alt='tree'/>
    </div>
  )
}

export default Info
