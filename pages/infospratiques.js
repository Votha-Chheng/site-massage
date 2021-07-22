import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/footer";
import HomeCurveSeparation from "../components/homecurveseparation";
import MenuHead from "../components/menuhead";
import MomentumScrollProvider from "../context/MomentumScrollContext";

const infospratiques = () => {
  return (   
    <div>
      <Head>
        <title>Baux't des sens | Horaires - Contact - Rendez-vous</title>
      </Head>

      <DivWrapper>
        <div className="menu-container">
          <MenuHead/>
        </div>
        <MomentumScrollProvider easing={0.075}>
          <div className="page-container">
            <h2 className="home-titles">Mes prestations</h2>
            <div className="prestations-container">
              <div className="hexagone-2">
                
              </div>
            </div>
          </div>    
          <div className="footer-container">
            <Footer/>
          </div>          
        </MomentumScrollProvider>
      </DivWrapper>
    </div>
  );
}

const DivWrapper = styled.div`
  background-color: #798a94;
  height: 100%;


  .prestations-container{
    background-color: black;
    background-size: cover;
    width: 900px;
    height: 900px;
    clip-path: polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 89%, 0 10%);
    position: relative;
    margin: 0 auto;

    .hexagone-2{
      width: 890px;
      height: 890px;
      background: white;
      position: absolute;
      top: 5px;
      left: 5px;
      clip-path: polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 89%, 0 10%);
    }
  }
  
  
  .footer-container{
    height: 620px;
  }
  .flex-container{
    display: flex;
    flex-direction: column;
    width: 900px;
    margin: 50px auto;
  }
  .quote{
    color: white;
    text-shadow: 1px 1px 3px white;
    text-align: justify;
    font-family: 'Playfair Display', serif;
    line-height: 2.8rem;
    padding: 20px;
    color: #ebebeb;
    font-size: 1.6rem;
    width: 75%;
    position: relative;
    font-style : italic ;
    text-indent: 50px;
    margin:25px auto 0px;
    align-self: center;
    text-align: center;
  }


  .page-container{
    padding: 50px 25px;

    .home-titles{
      margin-top:50px;
      margin-bottom : 75px;
    }

    .texte{
      color: #ebebeb;
      text-align: justify;
      font-family: 'Montserrat', serif;
      line-height: 2.8rem;
      padding: 20px;
      color: #ebebeb;
      font-size: 1.4rem;
      position: relative;
      font-style : italic ;
      text-indent: 30px;

      ul{
        margin-top :0px;

        li{
          list-style: none;

          i{
            text-indent: 0px;
            margin-right: 20px;
            height:20px;
            width:20px;
            transform-origin: center;
            animation: rotation 3s linear infinite;
            color: pink;
          }
        }
      }
      
    }
    .texte.uptexte{
      padding-right: 20px;
    }
  }

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
    font-size : 3rem;
    font-style : italic;
    font-weight: normal;
    margin: 25px 0px;
  }
  .footer-container{
    height: 100%;
  }

  @keyframes rotation{
    from{
      transform: rotateZ(0deg);
    }
    to{
      transform: rotateZ(-360deg)
    }
  }
`

export default infospratiques;