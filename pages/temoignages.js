import { motion } from "framer-motion";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/footer";
import MenuHead from "../components/menuhead";
import Partenaires from "../components/partenaires";
import MomentumScrollProvider from "../context/MomentumScrollContext";
import { titleAnimation } from "../utils";

const temoignages = () => {

  const tableauAvis = ["temoin1", "temoin2", "temoin3", "temoin4", "temoin5", "temoin6", "temoin7"]

  const parentAvis = {
    initial : {

    },
    animate: {
      transition: {
        delayChildren: 0.8,
        staggerChildren : 0.2
      }
    }
    
  }
  const childAvis = {
    initial : {
      opacity: 0,
      y: 300
    },
    animate: {
      opacity: 1,
      y:0,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  }
  return (
    <div>
      <Head>
        <title>Baux't des sens | Témoignages, partenaire, livre d'or</title>
      </Head>

      <PageWrapper>
        <div className="menu-container">
          <MenuHead/>
        </div>

        <div className="big-screen">
          <MomentumScrollProvider easing={0.075}>
            <div className="container-page">
              <Partenaires/>
              <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
                Baux't des sens, c'est encore les autres qui en parlent le mieux...
              </motion.h2>
              <motion.div className="grid-container" variants={parentAvis} initial="initial" animate="animate">
                {
                  tableauAvis.map((avis, idx)=>
                    <motion.div variants={childAvis} className="avis" key={idx}>
                      <img src={`/images/${avis}.jpg`} width="300"/>
                    </motion.div>
                  )
                }
              </motion.div>
              <h2 className='home-titles' style={{textAlign:"right", fontSize:'1.75rem'}} >
                Merci infiniment à eux et à tous les autres pour leur confiance !
              </h2>
              <div>
                <Footer/>  
              </div>
                
            </div>
          </MomentumScrollProvider>
        </div>

        <div className="small-screen">
          <div className="container-page">
            <Partenaires/>
            <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
              Baux't des sens, c'est encore les autres qui en parlent le mieux...
            </motion.h2>
            <motion.div className="grid-container" variants={parentAvis} initial="initial" animate="animate">
              {
                tableauAvis.map((avis, idx)=>
                  <motion.div variants={childAvis} className="avis" key={idx}>
                    <img src={`/images/${avis}.jpg`} width="300" loading="lazy" />
                  </motion.div>
                )
              }
            </motion.div>
            <h2 className='home-titles' style={{textAlign:"right", fontSize:'1.75rem'}} >
              Merci infiniment à eux et à tous les autres pour leur confiance !
            </h2>
            <Footer/>    
          </div>
        </div>
      </PageWrapper> 
    </div>
  );
}

const PageWrapper = styled.div`
  min-height: 3170px;
  overflow : hidden;
  position: relative;
  background-color: #798a94;
  width: 100%;

  @media (max-width : 1680px){
    min-height: 3122px;
  }

  @media (max-width : 1440px){
    min-height: 3526px;
  }
  @media (max-width : 1360px){
    min-height: 3782px;
  }
  @media (max-width : 1152px){
    min-height: 4075px;
  }


  .small-screen {
    display: none;
  }
  .big-screen{
    display: block;
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

  .grid-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 0px;
    min-height : 250px;

    .avis{
      padding: 10px;
      background-color:whitesmoke;
      margin: 15px;
      transition: background-color 0.1s ease-out;

      &:hover{
        background-color: transparent;
      }

      img{
        transition: transform 0.3s ease-out;
      }
      
      img:hover{
        transform: scale(1.2);
      }
    }
  }
  @media (max-width: 920px){
    .container-page{
      //margin-bottom: 400px;
    }
    
  }
`

export default temoignages;