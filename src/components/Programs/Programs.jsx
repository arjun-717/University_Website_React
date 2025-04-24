import React from 'react'
import './Programs.css'
import program1 from '../../assets/images/program-1.png'
import program2 from '../../assets/images/program-2.png'
import program3 from '../../assets/images/program-3.png'
import icon1 from '../../assets/images/program-icon-1.png'
import icon2 from '../../assets/images/program-icon-2.png'
import icon3 from '../../assets/images/program-icon-3.png'


const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program1} alt=''/>
        <div className="caption">
            <img src={icon1} alt=''/>
            <p>UG Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program2} alt=''/>
        <div className="caption">
            <img src={icon2} alt=''/>
            <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program3} alt=''/>
        <div className="caption">
            <img src={icon3} alt=''/>
            <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs