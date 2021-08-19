import { motion } from "framer-motion";
import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/footer";
import HomeCurveSeparation from "../components/homecurveseparation";
import MenuHead from "../components/menuhead";
import MomentumScrollProvider from "../context/MomentumScrollContext";
import { opacityBandeau, titleAnimation } from "../utils";

const infospratiques = () => {
  return (   
    <div>
      <Head>
        <title>Baux't des sens | Horaires - Contact - Rendez-vous - Arles Alpilles</title>
      </Head>

      <DivWrapper>
        <div className="menu-container">
          <MenuHead/>
        </div>
        <MomentumScrollProvider easing={0.075}>
          <div className="page-container">
            <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate="appear" >Infos pratiques</motion.h2>

            <motion.div id="super-container" variants={opacityBandeau} initial="initial" animate="animate" >
              <div className="prestations-container-mini">
                <div className="layer-white">
                  <h3 className="marque">Baux't des sens</h3>
                  <div className="flex-container">
                    <div className="image-frame">
                      <img src="/images/portrait.jpg" alt="baux't des sens - Julie" width="200"/>
                    </div>
                    <div className="quote">
                      Les soins que j'apporte sont issus d'une formation où j'ai appris de <b>multiples techni&shy;ques profes&shy;sion&shy;nelles</b>. La qua&shy;lité de mes mas&shy;sages se démar&shy;que par <b>l'intention par&shy;ticulière, la bienveillance et l'é&shy;nergie</b> que j'y mets. Mon but étant de vous ap&shy;porter un moment unique et sur-mesure grâce à mon at&shy;tention, ma dis&shy;poni&shy;bilité et mon écoute.
                    </div>
                  </div>
                  <div className="subtitle">
                    Massages intuitifs & coaching de hata yoga à domicile.
                  </div>
                  <div className="lieux">
                    Arles, les Alpilles et alentours
                  </div>
                  <div className="horaires">
                    Vous pouvez me joindre tous les jours de la semaine <b><u><em>de 8h à 19h</em></u></b> au <div className='number'><a href="tel:0616838962">06.16.83.89.62</a></div> <br/>que ce soit pour un simple renseignement, une demande particulière ou un rendez-vous.
                  </div>
                  <div className="last-words">
                    Prenez soin de vous !
                  </div>
                  <div className="socials">
                    <a href="https://www.facebook.com/bauxt.dessens.73"><img src="/images/fblogo.svg" width="50"/></a>
                    <a href="https://www.instagram.com/bauxtdessens/"><img src="/images/logo-instagram.svg" width="57"/></a>
                  </div>
                </div>
                
                
              </div>

              <div className="prestations-container">
                <div className="hexagone-2">
                  <h3 className="marque">Baux't des sens</h3>
                  <div className="flex-container">
                    <div className="image-frame">
                      <img src="/images/portrait.jpg" width="200"/>
                    </div>
                    <div className="quote">
                      Les soins que j'apporte sont issus d'une formation où j'ai appris de multiples techniques profes&shy;sion&shy;nelles. La qualité de mes massages se démar&shy;que par l'in&shy;tention particulière, la bi&shy;en&shy;veillance et l'é&shy;nergie que j'y mets. Mon but étant de vous ap&shy;porter un moment unique et sur-mesure grâce à mon attention, ma disponibilité et mon écoute.
                    </div>
                  </div>

                  <div className="subtitle">
                    Massages intuitifs & coaching de Hata yoga à domicile.
                  </div>
                  <div className="lieux">
                    Arles, les Alpilles et alentours
                  </div>
                  <div className="horaires">
                    Vous pouvez me joindre tous les jours de la semaine <b><em>de 9h à 19h</em></b>
                    <div className='number'><a href="tel:0616838962">06.16.83.89.62</a></div>
                    que ce soit pour un simple renseignement, une demande particulière ou un rendez-vous.
                  </div>
                  <div className="last-words">
                    Prenez soin de vous !
                  </div>
                  <div className="socials">
                    <a href="https://www.facebook.com/bauxt.dessens.73"><img src="/images/fblogo.svg" width="50"/></a>
                    <a href="https://www.instagram.com/bauxtdessens/"><img src="/images/logo-instagram.svg" width="57"/></a>
                  </div>
                </div>
                
              </div>
            </motion.div>
            
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

  #super-container{
    width: 1000px;
    height: 1200px;
    background-image: url("/images/bg-flowers.jpg");
    background-size: cover;
    padding : 50px 0px 100px;
    margin: 50px auto;
    border : 4px double whitesmoke;
  }
  .prestations-container{
    background-color: black;
    background-size: cover;
    width: 900px;
    height: 1100px;
    clip-path: polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 89%, 0 10%);
    position: relative;
    margin: 0 auto;

    .hexagone-2{
      width: 890px;
      height: 1090px;
      background: white;
      position: absolute;
      top: 5px;
      left: 5px;
      clip-path: polygon(50% 0, 100% 10%, 100% 90%, 50% 100%, 0 89%, 0 10%); 
    }
  }

  h3.marque{
    text-align: center;
    color: #d68eb6;
    font-family: 'Mrs Saint Delafield', "cursive";
    font-size: 7rem;
    font-weight: normal;
    font-style: normal;
    line-height: 5.7rem;
    border-bottom: 2px solid pink;
    width: 520px;
    padding-bottom: -200px;
    margin: 75px auto 0px;
  }
  
  .flex-container{
    display: flex;
    width: 850px;
    min-height: 250px;
    padding: 60px 50px 0px;

    .image-frame{
      min-width: 200px;
      height: 220px;
      overflow: hidden;
      border: 2px solid black;
      flex-wrap : nowrap;
    }
  }
  
  .footer-container{
    height: 620px;
  }
  .flex-container{
    display: flex;
    width: 900px;
    margin: 0px auto;
  }
  .quote{
    color: black;
    text-shadow: 1px 1px 3px white;
    text-align: justify;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.8rem;
    font-size: 1.4rem;
    width: 100%;
    position: relative;
    margin:0px 10px 0px;
    font-style: italic;
  }
  .subtitle{
    font-family: "Playfair Display", sans-serif;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    width:50%;
    margin:50px auto;
    color: #d68eb6;
  }
  .lieux{
    font-family: 'Italianno', "cursive";
    text-align: center;
    font-size: 3.5rem;
    font-weight:bold;
  }
  .horaires{
    font-family: "Playfair Display", serif;
    width:80%;
    margin:30px auto;
    text-align: center;
    font-size: 1.3rem;
    
  }
  .last-words{
    font-family: "Parisienne", "cursive";
    color: #d898bd;
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
  }
  .socials{
    display: flex;
    justify-content: center;
    
    img{
      margin: 10px;
      transition: all 0.2s ease-out;

      &:hover{
        transform: scale(1.1);
      }
    }
  }
  .number{
    margin: 20px auto;
    font-size: 2.1rem;
    font-family:"Montserrat", sans-serif;
    transition: font-size 0.3s ease-out;

    &:hover{
      font-size:2.3rem;
    }
  }
  .menu-container{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .page-container{
    padding: 50px 25px;
    margin-bottom: 75px;

    .home-titles{
      margin-top:50px;
      margin-bottom : 75px;
    }
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

  .layer-white{
    display: none;
  }

  @keyframes rotation{
    from{
      transform: rotateZ(0deg);
    }
    to{
      transform: rotateZ(-360deg)
    }
  }
  @media (max-width: 1060px){
    #super-container{
      width: 100%;
      height: auto;

      .prestations-container{
        display: none;
      }
    }
    .layer-white{
      display: block;
      margin: 0 auto;
      width: 95%;
      height: 95%;
      background-color: rgba(255, 255, 255, 0.8);
      padding: 20px;

      .number{
        margin: 20px auto !important;
      }

      .flex-container{
        padding: 0px;
        margin-top: 30px;
        width: 100% !important;

        .quote{
          max-width: 500px !important;
        }
      }
    }
  }
  @media (max-width: 850px){
    .layer-white{
      .flex-container{
        flex-direction: column;
        .image-frame{
          align-self: center;
          margin-bottom: 20px;
        }
        .quote{
          font-size: 1.1rem;
        }
      }
    }
    h3.marque{
      font-size: calc(3rem + 3vw);
      width: 100%;
    }
  }
`

export default infospratiques;