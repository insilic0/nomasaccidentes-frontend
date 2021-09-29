import React, { useState } from 'react';
import { SliderImages } from './SliderImages';
import styled from 'styled-components';

const StyledSection = styled.section`
    position: relative;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0px;

    @media(max-width:768px){
    
    }
`;

const StyledImg = styled.img`
    width: 1200px;
    height: 800px;
    border-radius: 10px;
    margin: 0 auto;

    @media(max-width:768px){
    max-width: 100%;
    max-height: 350px;
}
`;

const StyledP = styled.p`
    color: black;
    font-weight: bold;
    text-align: center;
    font-size: 2.3rem;
    position: absolute;
    top: 3%;
    right: 25%;
    left: 25%;
    @media(max-width:768px){
        top: 0;
        font-size: 1.2rem;
    }
`;

const StyledLink = styled.a`
    color: white;
    cursor: pointer;
    width: 200px;
    background-color: #1F4172;
    border-radius: 10px;
    font-weight: bold;
    text-align: center;
    font-size: 2.3rem;
    position: absolute;
    top: 25%;
    right: 25%;
    left: 42%;
    text-decoration: none;

    @media(max-width:768px){
        font-size: 1.2rem;
        left: 40%;
        width: 110px;
    }
`;

const Slider = ({images, homeRef}) => {

    const [current, setCurrent] = useState(0);
    const length = images.length;

    const nextSlide = () =>{
        setCurrent(current === length -1 ? 0 : current + 1);
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length-1 : current - 1);
    }

    if(!Array.isArray(images) || images.length <= 0){
        return null;
    }

    return (
        <StyledSection ref={homeRef}>
            <i className="fas fa-arrow-left" onClick={prevSlide}></i>
            <i className="fas fa-arrow-right" onClick={nextSlide}></i>
            {SliderImages.map((slide, index) =>(
                <div className={index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current &&(
                    <>
                        <StyledImg src={slide.image} alt="images"></StyledImg>
                        <StyledP>{slide.text}</StyledP>
                        {slide.link ? (<StyledLink href={slide.link} target="_blank">Ir al Sitio</StyledLink>) : null}
                    </>
                    )}
                </div>
            )   
            )}
        </StyledSection>
    )
}

export default Slider;
