import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";

const MassageBandeauFourth = () => {
  const [sectionInView, setSectionInView] = useState(false)

  const controls = useAnimation()

  useEffect(() => {
    if(sectionInView){
      controls.start("animate")
    }
  }, [controls, sectionInView])

  return (
    <SectionWrapper> 
      <InView onChange={(inView, entry)=> inView && setSectionInView(true)} className="section-container">
        <motion.div className="flex-1" initial={{x:-300, opacity:0}} animate={sectionInView? {x:0, opacity:1}:""} transition={{opacity : {duration : 0.75, delay:0.8, ease:"easeOut"}, x : {duration : 1.2, delay:0.8, ease:"easeOut"}}} >
          <div className="bougie-container">
            <img src="/images/massageBougie2.jpg" width="400" height="400" />
          </div>
          <div className="texte">
            Ce type de massage réalisé sur l'ensemble du corps est ré&shy;puté pour sa capacité à dé&shy;ten&shy;dre les muscles et à sup&shy;primer les ten&shy;sions dues au stress. Ori&shy;ginai&shy;re de Thaï&shy;lande, il reste en&shy;core assez mécon&shy;nu en Oc&shy;cident. L’huile est ap&shy;pli&shy;quée sur l’en&shy;semble du corps par de longs mou&shy;vements flui&shy;des. 
          </div>
        </motion.div>
        <motion.div className="flex-2" initial={{x:300, opacity:0}} animate={sectionInView? {x:0, opacity:1}:""} transition={{opacity : {duration : 0.75, delay:1.5, ease:"easeOut"}, x : {duration : 1.2, delay:1.5, ease:"easeOut"}}} >
          <div className="texte-container">
            <div className="texte">
              Les bougies de massage sont des bougies spécifiques, 100% naturelles à base de cire végétale ou d’abeil&shy;les et enri&shy;chies en huiles es&shy;sentiel&shy;les, senteurs pro&shy;pices à la dé&shy;con&shy;traction. La fonte de la bougie produit de la cire li&shy;quide qui se transforme en huile de mas&shy;sage hy&shy;dra&shy;tante. Avec un parfum agré&shy;able, des vertus adou&shy;cis&shy;santes et nour&shy;rissantes pour la peau, ce mas&shy;sage est conseil&shy;lé pour les peaux sèches et sen&shy;sibles. De plus, la douce sen&shy;sation de la ci&shy;re tiède sur la peau en fait un mas&shy;sage idéal pour l'hiver. 
            </div>
            <div className="bougie-container">
              <img src="/images/massageBougie.jpg" width="400" height="400"/>
            </div>
          </div>
            <div className="texte fin">
              Bref, effet enveloppant, confort immédiat et sensation de cocooning garantis !
            </div>
        </motion.div>
      </InView>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  overflow: hidden;
  padding-top: 10px;

  .section-container{
    width:1200px;
    margin: 0 auto;
  }
  .flex-1, .flex-2{
    display: flex;
    align-items: center;
    margin-bottom : 25px;
    border-bottom: 2px solid white ;
    border-radius: 10%;
    padding-bottom: 50px;
  }
  .flex-1{
    
  }
  .flex-2{
    flex-direction: column;
    
    .texte-container{
      display: flex;
      align-items: center;
    }
  }

  .texte{
    padding:0px 20px;
    color: #ebebeb;
    text-align: justify;
    font-family: 'Montserrat', serif;
    line-height: 2.8rem;
    color: #ebebeb;
    font-size: 1.4rem;
    width: 100%;
    position: relative;
    font-style : italic ;
    text-indent: 30px;
  }
  .texte.fin{
    margin-top: 20px;
    font-size: 2.5rem;
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    text-transform: uppercase;
    text-indent: 0px;
    text-align: center;
    line-height: 3.5rem;
    padding-top: 50px;
  }

  .bougie-container{
    img{
      margin: 0px 20px;
      border: 4px solid whitesmoke;
      object-fit: cover;
    }
    
  }

  @media (max-width: 1185px){
    .section-container{
      width: 100% !important;
    }
    .flex-1{
      flex-direction: column;
      margin-bottom: 75px !important;
      width: 50% !important;
      align-items: center;
      margin: 0px auto;
    }
    .flex-2{
      width: 50% !important;
      margin: 0px auto;

      .texte-container{
        flex-direction: column-reverse;
        width: 100%;
      }
    }
    .texte.fin{
      width: 100% !important;
    }
  }
  @media (max-width:768px){
    .hero{
      img{
        transform: translateY(0px) !important;
      }
    }
  }
  @media (max-width: 500px){
  .hero{
    img{
      transform: translateY(-50%)!important;
      width: 100vw !important;
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
  .flex-1{
    width: 100% !important;

    .texte{
      font-size: 1.1rem !important;
    }
    
  }
  .flex-2{
    width: 100% !important;

    .texte-container{
      .texte{
        font-size: 1.1rem !important;
      }
    }
  }
  .texte.fin{
    width: 100% !important;
    font-size: 1.5rem !important;
    letter-spacing: 1.5px !important;
  }

}
`
export default MassageBandeauFourth;