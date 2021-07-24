import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import HerosMassage from "./herosmassage";
import HomeCurveSeparation from "./homecurveseparation";

const MassageBandeauFifth = () => {
  const [sectionInView, setSectionInView] = useState(false)
  const [heroInView, setHeroInView] = useState(false)

  const controls = useAnimation()

  useEffect(() => {
    if(sectionInView){
      controls.start("animate")
    }
  }, [controls, sectionInView])


  return (
    <SectionWrapper>
      <InView onChange={(inView, entry)=>setHeroInView(inView)}>
        <HerosMassage title="réflexologie" image='foot-massage.jpg' translateUp="-250" heroInView={heroInView} />
      </InView>
      
      <InView onChange={(inView, entry)=>setSectionInView(inView)} className="section-container">
        <motion.div className="part-left-container" initial={{opacity:0, x:"-100%"}} animate={sectionInView? {opacity:1, x:0}:""} transition={{opacity:{duration : 0.5, delay:1}, x:{duration:1.25, delay:0.8, ease:"easeOut"}}} >
          <div className="foot-img-container">
            <img src="/images/woman-getting-foot-massage.jpg" height="400"/>
            <small>Crédit photo : &copy; chevanon</small>
          </div>
        </motion.div>
        
        <motion.div initial={{opacity:0, x:"100%"}} animate={sectionInView? {opacity:1, x:0}:""} transition={{opacity:{duration : 0.5, delay:1.6}, x:{duration:1.9, delay:0.8, ease:"easeOut"}}}>
          <div className="texte">
            Les pieds sont une partie du corps souvent oubliés pour les soins et le bien-être, alors qu'ils sont souvent très sollicités tout au long de la journée lorsque vous marchez ou que vous restez en position debout prolongée à cause du port des chaussures et du poids qu'ils supportent au quotidien.
          </div>
          <div className="texte">
            C'est là qu'entre en jeu la réflexologie et le massage de la voute plantaire dont les bienfaits ne sont plus à démontrer pour <b>apaiser le stress, soulager des douleurs (du dos, migraine, etc...)</b>, ou tout simplement passer un moment de qualité, agréable et enchanteur.
          </div>
        </motion.div>

      </InView>
      <HomeCurveSeparation texte="la réflexologie plantaire en détail" margin="75px 0px 200px" lien="/prestations/#pieds" />
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
.section-container{
  display: flex;
  width: 90%;
  justify-content: center;
}
  .foot-img-container{
    position: relative;
    margin: 0px 40px;
    max-height: 400px;

    img{
      border: 4px solid whitesmoke;
      float: left;
    }

    small{
      position: absolute;
      top: 7px;
      left: 5px;
      font-size: 0.55rem;
    }
    
  }
  .texte{
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
  @media (max-width: 1320px){
    .section-container{
      width: 100% !important;
    }
  }
  @media (max-width: 1150px){
    .section-container{
      flex-direction: column !important;
      align-items: center;
    }
  }
  @media (max-width: 780px){
    .hero{
      img{
        transform: translateY(0px) !important;
      }
    }
  }
  @media (max-width: 500px){
  .hero{
    img{
      transform: translateY(0%)!important;
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
  .foot-img-container{
    display: none !important;
  }
  .texte{
    font-size: 1.2rem !important;
  }

}
`
export default MassageBandeauFifth;