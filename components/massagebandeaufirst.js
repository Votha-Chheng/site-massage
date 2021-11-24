import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import { opacityBandeau, titleAnimation } from "../utils";

const MassageBandeauFirst = () => {
  const [sectionInView, setSectionInView] = useState(false)
  const [heroInView, setHeroInView] = useState(false)

  const controls = useAnimation()

  useEffect(() => {
    if(sectionInView){
      controls.start("animate")
    }
  }, [controls, sectionInView])

  
  useEffect(() => {
    if(heroInView){
      controls.start("appear")
    }
  }, [controls, heroInView])

  return (
    <SectionWrap>
      {/* <motion.h2 variants={titleAnimation} initial="initial" animate="appear" className="massages-titles">Types de massage proposés</motion.h2> */}
        <InView onChange={(inView, entry)=> inView && setHeroInView(true)}>
          <motion.h2 
            className='home-titles' 
            style={{marginLeft:"20px"}} 
            variants={titleAnimation} 
            initial="initial" 
            animate={controls}>
            Le massage intuitif
          </motion.h2>
          {/* <HerosMassage title="massage intuitif" image="oil-massage.jpg" translateUp="-150" heroInView={heroInView}/> */}
        </InView> 
        
      
      <InView onChange={(inView, entry)=>setSectionInView(inView)} className="section-container" >
        <motion.div variants={opacityBandeau} initial="initial" animate={controls} >
          <div className='img-citation'>
            <img src="/images/pexels-daria-sannikova-5221036.jpg" width="450" />
            <div className="quote">
              <i className="fas fa-quote-left" style={{transform:"scale(1.5) translateY(-10px)", textIndent:"-30px"}}/>
              Voir le corps se déposer, pren&shy;dre contact avec lui, l'écouter, s'arrêter, lisser, masser, d'un mou&shy;vement toujours lent. Il se crispe parfois et fait prendre cons&shy;cience, du lien avec l'esprit, des blo&shy;cages émo&shy;tion&shy;nels et af&shy;fec&shy;tifs. C'est là que le chemin com&shy;mence... Par le toucher, il cherche à instal&shy;ler le mieux-être, dans la durée, en libé&shy;rant les ten&shy;sions inu&shy;tiles. Tel est le massage intuitif.
              <i className="fas fa-quote-right" style={{transform:"scale(1.5) translateY(5px)", textIndent:"20px"}}/> 
            </div>
          </div>
          <div className="texte-container">
            <div className="lotus-container">
              <img src="/images/logoLotus.svg" width="75" />
            </div>
            <div>
              Ainsi, le massage in&shy;tuitif cherche à installer le mieux être pas seul&shy;ement dans l'immé&shy;diat mais aussi dans la durée. C'est un mas&shy;sage que je pra&shy;ti&shy;que grâce et avec mon res&shy;senti, mon intuition. Il est personnalisé et adapté à la personne qui le reçoit à l'instant T. 
            </div>
            <div>
              Par mon attention, j'ai la facul&shy;té d'entrer en con&shy;nexion avec le rece&shy;veur, l'harmo&shy;nie du massage se crée grâce à la façon que j'ai de m'ajuster à la respi&shy;ration du massé. Je per&shy;çois des in&shy;forma&shy;tions non verbales qui me per&shy;met&shy;tent de compren&shy;dre si je dois passer plus de temps sur telles parties du corps afin de le libérer de toutes tensions ou d'uti&shy;liser tel&shy;les tech&shy;niques pour vous ac&shy;compagner à lâcher pri&shy;se...
            </div>
            <div>
              Ce massage person&shy;nalisé et com&shy;plet à base d’huiles es&shy;sentiel&shy;les biolo&shy;giques, prend en compte l’ap&shy;proche glo&shy;bale de l’être humain et le tou&shy;che dans ses dif&shy;féren&shy;tes di&shy;men&shy;sions (phy&shy;sique, men&shy;tale, émo&shy;tion&shy;nelle et éner&shy;gé&shy;tique) afin que cel&shy;les-ci soient ré&shy;har&shy;moni&shy;sées. Tous mes soins sont animés par la philosophie du massage intuitif.
            </div>
          </div>
        </motion.div>
      </InView> 
    </SectionWrap>
  );
}

const SectionWrap = styled.section`
  padding-top: 50px; 

  .section-container{
    margin-bottom: 100px;
  }

  .img-citation{
    margin: 0px auto;

    img{
      float: left;
      margin: 30px 50px 10px 10%;
      border: 4px solid whitesmoke;
      filter: brightness(120%);
      opacity: 0.8;
    }

    .quote{
      color: white;
      text-shadow: 1px 1px 1px grey;
      text-align: justify;
      font-family: 'Playfair Display', serif;
      line-height: 2.8rem;
      padding: 20px;
      color: #ebebeb;
      font-size: 1.75rem;
      width: 75%;
      position: relative;
      font-style : italic ;
      text-indent: 50px;
      margin:25px auto;
    }
  }
  .texte-container{
    margin:25px auto;
    color: #ebebeb;
    text-align: justify;
    font-family: 'Montserrat', serif;
    line-height: 2.8rem;
    padding: 20px;
    color: #ebebeb;
    font-size: 1.4rem;
    width: 75%;
    position: relative;
    font-style : italic ;
    text-indent: 30px;

    .lotus-container{
      width : 100%;
      text-align: center;
      margin: 50px 0px;
    }
  }

  @media (max-width: 1120px){
    .img-citation{
      img{
        width: 150px !important;
      }
      
    }
  }

  @media (max-width: 615px){
    .img-citation{
      text-align: center;
      img{
        width: 150px !important;
        float: none;
        margin: 0px auto;
      }
      
    }
  }
  @media (max-width: 500px){
    .quote{
      font-size: 1.3rem!important;
      width: 95% !important;
    }
    .texte-container{
      width: 100%!important;
      div{
        
        font-size: 1.2rem !important;
      } 
    }
    .hero{
      img{
        transform: translateY(0px)!important;
      }
    } 
    .hero-top-layer{
      top:100px !important;
      opacity:0.9 !important;

      


      h3{
        font-size: 1.8rem !important;
        width: 100vw;
      }
      
    }
  }

`

export default MassageBandeauFirst;