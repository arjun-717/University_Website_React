import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/Videoplayer/videoPlayer'

const App = () => {
  const [Video,setVideo] = useState(false);

  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='our PROGRAM' title='What We Offer'/>
          <Programs/>
          <About Video={Video} setVideo={setVideo}/>
          <Title subTitle='gallery' title='Campus Photos'/>
          <Campus/>
          <Title subTitle='Testimonials' title='What Students Says'/>
          <Testimonials/>
          <Title subTitle='Contact us' title='Get in Touch'/>
          <Contact/>
          <Footer/>
          <VideoPlayer  Video={Video} setVideo={setVideo}/>

        </div>
        
    </div>
  )
}

export default App