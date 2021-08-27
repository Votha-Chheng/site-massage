import { motion, useAnimation } from "framer-motion";
import {InView} from 'react-intersection-observer'
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import HomeCurveSeparation from "./homecurveseparation";

const HomeBandeauSecond = () => {

  const [bandeauInView, setBandeauInView] = useState(false)
  const [textesBioRight, setTextBioRight] = useState(0)
  const [textesBioHeight, setTextBioHeight] = useState(0)
  const [imgSideWidth, setImgSideWidth] = useState(0)


  const controls = useAnimation()
  const size = useWindowSize()

  const containerTextesRef = useRef(null)


  useEffect(() => {
    setTextBioRight(containerTextesRef.current.getBoundingClientRect().right)
    setTextBioHeight(containerTextesRef.current.getBoundingClientRect().bottom - containerTextesRef.current.getBoundingClientRect().top)
    setImgSideWidth(window.innerWidth - containerTextesRef.current.getBoundingClientRect().right)
  }, [size, imgSideWidth])


  useEffect(() => {
    if(bandeauInView){
      controls.start("animate")
    }
  }, [controls, bandeauInView])


  //Animations
  const parentSlogan = {
    initial : {

    },
    animate : {
      transition: {
        delayChildren : 0.2,
        staggerChildren : 0.06,
      }
    }
  }
  const parentSlogan2 = {
    initial : {

    },
    animate : {
      transition: {
        delayChildren : 1.7,
        staggerChildren : 0.06,
      }
    }
  }
  const parentSlogan3 = {
    initial : {

    },
    animate : {
      transition: {
        delayChildren : 2.8,
        staggerChildren : 0.06,
      }
    }
  }
  const parentSlogan4 = {
    initial : {

    },
    animate : {
      transition: {
        delayChildren : 4,
        staggerChildren : 0.06,
      }
    }
  }
  const parentSlogan5 = {
    initial : {

    },
    animate : {
      transition: {
        delayChildren : 5.2,
        staggerChildren : 0.1,
      }
    }
  }

  const childrenLettersOpacity = {
    initial : {
      opacity : 0,
    },
    animate : {
      opacity : 1,
      display: "none",
      rotateY : "-90deg",
      transition : {
        duration :1,
        rotateY : {
          delay :6.5,
          duration : 0.8
        },
        display: {
          delay:9
        }
      }
    }
  }

  const childAlt = {
    initial : {
      y : "100%",
      skewY : "45deg",
      skewX : "-45deg"
    },
    animate : {
      y : 0,
      skewY : 0,
      skewX : 0,
      rotateY : "-90deg",
      display: "none",
      transition : {
        duration :0.5,
        ease : "easeOut",
        rotateY : {
          delay : 6.5,
          duration : 0.8
        },
        display: {
          delay:9
        }
      }
    }
  }

  const sloganFirst = "prendre le temps"
  const arraySloganFirst = sloganFirst.split("")
  const sloganSecond = "respirer"
  const arraySloganSecond = sloganSecond.split("")
  const sloganThird = "se détendre"
  const arraySloganThird = sloganThird.split("")
  const sloganFourth = "avec julie"
  const arraySloganFourth = sloganFourth.split("")

  return (
    <BandeauDiv>
      <InView as="div" className='truc-inview' onChange={(inView)=>inView && setBandeauInView(true)}>
        <div className='slogan-container'>
          <motion.div variants={parentSlogan} initial="initial" animate={controls} className='slogans' style={{display:"flex"}}>
            {
              arraySloganFirst.map((letter, index)=> letter === " " ? 
              <motion.span variants={childAlt} key={index} style={{width:"20px"}}></motion.span> 
              : 
              <motion.span variants={childAlt} key={index} style={{transformOrigin:"bottom left"}}>
                {letter}
              </motion.span>)
            }
          </motion.div>
          <motion.div variants={parentSlogan2} initial="initial" animate={controls} className='slogans' style={{display:"flex"}}>
            {
              arraySloganSecond.map((letter, index)=> letter === " " ? 
              <motion.span variants={childAlt} key={index} style={{width:"20px"}}></motion.span> 
              : 
              <motion.span variants={childAlt} key={index} style={{transformOrigin:"bottom left"}}>
                {letter}
              </motion.span>)
            }
          </motion.div>
          <motion.div variants={parentSlogan3} initial="initial" animate={controls} className='slogans' style={{display:"flex"}}>
            {
              arraySloganThird.map((letter, index)=> letter === " " ? 
              <motion.span variants={childAlt} key={index} style={{width:"20px"}}></motion.span> 
              : 
              <motion.span variants={childAlt} key={index} style={{transformOrigin:"bottom left"}}>
                {letter}
              </motion.span>)
            }
          </motion.div>
          <motion.div variants={parentSlogan4} initial="initial" animate={controls} className='slogans' style={{display:"flex"}}>
            {
              arraySloganFourth.map((letter, index)=> letter === " " ? 
              <motion.span variants={childAlt} key={index} style={{width:"20px"}}></motion.span> 
              : 
              <motion.span variants={childAlt} key={index} style={{transformOrigin:"bottom left"}}>
                {letter}
              </motion.span>)
            }
          </motion.div>
          <motion.div variants={parentSlogan5} initial="initial" animate={controls} className='slogans' style={{display:"flex"}}>
            <motion.div variants={childrenLettersOpacity} className="logo-font">
              &nbsp;Baux't<br/>des sens
              <img src='/images/logoLotus.svg' alt="logo de Baux't des sens"/>
            </motion.div>
          </motion.div>
        </div>
        <div className='container-page'>
          <motion.h2 
            className="home-titles" 
            initial={{opacity:0, x:"-100%"}} 
            animate={bandeauInView? {opacity:1, x:0}:""} 
            transition={{opacity:{delay:10, duration:1}, x:{delay:9.5, duration:2.5, ease:"easeOut"}}}>
            Baux't des sens, c'est avant tout Julie...
          </motion.h2>
          <div className="biographie-container" initial={{border:"none"}} animate={bandeauInView? {}:""} transition={{delay:10, duration:2}}> 
            <motion.div className='texte-bio'>
              <motion.div
                className="photo-id"
                initial={{height:600, borderRadius:"0", x:"calc(50vw - 150px)", border:"0", position:"absolute"}} 
                animate={bandeauInView? {height:300, x:0, borderRadius:"50%", border:"4px solid whitesmoke", position:"static"} : ""} 
                transition={{
                  height: {delay:7.7, duration:1}, 
                  x:{delay:9, duration:1.5, ease:"easeOut"}, 
                  borderRadius:{delay:10.7, duration:0.5}, 
                  border:{delay:11}, 
                  position:{delay:9, duration : 0.2}}}>
                <motion.div
                  className='folder'
                  initial={{height : 610, width : 310, x:0}} 
                  animate={bandeauInView ? {x:"100%", display:"none"} :""} 
                  transition={{x : {delay: 6.6, duration:0.75, ease:"easeOut"}, display:{delay:10}}}/>
                <motion.img 
                  src="/images/portrait.jpg" 
                  height="600" 
                  width="auto" 
                  initial={{opacity:0, x:0}} 
                  animate={bandeauInView ? {opacity:0.75, x:"-10%"} : ""} 
                  transition={{opacity : {delay:6.8, duration:0.1}}} />            
              </motion.div>
            
              <div className="container-textes" ref={containerTextesRef}>
                <motion.div
                  className="textes" 
                  initial={{opacity:0, y :"100%"}} 
                  animate={bandeauInView ? {opacity : 1, y:0} : ""} 
                  transition={{opacity : {delay : 11.8, duration: 0.8}, y:{delay:11.7, duration: 1.5, ease:"easeOut"}}}>
                  <i className="fas fa-quote-left" style={{transform:"scale(1.5) translateY(-10px)", textIndent:"-10px"}}/>
                  &nbsp;Bienvenue, je m'ap&shy;pel&shy;le Julie ! Je suis pas&shy;sionnée par le monde du bien-être depuis plu&shy;sieurs an&shy;nées et suis titu&shy;laire d'un diplô&shy;me d'es&shy;thé&shy;ti&shy;que en plus d'une forma&shy;tion en soins du corps, for&shy;ma&shy;tion suivie sur Avi&shy;gnon pendant plusieurs mois. 
                </motion.div>
                <motion.div 
                  className="textes" 
                  initial={{opacity:0, y :"100%"}} 
                  animate={bandeauInView ? {opacity : 1, y:0} : ""} 
                  transition={{opacity : {delay : 12, duration: 0.8}, y:{delay:12.2, duration: 1.5, ease:"easeOut"}}}>
                  Durant mes prestations, je n'apporte pas seule&shy;ment un soin avec des manœu&shy;vres, des techniques, du modelage et un moment de détente, non : j'aspire à beau&shy;coup mieux que cela. En effet, pour moi le bien-être se pré&shy;pare et s'invite. Tout est mis en œuvre, et tout est propice à ce que vous puis&shy;siez le recevoir dans les meilleures conditions.
                  <i className="fas fa-quote-right" style={{transform:"scale(1.5) translateY(5px)", textIndent:"10px"}}/>
                </motion.div>
              </div>
              <motion.div 
                className="img-side" 
                style={{left:`${textesBioRight}px`, height:`${textesBioHeight-30}px`, width:`${imgSideWidth-70}px`}}
                initial={{opacity : 0, x:"100%"}}
                animate={bandeauInView? {opacity : 1, x : 0} : ""}
                transition = {{opacity : {duration : 0.7, delay: 12.5}, x : {duration : 1.5, delay:12.7, ease:"easeOut"}}}>
                <img src={`${imgSideWidth<380 ? "/images/pexels-anete-lusina-5240637.jpg":"/images/bougie-serviette.jpg"}`} alt="accesoires de massage" height={textesBioHeight-30} width={imgSideWidth-70}/>
              </motion.div>
            </motion.div>
          </div>
        </div>    
      </InView>
      <HomeCurveSeparation texte="prendre contact" inView={bandeauInView} delay={13.5} buttonDelay={14} lien='/infospratiques' margin="50px auto 100px" />
    </BandeauDiv>
  );
}

