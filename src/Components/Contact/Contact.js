import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import heart from '../../img/heartemoji.png';

import { useRef , useState } from "react";

import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {

    const theme = useContext(themeContext);
    const darkMode= theme.state.darkMode


    const form = useRef();

    const [done , setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9vasf3o', 'template_5ipyeac', form.current, 'EIg0Vf5KEA4u3AqWd')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });


        }






        return (
            <div className='contact-form'>
                <div className='w-left'>
                    <div className='awesome contact-head'  top="10rem">
                        <span style={{color:darkMode? 'white' : ' '}}>Get In Touch</span>
                        <span>Contact Me  <img  className='imgofcontact' src={heart} alt=""/></span>
                       

                        <div className='blur s-blur' style={{ backgrounf: '#ABF1FF94' }}>

                        </div>
                    </div>
                </div>

                <div className='c-right'>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="user-name" className='user' placeholder='Name' />
                        <input type="email " name="user-name" className='user' placeholder='Email' />
                        <textarea name='message' className='user' placeholder='Message' />
                        <input type="submit" value="Send" className='button' />
                        <span>{done && "Thanks for contacting me!❤"}</span>
                        <div className='blur c-blur1' style={{ background: " var(--purple)" }}></div>
                    </form>
                </div>
            </div>
        )
    }

    export default Contact