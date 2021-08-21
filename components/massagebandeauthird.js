import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import { opacityBandeau } from "../utils";
import HerosMassage from "./herosmassage";
import HomeCurveSeparation from "./homecurveseparation";

const MassageBandeauThird = () => {
  const [sectionInView, setSectionInView] = useState(false)
  //const [heroInView, setHeroInView] = useState(false)

  const controls = useAnimation()

  useEffect(() => {
    if(sectionInView){
      controls.start("animate")
    }
  }, [controls, sectionInView])

  return (
    <SectionWrapper>
      {/* <InView onChange={(inView, entry)=>setHeroInView(inView)}>
        <HerosMassage image='baby-massage.jpg' title="massage pour bébé" translateUp='-770' heroInView={heroInView}/>
      </InView> */}
      
      <InView className="section-container" onChange={(inView, entry)=>setSectionInView(inView)}> 
        <motion.div className="basic-container" variants={opacityBandeau} initial="initial" animate={controls} >
          <div className="image-bébé-container">
            <img src="/images/175582685_458024105447520_2106840811191704374_n.jpg" alt="massage bébé" width="500"/>
          </div>
          <div className="texte-container">
            <h3>Le massage pour bébé, un mode de communication à découvrir...</h3>
            <div className="texte">
              L'art du toucher, long&shy;temps tabou dans les pays occi&shy;den&shy;taux, est désor&shy;mais recon&shy;nu. Dès la nais&shy;sance, vous pouvez masser votre tout petit pour le sécuriser, l'apaiser et déve&shy;lop&shy;per ses fa&shy;cultés mo&shy;trices.
            </div>
            <div className="texte">
              Le massage peut être consi&shy;déré comme un véri&shy;table langage cor&shy;porel. Il sécurise l'enfant, passant de la cha&shy;leur de l'utérus ma&shy;ternel au monde et récon&shy;for&shy;te les parents souvent dé&shy;sempa&shy;rés, im&shy;pres&shy;sionnés par leur nouveau-né, en leur permet&shy;tant d'entrer en contact avec lui. 
            </div>
            <div className="texte">
              Il ne faut pas toujours chercher des réponses compli&shy;quées, parfois un bébé pleure tout sim&shy;plement parce qu'il a besoin de caresses. Mas&shy;ser son bébé n'est pas dif&shy;ficile et ce moment privi&shy;légié permet&shy;tra d'instaurer un véri&shy;table échan&shy;ge entre vous et lui. Les béné&shy;fices du massage bébé se mani&shy;festent tant au point de vue phy&shy;sique que psy&shy;cholo&shy;gique.
            </div>
          </div>
        </motion.div> 
      </InView>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`

  .basic-container{
    width: 90%;
    margin: 0 auto;

    .image-bébé-container{
      img{
        border: 4px solid whitesmoke;
        float: right;
        margin: 10px 0px 20px 30px;
        opacity: 0.8;
        filter: brightness(110%);
      }
    }

    .texte-container{

      h3{
        font-size: 1.9rem;
        color: white;
        font-family: 'Playfair Display', serif;
        text-transform: uppercase;
        font-style: italic;
        margin-bottom: 10px;
      }
      .texte{
        color: #ebebeb;
        text-align: justify;
        font-family: 'Montserrat', serif;
        line-height: 2.8rem;
        padding: 0px 0px;
        color: #ebebeb;
        font-size: 1.4rem;
        width: 100%;
        position: relative;
        font-style : italic ;
        text-indent: 30px;
      }
    }
  }

@media (max-width: 1260px){
  .hero{
    img{
      transform: translateY(-35%) !important;
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
  .texte{
    font-size: 1.2rem !important;
  }
}
`

export default MassageBandeauThird;