import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import { titleAnimation } from "../utils";
import HorizontalAccordion from "./horizontalaccordion"

const HomeBandeauFourth = () => {

  const [titleInView, setTitleInView] = useState(false);
  const controls = useAnimation()

  useEffect(() => {
    if(titleInView){
      controls.start("appear")
      controls.start("animate")
    }
  }, [controls, titleInView])


  return (
    <SectionWrapper>
      <InView className='container-section' onChange={(inView, entry)=>inView && setTitleInView(true)} >
        <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate={controls} >Mes différentes pratiques</motion.h2>
        <div className="accordion-container">
          <motion.h3 className="categorie" initial={{opacity:0}} animate={titleInView ? {opacity:1} : ""} transition={{opacity:{delay : 0.5, transition : 4}}} >
            <span>Types de massages</span>
          </motion.h3>
          <motion.div initial={{opacity:0, y:200}} animate={titleInView ? {opacity:1, y :0} : ""} transition={{opacity:{delay : 0.5, duration : 1}, y:{delay : 0.5, duration : 1.2, ease:"easeOut"}}} >
            <HorizontalAccordion/> 
          </motion.div>  
        </div> 
        <motion.h3 className="categorie" initial={{opacity:0}} animate={titleInView ? {opacity:1} : ""} transition={{opacity:{delay : 1.5, transition : 4}}} ><span>Mais aussi...</span></motion.h3>   
        <motion.div 
          className="container-yoga" 
          initial={{opacity:0, y:"100%"}} 
          animate={titleInView ? {opacity:1, y :0} : ""} 
          transition={{opacity:{delay : 2, duration : 1}, y:{delay : 2, duration : 1.2, ease:"easeOut"}}} 
          tabIndex="11"> 
          <img
            src='/images/pexels-photo-7593054.jpeg' 
            alt="initiation yoga baux't des sens"
            width = "600"/>
          <h3 className="titre">
            Initiation au yoga
          </h3>
        </motion.div>
      </InView>
      
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  padding-bottom: 100px;

  .container-section{
    padding: 25px;

    .accordion-container{
      margin : 50px 0px 100px;
    }
    h3.categorie{
      font-family: "Montserrat", sans-serif;  
      font-size: 1.4rem;
      text-align: left;
      letter-spacing: 1.5px;
      font-style: italic;
      

      span{
        background-color: rgb(240,248,255, 0.8);
        padding: 5px 10px;
        color: #64737d;
        border: 4px double #90857d;
      }
    }
    .container-yoga{
      border: 4px solid whitesmoke;
      position: relative;
      width: 500px;
      overflow: hidden;
      height: 300px;
      margin: 0 auto;
      cursor: pointer; 
      transition: all 0.5s cubic-bezier(.21,.59,.65,1.04);

      img{
        transition: all 0.35s cubic-bezier(.21,.59,.65,1.04);
        filter:grayscale(60%) brightness(125%)  contrast(100%);
      }

      &:hover {
        width: 600px;

        img{
        
          transform: scale(1.4) translateY(10%);
          filter : grayscale(0%) contrast(150%);
          opacity: 0.8;
        }
      }

      .titre{
        position: absolute;
        top: 50%;
        left: 0px;
        font-size: calc(1rem + 0.8vw);
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        background: rgba(255, 255, 255, 0.85);
        padding: 5px;
        transition: all 0.25s cubic-bezier(.21,.59,.65,1.04);
        font-style: italic;
        color : #5b6871;


      }
    }
  }
`

export default HomeBandeauFourth;