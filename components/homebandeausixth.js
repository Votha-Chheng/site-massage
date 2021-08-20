import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import { titleAnimation } from "../utils";

const HomeBandeauSixth = () => {

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
    <BandeauSection>
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
    </BandeauSection>
  );
}

const BandeauSection = styled.section`
  overflow : hidden;

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
    margin-bottom: 800px;
  }
`

export default HomeBandeauSixth;