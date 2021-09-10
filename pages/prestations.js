import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import Footer from "../components/footer";
import HomeCurveSeparation from "../components/homecurveseparation";
import MassageBandeauFourth from "../components/massagebandeaufourth"
import MassageBandeauThird from "../components/massagebandeauthird";
import MassageBandeauFifth from "../components/massagebandeaufifth"
import MenuHead from "../components/menuhead";
import PrestationLayout from "../components/prestationlayout";
import MomentumScrollProvider from "../context/MomentumScrollContext";
import { opacityBandeau, titleAnimation } from "../utils";

const prestations = () => {

  const [scrollToPosition, setScrollToPosition] = useState(0)
  const [firstInView, setFirstInView] = useState(false)
  const [secondInView, setSecondInView] = useState(false)
  const [thirdInView, setThirdInView] = useState(false)
  const [fourthInView, setFourthInView] = useState(false)
  const [fifthInView, setFifthInView] = useState(false)
  const [sixthInView, setSixthInView] = useState(false)
  const [seventhInView, setSeventhInView] = useState(false)

  const contactfooter = useRef(null)
  const bougie = useRef(null) 
  const babymassage = useRef(null)
  const yoga = useRef(null) 
  const classiques = useRef(null)
  const pieds = useRef(null)
  const crane = useRef(null)

  const history = useRouter()
  const {asPath} = history
  const arrayPath = asPath.split("#");


  useEffect(() => {
    if(arrayPath[1]==="contactfooter"){
      setScrollToPosition(contactfooter.current.offsetTop)
    }
    if(arrayPath[1]==="babymassage"){
      setScrollToPosition(babymassage.current.offsetTop)
    }
    if(arrayPath[1]==="yoga"){
      setScrollToPosition(yoga.current.offsetTop)
    }
    if(arrayPath[1]==="bougie"){
      setScrollToPosition(bougie.current.offsetTop)
    }
    if(arrayPath[1]==="classiques"){
      setScrollToPosition(classiques.current.offsetTop)
    }
    if(arrayPath[1]==="pieds"){
      setScrollToPosition(pieds.current.offsetTop)
    }
    if(arrayPath[1]==="crane"){
      setScrollToPosition(crane.current.offsetTop)
    }
  },[arrayPath, history])

 

  useEffect(()=>{
    window.scrollTo(0, scrollToPosition)
  },[scrollToPosition])


  const tableauClassiques = [
    {
      service : "Massage Californien ",
      temps : "1h",
      description : "Contribue à la relaxation, apaise le corps, libère les émotions."
    },
    {
      service : "Massage Suédois",
      temps : "1h",
      description : "Tonifie et relaxe les muscles, favorise la circulation sanguine."
    }
  ]

  const tableauBougie = [
    {
      service : "Massage à la bougie et à l'huile chaude",
      temps : "1h",
      description : "Idéal pour l'hiver, sensation de cocooning, profond relâchement. Massage ultra hydratant, idéal pour les peaux sèches."
    }
  ]

  const tableauBaby = [
    {
      service : "Massage bébé/maman (dès les premiers jours) ",
      temps : "1h",
      description : "Stimule le système immunitaire. Partagez un moment unique qui renforce le lien avec bébé. Massage à l'huile d'amande douce."
    },
    {
      service : "Massage future maman",
      temps : "1h",
      description : "Pour les femmes enceintes, le massage permet de soulager les douleurs (dos, épaules, jambes lourdes...) et de favoriser une meilleure circulation sanguine."
    }
  ]

  const tableauPerso = [
    {
      service : "Massage personnalisé",
      temps : "1h",
      description : "Massage effectué selon vos demandes, pour un moment unique et sur mesure."
    }
  ]

  const tableauPieds = [
    {
      service : "Réflexologie",
      temps : "30min",
      description : "Dissipe les tensions, soulage certaines douleurs et rétablit l'équilibre du corps."
    }
  ]

  const tableauYoga = [
    {
      service : "Initiation au Hata yoga",
      temps : "1h",
      description : "Cours en individuel ou en groupe. Les séance se déroulent à domicile ou en extérieur. "
    },
    {
      service : "Forfait yoga + massage",
      temps : "Durée variable",
      description : " Quoi de mieux qu'une séance de yoga et de massage pour vivre son bien-être à fond ?"
    }
  ]

  const tableauEvents = [
    {
      service : "Evènements particuliers (EVG, anniversaire, carte cadeau, etc...)",
      temps : "Durée variable",
      description : "N'hésitez pas à me contacter pour un service sur mesure lors de ces évènements importants."
    }
  ]

  //Animations
  const slideFromRight = {
    initial :{
      opacity : 0,
      x:"-100%"
    },
    animate : {
      opacity : 1,
      x:0,
      transition: {
        duration:1,
        delay:0.1,
        ease: "easeOut"
      }
    }
  }


  return (   
    <div>
      <Head>
        <title>Baux't des sens | Prestations massages et yoga Arles et Alpilles</title>
      </Head>

      <DivWrapper>
        <div className="menu-container">
          <MenuHead/>
        </div>

        <div className="big-screen">
          <MomentumScrollProvider easing={0.075}>
            <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >Prestations proposées</motion.h2>
            <motion.div className="warning" variants={opacityBandeau} initial="initial" animate="animate" >
              Tous les tarifs seront communiqués sur demande. N'hésitez pas à me contacter pour savoir ce qui vous conviendrait le mieux !
            </motion.div>

            <InView onChange={(inView, entry)=> inView && setFirstInView(true)} >
              <motion.div variants={slideFromRight} initial='initial' animate={firstInView? "animate":""} className="service" ref={classiques}>
                <PrestationLayout
                  //imgUrl="/images/176246623_287598346073187_2645306858024130844_n.jpg" 
                  
                  bgPosition="10%" 
                  //titre="gfhbfb" 
                  tableau ={tableauClassiques}
                />
              </motion.div>
            </InView>
              
            <InView onChange={(inView, entry)=> inView && setSecondInView(true)} >
              <motion.div variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="service" ref={bougie}>
                <PrestationLayout
                  imgUrl="/images/176187352_2922669511298633_3323829876291585340_n.jpg"
                  bgPosition="10%" 
                  titre="A la bougie" 
                  tableau ={tableauBougie}
                />              
                <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                  <span>Le soin à la bougie en quelques mots</span>
                </motion.h3>
                <MassageBandeauFourth/>
              </motion.div>
            </InView>

            <InView onChange={(inView, entry)=> inView && setThirdInView(true)} >
              <motion.div variants={slideFromRight} initial='initial' animate={thirdInView? "animate":""} className="service" ref={babymassage}>
                <PrestationLayout
                  imgUrl="/images/175586104_139909494699792_3872593976078069092_n.jpg"
                  bgPosition="10%" 
                  titre="Pour bébé" 
                  tableau ={tableauBaby}
                />
                <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                  <span>Le massage bébé en quelques mots</span>
                </motion.h3>
                <MassageBandeauThird/>
              </motion.div>
            </InView>

            <InView onChange={(inView, entry)=> inView && setFourthInView(true)} >
              <motion.div variants={slideFromRight} initial='initial' animate={fourthInView? "animate":""} className="service">
                <PrestationLayout
                  imgUrl="/images/175659034_364152124945419_4032164191564889065_n.jpg"
                  bgPosition="10%" 
                  titre="Massage personnalisé" 
                  tableau = {tableauPerso}/>
              </motion.div>
            </InView>
              
            <InView onChange={(inView, entry)=> inView && setFifthInView(true)}>
              <motion.div variants={slideFromRight} initial='initial' animate={fifthInView? "animate":""} className="service" ref={pieds}>
                <PrestationLayout
                  imgUrl="/images/woman-getting-foot-massage.jpg"
                  bgPosition="10%" 
                  titre="Réflexologie plantaire" 
                  tableau = {tableauPieds}/>
                  <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                  <span>La réflexologie en quelques mots</span>
                </motion.h3>
                <MassageBandeauFifth/>
              </motion.div>
            </InView>          
            
            <div className="page-container">
              <InView onChange={(inView, entry)=> inView && setSixthInView(true)}>
                <motion.div variants={slideFromRight} initial='initial' animate={sixthInView? "animate":""} className="service" ref={yoga}>
                  <PrestationLayout
                    imgUrl = "/images/yoga.jpg"
                    bgPosition="10%"
                    titre = "Hata yoga"
                    tableau = {tableauYoga}/>
                </motion.div>
              </InView>

              <InView onChange={(inView, entry)=> inView && setSeventhInView(true)}>
                <motion.div variants={slideFromRight} initial='initial' animate={seventhInView? "animate":""} className="service" id="events">
                  <PrestationLayout
                    imgUrl = "/images/party.jpg"
                    bgPosition="10%"
                    titre = "Evènements"
                    tableau = {tableauEvents} />
                </motion.div>
              </InView>
            </div> 
            <HomeCurveSeparation 
              texte="Prendre RDV en ligne" 
              lien="https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.planity.com%2Fbauxt-des-sens-13200-arles%3Ffbclid%3DIwAR0mHzOv6Id9JEcrDOerYfTdaKOQPOPHv39WeCWhwdVyeUQ1hbV9LQywoEM&h=AT0tItrGZoTuzeOZgdTfjYJmHMkKcS17CtbD9pvoL4WFUJh166TB4jzzvgjvSI2oYhMdp-RU2pS27z6QfCRb3Gq7polaLejUxAeEmzWb4Nw3K6qSeD1qFS1kzaHXJWFSdzrRvpzVT9_eG0VCfr0" margin="0px 0px 75px" 
              target="_blank"/>   
            <Footer/>        
          </MomentumScrollProvider>
        </div>

        <div className="small-screen">
          <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >Prestations proposées</motion.h2>
          <motion.div className="warning" variants={opacityBandeau} initial="initial" animate="animate" >
            Tous les tarifs seront communiqués sur demande. N'hésitez pas à me contacter pour savoir ce qui vous conviendrait le mieux !
          </motion.div>

          <InView onChange={(inView, entry)=> inView && setFirstInView(true)} >
            <motion.div variants={slideFromRight} initial='initial' animate={firstInView? "animate":""} className="service" ref={classiques}>
              <PrestationLayout
                imgUrl="" 
                bgPosition="10%" 
                titre="" 
                tableau ={tableauClassiques}
              />
            </motion.div>
          </InView>
            
          <InView onChange={(inView, entry)=> inView && setSecondInView(true)} >
            <motion.div variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="service" ref={bougie}>
              <PrestationLayout
                imgUrl="/images/176187352_2922669511298633_3323829876291585340_n.jpg"
                bgPosition="10%" 
                titre="A la bougie" 
                tableau ={tableauBougie}
              />              
              <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                <span>Le soin à la bougie en quelques mots</span>
              </motion.h3>
              <MassageBandeauFourth/>
            </motion.div>
          </InView>

          <InView onChange={(inView, entry)=> inView && setThirdInView(true)} >
            <motion.div variants={slideFromRight} initial='initial' animate={thirdInView? "animate":""} className="service" ref={babymassage}>
              <PrestationLayout
                imgUrl="/images/175586104_139909494699792_3872593976078069092_n.jpg"
                bgPosition="10%" 
                titre="Pour bébé" 
                tableau ={tableauBaby}
              />
              <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                <span>Le massage bébé en quelques mots</span>
              </motion.h3>
              <MassageBandeauThird/>
            </motion.div>
          </InView>

          <InView onChange={(inView, entry)=> inView && setFourthInView(true)} >
            <motion.div variants={slideFromRight} initial='initial' animate={fourthInView? "animate":""} className="service">
              <PrestationLayout
                imgUrl="/images/175659034_364152124945419_4032164191564889065_n.jpg"
                bgPosition="10%" 
                titre="Massage personnalisé" 
                tableau = {tableauPerso}/>
            </motion.div>
          </InView>
            
          <InView onChange={(inView, entry)=> inView && setFifthInView(true)}>
            <motion.div variants={slideFromRight} initial='initial' animate={fifthInView? "animate":""} className="service" ref={pieds}>
              <PrestationLayout
                imgUrl="/images/woman-getting-foot-massage.jpg"
                bgPosition="10%" 
                titre="Réflexologie plantaire" 
                tableau = {tableauPieds}/>
                <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                <span>La réflexologie en quelques mots</span>
              </motion.h3>
              <MassageBandeauFifth/>
            </motion.div>
          </InView>          
          
          <div className="page-container">
            <InView onChange={(inView, entry)=> inView && setSixthInView(true)}>
              <motion.div variants={slideFromRight} initial='initial' animate={sixthInView? "animate":""} className="service" ref={yoga}>
                <PrestationLayout
                  imgUrl = "/images/yoga.jpg"
                  bgPosition="10%"
                  titre = "Hata yoga"
                  tableau = {tableauYoga}/>
              </motion.div>
            </InView>

            <InView onChange={(inView, entry)=> inView && setSeventhInView(true)}>
              <motion.div variants={slideFromRight} initial='initial' animate={seventhInView? "animate":""} className="service" id="events">
                <PrestationLayout
                  imgUrl = "/images/party.jpg"
                  bgPosition="10%"
                  titre = "Evènements"
                  tableau = {tableauEvents} />
              </motion.div>
            </InView>
          </div> 
          <HomeCurveSeparation 
            texte="Prendre RDV en ligne" 
            lien="https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.planity.com%2Fbauxt-des-sens-13200-arles%3Ffbclid%3DIwAR0mHzOv6Id9JEcrDOerYfTdaKOQPOPHv39WeCWhwdVyeUQ1hbV9LQywoEM&h=AT0tItrGZoTuzeOZgdTfjYJmHMkKcS17CtbD9pvoL4WFUJh166TB4jzzvgjvSI2oYhMdp-RU2pS27z6QfCRb3Gq7polaLejUxAeEmzWb4Nw3K6qSeD1qFS1kzaHXJWFSdzrRvpzVT9_eG0VCfr0" margin="0px 0px 75px" 
            target="_blank"/>
          <Footer/>
        </div>

      </DivWrapper>
    </div>
  );
}

