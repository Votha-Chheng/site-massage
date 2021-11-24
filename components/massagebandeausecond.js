import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import { opacityBandeau } from "../utils";
import HerosMassage from "./herosmassage";

const MassageBandeauSecond = () => {
  const [sectionInView, setSectionInView] = useState(false)
  const [heroInView, setHeroInView] = useState(false)
  const [craneInView, setCraneInView] = useState(false)

  const controls = useAnimation()

  useEffect(() => {
    if(sectionInView){
      controls.start("animate")
    }
  }, [controls, sectionInView])

  return (
    <SectionWrap>
      <div className="page-container">
        <InView onChange={(inView, entry)=>setHeroInView(inView)}>
          <HerosMassage title="massage crânien" image="pexels-photo-3997989.jpeg" translateUp="-450" heroInView={heroInView}/>
        </InView>
        
        <InView onChange={(inView, entry)=>setSectionInView(inView)}  className="section-container">
          <motion.div variants={opacityBandeau} initial="initial" animate={controls}> 
          <div className="cranien-container">
            <img src="/images/176067219_2674521086185632_6685018227844772496_n.jpg" width="300" />
            <div className="texte-cranien">
              <div>
                Ah, le massage du cuir chevelu ! Beau&shy;coup de ceux qui sont déjà passés sous mes mains en sont tellement fan... Impos&shy;sible de terminer le modelage sans passer par là. 
              </div>
              <div>
                Ce massage semble assez anodin mais ses effets positifs sur l'esprit et le corps à court et long terme sont innombrables.
              </div>
            </div> 
          </div>
          
          <div className="container-questions">
            <h4>Quels en sont les bienfaits physiques ?</h4>
            <ul>
              <li>
                <i className="fas fa-fan"/>
                Les muscles sont relâchés.
              </li>
              <li>
                <i className="fas fa-fan"/> 
                Un bien-être se diffuse dans la totalité du corps.
              </li>
              <li>
                <i className="fas fa-fan"/>
                Ce soin embellit et détend la peau.
              </li>
              <li>
                <i className="fas fa-fan"/>
                Les traits du visage sont apaisés.
              </li>
            </ul>
          </div>
          <div className="container-questions">
            <h4>Quels en sont les bienfaits physiologiques ?</h4>
            <ul>
              <li>
                <i className="fas fa-fan"/>
                La sensation très agréable que procure le massage du cuir chevelu, libère dans le corps des endorphines, ayant des propriétés antalgiques qui apportent un sentiment de bien-être, de contentement et de bonheur.
              
              </li>
              <li>
                <div className="fan">
                  <i className="fas fa-fan"/>
                </div>
                Il procure calme, tranquillité, concentration sur le long terme et favorise le sommeil.
              </li>
              <li>
              <i className="fas fa-fan"/> 
                Il minore l’anxiété, la fatigue, le stress et maux de tête.
              </li>
            </ul>
          </div>
          </motion.div>
        </InView> 
      </div>
      <InView onChange={(inView, entry)=> inView && setCraneInView(true)} >
        <motion.div className="crane" variants={opacityBandeau} initial="initial" animate={craneInView?"animate":""} >
          Le massage crânien est compris dans tous mes massages (sauf avis contraire de votre part). Profitez-en !
        </motion.div>
      </InView>
    </SectionWrap>
  );
}

const SectionWrap = styled.section`
  .section-container{
    padding: 25px;

    .cranien-container{
      display: flex;
      width: 80%;
      margin: 0 auto;
      
      .texte-cranien{
        color: #ebebeb;
        text-align: justify;
        font-family: 'Montserrat', serif;
        line-height: 2.8rem;
        padding: 20px;
        color: #ebebeb;
        font-size: 1.4rem;
        width: 100%;
        position: relative;
        font-style : italic ;
        text-indent: 30px;
      }
      img{
        margin: 10px;
        border: 4px solid whitesmoke;
        filter: contrast(110%) blur(0.5px) contrast(90%);
        opacity: 0.9;
      }
    }
    .container-questions{
      width: 80%;
      margin: 0 auto;

      li{
        display: flex;
        list-style-type:none;
        font-family: 'Montserrat', serif;
        margin: 5px 0px;
        padding: 10px;
        color: #ebebeb;
        width: 75%;
        line-height: 2rem;
        font-size: 1.4rem;
        
        i{
          margin-right: 20px;
          height:20px;
          color:pink;
          transform-origin: center;
          animation: rotation 3s linear infinite;
        }
      }
      h4{
        font-size: 1.9rem;
        color: white;
        font-family: 'Playfair Display', serif;
        text-transform: uppercase;
        font-style: italic;
        margin-bottom: 10px;
      }
    }
  }

  @keyframes rotation{
    from{
      transform: rotateZ(0deg);
    }
    to{
      transform: rotateZ(-360deg)
    }
  }

  @media (max-width: 1060px){
    .hero{
      img{
        transform: translateY(0) !important;
      }  
    }
    .cranien-container{
      flex-direction: column;
      img{
        align-self: center;
      }
    }
  }
  @media (max-width: 500px){
    .container-questions{
      width:100%;
      ul{
        padding-left: 0px;
        li{
          font-size: 1.2rem !important;
          width: 100% !important;
        }
      }
    }
    .cranien-container{
      width: 100% !important;
    }
    .texte-cranien{
      font-size: 1.2rem !important; 
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

export default MassageBandeauSecond;