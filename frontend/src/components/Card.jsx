import React from 'react'
// import "./Card.css"
function Card({item}) {
  return (
    <div  id='box' className='shadow-xl group h-56 w-36 md:h-72 md:min-w-48 bg-slate-300  mx-auto p-2   sm:px-3 sm:py-3 rounded-xl flex flex-col justify-between'>
      <div id='image-section' className='relative w-full h-[70%] mx-auto mb-4  rounded-lg overflow-hidden'>
        <img className='w-full h-full object-cover group-hover:scale-110 duration-150' src={item.src ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7ZbQ92u1JD-JgD4Kkhkju83p_uvKelP5jw&s'} alt='Item'/>
        <div className='absolute left-1 text-[10px] sm:text-sm top-1 bg-yellow-400 p-1 rounded-sm'>
          Best Seller
        </div>
      </div> 
      <div className='text-center'>
        <h2 className='text-sm sm:text-lg font-medium text-slate-500'>{item.cardTitle}</h2>
        <h3 className='text-sm sm:text-lg font-medium'>{item.cardText}</h3>
      </div>
      <button className='bg-sky-500 hover:bg-sky-600 duration-150 text-white mt-1 text-[12px] md:text-lg py-2 rounded-md'>
        Add To Bag  
      </button>
    </div>
  )
}

export default Card