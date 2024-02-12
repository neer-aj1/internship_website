import React from 'react'

const HeroSection = () => {
    return (
        <div>
            <div className='w-full sm:h-[650px] bg-[#8A9A5B] flex md:flex-row flex-col justify-around gap-5 items-center px-16 pr-28 py-24 md:rounded-br-[350px]'>
                <div className='text-white flex flex-col items-start'>
                    <h1 className='text-4xl font-bold'>Unleash YOUR Business <br /> Potential</h1>
                    <p className='text-lg mt-5'>Ignite Your Business Success with Innovation and Flavorful Strategies!</p>
                    <button className='bg-[#fada50] p-4 text-xl rounded-md md:w-2/4 mt-5'>Get Started</button>
                </div>
                <div className='flex justify-center items-center'>
                    <img className='hidden md:block h-full w-[500px] md:[500px] rounded-lg' src="https://images.pexels.com/photos/590045/pexels-photo-590045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection