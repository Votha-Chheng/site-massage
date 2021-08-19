import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import Footer from "../components/footer";
import HomeCurveSeparation from "../components/homecurveseparation";
import MassageBandeauSecond from "../components/massagebandeausecond";
import MenuHead from "../components/menuhead";
import MomentumScrollProvider from "../context/MomentumScrollContext";
import { opacityBandeau } from "../utils";

const massagecranien = () => {

  return (
    <div>
      <Head>
        <title>Baux't des sens | Le massage crânien</title>
      </Head>

      <PageWrap>
        <motion.div className="menu-container" initial={{opacity: 0}} animate={{opacity:1}} transition={{opacity : {delay:1.5}}}>
          <MenuHead/>
        </motion.div>
        <MomentumScrollProvider easing={0.075}>
          <MassageBandeauSecond/>
          <HomeCurveSeparation texte="voir tous mes massages" delay="0.2" buttonDelay="1" lien="/prestations" margin="0 auto 100px" />
          <Footer/>
        </MomentumScrollProvider>
      </PageWrap>
    </div>
    
  );
}

const PageWrap = styled.section`
  height: auto;
  overflow : hidden;
  position: relative;
  background-color: #798a94;

  .menu-container{
    position: fixed;
    top : 0;
    left : 0;
    z-index: 10;
    opacity: 1;
  }
  .crane{
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
`


export default massagecranien;