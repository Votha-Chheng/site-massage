import { motion, useAnimation } from "framer-motion";
import Image from 'next/image'
import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";



const MassageBambous = () => {
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
        <motion.div 
          className="flex-1" 
          initial={{x:-300, opacity:0}} 
          animate={sectionInView? {x:0, opacity:1}:""} 
          transition={{opacity : {duration : 0.75, delay:0.8, ease:"easeOut"}, x : {duration : 1.2, delay:0.8, ease:"easeOut"}}} 
        >
          <div className="texte">
            Fait à l'aide de bâtons de bambou chauf&shy;fés et huilés, le massage aux bam&shy;bous est un traitement intra&shy;musculaire profond puis&shy;qu'il permet d'accentuer les mouvements du masso&shy;thérapeu&shy;te. Bois léger mais ro&shy;buste, le bam&shy;bou offre de mul&shy;tiples effets thé&shy;rapeu&shy;tiques en dis&shy;persant les tensions et en li&shy;bérant les énergies.
          </div>
          <div className="bambous-img">
            <Image src="/images/massage-bambous.jpg" layout="fill"/>
          </div>
          <div className="texte">
            <span style={{fontWeight: "bold", textDecoration:"underline"}}>Contre indications</span> : Les personnes ayant des pro&shy;blèmes cardio&shy;vasculaires ou de cir&shy;culations tel&shy;les que phlébite ou varices ainsi que les per&shy;sonnes souf&shy;frant de trou&shy;bles rénaux, d’hyper&shy;tension ou de dia&shy;bète devraient consulter l’avis d’un médecin avant de re&shy;cevoir ce soin. Le mas&shy;sage aux bambous est éga&shy;lement dé&shy;conseillé en cas de fièvre ou de gros&shy;sesse.
          </div>
        </motion.div>
      </InView>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  overflow: hidden;
  padding-top: 10px;

  .bambous-img{
    width: 360px;
    height: 300px;
    position: relative;
    border: 2px solid whitesmoke;
    margin-bottom:15px;
  }

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
export default MassageBambous;