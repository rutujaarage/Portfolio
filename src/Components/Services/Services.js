import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume_rutu.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';

const Services = () => {

  // for a transition 
  const transition ={duration : 2, type:'spring'}

  const theme = useContext(themeContext);
  const darkMode= theme.state.darkMode




  return (
    <div className='services' id='Services'>
        {/* left side */}
        <div className='awesome'>
            <span style={{color:darkMode? 'white' : ' '}}>My Awesome </span>
            <span>services </span>
            
            <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br/>
             Rerum optio sunt incidunt voluptates necessitatibus ex eius nam dolorem id nesciunt.
            </span>

            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>


            
            <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div>

        </div>
        {/* right side */}
        <div className='cards'>
               <motion.div 
               initial={{left:'15rem'}}
               whileInView={{left:'19rem'}}
               transition={transition}
               
               
               style={{left:'14rem'}}>
                   <Card
                   emoji={HeartEmoji}
                   heading={'Design'}
                   detail={"Figma, Sketch,Photoshop,Adobe,Adobe xd"}
                   />

               </motion.div>
               <motion.div 

                  initial={{left:'15rem'}}
                  whileInView={{left:'1rem'}}
                  transition={transition}
                  style={{ top:'12rem', left:'-4rem'}}>
                   <Card
                   emoji={Glasses}
                   heading={'Developer'}
                   detail={"React, JavaScript, HTML5, Css,Adobe xd"}
                   />
                </motion.div>
                <motion.div 

                      initial={{left:'15rem'}}
                      whileInView={{left:'19rem'}}
                      transition={transition}
                
                
                
                style={{ top:'19rem',left:'14rem'}}>
                   <Card
                   emoji={Humble}
                   heading={'UI/UX'}
                   detail={
                   "Lorem ipsum dolor sit amet consectetur html "
                    }
                   />

               </motion.div>
               <div className=' blur s-blur2' style={{background:"var(--purple)"}}>

               </div>
        </div>
    </div>
  )
}

export default Services