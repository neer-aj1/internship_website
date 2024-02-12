import React from 'react'
import Card from './Card'
import logo from '../assets/rating.png'

const ReasonSection = () => {
  return (
    <div className='flex flex-col bg-[#fadb50] p-14 rounded'>
      <h1 className='text-center text-4xl text-white mb-14'>Why you should go with me?</h1>
      <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>
        <Card imageUrl={logo} heading="Expertise" desc="Benefit from Darsheel's extensive experience and deep expertise in the food industry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam." />
        <Card imageUrl={logo} heading="Innovation" desc="Stay ahead of the curve with Darsheel's innovative strategies and creative solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam." />
        <Card imageUrl={logo} heading="Personalized Approach" desc="Receive customized guidance and support tailored to your specific business needs. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio ut sem nulla pharetra diam." />
      </div>
    </div>
  )
}

export default ReasonSection