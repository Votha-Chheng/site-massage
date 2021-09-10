import { motion } from "framer-motion";
import styled from "styled-components";
import { titleAnimation } from "../utils";

const Diplomes = () => {
  const variantsAppear = {
    start: {},
    fadeIn : {
      transition: {
        staggerChildren : 0.25,
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
        Mes diplômes & formations
      </motion.h2>
      <motion.ul variants={variantsAppear} initial="start" animate="fadeIn"  >
        <motion.li variants={variantsChildren}><i className="fas fa-user-graduate"/> Certificat d'aptitude professionnelle en esthétique, cosmétique, parfumerie</motion.li>
        <motion.li variants={variantsChildren}><i className="fas fa-user-graduate"/> Certification de spécialisation des soins du corps</motion.li>
        <motion.li variants={variantsChildren}><i className="fas fa-user-graduate"/> Formations en &Eacute;tirements et Mobilisations Articulaires</motion.li>
      </motion.ul>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
margin-bottom: 150px;

  li{
    list-style: none;
    font-size: 1.75rem;
    color: #797067;
    margin: 20px 0px;
    padding: 15px;
    border: 2px double #797067;
    background-color: whitesmoke;
    width: 75%;
    font-family: "Montserrat", sans-serif;
    font-style: italic;
    line-height: 2.5rem;
  }
  
`

export default Diplomes;