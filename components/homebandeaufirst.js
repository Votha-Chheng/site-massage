import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import usePageYOffset from "../hooks/usePagesYOffset";
import useWindowSize from "../hooks/useWindowSize";
import useScrollDirection from "../hooks/useScrollDirection";


const HomeBandeauFirst = () => {

  const [topSvgContainer, setTopSvgContainer] = useState(0)
  const [widthSvgContainer, setWidthSvgContainer] = useState(0)
  const [bandeauHeight, setBandeauHeight] = useState(0)

  const svgContainer = useRef(null)
  const bandeau = useRef(null)
  const queueOneRef = useRef(null)

  const size = useWindowSize()
  const positionY = usePageYOffset()
  const scrollDir = useScrollDirection()

  useEffect(() => {
    setWidthSvgContainer(svgContainer.current.clientWidth)
  }, [widthSvgContainer, size])

  useEffect(() => {
    setTopSvgContainer(svgContainer.current.offsetTop + svgContainer.current.offsetHeight)
  }, [topSvgContainer, size])

  useEffect(() => {
    setBandeauHeight(bandeau.current.offsetHeight)
  }, [size])

  useEffect(() => {
    if((positionY >= 1 && positionY < 101) && (scrollDir === "down")){
      window.scrollTo(0, bandeauHeight)
    }
  }, [size, bandeauHeight, positionY, scrollDir])


  //Animations
  const underline = {
    initial : {
      x :"-100%",
    },
    animate: {
      x : ["-100%", "0%", "0%", "100%", "100%", "100%", "100%","100%","0%","0%", "0%",],
      transition : {
        delay : 1,
        duration : 7,
      }
    }
  }
  const centerLogo = {
    initial : {
      y:"-340px", 
      x:"-50%"
    },
    animate: {
      y:0, 
      x:"-50%",
      transition : {
        delay:3.5
      }
    }  
  }
  const bgLogo = {
    initial : {
      y : "0%",
    }, animate: {
      y : ["0%","120%", "120%", "120%", "0%","0%"],
      transition : {
        duration :9,
        delay : 1.2
      }
    }
  }

  const variantsH1 = {
    initial : {

    },
    animate: {
      transition: { 
        delayChildren : 4.5,
        staggerChildren : 0.5,
      }
    }
  }
  const children = {
    initial : {
      filter : "blur(2px)",
      y : "100%",  
    },
    animate: {
      filter : "blur(0px)",
      y : "0%",
      transition: { 
        filter : {
          delay : 2.5,
          duration : 4,
        },
        duration: 2, 
        
      }
    }
  }

  const variantsPhrases = {
    initial : {
      opacity: 0,
    },
    animate : {
      opacity: 1,
      transition : {
        delay : 6.8,
      }
    } 
  }

  const variantBorderTop = {
    initial : {
      x : '110%',
    },
    animate : {
      x : '0%',
      transition : {
        delay : 7,
        duration : 2
      }
    }
  }
  const variantBorderBottom = {
    initial : {
      x : '-110%',
    },
    animate : {
      x : '0%',
      transition : {
        delay : 7,
        duration : 2
      }
    }
  }

  return (
    <BandeauDiv ref={bandeau}>
      <motion.div className="svg-container" ref={svgContainer}  variants={centerLogo} initial="initial" animate="animate">
        <motion.svg className="bg-logo" width="111" height="60" viewBox="0 0 37 20" fill="none" xmlns="http://www.w3.org/2000/svg" variants={bgLogo} initial='initial' animate='animate'>
          <path d="M11.7365 19.3169C7.55143 18.3765 3.30054 15.2955 1.31586 11.7643C0.745543 10.7495 0.74482 10.7331 1.25836 10.4582C1.79691 10.17 5.1383 9.73966 6.62694 9.7668C7.39253 9.7808 7.57753 9.95935 8.51572 11.59C10.4044 14.8728 13.3003 17.5195 15.5068 17.9794C16.1031 18.1038 16.3667 18.309 16.3667 18.649C16.3667 19.4951 14.0296 19.8322 11.7365 19.3169H11.7365ZM21.0488 19.41C20.0934 19.0383 20.2105 18.3244 21.2631 18.1044C23.5059 17.6357 26.408 15.2295 28.4282 12.1635C29.6645 10.2872 29.9643 10.2024 33.109 10.8396C35.5033 11.3248 36.2104 11.6197 36.2104 12.1334C36.2104 12.7236 32.7313 16.1368 30.9777 17.2671C30.0642 17.8558 28.5759 18.5907 27.6704 18.9001C25.7602 19.5529 22.1338 19.8321 21.0488 19.41V19.41ZM17.5683 18.1975C14.9004 17.472 13.5575 12.7887 14.6321 7.95813C15.3893 4.55486 18.0871 -0.185199 19.0555 0.186381C19.634 0.408401 21.8546 4.99294 22.35 6.98818C22.6438 8.17187 22.7428 9.50677 22.6742 11.361C22.5882 13.6832 22.4728 14.2338 21.7861 15.5985C21.352 16.4611 20.6992 17.3793 20.3354 17.6388C19.6008 18.1627 18.361 18.4131 17.5683 18.1975V18.1975ZM22.2795 16.463C22.364 16.1356 22.6687 15.0343 22.9566 14.0156C23.549 11.9191 23.6539 9.022 23.2119 6.96126L22.9134 5.56942L23.7941 4.83419C24.7162 4.06436 27.9315 2.61912 29.0667 2.46421C29.7241 2.37451 29.7278 2.38571 29.6743 4.3038C29.5429 9.01642 27.3388 13.5506 23.8814 16.2209C22.5842 17.2228 22.063 17.3016 22.2795 16.463V16.463ZM12.606 15.7468C11.0242 14.3545 9.33431 11.7103 8.50834 9.33519C7.71922 7.06607 7.31815 2.20438 7.89088 1.85041C8.23095 1.64024 12.5287 3.66647 13.7081 4.59301C14.3536 5.1001 14.3551 5.11184 13.9951 6.91332C13.4626 9.57812 13.5666 13.1483 14.2321 15.0492C14.8917 16.9334 14.8873 16.7937 14.2872 16.7937C14.0167 16.7937 13.2601 16.3226 12.606 15.7468H12.606ZM22.0588 3.13537C21.8385 2.60828 21.6583 1.96019 21.6583 1.69517C21.6583 1.25892 22.5643 0.389567 23.0189 0.389567C23.1203 0.389567 23.4034 0.992052 23.648 1.72844C24.0682 2.99358 24.0671 3.09558 23.6283 3.58052C22.9452 4.33534 22.5084 4.21146 22.0588 3.13537H22.0588ZM13.5224 3.27327C12.5671 2.65735 12.4572 2.08313 13.0685 0.901141C13.5253 0.0178211 13.9019 0.0919849 15.0177 1.28491C15.5634 1.86827 15.6181 2.08643 15.4052 2.82875C15.1016 3.88734 14.6428 3.99565 13.5224 3.27327Z" fill="#e7b5f7"/>
        </motion.svg>
      </motion.div>

      <motion.div className="line-container" style={{top: topSvgContainer, width : widthSvgContainer}} variants={centerLogo} initial="initial" animate="animate">
        <motion.div 
          style={{top: '0', left:"0", width : widthSvgContainer}}
          className ="underline"          
          variants={underline} 
          initial='initial' 
          animate='animate' 
        />
      </motion.div>

      <motion.div className='conteneur-phrases' variants={variantsPhrases} initial='initial' animate='animate'>
        <motion.div className='border-top' variants={variantBorderTop}/>
        <div className='slogans'>
          <div className="instant-bien">Votre instant bien-être</div>
          <div className='switch-lieux'>
            <div className="queue-1">
              <div className="arles" ref={queueOneRef}>
                en Arles&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;aux Baux-de-Provence&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;dans les Alpilles&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;en Provence&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              </div>
              <div className="arles-2">
                en Arles&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;aux Baux-de-Provence&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;dans les Alpilles&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;en Provence&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </div>
        </div>
        <motion.div className='border-bottom' variants={variantBorderBottom}></motion.div>
      </motion.div>

        <motion.div
         className='bg-image-container' 
         initial={{scale:0.5, opacity : 0}} 
         animate={{scale:1, opacity:1}} 
         transition={{scale : {delay:3, duration:0.8}, opacity:{delay:0.5}}}>
          <motion.div
           className="fold" 
           initial={{scale:1, x:0}} 
           animate={{scale:["1.5", "1"], x:"100%"}} 
           transition={{x : {delay:1, duration:1}, scale : {delay : 1.2, duration:0.9}}}/>
           <motion.picture 
            initial={{scale : 1, filter : "blur(0px) brightness(125%)"}}
            animate={{scale : ["1.5", "1"], filter:"blur(5px) brightness(125%)"}}
            transition={{scale : {delay : 1.2, duration:0.9}, filter:{delay : 2, duration:2}}}>
             <source srcSet="/images/bandeau_mains_masse.jpg" media="(min-width:520px)"/>
             <img src="/images/118930618_372805930709061_72465373286677363_n.jpg"/>
           </motion.picture>
          {/* <motion.img
            src='/images/bandeau_mains_masse.jpg' 
            alt='massage mains'
            initial={{scale : 1, filter : "blur(0px) brightness(125%)"}}
            animate={{scale : ["1.5", "1"], filter:"blur(5px) brightness(125%)"}}
            transition={{scale : {delay : 1.2, duration:0.9}, filter:{delay : 2, duration:2}}}/> */}
        </motion.div>       
        
        <motion.div className='title' initial={{opacity:"0"}} animate={{opacity:1}} transition={{opacity : {delay:3.8, duration:1.5}}}>
          <motion.div variants={variantsH1} className="h1-container" initial='initial' animate='animate'>
            <div className='first-line'>
              <motion.h1 variants={children} role="heading" aria-level="1">
                Baux't
              </motion.h1>
            </div>
            <div className='second-line'>
              <motion.h1 variants={children} role="heading" aria-level="1">
                Des Sens
              </motion.h1>
            </div>
          </motion.div>

        </motion.div>
        <motion.div className="explore-icon" initial={{opacity:0}} animate={{opacity:1}} transition={{opacity : {delay:7}}} onClick={()=>window.scrollTo(0, bandeauHeight)}>
          <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M 15 4 L 15 24.0625 L 8.21875 17.28125 L 6.78125 18.71875 L 15.28125 27.21875 L 16 27.90625 L 16.71875 27.21875 L 25.21875 18.71875 L 23.78125 17.28125 L 17 24.0625 L 17 4 Z" fill="grey"/>
          </svg>
          <small>Explorez</small>
        </motion.div>
    </BandeauDiv>
  );
}

const BandeauDiv = styled.div`
  height : 100vh;
  width: 100vw;
  overflow : hidden;
  position: relative;
  background-color : #798a94;

  .explore-icon{
    overflow : hidden;
    position : absolute;
    z-index : 3;
    bottom : 50px;
    right : 75px;
    display : flex;
    flex-direction : column;
    align-items : center;
    cursor : pointer;
    color : white;

    svg{
      animation: upAndDown ease-in-out 1.5s infinite;
    }
    small{
      font-size: 1.1rem;  
      font-style: italic;
      color: whitesmoke;
    }
  }
  @keyframes upAndDown{
    0%{
      transform: translateY(8px);
    }
    50%{
      transform: translateY(0px);
    }
    100%{
      transform: translateY(8px);
    }
  }
  .svg-container{
    z-index: 3;
    position : absolute;
    left : 50%;
    top : 52%;
    overflow : hidden;
  }
  .line-container {
    height: 4px;
    z-index: 3;
    position : absolute;
    left : 50%;
    transform : translateX(-50%);
    overflow : hidden;
    border-radius: 2px;

    .underline{
      background-color : white;
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }
  }
  
  .container-bandeau{
    height : 100vh;
    width : 100vw;
    background-color:white;
    position : absolute;

    .hidden{
      opacity : 0;
    }
  }
  .bg-image-container{
    overflow: hidden;
    position: relative;

    .fold{
      position: absolute;
      top : -5px;
      left : -20px;
      width: 110%;
      height: 110%;
      background-color: #798a94;
      z-index: 3;
    }
    img{
      width : 100vw;
      height : 100vh;
      opacity : 0.5;
    }
  }

  .title{
    position : absolute;
    width : 450px;
    height : 450px;
    border-radius : 50%;
    background-color : #798a94;
    top : 17%;
    left : 50%;
    transform : translateX(-50%);
    border : 10px double whitesmoke;
    transform-origin : 50% 100%;

    svg{
      position : absolute;
      display : none;
    }

    .h1-container{
      position : absolute;
      left : 0px;
      width : 100%;
      height : auto;
      top : 20%;
      left : 50%;
      transform : translateX(-50%);
      
      .first-line, .second-line{
        overflow : hidden;
      }
      
      h1{
        margin : 0px;
        padding : 0px;
        font-family: 'Parisienne', cursive;
        text-align: center;
        font-size: 5em;
        color : white;
        font-weight : 120;
        font-style : italic;
        overflow: hidden;
      }
    }
  }

  .conteneur-phrases{
    position : absolute;
    bottom: 12%;
    left: 50%;
    transform : translateX(-50%);
    text-align: center;
    color: white;
    font-size : 2.5em;
    z-index: 1;
    font-family: 'Playfair Display', serif;
    overflow : hidden;
    font-style: italic;
    padding : 0px 10px ;
    
    .instant-bien{
      font-size : 2.5rem;
    }

    .border-top, .border-bottom {
      height : 3px;
      background-color : white;
      width: 100%;
    }
    .slogans{
      height: 120px;

      .switch-lieux{
      height : 100px;
      width: 100%;

        .queue-1{
          height: 100%;
          width: 100%;
          text-align: center;
          position: relative;

          .arles{
            position: absolute;
            padding: 0;
            left: 7px;
            top: 0;
            margin: 0;
            max-width:2000%;
            transition : all 1s;
            white-space: nowrap;
            text-align: left;
            animation: slide 120s infinite linear;
          }
          .arles-2{
            position: absolute;
            padding: 0;
            left: 420px;
            top: 0;
            margin: 0;
            max-width:2000%;
            transition : all 1s;
            white-space: nowrap;
            text-align: left;
            animation: slide2 120s infinite linear;
          }
        }
      }
    }
    
  }
  
  @keyframes slide{
    0%{
      transform: translate(0%, 0);
      opacity: 1;

    }
    20%{
      transform: translate(-1378px, 0);
      opacity: 1;
    }
    22%{
      transform: translate(-1378px, 0);
      opacity: 0;
    }
    23%{
      opacity: 0;
      transform: translate(-1378px, 0);
    }
    25%{
      transform: translate(413px, 0);
      opacity: 0;
    }
    27%{
      opacity: 1;
      transform: translate(413px,0);
    }
    34.15%{
      transform: translate(413px, 0);
    }
    40.5%{
      transform: translate(0px, 0);
    }
    60.5%{
      transform: translate(-1378px, 0);
      opacity: 1;
    }
    62%{
      transform: translate(-1378px, 0);
      opacity: 0;
    }
    64%{
      transform: translate(413px, 0);
      opacity: 0;
    }
    66%{
      transform: translate(413px, 0);
      opacity: 1;
    }
    69%{
      transform: translate(413px, 0);
      opacity: 1;
    }
    74.5%{
      transform: translate(413px, 0);
      opacity: 1;
    }
    80.6%{
      transform: translate(0, 0);
      opacity: 1;
    }
    100%{
      transform: translate(-1378px, 0);
      opacity: 1;
    }
  }

  @keyframes slide2{
    0%{
      transform: translate(0, 0);
      opacity: 1;
    }
    14%{
      transform: translate(0px, 0);
    }
    40%{
      transform: translate(-1791px, 0);
    }
    41%{
      opacity: 1;
      transform: translate(-1791px, 0);
    }
    42%{
      transform: translate(-1791px, 0);
      opacity: 0;
    }
    46%{
      transform: translate(0, 0);
      opacity : 0;
    }
    54.6%{
      transform: translate(0, 0);
      opacity : 1;
    }
    80.6%{
      transform: translate(-1791px, 0);
      opacity : 1;
    }
    81%{
      transform: translate(-1791px, 0);
      opacity : 0;
    }
    90%{
      transform: translate(0, 0);
      opacity : 0;
    }
    100%{
      transform: translate(0, 0);
      opacity : 0;
    }
  }

  @keyframes slide3{
    0%{
      transform: translate(413px, 0);
    }
    34%{
      transform: translate(413px, 0);
    }
    40%{
      transform: translate(0px, 0);
    }
    60%{
      transform: translate(-1378px, 0);
    }
    100%{
      transform: translate(0, 0);
    }
  }

  @media (max-height: 600px) and (max-width:540px) {

    .conteneur-phrases{
      height: 80px !important;
      bottom: 90px !important;
      width: 413px !important;
    }
    .slogans{
      width:413px !important;
      height:80px !important;


    }
  }
  @media (max-height: 650px){
    .conteneur-phrases{
      width: 413px !important;
    }
  }

  @media (max-height:860px){
    height : auto;

    .title{
      top : 60px;
      width : 350px;
      height : 350px;
      
      h1{
        font-size: 3.7rem !important;
      }
      
    }
    .svg-container{
      top : 300px !important;
    }
    .slogans{
      height : 110px !important;
    }
  }

  @media (max-width:1120px){
    .bg-image-container{
      img{
        height: 100vh !important;
        width: auto;
        margin-left: -10%;
      }
    }
  }

  @media (max-width:870px){
    .bg-image-container{
      img{
        margin-left: -40%;
      }
    }
  
    .slogans{
      width :100% !important;
      height : 75px !important;

      div{
        font-size: 1.5rem !important;
      }
    }
  }
  @media (max-width:540px){
    .bg-image-container{
      img{
        margin-left: -75%;
      }
    }
    .instant-bien{
      font-size: 1rem !important;
    }
    .svg-container{
      top : 265px !important;

      svg.bg-logo{
        width: 80px !important;
      }
    }
    .title{
      width : 300px !important;
      height : 300px !important;

      .h1-container{
        font-size : 0.7em;
      }  
    }
    .conteneur-phrases{
      bottom: 120px !important;
      .slogans {
        height : 110px !important;
      }
    }
  }
  @media (max-width:400px){
    .bg-image-container{
      img{
        margin-left: -100%;
      }
    }
  }
  
`

export default HomeBandeauFirst;