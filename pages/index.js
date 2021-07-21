import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import useWindowSize from '../hooks/useWindowSize'
import useScrollDirection from '../hooks/useScrollDirection'
import {useRouter} from 'next/router'
import {InView} from 'react-intersection-observer'
import Footer from '../components/footer'
import HomeBandeauFirst from '../components/homebandeaufirst'
import HomeBandeauSecond from '../components/homebandeausecond'
import MomentumScrollProvider from '../context/MomentumScrollContext'
import Menu from '../components/Menu'
import { motion } from 'framer-motion'
import HomeBandeauThird from '../components/homebandeauthird'
import HomeBandeauFourth from '../components/homebandeaufourth'
import HomeBandeauFifth from '../components/homebandeaufifth'
import HomeBandeauSixth from '../components/homebandeausixth'

export default function Home({sound, changeSound}) {

  //const [sound, setSound] = useState(true)

  const menuRef = useRef(null)
  const footerRef = useRef(null)


  return (
    <div>
      <Head>
        <title>Baux't des sens | Massage à domicile</title>
      </Head>
        
      <Wrapper>
        <div className="icone-container" onClick={()=>changeSound()}>
          <i className="fas fa-volume-up fa-2x" style={{display :`${sound ? "block" :"none"}`}}/>
          <i className="fas fa-volume-mute fa-2x" style={{display :`${!sound ? "block" :"none"}`}}/>
        </div>
        <motion.div ref={menuRef} className="menu" initial={{opacity: 0}} animate={{opacity:1}} transition={{opacity : {delay:8.5}}}>
          <Menu/>
        </motion.div>

        <MomentumScrollProvider easing={0.075}>
          <div id='super-container' className='super-container'>      
            <HomeBandeauFirst/>
            <HomeBandeauSecond/>
            <HomeBandeauThird/>
            <HomeBandeauFourth/>
            <HomeBandeauFifth/>
            <HomeBandeauSixth/>
            <Footer/>
          </div>
        </MomentumScrollProvider>
         
      </Wrapper>     
    </div>     
  )
}

const Wrapper = styled.div`
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
  .menu{
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
     
`