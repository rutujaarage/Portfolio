import React from 'react'
import "./Portfolio.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import blog_project from '../../img/blog_project_snippet.png'
import myntra_clone from '../../img/myntra_clone.png'
import todo_project from '../../img/todo_app_first_page.png'
import clock_project from '../../img/clock_project.png'
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode= theme.state.darkMode


  return (
    <div className='portfolio' id='Portfolio'>
        {/* heading */}
        <span  style={{color:darkMode? 'white' : ' '}}>Recent Projects </span>
        <span> Portfolio </span>
        <div className=' blur s-blur3' style={{background:"var(--purple)"}}></div>


        {/* slider */}

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        >
            <SwiperSlide>
                <img src={blog_project} alt=''></img>
            </SwiperSlide>

            <SwiperSlide>
                <img src={myntra_clone} alt=''></img>
            </SwiperSlide>

            <SwiperSlide>
                <img src={todo_project} alt=''></img>
            </SwiperSlide>

            <SwiperSlide>
                <img src={clock_project} alt=''></img>
            </SwiperSlide>










        </Swiper>





    </div>
  )
}

export default Portfolio