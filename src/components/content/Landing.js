import React, {useRef} from 'react';
import Navigation from '../layout/Navigation';
import Slider from '../layout/Slider/Slider';
import Description from './Description';
import Services from './Services';
import Contact from '../layout/Contact';
import Footer from './Footer';
import { SliderImages } from '../layout/Slider/SliderImages';


const Landing = () => {

    const formRef = useRef();
    const aboutRef = useRef();
    const servicesRef = useRef();
    const homeRef = useRef();
  
    const handleFormClick = () =>{
      formRef.current.scrollIntoView({ behavior:'smooth'});
    }
    const handleAboutClick = () =>{
      aboutRef.current.scrollIntoView({ behavior:'smooth'});
    }
    const handlesServicesClick = () =>{
      servicesRef.current.scrollIntoView({ behavior:'smooth'});
    }
    const handleHomeClick = () =>{
      homeRef.current.scrollIntoView({ behavior:'smooth'});
    }
    return (
        <>
        <Navigation 
            onFormClick={handleFormClick} 
            onAboutClick={handleAboutClick} 
            onServicesClick={handlesServicesClick}
            onHomeClick={handleHomeClick}
        />
        <Slider images={SliderImages}  homeRef={homeRef}/>
        <Description aboutRef={aboutRef} />
        <Services servicesRef={servicesRef}  />
        <Contact formRef={formRef} />
        <Footer />
        </> 
        
    )
}

export default Landing
