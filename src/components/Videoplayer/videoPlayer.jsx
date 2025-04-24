import React, { useRef } from 'react'
import './videoPlayer.css'
import video from '../../assets/videos/video1.mp4'

const VideoPlayer = ({Video,setVideo}) => {
    const close = useRef();
    const HandleClose =(e)=>{
        if(e.target == close.current){
            setVideo(false);
        }
    }
  return (
    <div className={`video ${Video?'':'hide'}` } ref={close} onClick={HandleClose}>
        <video src={video} autoPlay muted controls/>
    </div>
  )
}

export default VideoPlayer