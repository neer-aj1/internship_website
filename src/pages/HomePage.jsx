import React, { useEffect, useState } from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ReasonSection from '../components/ReasonSection'
import CountdownTimer from '../components/CountdownTimer'
import Popup from '../components/Popup'

const HomePage = () => {
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 1000 * 15)
  }, [])

  const handlePopupClose = () => {
    setPopup(false)
  } 

  return (
    <div className='lg:mx-20 font-sans'>
      <HeroSection />
      <AboutSection />
      <ReasonSection />
      <CountdownTimer />
      {popup ? <Popup handlePopupClose={handlePopupClose} /> : null}
    </div>
  )
}

export default HomePage