const DivWrapper = styled.div`
  background-color: #798a94;
  min-height: 100%;

  .small-screen {
    display: none;
    padding-top: 40px;
  }
  /* .big-screen{

    margin:0px 0px 35vh;
    padding: 0;
  
  } */

  /* @media (max-width : 1440px){
    .big-screen{
      margin:0px 0px 31vh;
      padding: 0;
    } 
  }
  @media (max-width : 1368px){
    .big-screen{
      margin:0px 0px 72vh;
      padding: 0;
    } 
  } */

  @media (max-width : 1024px){
    .small-screen{
      display: block;
    }
    .big-screen{
      display: none;
    }
  }

  .warning, .crane{
    color: #898787;
    text-align: center;
    width: 75%;
    margin: 0px auto 175px;
    background-color: white;
    padding: 25px;
    border: 4px solid #898787;
    border-left: 15px solid #898787;
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
    font-style:italic;
    line-height: 3rem;
    font-size : 1.4rem;
  }
  
  .service {
    margin: 175px 0px;
    padding-top: 100px;
  }
   
  .footer-container{
    height: 620px;
  }

  .menu-container{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  
  .home-titles{
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    color: whitesmoke;
    font-size : 3.5rem;
    font-style : italic;
    font-weight: normal;
    margin: 75px 0px 100px;
    letter-spacing: 1px;
  }
  .footer-container{
    height: 100%;
  }
  h3.categorie{
    font-family: "Montserrat", sans-serif;  
    font-size: 1.4rem;
    text-align: left;
    letter-spacing: 1.5px;
    font-style: italic;
    margin-left: 50px;
    margin-top: 0px;

    span{
      background-color: rgb(240,248,255, 0.8);
      padding: 5px 10px;
      color: #64737d;
      border: 4px double #90857d;
    }
  }

@media (max-width: 1024px){
  .service {
    width: 100%;
  }
}

@media (max-width: 650px){
  h3.categorie {
    width: 100%;
    font-size: 0.9rem;
    margin-left:0px;
  }
  
}


`

export default prestations;