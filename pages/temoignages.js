import { motion } from "framer-motion";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/footer";
import HomeBandeauSixth from "../components/homebandeausixth"
import HomeCurveSeparation from "../components/homecurveseparation";
import MenuHead from "../components/menuhead";
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
      y: 500
    },
    animate: {
      opacity: 1,
      y:0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }
  return (
    <div>
      <Head>
        <title>Baux't des sens | Témoignages, livre d'or</title>
      </Head>

      <PageWrapper>
        <div className="menu-container">
          <MenuHead/>
        </div>

        <MomentumScrollProvider easing={0.075}>
          <div className="container-page" >  
              <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
                Baux't des sens, c'est encore les autres qui en parlent le mieux...
              </motion.h2>
              <motion.div className="grid-container" variants={parentAvis} initial="initial" animate="animate">
                {
                  tableauAvis.map((avis, idx)=>
                    <motion.div variants={childAvis} className="avis" key={idx}>
                      <img src={`/images/${avis}.jpg`} width="300" />
                    </motion.div>
                  )
                }
              </motion.div>
            <h2 className='home-titles' style={{textAlign:"right", fontSize:'1.75rem'}} >Merci infiniment à eux et à tous les autres pour leur confiance !</h2>     
          </div>
          <div style={{zIndex:"10"}}>
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
  .container-page{
    padding: 25px;
    

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
        
        &:hover{
          transform: scale(1.4);
        }
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