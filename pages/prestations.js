import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import HomeCurveSeparation from "../components/homecurveseparation";
import MenuHead from "../components/menuhead";
import PrestationLayout from "../components/prestationlayout";
import MomentumScrollProvider from "../context/MomentumScrollContext";

const prestations = () => {

  const [scrollToPosition, setScrollToPosition] = useState(0)
  const [clicked, setClicked] = useState(0)

  const contactfooter = useRef(null)
  const bougie = useRef(null) 
  const babymassage = useRef(null)
  const yoga = useRef(null) 
  const intuitif = useRef(null)
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
      setScrollToPosition(yoga.current.offsetTop)
    }
    if(arrayPath[1]==="intuitif"){
      setScrollToPosition(intuitif.current.offsetTop)
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
      description : "Idéal pour l'hiver, sensation de cocconing, profond relâchement. Massage ultra hydratant, idéal pour les peaux sèches."
    }
  ]

  const tableauBaby = [
    {
      service : "Massage bébé/maman (dès les premiers jours) ",
      temps : "variable",
      description : "Stimule le système immunitaire. Partagez un moment unique qui renforce le lien avec bébé."
    }
  ]

  const tableauPerso = [
    {
      service : "Massage personnalisé (zone spécifique possible)",
      temps : "variable",
      description : "Massage effectué selon vos demandes, pour un moment unique et sur mesure."
    }
  ]

  const tableauPieds = [
    {
      service : "Massage de la voûte plantaire",
      temps : "30min",
      description : "Dissipe les tensions, soulage certaines douleurs et rétablit l'équilibre du corps."
    }
  ]

  const tableauYoga = [
    {
      service : "Séance d'initiation au yoga hata",
      temps : "1h",
      description : "Cours en individuel ou en groupe. Les séance se déroulent à domicile ou en extérieur. "
    },
    {
      service : "Forfait yoga + massage",
      temps : "variable",
      description : " Quoi de mieux qu'une séance de yoga et de massage pour vivre son bien-être à fond ?"
    }
  ]

  const tableauEvents = [
    {
      service : "Evènements particuliers (EVG, anniversaire, carte cadeau, etc...)",
      temps : "variable",
      description : "N'hésitez pas à me contacter pour un service sur mesure lors de ces évènements importants."
    }
  ]


  return (   
    <div>
      <Head>
        <title>Baux't des sens | Prestations massages et yoga</title>
      </Head>

      <DivWrapper>
        <div className="menu-container">
          <MenuHead/>
        </div>

        <MomentumScrollProvider easing={0.075}>
          <div className="page-container">
            <h2 className="home-titles">Prestations proposées</h2>
            <div className="warning">
              Tous les tarifs seront communiqués sur demande. N'hésitez pas à me contacter pour savoir ce qui vous conviendrait le mieux !
            </div>

            <div className="service">
              <PrestationLayout
                imgUrl="/images/176246623_287598346073187_2645306858024130844_n.jpg" 
                bgPosition="10%" 
                titre="Les incontournables " 
                tableau ={tableauClassiques}
              />
            </div>
            
            <div className="service" ref={bougie}>
              <PrestationLayout
                imgUrl="/images/176187352_2922669511298633_3323829876291585340_n.jpg"
                bgPosition="10%" 
                titre="A la bougie" 
                tableau ={tableauBougie}
              />
            </div>

            <div className="service" ref={babymassage}>
              <PrestationLayout
                imgUrl="/images/175586104_139909494699792_3872593976078069092_n.jpg"
                bgPosition="10%" 
                titre="Pour bébé" 
                tableau ={tableauBaby}
              />
            </div>

            <div className="service" ref={intuitif}>
              <PrestationLayout
                imgUrl="/images/175659034_364152124945419_4032164191564889065_n.jpg"
                bgPosition="10%" 
                titre="Massage personnalisé (intuitif)" 
                tableau = {tableauPerso}
              />
            </div>

            <div className="service" ref={pieds}>
              <PrestationLayout
                imgUrl="/images/woman-getting-foot-massage.jpg"
                bgPosition="10%" 
                titre="Réflexologie plantaire" 
                tableau = {tableauPieds}
              />
            </div>

            <div className="crane" ref={crane}>
              Tous ces modelages se terminent évidement par un massage crânien (sauf avis contraire de votre part). Profitez-en !
            </div>
          </div>

          <HomeCurveSeparation texte="me contacter" lien="/prestations/#contactfooter" margin="0px 0px 50px" sclicked={clicked} />
          
          <div className="page-container">

            <div className="service" ref={yoga}>
              <PrestationLayout
                imgUrl = "/images/yoga.jpg"
                bgPosition="10%"
                titre = "Hata yoga"
                tableau = {tableauYoga}
              />
            </div>

            <div className="service" id="events">
              <PrestationLayout
                imgUrl = "/images/party.jpg"
                bgPosition="10%"
                titre = "Evènements"
                tableau = {tableauEvents}
              />
            </div>
          </div>    
          <div ref={contactfooter} className="footer-container" id="contactfooter">
            <Footer/>
          </div>          
        </MomentumScrollProvider>
      </DivWrapper>
    </div>
  );
}

const DivWrapper = styled.div`
  background-color: #798a94;
  height: 100%;

  .page-container{
    padding: 50px 25px;

    .crane{
      color: #ebebeb;
      text-align: center;
      font-size: 1.5rem;
      font-family: "Montserrat", sans-serif;
      line-height: 2rem;
      margin-bottom: 75px;
      font-style:italic;
      width: 75%;
      margin: 0 auto;
      margin-top: 50px;
    }
    .warning{
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
  }
  .service {
    margin: 175px 0px;
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


`

export default prestations;