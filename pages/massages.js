import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../components/footer";
import MassageBandeauFifth from "../components/massagebandeaufifth";
import MassageBandeauFirst from "../components/massagebandeaufirst";
import MassageBandeauFourth from "../components/massagebandeaufourth";
import MassageBandeauSecond from "../components/massagebandeausecond";
import MassageBandeauThird from "../components/massagebandeauthird";
import MenuHead from "../components/menuhead";
import MomentumScrollProvider from "../context/MomentumScrollContext";


const massages = ({sound, changeSound}) => {

  const [scrollToPosition, setScrollToPosition] = useState(0)

  const contactfooter = useRef(null)
  const bougie = useRef(null) 
  const babymassage = useRef(null)
  const yoga = useRef(null) 
  const intuitif = useRef(null)
  const pieds = useRef(null)
  const crane = useRef(null)

  const history = useRouter()
  const {asPath} = history
  const arrayPath = asPath.split("#")


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


  return (
    <div>
      <Head>
        <title>Baux't des sens | Type de massages et spécialités</title>
      </Head>
        
      <PageWrapper>
        <motion.div className="menu-container" initial={{opacity: 0}} animate={{opacity:1}} transition={{opacity : {delay:1.5}}}>
          <MenuHead/>
        </motion.div>

        <MomentumScrollProvider easing={0.075}>
          <div id='super-container' className='super-container'>
            <div className="items" id="intuitif" ref={intuitif} >
              <MassageBandeauFirst/> 
            </div>
            <div className="items" id="crane" ref={crane}>
              <MassageBandeauSecond/> 
            </div>
            <div className="items" id="babymassage" ref={babymassage}>
              <MassageBandeauThird/> 
            </div>
            <div className="items" id="bougie" ref={bougie}>
              <MassageBandeauFourth/>
            </div>
            <div className="items" id="pieds" ref={pieds}>
              <MassageBandeauFifth/>
            </div>
          </div>
          <div className="footer-container">
            <Footer/>
          </div> 
        </MomentumScrollProvider>
      </PageWrapper>     
    </div>
  );
}


const PageWrapper = styled.div`
  height: auto;
  overflow : hidden;
  position: relative;
  background-color: #798a94;

  .icone-container{
    z-index:15; 
    position:fixed; 
    bottom:20px; 
    left:10px;
    background-color: grey;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
          
    i{
      color:white;
    }
 
  }

  div#super-container{
    position : relative;
    height: 100%;
  }
  .massages-titles{
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    color: whitesmoke;
    font-size : 3rem;
    font-style : italic;
    font-weight: normal;
    margin: 25px 0px;
  }
  .menu-container{
    position: fixed;
    top : 0;
    left : 0;
    z-index: 10;
    opacity: 1;
  }
  .section-container{
    padding: 25px
  }
  .footer-container{
    height: 100%;
  }
`

export default massages;