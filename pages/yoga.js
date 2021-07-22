import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/footer";
import HomeCurveSeparation from "../components/homecurveseparation";
import MenuHead from "../components/menuhead";
import MomentumScrollProvider from "../context/MomentumScrollContext";

const yoga = () => {
  return (   
    <div>
      <Head>
        <title>Baux't des sens | Initiation au yoga à domicile</title>
      </Head>

      <DivWrapper>
        <div className="menu-container">
          <MenuHead/>
        </div>
        <MomentumScrollProvider easing={0.075}>
          <div className="page-container">
            <h2 className="home-titles">Baux't des sens, c'est aussi de l'initiation au yoga...</h2>
            <main>
              <div className="partie-haute">
                <div className="img-yoga-container first">
                  <img src="/images/yoga-3.jpg" width='450'/>
                </div>
                <div className="texte up-texte">
                  Ma passion pour les pra&shy;tiques con&shy;dui&shy;sant à la rela&shy;xation ne se limite pas aux massages. Pour al&shy;ler plus loin dans cette optique, je pro&shy;pose des cours d'ini&shy;tiation au <b>hatha yoga</b> basés sur la res&shy;piration, la méditation et les éti&shy;rements.
                  Ce type de yoga, le plus pra&shy;tiqué en Oc&shy;cident, permet au pra&shy;tiquant une maî&shy;trise du corps et des sens à tra&shy;vers la pra&shy;tique précise et rythmée de pos&shy;tures.
                  Contraire&shy;ment à un enchaînement de gym&shy;nastique, les postures doivent être maintenues suffisamment long&shy;temps (environ 3 minutes).                 
                </div>
              </div>

              <div className="flex-container">
                <div className="quote">
                  <i className="fas fa-quote-left" style={{transform:"scale(1.5) translateY(-10px)", textIndent:"-30px"}}/>
                  Laissez votre respiration délier les noeuds dans votre corps et votre esprit.
                  <i className="fas fa-quote-right" style={{transform:"scale(1.5) translateY(5px)", textIndent:"15px"}}/>
                </div>
              </div>
            </main>
          </div> 
          <HomeCurveSeparation texte="en savoir plus" margin="0px 0px" lien="/prestations/#yoga"/>
          <div className="page-container">
            <main>
              <div className="img-yoga-container second">
                <img src="/images/yoga-2.jpeg" width="350" />
              </div>
              <div className="texte">
                Ces cours s'adres&shy;sent à tous les débu&shy;tants ou curieux qui sou&shy;haitent dé&shy;couvrir un nou&shy;veau moyen de bien-être et de rela&shy;xation.
                Il se pra&shy;tique en groupe ou in&shy;divi&shy;duel&shy;lement. <b>Il est pos&shy;sible de com&shy;biner un cours de yoga et un mas&shy;sage de votre choix (tarifs sur de&shy;mande)</b>.
              </div>
              <div className="texte">
                Grâce au hatha yoga :
                <ul>
                  <li>
                    <i className="fas fa-fan"/>
                    On travaille l’équilibre physique tout en disciplinant son esprit.
                  </li>
                  <li>
                    <i className="fas fa-fan"/>
                    On réduit son stress.
                  </li>
                  <li>
                    <i className="fas fa-fan"/>
                    On améliore sa respi&shy;ration et son souffle
                  </li>
                  <li>
                    <i className="fas fa-fan"/>
                    On renforce son corps et on améliore sa souplesse
                  </li>
                </ul>
                A vos tapis  !!!
              </div>
            </main>
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

    main{
      margin: 75px 0px;
      width: 90%;
      margin: 0px auto;
    }
    .img-yoga-container{
      img{
        border: 4px solid whitesmoke;
      } 
    }
    .img-yoga-container.first{
      img{
        float: right;
        margin-left: 50px;
        margin-top : 40px;
      } 
    }
    .img-yoga-container.second{
      float: left;
      margin-right: 50px;
      margin-top : 40px;
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

  @media (max-width: 1225px){
    .img-yoga-container.second{ 
      float: none !important;
      text-align: center;

      img{
        margin: auto;
      }
    }
  }

  @media (max-width: 825px){
    .img-yoga-container.first{  
      text-align: center;
      
      img{
        float: none !important;
        width: 300px;
      }
    }
    .texte{
      font-size: 1.2rem !important;
    }
    .flex-container{
      justify-content: flex-start !important;
      width: 100%;
    }
  }

`

export default yoga;