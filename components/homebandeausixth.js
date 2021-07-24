import { motion, useAnimation } from "framer-motion";
import { Children, useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import { titleAnimation } from "../utils";

const HomeBandeauSixth = () => {
  const [titleInView, setTitleInview] = useState(false);

  const controls = useAnimation()

  const tableauAvis = ["temoin1", "temoin2", "temoin3", "temoin4", "temoin5", "temoin6", "temoin7"]

  useEffect(() => {
    if(titleInView){
      controls.start("appear")
      controls.start("animate")
    }
  }, [controls, titleInView])

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
      <InView className="container-page" onChange={(inView, entry)=> setTitleInview(inView)} >
        <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate={controls} >
          Baux't des sens, c'est encore les autres qui en parlent le mieux...
        </motion.h2>
        <motion.div className="grid-container" variants={parentAvis} initial="initial" animate={controls}>
          {
            tableauAvis.map((avis, idx)=>
            <motion.div variants={childAvis} className="avis" key={idx}>
              <img src={`/images/${avis}.jpg`} width="300" />
            </motion.div>
          )
          }
        </motion.div>
        <h2 className='home-titles' style={{textAlign:"right", fontSize:'1.75rem'}} >Merci à eux pour leur confiance !</h2>
      </InView>
    </BandeauSection>
  );
}

const BandeauSection = styled.section`
  .container-page{
    padding: 25px;
    overflow-x : hidden;

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
  @keyframes bubble{
    0%{
      transform: scale(1.01);
    }
    50%{
      transform: scale(0.99)
    }
    100%{
      transform: scale(1.01);
    }
  }
`

export default HomeBandeauSixth;