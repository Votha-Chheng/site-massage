import Head from 'next/head'
import { useRef } from 'react'
import styled from 'styled-components'
import Footer from '../components/footer'
import HomeBandeauFirst from '../components/homebandeaufirst'
import HomeBandeauSecond from '../components/homebandeausecond'
import MomentumScrollProvider from '../context/MomentumScrollContext'
import { motion } from 'framer-motion'
import HomeBandeauThird from '../components/homebandeauthird'
import HomeBandeauFourth from '../components/homebandeaufourth'
import HomeBandeauFifth from '../components/homebandeaufifth'
import MenuHead from '../components/menuhead'
import MassageBandeauFirst from '../components/massagebandeaufirst'


export default function Home() {

  const menuRef = useRef(null)
  
  return (
    <div>
      <Head>
        <title>Baux't des sens | Massage à domicile et Yoga Arles Alpilles</title>
      </Head>
        
      <Wrapper>
        <motion.div ref={menuRef} className="menu-container" initial={{opacity: 0}} animate={{opacity:1}} transition={{opacity : {delay:8.5}}}>
          <MenuHead/>
        </motion.div>
        <div className="big-screen">
          <MomentumScrollProvider easing={0.075}>
            <div id='super-container' className='super-container'> 
              <HomeBandeauFirst/> 
              <HomeBandeauSecond/>
              <HomeBandeauThird/>
              <MassageBandeauFirst/>
              <HomeBandeauFourth/>
              <HomeBandeauFifth/> 
              <Footer/>  
            </div>
          </MomentumScrollProvider>
        </div>
        <div className="small-screen">
          <div id='super-container' className='super-container'> 
            <HomeBandeauFirst/> 
            <HomeBandeauSecond/>
            <HomeBandeauThird/>
            <MassageBandeauFirst/>
            <HomeBandeauFourth/>
            <HomeBandeauFifth/> 
            <Footer/> 
          </div>
        </div>
      </Wrapper>     
    </div>     
  )
}

const Wrapper = styled.div`
  overflow : hidden;
  position: relative;
  background-color: #798a94;
  min-height: 7120px;

  @media (max-width : 1680px){
    min-height: 7185px;
    
  }
  @media (max-width : 1600px){
    min-height: 7265px;
  }
  @media (max-width : 1440px){
    min-height: 7290px;
  }
  @media (max-width : 1360px){
    min-height: 7324px; 
  }
  @media (max-width : 1280px){
    min-height: 7490px; 
  }
  @media (max-width : 1152px){
    min-height: 7608px !important;
  }

  .small-screen {
    display: none;
  }

  @media (max-width : 1024px){
    .small-screen{
      display: block;
      height : 100% !important;
    }
    .big-screen{
      display: none;
    }
  }

  .point-music{
    position: absolute;
    top: 0;
    left: 60px;
    display: flex;

    small{
      padding-left: 10px;
      font-size: 1.1rem;  
      font-style: italic;
      color: whitesmoke;
    }
    img {
      animation: leftAndRight ease-in-out 1.5s infinite;
    }
  }

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

  #super-container{
    position : relative;
    height: 100%;
  }
  .menu-container{
    position: fixed;
    top : 0;
    left : 0;
    z-index: 10;
    opacity: 1;
  }

  .home-titles{
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    color: whitesmoke;
    font-size : 3rem;
    font-style : italic;
    font-weight: normal;
    margin: 25px 0px;
  }

  .footer-container{
    height: 650px;
  }
  @keyframes leftAndRight{
    0%{
      transform: translate(8px);
    }
    50%{
      transform: translate(-3px);
    }
    100%{
      transform: translate(8px);
    }
  }
     
`