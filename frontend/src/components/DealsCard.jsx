import React from 'react'
import "./Card.css"
import { SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

function DealsCard({item}) {
  return (
    <SwiperSlide  id='box' className='shadow-xl group h-44 w-28 md:h-72 md:min-w-48 bg-slate-300  mx-auto p-2 mt-2  sm:px-3 sm:py-3 rounded-xl flex flex-col justify-between'>
      <div id='image-section' className='relative w-full h-[70%] mx-auto mb-4  rounded-lg overflow-hidden'>
        <img className='w-full h-full object-cover group-hover:scale-110 duration-150' src={item.src} alt='Item'/>
      </div> 
      <div className='text-center'>
        <h2 className='text-sm sm:text-lg font-medium text-slate-600'>{item.cardTitle}</h2>
        <h3 className='text-sm sm:text-lg font-semibold'>From <span className='text-green-600'>{item.cardText}</span></h3>
      </div>
    </SwiperSlide>
  )
}

export default DealsCard