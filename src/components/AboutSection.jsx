import React from 'react'

const AboutSection = () => {
  return (
    <div className='my-10 py-28 px-10'>
      <h1 className='text-[#fadb50] text-4xl font-semibold text-center underline underline-offset-4'>Our Founder</h1>
      <div className='border sm:border-2 my-8 border-[#8A9A5B] p-10 rounded-xl'>
        <div className='flex flex-col sm:flex-row gap-4 justify-center sm:justify-between items-center text-justify'>
          <p className='flex-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu odio ut sem nulla pharetra diam sit amet. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Lacus sed turpis tincidunt id aliquet risus. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Dapibus ultrices in iaculis nunc sed augue lacus. Donec adipiscing tristique risus nec feugiat in fermentum. Auctor neque vitae tempus quam pellentesque. Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Donec ac odio tempor orci dapibus. Fames ac turpis egestas maecenas.</p>
          <div className='flex-1 flex justify-center pr-11'>
            <img className='h-72 sm:h-[450px] sm:w-[350px] mx-auto' src="https://images.pexels.com/photos/20054923/pexels-photo-20054923/free-photo-of-moody-days.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection