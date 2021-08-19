import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/footer";
import HomeBandeauSixth from "../components/homebandeausixth"
import MenuHead from "../components/menuhead";
import MomentumScrollProvider from "../context/MomentumScrollContext";

const temoignages = () => {
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
          <HomeBandeauSixth/>
          <Footer/>
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
`

export default temoignages;