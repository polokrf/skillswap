import React from 'react';
import logo from '../assets/icons8-logo-48.png'
import { Link } from 'react-router';
import aside from '../assets/23.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  Navigation} from 'swiper/modules';


const Hero = () => {
  return (
    <div className="text-center p-2 xl:p-0 w-full md:max-w-[1440px] mx-auto ">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="xl:h-[500px] h-[400px]">
            <img
              className="h-full w-full  object-cover"
              src="https://i.ibb.co.com/YBxw87vP/Gemini-Generated-Image-943ovq943ovq943o.png"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="xl:h-[500px] h-[400px]">
            <img
              className="h-full w-full  object-cover"
              src="https://i.ibb.co.com/ns7fbKYg/9628835.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
   
  );
};

export default Hero;
