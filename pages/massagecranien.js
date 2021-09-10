import { motion } from "framer-motion";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/footer";
import HomeCurveSeparation from "../components/homecurveseparation";
import MassageBandeauSecond from "../components/massagebandeausecond";
import MenuHead from "../components/menuhead";
import MomentumScrollProvider from "../context/MomentumScrollContext";

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
        <div className="big-screen">
          <MomentumScrollProvider easing={0.075}>
            <div>
              <MassageBandeauSecond/>
              <HomeCurveSeparation texte="voir tous mes massages" delay="0.2" buttonDelay="1" lien="/prestations" margin="0 auto 100px" />
              <Footer/>
            </div>

          </MomentumScrollProvider>
        </div>
        <div className="small-screen">
          <MassageBandeauSecond/>
          <HomeCurveSeparation texte="voir tous mes massages" delay="0.2" buttonDelay="1" lien="/prestations" margin="0 auto 100px" />
          <Footer/>
        </div>
      </PageWrap>
    </div>
    
  );
}

const PageWrap = styled.section`
  height: 2655px;
  overflow : hidden;
  position: relative;
  background-color: #798a94;

  @media (max-width : 1680px){
    min-height: 2562px;
  }
  @media (max-width : 1600px){
    min-height: 2700px;
  }
  @media (max-width : 1440px){
    min-height: 2715px;
  }
  @media (max-width : 1360px){
    min-height: 2700px;
  }
  @media (max-width : 1280px){
    min-height: 2720px;
  }
  @media (max-width : 1152px){
    min-height: 2770px;
  }

  .small-screen{
      display: none;
    }

  @media (max-width : 1024px){
    .small-screen{
      display: block;
    }
    .big-screen{
      display: none;
    }
  }

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