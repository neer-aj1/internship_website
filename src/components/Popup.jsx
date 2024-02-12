import React from 'react'
const Popup = ({ handlePopupClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <form className='flex flex-col gap-6 border p-6 rounded-xl bg-slate-300'>
        <div className='flex justify-between'>
          <h1 className='text-3xl'>Connect with us</h1>
          <button type='button' onClick={handlePopupClose}>X</button>
        </div>
        <div className='flex gap-5 text-xl'>
          <label htmlFor="phone">Phone</label>
          <input className='rounded' type="phone" id='phone' />
        </div>
        <div className='flex gap-5 text-xl'>
          <label htmlFor="email">Email</label>
          <input className='rounded' type="email" id='email' />
        </div>
        <button type='button' className='border-2 p-1 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default Popup