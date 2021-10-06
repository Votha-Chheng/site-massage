import { motion } from "framer-motion";
import styled from "styled-components";
import { titleAnimation } from "../utils";

const Partenaires = () => {
  const variantsAppear = {
    start: {},
    fadeIn : {
      transition: {
        staggerChildren : 0.15,
        delayChildren : 0.5
      }   
    }
  }
  const variantsChildren = {
    start: {
      opacity : 0
    },
    fadeIn : {
      opacity : 1,
    }   
  }
  return (
    <SectionWrapper>
      <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
        Ils font appel à mes services
      </motion.h2>
      <motion.ul variants={variantsAppear} initial="start" animate="fadeIn">
        <motion.li variants={variantsChildren}>
          <img src="/images/chabran.jpg" width="360" alt="logo chabran"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/manville.jpg" width="320" alt="logo manville"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/bellesso.jpg" width="360" alt="logo hôtel belesso"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/maison_variétés.jpg" width="360" alt="logo maison des variétés"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/mas_valentine.jpg" width="320" alt="logo mas valentine"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/baumaniere.jpg" width="360" alt="logo baumanière"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/vr.jpg" width="300" alt="logo vr"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/mas_des_fees.png" width="360" alt="logo mas des fées"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/mas-couvin-logo.png" width="360" alt="logo mas du couvin"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <img src="/images/collectionist.jpg" width="360" alt="logo collectionist"/>
        </motion.li>
        <motion.li variants={variantsChildren}>
          <a href="https://www.myhomeconnexion.com/" target="_blank">
            <img src="/images/home_connexion.jpg" width="300" alt="logo home connexion.jpg"/>
          </a> 
          <small>(Cliquez sur le logo)</small>       
        </motion.li>
      </motion.ul>
    </SectionWrapper>

  );
}
const SectionWrapper = styled.section`
padding-bottom: 15vh;

  ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    padding: 0;
    align-items: center;
  }
  li{
    list-style: none;
    margin: 20px;
    padding: 0;
    

    &:last-child {
      display: flex;
      flex-direction: column;
      align-items: center;
      
    }
    a{
      transition: all 0.25s ease-out;
      &:hover{
        box-shadow : 0 0 20px whitesmoke;
      }
    }
  }
`
export default Partenaires;