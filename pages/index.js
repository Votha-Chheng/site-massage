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
import { motion } from 'framer-motion'
import HomeBandeauThird from '../components/homebandeauthird'
import HomeBandeauFourth from '../components/homebandeaufourth'
import HomeBandeauFifth from '../components/homebandeaufifth'
import HomeBandeauSixth from '../components/homebandeausixth'
import MenuHead from '../components/menuhead'


export default function Home() {
  const [sound, setSound] = useState(false)
  const [clicked, setClicked] = useState(false)

  const menuRef = useRef(null)
  const audioRef = useRef(null)
  
  const firstClikHandler = ()=>{
    audioRef.current.play()
    setClicked(true)
  }

  const pauseHandler = ()=>{
    audioRef.current.pause()
  }

  return (
    <div>
      <Head>
        <title>Baux't des sens | Massage à domicile</title>
      </Head>
        
      <Wrapper>
        <audio src="/KaiEngel-Maree.mp3" ref={audioRef}/>
        <div className="icone-container" onClick={()=>setSound(prev=>!prev)}>
          <i className="fas fa-volume-up fa-2x" style={{display :`${sound ? "block" :"none"}`}} onClick={()=>pauseHandler()}/>
          <i className="fas fa-volume-mute fa-2x" style={{display :`${!sound ? "block" :"none"}`}} onClick={()=>firstClikHandler()}/>
          <div className="point-music" style={{display:`${clicked? "none" : "flex"}`}}>
            <img src="/images/arrow-left-svgrepo-com.svg" width="32" />
            <small>Mettre la musique</small>
          </div>
          
        </div>
        <motion.div ref={menuRef} className="menu-container" initial={{opacity: 0}} animate={{opacity:1}} transition={{opacity : {delay:8.5}}}>
          <MenuHead/>
        </motion.div>

        <MomentumScrollProvider easing={0.075}>
          <div id='super-container' className='super-container'> 
            <HomeBandeauFirst/> 

            <HomeBandeauSecond/>
            <HomeBandeauThird/>
            <HomeBandeauFourth/>
            <HomeBandeauFifth/>
            <HomeBandeauSixth/>
          </div>
          <div className="footer-container">
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

  div#super-container{
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
    height: 100%;
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