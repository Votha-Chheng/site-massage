import { motion } from "framer-motion";
import styled from "styled-components";
import { titleAnimation } from "../utils";

const Partenaires = () => {
  return (
    <SectionWrapper>
      <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >
        Ils ont fait appel à mes services...
      </motion.h2>
      <ul>
        <li>
          <img src="/images/chabran.jpg" width="360" alt="logo chabran"/>
        </li>
        <li>
          <img src="/images/manville.jpg" width="320" alt="logo manville"/>
        </li>
        <li>
          <img src="/images/bellesso.jpg" width="360" alt="logo hôtel belesso"/>
        </li>
        <li>
          <img src="/images/maison_variétés.jpg" width="360" alt="logo maison des variétés"/>
        </li>
        <li>
          <img src="/images/mas_valentine.jpg" width="320" alt="logo mas valentine"/>
        </li>
        <li>
          <img src="/images/baumaniere.jpg" width="360" alt="logo baumanière"/>
        </li>
        <li>
          <img src="/images/vr.jpg" width="300" alt="logo vr"/>
        </li>
        <li>
          <img src="/images/mas_des_fees.png" width="360" alt="logo mas des fées"/>
        </li>
        <li>
          <img src="/images/mas-couvin-logo.png" width="360" alt="logo mas du couvin"/>
        </li>
        <li>
          <img src="/images/collectionist.jpg" width="360" alt="logo collectionist"/>
        </li>
        <li>
          <img src="/images/home_connexion.jpg" width="300" alt="logo home connexion.jpg"/>
        </li>
      </ul>
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
  }
`
export default Partenaires;