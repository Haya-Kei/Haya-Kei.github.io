import React from 'react'
import hiyoshi from '../img/hiyoshi_image.JPG'
import '../styles/Info.css'
import tree from '../img/tree_image.PNG';
import spiderVideo from '../img/marching-spider.MP4';
import windmilVideo from '../img/windmil_animation.mp4';

const Info = () => {
  return (
    <div>
      <img src= {hiyoshi} className = 'image_hiyoshi' alt="hiyoshi"/>
      <img src= {tree} className ='image_hiyoshi' alt='tree'/>
      <video src={spiderVideo} width="300" playsinline loop autoPlay muted playsInline className='video_spider'>
        Your browser does not support video tag.
      </video>
      <video src={windmilVideo} width="300" loop autoPlay muted className='video_spider' playsInline>
        Your browser does not support video tag.
      </video>
    </div>
  )
}

export default Info
