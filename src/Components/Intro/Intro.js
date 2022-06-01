import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import girls from '../../img/girls.svg'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji1 from '../../img/glassesimoji1.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion'

const Intro = () => {

  // for a transition 
  const transition ={duration : 2, type:'spring'}

  const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode

 return (
    <div className='intro'>
         <div className='i-left'>
             <div className='i-name'>
                 <span style={{color:darkMode? 'white': ''}}>Hy! I  Am </span>
                 <span>Rutuja Arage</span>
                 <span>Frontend Developer with high level of Experience in web designing and Development, producing the Quality work</span>
             </div>
             <button className=' button i-button'>Hire me</button>
             <div className='i-icons'>
                 <a href='https://github.com/rutujaarage'>
                 <img src={Github} alt=""></img>
                 </a>
                 <a href='https://www.linkedin.com/in/rutujaarage-01a7a4218'>
                 <img src={LinkedIn} alt=""></img>
                 </a>
                 <a href='https://instagram.com/rutuja.arage?igshid=YmMyMTA2M2Y='>
                 <img src={Instagram} alt=""></img>
                 </a>
                 
             </div>
         </div>
         <div className='i-right'>
         <img src={Vector1} alt=""></img>
         <img src={Vector2} alt=""></img>
         <img src={girls} alt=""></img>
         < motion.img
         initial={{left:'-36%'}}
         whileInView={{left:'-24%'}}
         transition={transition}
         src={glassesimoji1} alt=""/>

         <motion.div
         initial={{top:'-4%',left:'74%'}}
         whileInView={{left:'58%'}}
         transition={transition}
         
         style={{top:'-4%' , left:'55%'}}
         className='floating-div'
         
         >
             <FloatingDiv image={Crown} txt1="Web" txt2="Developer"/>
         </motion.div>
         <motion.div 

             initial={{left:'10rem' , top:'18rem'}}
             whileInView={{left:'-5rem'}}
             transition={transition}
         
         
         
         style={{top:'20rem' , left:'-5rem'}}
         className='floating-div'
         >
         <FloatingDiv image={thumbup} txt1="best design" txt2="Rating this...."/>
         </motion.div>

       {/* making blur div */}
       <div className='blur' style={{background:'rgb(238 210 255)'}}>

       </div>
       <div className='blur' style={{background:'#C1F5FF', top:'17rem', width:'21rem',height:"11rem",left:'-9rem'}}>

       </div>

         </div>
    </div>
  )
}

export default Intro