import React from 'react'

const Card = ({ imageUrl, heading, desc }) => {
  return (
    <div className='flex flex-col items-center gap-6 text-gray-800 max-w-[25rem] border border-white p-5 rounded-lg'>
      <img className='h-20 w-20 ' src={imageUrl} alt='image' />
      <h2 className='text-black text-xl text-justify'>{heading}</h2>
      <p className='text-justify text-gray-700' >{desc}</p>
    </div>
  )
}

export default Card