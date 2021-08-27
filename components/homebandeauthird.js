import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import { titleAnimation } from "../utils";

const HomeBandeauThird = () => {

  const [titleInView, setTitleInview] = useState(false);
  
  const controls = useAnimation()

  useEffect(() => {
    if(titleInView){
      controls.start("appear")
      controls.start("animate")
    }
  }, [controls, titleInView])
  
  const bandeauThird = useRef(null)

  const pageAppear = {
    initial : {

    },
    animate: {
      transition: {
        delayChildren : 1,
        staggerChildren : 0.2
      }
    }
  }
  const imgAppear = {
    initial: {
      opacity:0, 
      y:200
    },
    animate:{
      opacity : 1,
      y: 0,
      transition:{
        duration : 1, 
        ease: "easeOut",
      }
    }
  }
  const textAppear = {
    initial: {
      opacity:0, 
    },
    animate:{
      opacity : 1,
      transition:{
        duration : 1.5, 
        ease: "easeOut",
        delay : 1.75
      }
    }
  }
  

  return (
    <BandeauDiv ref={bandeauThird}>
      <InView className='container-page' onChange={(inView, entry)=>setTitleInview(inView)}>
        <motion.h2 variants={titleAnimation} initial="initial" animate={controls} className='title-h2'>Mon approche du bien-être</motion.h2>
              
        <motion.div className="bande-photos" variants={pageAppear} initial="initial" animate={controls}>
          <motion.div className='container-photo' variants={imgAppear} >
            <img src='/images/close-up-relaxed-girl-getting-massage.jpg' alt="femme à l'aise" width="500"/>
            <small>Crédit photo : &copy;freepik</small>
          </motion.div>
          <motion.div variants={imgAppear } className="logo-lotus">
            <img src="/images/logoLotus.svg" width="100px" height="100px"/>
            <div className="line-container">
              <div className="line"/>
            </div>
          </motion.div>
          
          <motion.div variants={imgAppear} className='container-photo right'>
            <img src='/images/175659034_364152124945419_4032164191564889065_n.jpg' alt="femme à l'aise" width="500"/>
          </motion.div>
          <motion.div className='textes-container' variants={textAppear}>
            <div className="texte-aside">
              <i className="fas fa-quote-left"/>
              &nbsp;Ma priorité est de vous mettre à l'aise dès le premier échange et de res&shy;pecter votre intimité afin que vous puissiez vous détendre, ressentir le lâcher prise pour ainsi profiter du mo&shy;ment dans son intégra&shy;lité. 
              <div className="texte-aside">
                Il est parfois difficile de se laisser aller auprès d'une nouvel&shy;le pra&shy;ticien&shy;ne, cela peut pren&shy;dre du temps et se faire sur plusieurs rendez-vous. Je prends le temps néces&shy;saire à chacun car nous pas&shy;sons par la confiance, le confort et la sécurité, sentiments in&shy;dispen&shy;sables qui vous permet&shy;tra de savourer les bien&shy;faits des soins que je vous apporte.
              </div>
            </div>
            <div className="texte-aside">
              Une musique vous incitera à la relaxation ainsi qu'une huile aux odeurs exotique et paradisiaque comme, le monoi, la coco, le jasmin, ou encore la fleur d'oranger. Vous l'aurez compris, il y en aura pour tous les sens...
              <i className="fas fa-quote-right"/>
            </div>
          </motion.div>
          
        </motion.div>          
      </InView>
  
    </BandeauDiv>
  );
}

const BandeauDiv = styled.div`
  width: 100vw;
  overflow : hidden;
  position : relative;

  .container-page{
    padding: 25px;

    .title-h2{
      text-transform: uppercase;
      font-family: 'Playfair Display', serif;
      color: whitesmoke;
      font-size : 3rem;
      font-style : italic;
      font-weight: normal;
      margin: 25px 0px;
    }
    .fa-quote-left{
      transform: scale(1.5) translateY(-10px);
      text-indent:-20px;
    }
    .fa-quote-right{
      transform:scale(1.5) translateY(5px);
      text-indent:10px;
    }
    .bande-photos{
      width: 100%;
      display: flex;
      justify-content: space-between; 
      margin: 50px 0px;
      position : relative;
      height: 900px;
      align-items: start;

      .logo-lotus{
        margin-top: 50px;
        img{
          position: static;
        }
        .line-container{
          margin-top: -25px;
          height: 6px;
          width: 100px;
          overflow: hidden;
          border-radius: 3px;

          .line{
            width: 100px;
            height: 6px;
            background-color: whitesmoke;
          }
        }
      }

      .textes-container{
        position: absolute;
        width: 50vw;
        top: 175px;
        left: 50%;
        padding: 30px 20px 50px;
        background-color: rgba(250, 250, 250, 0.95);
        border: 4px double #64737d;
        transform: translate(-50%, 0);

        .texte-aside{
          text-indent: 30px;
          line-height: 2rem;
          font-size: 1.4rem;
          color: #64737d;
          font-style: italic;
          font-family: "Montserrat", sans-serif;
          text-align: justify;
        }
      }


      .container-photo{
        display: flex;
        flex-direction: column;
        min-width: 500px;
        overflow: hidden;
        height: 300px;
        position : relative;
        border: 4px solid whitesmoke;

        img{
          filter: brightness(120%);
          opacity: 0.80;
        }

        small{
          position: absolute;
          left: 0;
          bottom: 0;
          text-align: right;
          font-size: 0.5rem;
          font-family: "Montserrat", sans-serif;
        }
      }
    }  
  }

  @media (max-width:1180px){
    .container-photo.right, .logo-lotus{
      display: none !important;
    }
  }
  @media (max-width:845px){
    .textes-container{
      width: 90% !important;
      top: 250px !important;
    }
  }
  @media (max-width:650px){
    .texte-aside{
      font-size: 1.2rem !important;
    }
    .bande-photos{
      height: 1480px !important;
    }
  }

  

  
  
`
export default HomeBandeauThird;