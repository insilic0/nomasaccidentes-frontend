import React from 'react';
import Navigation from '../layout/Navigation';
import Slider from '../layout/Slider/Slider';
import Description from './Description';
import Services from './Services';
import Contact from '../layout/Contact';
import Footer from './Footer';
import { SliderImages } from '../layout/Slider/SliderImages';


const Landing = () => {
    return (
        <>
        <Navigation />
        <Slider images={SliderImages} />

        <Description />
        <Services />
        <Contact />
        <Footer />
        </> 
        
    )
}

export default Landing
