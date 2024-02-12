import React, { useEffect, useState } from 'react'

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(10 * 60 * 1000);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(prevTime => Math.max(prevTime - 1000, 0));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const minutes = Math.floor((remainingTime / 60000) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  const formattedTime = `${minutes.toString().padStart(2, '0')} m : ${seconds.toString().padStart(2, '0')} s`;

  const timerStyles = {
    color: remainingTime > 0 ? 'black' : 'red',
  };
  return (
    <div className='flex flex-col font-bold justify-center items-center gap-3 my-16 border-gray-500 rounded-tr-[100px]  rounded-bl-[100px] border rounded p-16' style={timerStyles}>
      <h1 className='text-2xl'>Hurry Up!!!</h1>
      <p className='text-4xl'>
        {remainingTime > 0 ? formattedTime : 'Time Expired!'}
      </p>
      <p className='text-xl text-gray-600'>left for the best offers</p>
      <button className='bg-[#8A9A5B] text-white p-4 text-xl rounded-md mt-5'>Click Here</button>
    </div>
  )
}

export default CountdownTimer