import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/images/next-icon.png'
import back from '../../assets/images/back-icon.png'
import user1 from '../../assets/images/user-1.png'
import user2 from '../../assets/images/user-2.png'
import user3 from '../../assets/images/user-3.png'
import user4 from '../../assets/images/user-4.png'



const Testimonials = () => {
    const slider = useRef();
    var tx = 0;
    const Next =()=>{
      if(tx > -50){
        tx+=-25; //tx = tx+ (-25)
      }
      slider.current.style.transform = `translateX(${tx}%)`
    }
    const Back =()=>{
        if(tx <0){
            tx = tx + 25;
        }
         slider.current.style.transform = `translateX(${tx}%)`
    }

  return (
    <div className="testimonials">
        <img src={next} alt='' className='next-btn' onClick={Next}/>
        <img src={back} alt='' className='back-btn' onClick={Back}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt=''/>
                            <div>
                            <h3>Arjun B</h3>
                            <span>Tamilnadu, India</span>
                        </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                    </div>
                    
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user2} alt=''/>
                            <div>
                            <h3>Diensh Kingston</h3>
                            <span>Tamilnadu, India</span>
                        </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>                    </div>
                    
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user3} alt=''/>
                            <div>
                            <h3>Vishwa MK </h3>
                            <span>Tamilnadu, India</span>
                        </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>                    </div>
                    
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user4} alt=''/>
                            <div>
                            <h3>Aari Haran S</h3>
                            <span>Tamilnadu, India</span>
                        </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>                    </div>
                    
                </li>
              
               
           
            </ul>
        </div>
    </div>
  )
}

export default Testimonials