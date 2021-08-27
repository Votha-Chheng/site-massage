import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import { titleAnimation } from "../utils";
import Footer from "./footer";
import HomeCurveSeparation from "./homecurveseparation";

const HomeBandeauFifth = () => {
  const [mouseEnter, setMouseEnter] = useState(false)
  const [mapDimension, setMapDimension] = useState({width : 0, height : 0})
  const [agrandissement, setAgrandissement] = useState(false)
  const [titleInView, setTitleInview] = useState(false);

  const controls = useAnimation()


  const imgZoneRef = useRef(null) 
  const mapRef = useRef(null)
  const agrandirRef = useRef(null)

  useEffect(() => {
    setMapDimension({width:mapRef.current.clientWidth, height:mapRef.current.clientHeight})
  }, [mapDimension.height, mapDimension.width])


  useEffect(() => {
    
    const getMousePosition = (event, ref)=>{
      const {clientX, clientY} = event
      if(ref.current && imgZoneRef.current){
        ref.current.style.transform =`translate3d(${+clientX - imgZoneRef.current.getBoundingClientRect().left}px, ${+clientY - imgZoneRef.current.getBoundingClientRect().top}px, 0)`
      }
      
    }
    document.addEventListener('mousemove', function(event){
      getMousePosition(event, agrandirRef)
    })

    return()=> document.removeEventListener("mousemove", function(event){getMousePosition(event, agrandirRef)})
  }, [])

  useEffect(() => {
    if(titleInView){
      controls.start("appear")
      controls.start("animate")
    }
  }, [controls, titleInView])

  const unzoomHandler = ()=>{
    setMouseEnter(false) 
    setAgrandissement(false) 
  }

  //Animations
  const parent = {
    initial:{

    },
    animate:{
      transition: {
        delayChildren : 0.7,
        staggerChildren : 0.4
      }
    }
  }

  const childAppear = {
    initial: {
      opacity: 0,
      y : 300
    },
    animate:{
      opacity: 1,
      y:0,
      transition: {
        duration: 1,
        y : {
          duration: 1,
        }
      }
    }   
  }

  return (
    <SectionWrapper>
      <InView className="container-page" onChange={(inView, entry)=> setTitleInview(inView)} >
        <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate={controls} >Un service uniquement à domicile</motion.h2>
        <motion.div className="content" ref={imgZoneRef} variants={parent} initial="initial" animate={controls} >
          <div 
            ref={agrandirRef} 
            className="agrandir" 
            style={{display:`${mouseEnter?"block":"none"}`}} 
            onMouseEnter={()=>setMouseEnter(true)} 
            onClick={()=>setAgrandissement(prev=>!prev)}>
              <div>{agrandissement? "Dézoomer":"Agrandir"}</div>
          </div>
          
          <div className="partie-textes">
            <motion.img className="img-car" src="/images/deplacement.svg" variants={childAppear}/>
            <motion.div className='texte first' variants={childAppear} >
              Quoi de mieux que de se faire masser sans avoir à se déplacer ? Avec <span className="marque">Baux't des sens</span>, c'est le bien-être et la détente qui viennent chez vous ! C'est pour&shy;quoi je me déplace <u>uniquement</u> à domicile, dans les gîtes ou les hôtels sur Arles, dans les Alpilles et aux alentours. Et ce, avec tout le matériel nécessaire (table de massage, linge, etc...). Tout ce qui vous reste donc à faire, c'est vous allonger et vous laisser aller...
            </motion.div>
          </div>
          <motion.div className='deplacement-container' style={{cursor:'none', minWidth:"250px", minHeight:"250px"}} variants={childAppear} >
            <img 
              className="small-map"
              ref={mapRef}
              src="/images/zonedeplacement.jpg" 
              alt="zones où je me déplace baux't des sens"  
              onMouseEnter={()=>setMouseEnter(true)} 
              onMouseLeave={()=>setMouseEnter(false)} 
              onMouseEnter={()=>setMouseEnter(true)}
              onClick={()=>setAgrandissement(prev=>!prev)}
              style={{cursor:`${mouseEnter ? "none" : "default"}`, zIndex:4, opacity:`${agrandissement?"0":"1"}`}} />
            <img 
              className="zoom-map" 
              src="/images/zonedeplacement.jpg" 
              alt="zones où je me déplace baux't des sens"  
              width="700" 
              height="auto" 
              style={{display:`${agrandissement? "block" :"none"}`, position:"absolute", right:"0", bottom:"0", zIndex:5}}
              onMouseEnter={()=>setMouseEnter(true)} 
              onMouseLeave={()=>setMouseEnter(false)} 
              onMouseOut={()=>setMouseEnter(false)}
              onClick={()=>unzoomHandler()}/>
          </motion.div> 
        </motion.div>

      </InView>
      <HomeCurveSeparation texte="prendre un rendez-vous" margin="0px 0px 75px"/>
    </SectionWrapper>

  );
}


const SectionWrapper = styled.section`
  margin-bottom: 50px;

  .container-page{
    padding: 25px;

    .content{
      display: flex;
      position: relative;
      margin: 50px 0px;

      .agrandir{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: yellowgreen;
        position: absolute;
        z-index:6;
        transform-origin: center;
        transition: all 0.2s ease-out;
        text-align: center;
        display: flex;
        align-items: center;
        cursor:none; 
        top:0; 
        left:0;
        
        div{
          margin-top: 50%;
          transform: translate3d(0, -50%, 0);
        }
      }

      .img-car{
        float: left;
        margin-right: 5%;
        margin-bottom: 1%;
      }
      
      .partie-textes{
        padding: 20px 50px;
        margin-right: 10px;
        width: 75%;

        .texte.first{
          text-indent: 0px;
        }
        .texte{
          text-align: justify;
          font-family: "Montserrat", sans-serif;
          line-height: 2.5rem;
          color: #ebebeb;
          font-size: 1.4rem;
          width: 100%;
          position: relative;
          text-indent: 30px;
          text-align: justify;
          font-style: italic;

          .marque{
            font-family: "Parisienne", "script";
            font-size: 1.8rem;
          }
        }
      }
      .deplacement-container{   
        position: relative;
        margin-top: 30px;
        height: 400px;
        width: 400px;

        img.small-map{
          border: 4px solid whitesmoke;
          z-index: 5;
          transition: all 0.2s ease-out;
          position: absolute;
          height:"auto";
          right:0;
          top:0px;
          width: 400px;
        }
      }
      
    }
  }

  @media (max-width: 1138px){
    .partie-textes{
      width: 50% !important;
    }
  }
  @media (max-width: 920px){
    .deplacement-container{
      display: none;
      width: 0px;
    }
    img.img-car{
      max-width: 100px !important;
    }
    .partie-textes{
      width: 100% !important;
    }
  }
  @media (max-width: 600px){
    .partie-textes{
      padding: 20px 0px !important;
    }
    .texte{
      font-size: 1.2rem !important;
    }

  }
`

export default HomeBandeauFifth;