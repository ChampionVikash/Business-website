import {useEffect} from "react"
import HeroSection from "./Component/HeroSection"
import { useGlobalContext } from "./context"
import Services from  "./Services"
import Contact from "./Contact"

const Hero = () => {
  const { updateHomePage } = useGlobalContext()
    
  useEffect(() => updateHomePage(),[])
  return (
   <>
      <HeroSection />
      <Services />
      <Contact />


   </>
  )
  }

export default Hero;

 