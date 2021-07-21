import { motion } from "framer-motion";
import Head from "next/head";
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
  return (
    <div>
      <Head>
        <title>Baux't des sens | Type de massages</title>
      </Head>
        
      <PageWrapper>
        <div className="icone-container" onClick={()=>changeSound()}>
          <i className="fas fa-volume-up fa-2x" style={{display :`${sound ? "block" :"none"}`}}/>
          <i className="fas fa-volume-mute fa-2x" style={{display :`${!sound ? "block" :"none"}`}}/>
        </div>
        <motion.div className="menu-container" initial={{opacity: 0}} animate={{opacity:1}} transition={{opacity : {delay:1.5}}}>
          <MenuHead/>
        </motion.div>

        <MomentumScrollProvider easing={0.075}>
          <div id='super-container' className='super-container'>
            <MassageBandeauFirst/> 
            <MassageBandeauSecond/>  
            <MassageBandeauThird/>   
            <MassageBandeauFourth/>
            <MassageBandeauFifth/>
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
`

export default massages;