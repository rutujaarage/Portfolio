import React from 'react'
import './Experience.css'

const Experience = () => {

   

  return (
    <div className='experience' id='Experience'>
        <div className='achivement'>
            <div className='circle' >6</div>
            <span>Month </span>
            <span>Fresher</span>
        </div>
        <div className='achivement'>
            <div className='circle'  >6+</div>
            <span>completed </span>
            <span>Project</span>
        </div>
        <div className='achivement'>
            <div className='circle'>4</div>
            <span> Years </span>
            <span> BTech</span>
        </div>
        <div className=' blur s-blur4' style={{background:"var(--purple)"}}/>
   </div>
    
  )
}

export default Experience