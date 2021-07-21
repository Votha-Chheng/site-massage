import { motion } from "framer-motion";
import Link from "next/link";
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
        <Link href='/'>Accueil</Link>
        <img src='/images/hero-galet2.jpg' />
      </MomentumScrollProvider>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`

`

export default infospratiques;