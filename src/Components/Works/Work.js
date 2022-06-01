import React from 'react'
import './Work.css'
import blog from "../../img/blog.png"
import clock from "../../img/Clock1.png"
import myntra from "../../img/myntra-logo.svg"
import todo from "../../img/todo2.png"
import todo_mob from "../../img/todomob.png"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';


const Work = () => {

   
   

  const theme = useContext(themeContext);
    const darkMode= theme.state.darkMode
return (
    <div className='works' id='My-Work'>
    {/* left side */}
    <div className='awesome'>
        <span  style={{color:darkMode? 'white' : ' '}}>Works for all these </span>
        <span> Making Projects and clone</span>
        
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br/>
         Rerum optio sunt incidunt voluptates necessitatibus ex eius nam dolorem id nesciunt.
         <br/>
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         <br/>
         Lorem ipsum dolor sit amet consectetur adipisicing elit.
         <br/>

        </span>

       
        <button className='button s-button'>Hire Me</button>
        <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>
     </div>

     {/* right side */}
     <div className='w-right'>
       <motion.div 

           initial={{rotate:45}}
          whileInView={{rotate:0}}
          viewport={{margin:'-40px'}}
          transition={{duration:3.5 , type:'spring'}}// for a transition 
       
       
       className='w-mainCircle'>
         <div className='w-secCircle'>
           <img src={blog}  height="90px" alt=""/>
          </div>
          <div className='w-secCircle'>
           <img src={todo} height="120px" alt=""/>
          </div>
          <div className='w-secCircle'>
           <img src={clock} height="90px" alt=""/>
          </div>
          <div className='w-secCircle'>
           <img src={todo_mob} height="90px" alt=""/>
          </div>
          <div className='w-secCircle'>
           <img src={myntra} height="90px" alt=""/>
          </div>
       </motion.div>
       {/* background circle */}
       <div className='w-backCircle  blueCircle'></div>
     <div className='w-backCircle  yellowCircle'></div>
         
     </div>
   </div>
  )
}

export default Work