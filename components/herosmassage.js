import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import { heroAnimation, heroTitleAnimation, parentHero } from "../utils";

const HerosMassage = ({title, image, translateUp, heroInView}) => {

  const controls = useAnimation()

  useEffect(() =>{
    if(heroInView){
      controls.start("heroAppear")
    }
  },[controls, heroInView])

  return (
    <DivWrapper className="heros-container">
      <motion.div className="hero" variants={heroAnimation} initial="initial" animate={controls} >
        <img src={`/images/${image}`} width="100%" style={{transform:`translateY(${translateUp}px)`}} /> 
      </motion.div>
      <motion.div  variants={heroTitleAnimation} initial="initial" animate={controls} className="hero-top-layer">
        <h3 className="massage-intuitif">{title}</h3>
      </motion.div>
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin: 100px 0px 150px;

  .hero-top-layer, .hero{
    border: 4px double black;
    position: absolute;
    top: 0;
    left: 0;
  }
  .hero{
    overflow: hidden;
    width: 100%;
    height: 250px;

    img{
      filter: grayscale(75%) blur(3.5px);
    }
  }
  .hero-top-layer{
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    background-color: rgba(250, 250, 250, 0.99);
    
    h3{
      text-align: center;
      font-family: 'Playfair Display', serif;
      color: #798a94;
      width: 600px;
      height: 150px;
      transform: translate3d(0, 25%, 0);
      font-size: 3rem;
      margin-top: 0px;
      margin-bottom: 0px;
      text-transform: uppercase;
      font-style: italic;
    }
  }
    
`

export default HerosMassage;