const BandeauDiv = styled.div`
  overflow : hidden;
  background-color: #798a94;
  transition: background-color 0.5s ease-in-out;
  height: 900px;
  position: relative;
  padding: 1px 0px;

  .slogan-container{
    position: absolute;
    text-align: center;
    top: 200px;
    left: 50%;
    font-size: 3rem;
    font-family: 'Playfair Display', serif;
    text-transform: uppercase;
    color: whitesmoke;
    //min-height: 660px;
    
    .slogans{
      position: relative;
      perspective-origin: center;
      transform: translateX(-50%);
      overflow: hidden;
      padding: 10px;
      letter-spacing: 2px;
      font-style: italic;
      text-align : center;
      justify-content: center;
      z-index: 5;
    }
  }
  .logo-font{
    font-family: 'Parisienne', cursive;
    text-transform: none;
    padding-top: 5px;
    position: relative;
    transform: translateX(-50%);

    img{
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -60%);
      z-index: -1;
    }
  }
  .container-page{
    padding: 25px;
  }
  .biographie-container{
    min-height : 100%;

    .container-textes{
      padding-top: 10px;
      font-style: italic;

      .textes{
        text-indent: 30px;
      }
    }
    .texte-bio{
      text-align: justify;
      font-family: "Montserrat", sans-serif;
      line-height: 2.5rem;
      padding: 20px;
      color: #ebebeb;
      font-size: 1.4rem;
      width: 75%;
      position: relative;
    }
    .photo-id{
      float: left;
      margin-right: 10px;
      position: relative;
      overflow: hidden;
      height: 300px;
      width:250px;
      text-indent: 0px;

      img{   
        filter: contrast(110%) brightness(130%);
      }
      
      .folder{
        width : 100%;
        height: 100%;
        background-color : #798a94;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
    }
    .img-side{
      position: absolute;
      top: 40px;
      z-index: 2;
      border: 4px solid #ebebeb;
      overflow: hidden;

      img{
        object-fit: cover;
      }
    }
  }
@media (max-height:640px){
  .slogan-container{
    top: 50px;
  }
}

@media (max-width:1110px){
  height: 1200px !important;
}

@media (max-width:840px){
  height: 1500px !important;

  .texte-bio{
    width : 100% !important;
  }
  .img-side{
    display  : none;
  }
}
@media (max-width:540px){
  .photo-id{
    float: none !important;
    margin: 15px 25vw 15px 0px;
  }
  .textes{
    font-size: 1.15rem !important;
  }
  .slogan-container{
    font-size: 2rem;
  }
}
@media (max-width:485px){
  height: 1750px !important;
}
@media (max-width:425px){
  height: 1850px !important;
}
`

export default HomeBandeauSecond;