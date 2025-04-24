import React from 'react'
import './About.css'
import about_img from '../../assets/images/about.png'
import play_btn from '../../assets/images/play-icon.png'

const About = ({Video,setVideo}) => {
    const handleVideo =()=>{
        Video ? setVideo(false):setVideo(true);
    }
  return <div className="about">
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_btn} alt='' className='play-btn' onClick={handleVideo}/>
        </div>
        <div className="about-right">
            <h4>About University</h4>
            <h3>To Build a Better Nation Together</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</p>
            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
             
        </div>
    </div>                     
}

export default About