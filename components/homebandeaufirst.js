import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import usePageYOffset from "../hooks/usePagesYOffset";
import useWindowSize from "../hooks/useWindowSize";
import useScrollDirection from "../hooks/useScrollDirection";


const HomeBandeauFirst = () => {

  const [bandeauHeight, setBandeauHeight] = useState(0)

  const bandeau = useRef(null)
  const queueOneRef = useRef(null)

  const size = useWindowSize()
  const positionY = usePageYOffset()
  const scrollDir = useScrollDirection()



  useEffect(() => {
    setBandeauHeight(window.innerHeight)
  }, [size])

  useEffect(() => {
    if((positionY >= 1 && positionY < 101) && (scrollDir === "down") ){
      window.scrollTo(0, bandeauHeight)
    }
  }, [size, bandeauHeight, positionY, scrollDir])


  //Animations
  const variantsPhrases = {
    initial : {
      opacity: 0,
    },
    animate : {
      opacity: 1,
      transition : {
        delay : 4.5,
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
        delay : 5.5,
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
        delay : 5.5,
        duration : 2
      }
    }
  }

  return (
    <BandeauDiv>
      <div ref={bandeau}>
        <motion.div 
          className="main-logo" 
          initial={{ opacity : 0}} 
          animate={{ opacity:1}} 
          transition={{opacity:{delay:4.25, duration:0.8}}}>
          <img 
            src="/images/logo.svg" 
            width="200%" 
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
          <motion.div className='border-bottom' variants={variantBorderBottom}/>
        </motion.div>

        <motion.div
          className='bg-image-container' 
          initial={{scale:0.5, opacity : 0}} 
          animate={{scale:1, opacity:1}} 
          transition={{scale : {delay:2.5, duration:0.8}, opacity:{delay:0.5}}}>
          <motion.div
            className="fold" 
            initial={{scale:1, x:0}} 
            animate={{scale:["1.5", "1"], x:"100%"}} 
            transition={{x : {delay:1, duration:1}, scale : {delay : 1.2, duration:0.9}}}/>

          <motion.div 
            className="bg-image"
            initial={{scale : 1, filter : "blur(0px) brightness(125%)"}}
            animate={{scale : ["1.5", "1"], filter:"blur(5px) brightness(125%)", opacity: [0.75, 0, 0, 0, 0.5]}}
            transition={{scale : {delay : 1.2, duration:0.9}, filter:{delay : 2, duration:2}, opacity: {delay:2.15, duration:2}}}
          >
            </motion.div>
        </motion.div>       
          
        <motion.div 
          className="explore-icon" 
          initial={{opacity:0}} 
          animate={{opacity:1}} 
          transition={{opacity : {delay:7}}} 
          onClick={()=>window.scrollTo(0, bandeauHeight)}>
          <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M 15 4 L 15 24.0625 L 8.21875 17.28125 L 6.78125 18.71875 L 15.28125 27.21875 L 16 27.90625 L 16.71875 27.21875 L 25.21875 18.71875 L 23.78125 17.28125 L 17 24.0625 L 17 4 Z" fill="grey"/>
          </svg>
          <small>Explorez</small>
        </motion.div>
      </div>
      
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
    color : white;
    cursor : pointer;

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

  .main-logo{
    position : absolute;
    z-index : 3;
    top : 15%;
    left:50%;
    transform: translate(-100%, 0);
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
    .bg-image{
      width : 100vw;
      height : 100vh;
      background-image: url(/images/bandeau_mains_masse.jpg);
      background-repeat : no-repeat ;
      background-size: 100vw 100vh;
      will-change: transform;
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
      height : 75px;
      width: 100%;

        .queue-1{
          height: 50px;
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

  @media (max-width:1024px){
    .bg-image{
      background-image: url(/images/118930618_372805930709061_72465373286677363_n.jpg) !important;
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
      height : 100px !important;

      div{
        font-size: 2rem !important;
      }
    }
  }
  @media (max-width:540px){
    .explore-icon{
      overflow : hidden;
      position : absolute;
      z-index : 3;
      bottom : 50px;
      left : 50%;
      transform: translate(-50%, 0);
    }
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
        height : 75px !important;
        width: 413px !important;

        div{
          font-size: 1.5rem !important;
        }
      }
    }
  }
  @media (max-width:400px){
    .main-logo{
      top : 15%;
      left:50%;
      transform: translate(-50%, 0);
      img{
        width:300px;
      }
    }
    .bg-image-container{
      img{
        margin-left: -100%;
      }
    }
    .slogans {
        height : 100px !important;

        div{
          font-size: 1rem !important;
        }
      }
  }
  
`

export default HomeBandeauFirst;