import { motion } from "framer-motion";
import NextLink from "next/NextLink";
import styled from "styled-components";
import Footer from "../components/footer";
import MenuHead from "../components/menuhead";
import MomentumScrollProvider from "../context/MomentumScrollContext";

const infospratiques = () => {
  return (
    <PageWrapper>        
      <div>
        <MenuHead/>
      </div>
      <MomentumScrollProvider easing={0.075}>
        <NextLink href='/'>Accueil</NextLink>
        <img src='/images/hero-galet2.jpg' />
      </MomentumScrollProvider>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`

`

export default infospratiques;