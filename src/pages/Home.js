import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LandingSection from '../components/FullStackLanding'
import InfoSection from '../components/InfoSection'
import {homeObjOne} from '../components/InfoSection/Data'


const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>

    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle}/>

    <LandingSection />
    
    <InfoSection {...homeObjOne}/>
    

    <Footer />
    
    </>
    
  )
}

export default Home