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
import { titleAnimation } from "../utils";
import MassageBambous from "../components/massagebambous";

const prestations = () => {

  const [scrollToPosition, setScrollToPosition] = useState(0)
  const [firstInView, setFirstInView] = useState(false)
  const [secondInView, setSecondInView] = useState(false)
  const [thirdInView, setThirdInView] = useState(false)
  const [bambousInView, setBambousInView] = useState(false)
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
  const bambous = useRef(null)

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
    if(arrayPath[1]==="bambous"){
      setScrollToPosition(bambous.current.offsetTop)
    }
  },[arrayPath, history])

 

  useEffect(()=>{
    window.scrollTo(0, scrollToPosition)
  },[scrollToPosition])


  const tableauClassiques = [
    {
      service : "Massage Californien 60mn ",
      prix : "80",
      description : "Contribue ?? la relaxation, apaise le corps, lib??re les ??motions."
    },
    {
      service : "Massage Su??dois 60mn",
      prix : "80",
      description : "Tonifie et relaxe les muscles, favorise la circulation sanguine."
    }
  ]

  const tableauBougie = [
    {
      service : "Massage ?? la bougie 60mn",
      prix : "80",
      description : "Id??al pour l'hiver, sensation de cocooning, profond rel??chement. Massage ultra hydratant, id??al pour les peaux s??ches."
    }
  ]

  const tableauBaby = [
    {
      service : "Massage b??b??/maman (d??s les premiers jours) ",
      prix : "80",
      description : "Stimule le syst??me immunitaire. Partagez un moment unique qui renforce le lien avec b??b??. Massage ?? l'huile d'amande douce."
    },
    {
      service : "Massage future maman 60mn",
      prix : "80",
      description : "Pour les femmes enceintes, le massage permet de soulager les douleurs (dos, ??paules, jambes lourdes...) et de favoriser une meilleure circulation sanguine."
    }
  ]

  const tableauPerso = [
    {
      service : "Massage personnalis??",
      prix : "Tarif sur demande",
      description : "Massage effectu?? selon vos demandes, pour un moment unique et sur mesure."
    }
  ]

  const tableauPieds = [
    {
      service : "R??flexologie 30mn",
      prix : "35",
      description : "Dissipe les tensions, soulage certaines douleurs et r??tablit l'??quilibre du corps."
    }
  ]

  const tableauYoga = [
    {
      service : "Initiation au Hata yoga 60mn",
      prix : "Tarif sur demande",
      description : "Cours en individuel ou en groupe. Les s??ance se d??roulent ?? domicile ou en ext??rieur. "
    },
    {
      service : "Forfait yoga + massage",
      prix : "Tarif sur demande",
      description : " Quoi de mieux qu'une s??ance de yoga et de massage pour vivre son bien-??tre ?? fond ?"
    }
  ] 


  const tableauBambous = [
    {
      service : "Massage aux bambous 60mn",
      prix : "80",
      description : "En stimulant la circulation sanguine, le massage aux bambous permet d???assouplir les tissus et de drainer les toxines, tout en soulageant les douleurs musculo-articulaires. Contre-indications : voir ci-dessous."
    }
  ]
  const tableauEvents = [
    {
      service : "Ev??nements particuliers (EVG, anniversaire, carte cadeau, etc...)",
      prix : "Tarif sur demande",
      description : "N'h??sitez pas ?? me contacter pour un service sur mesure lors de ces ??v??nements importants."
    }
  ]

  //Animations
  const slideFromRight = {
    initial :{
      opacity : 0,
      x:"-10%"
    },
    animate : {
      opacity : 1,
      x:0,
      transition: {
        duration:0.5,
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
            <div>
              <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >Prestations propos??es</motion.h2>
              {/* <motion.div className="warning" variants={opacityBandeau} initial="initial" animate="animate" >
                Tous les tarifs seront communiqu??s sur demande. N'h??sitez pas ?? me contacter pour savoir ce qui vous conviendrait le mieux !
              </motion.div> */}

              <motion.div variants={slideFromRight} initial='initial' animate={firstInView? "animate":""} className="service" ref={classiques}>
                <PrestationLayout
                  //imgUrl="/images/176246623_287598346073187_2645306858024130844_n.jpg" 
                  
                  bgPosition="10%" 
                  titre="Les Incontournables" 
                  tableau ={tableauClassiques}/>
                <InView className="marker" onChange={(inView, entry)=> inView && setFirstInView(true)}/>  
              </motion.div>
                <motion.div variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="service" ref={bougie}>
                  <PrestationLayout
                    imgUrl="/images/176187352_2922669511298633_3323829876291585340_n.jpg"
                    bgPosition="10%" 
                    titre="A la bougie" 
                    tableau ={tableauBougie}/>              
                  <InView className="marker" onChange={(inView, entry)=> inView && setSecondInView(true)} />
                  <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                    <span>Le soin ?? la bougie en quelques mots</span>
                  </motion.h3>
                  <MassageBandeauFourth/>
                </motion.div>

              
                <motion.div variants={slideFromRight} initial='initial' animate={thirdInView? "animate":""} className="service" ref={babymassage}>
                  <PrestationLayout
                    imgUrl="/images/175586104_139909494699792_3872593976078069092_n.jpg"
                    bgPosition="10%" 
                    titre="Pour b??b??" 
                    tableau ={tableauBaby}
                  />
                  <InView className="marker" onChange={(inView, entry)=> inView && setThirdInView(true)} />
                  <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                    <span>Le massage b??b?? en quelques mots</span>
                  </motion.h3>
                  <MassageBandeauThird/>
                </motion.div>

                <motion.div variants={slideFromRight} initial='initial' animate={bambousInView? "animate":""} className="service">
                  <PrestationLayout
                    imgUrl="/images/massage-bambous.jpg"
                    bgPosition="10%" 
                    titre="Massage aux bambous" 
                    tableau = {tableauBambous}/>
                  <InView className="marker" onChange={(inView, entry)=> inView && setBambousInView(true)} />
                  <motion.h3 variants={slideFromRight} initial='initial' animate={bambousInView? "animate":""} className="categorie">
                    <span>Le massage bambou en quelques mots</span>
                  </motion.h3>
                  <MassageBambous/>
                </motion.div>

                <motion.div variants={slideFromRight} initial='initial' animate={fourthInView? "animate":""} className="service">
                  <PrestationLayout
                    imgUrl="/images/175659034_364152124945419_4032164191564889065_n.jpg"
                    bgPosition="10%" 
                    titre="Massage personnalis??" 
                    tableau = {tableauPerso}/>
                  <InView className="marker" onChange={(inView, entry)=> inView && setFourthInView(true)} />
                </motion.div>
                
                <motion.div variants={slideFromRight} initial='initial' animate={fifthInView? "animate":""} className="service" ref={pieds}>
                  <PrestationLayout
                    imgUrl="/images/woman-getting-foot-massage.jpg"
                    bgPosition="10%" 
                    titre="R??flexologie plantaire" 
                    tableau = {tableauPieds}
                  />
                  <InView className="marker" onChange={(inView, entry)=> inView && setFifthInView(true)}/>
                  <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                    <span>La r??flexologie en quelques mots</span>
                  </motion.h3>
                  <MassageBandeauFifth/>
                </motion.div>       
              
              <div className="page-container">
                
                  <motion.div variants={slideFromRight} initial='initial' animate={sixthInView? "animate":""} className="service" ref={yoga}>
                    <PrestationLayout
                      imgUrl = "/images/yoga.jpg"
                      bgPosition="10%"
                      titre = "Hata yoga"
                      tableau = {tableauYoga}/>
                    <InView className="marker" onChange={(inView, entry)=> inView && setSixthInView(true)}/>
                  </motion.div>

                  <motion.div variants={slideFromRight} initial='initial' animate={seventhInView? "animate":""} className="service" id="events">
                    <PrestationLayout
                      imgUrl = "/images/party.jpg"
                      bgPosition="10%"
                      titre = "Ev??nements"
                      tableau = {tableauEvents} />
                  <InView className="marker" onChange={(inView, entry)=> inView && setSeventhInView(true)}/>
                  </motion.div>
              </div> 
              <HomeCurveSeparation 
                texte="Prendre RDV" 
                lien="tel:0616838962" 
                margin="0px 0px 75px" 
                target=""/>   
              <Footer/>   
            </div>   
          </MomentumScrollProvider>
        </div>





        <div className="small-screen">
          <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >Prestations propos??es</motion.h2>
          {/* <motion.div className="warning" variants={opacityBandeau} initial="initial" animate="animate" >
            Tous les tarifs seront communiqu??s sur demande. N'h??sitez pas ?? me contacter pour savoir ce qui vous conviendrait le mieux !
          </motion.div> */}

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
                <span>Le soin ?? la bougie en quelques mots</span>
              </motion.h3>
              <MassageBandeauFourth/>
            </motion.div>
          </InView>

          <InView onChange={(inView, entry)=> inView && setThirdInView(true)} >
            <motion.div variants={slideFromRight} initial='initial' animate={thirdInView? "animate":""} className="service" ref={babymassage}>
              <PrestationLayout
                imgUrl="/images/175586104_139909494699792_3872593976078069092_n.jpg"
                bgPosition="10%" 
                titre="Pour b??b??" 
                tableau ={tableauBaby}
              />
              <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                <span>Le massage b??b?? en quelques mots</span>
              </motion.h3>
              <MassageBandeauThird/>
            </motion.div>
          </InView>

          <motion.div variants={slideFromRight} initial='initial' animate={bambousInView? "animate":""} className="service">
            <PrestationLayout
              imgUrl="/images/massage-bambous.jpg"
              bgPosition="10%" 
              titre="Massage aux bambous" 
              tableau = {tableauBambous}/>
            <InView className="marker" onChange={(inView, entry)=> inView && setBambousInView(true)} />
            <motion.h3 variants={slideFromRight} initial='initial' animate={bambousInView? "animate":""} className="categorie">
              <span>Le bambou en quelques mots</span>
            </motion.h3>
            <MassageBambous/>
          </motion.div>

          <InView onChange={(inView, entry)=> inView && setFourthInView(true)} >
            <motion.div variants={slideFromRight} initial='initial' animate={fourthInView? "animate":""} className="service">
              <PrestationLayout
                imgUrl="/images/175659034_364152124945419_4032164191564889065_n.jpg"
                bgPosition="10%" 
                titre="Massage personnalis??" 
                tableau = {tableauPerso}/>
            </motion.div>
          </InView>
            
          <InView onChange={(inView, entry)=> inView && setFifthInView(true)}>
            <motion.div variants={slideFromRight} initial='initial' animate={fifthInView? "animate":""} className="service" ref={pieds}>
              <PrestationLayout
                imgUrl="/images/woman-getting-foot-massage.jpg"
                bgPosition="10%" 
                titre="R??flexologie plantaire" 
                tableau = {tableauPieds}/>
                <motion.h3 variants={slideFromRight} initial='initial' animate={secondInView? "animate":""} className="categorie">
                <span>La r??flexologie en quelques mots</span>
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
                  titre = "Ev??nements"
                  tableau = {tableauEvents} />
              </motion.div>
            </InView>
          </div> 
          <HomeCurveSeparation 
            texte="Prendre RDV" 
            lien="tel:0616838962" 
            margin="0px 0px 75px" 
            target=""/>
          <Footer/>
        </div>

      </DivWrapper>
    </div>
  );
}

const DivWrapper = styled.div`
  background-color: #798a94;
  /* min-height: 9220px;

  @media (max-width : 1680px){
    min-height: 9220px !important;
  }
  @media (max-width : 1600px){
    min-height: 9300px !important;
  }
  @media (max-width : 1440px){
    min-height: 9510px !important;
  }
  @media (max-width : 1360px){
    min-height: 9540px !important;
  }
  @media (max-width : 1190px){
    min-height: 9660px !important;
  } */
  
  .small-screen {
    display: none;
    padding-top: 40px;
  }


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

  .flex-1 {
    border-bottom: none;
  }
  
  .service {
    margin: 175px 0px;
    padding-top: 10px;
    position: relative;

    .marker{
      position: absolute;
      left: 0;
      width: 100%;
      height: 2px;
      top: 300px;
    }
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
    font-size: 2rem;
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
    line-height:2.5rem;
    font-size: 1.2rem;
    margin-left:0px;
    letter-spacing:0;
  }
  
}


`

export default prestations;