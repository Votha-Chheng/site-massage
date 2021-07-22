import Head from "next/head";
import styled from "styled-components";
import Footer from "../components/footer";
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

              </div>
              <div className="img-yoga-container first">
                <img src="/images/yoga-2.jpeg" width='350'/>
              </div>
              <div className="texte up-texte">
                Ma passion pour les pratiques conduisant à la relaxation ne se limite pas aux massages. Pour aller plus loin dans cette optique, je propose des cours d'initiation au <b>hatha yoga</b> basés sur la respiration, la méditation et les étirements.
                Ce type de yoga, le plus pratiqué en Occident, permet au pratiquant une maîtrise du corps et des sens à travers la pratique précise et rythmée de postures.
                Contrairement à un enchaînement de gymnastique, les postures doivent être maintenues suffisamment longtemps (environ 3 minutes).                 
              </div>
              <div className="img-yoga-container second">
                <img src="/images/yoga.jpg" width="350" />
              </div>
              <div className="texte">
                Ces cours s'adressent à tous les débutants ou curieux qui souhaitent découvrir un nouveau moyen de bien-être et de relaxation.
                Ils se pratiquent en groupe ou individuellement. Il est possible de combiner un cours de yoga et un massage de votre choix (tarifs sur demande).
              </div>
              <div className="texte">
                Grâce au hatha yoga :
                <ul>
                  <li>
                    On travaille l’équilibre physique tout en disciplinant son esprit.
                  </li>
                  <li>
                    On réduit son stress.
                  </li>
                  <li>
                    On améliore sa respiration et son souffle
                  </li>
                  <li>
                    On renforce son corps et on améliore sa souplesse
                  </li>
                </ul>
                A vos tapis  !!!
              </div>
              <div className="flex-container">
                <div>
                  <img src="/images/yoga-3.jpg" width="450" />
                </div>
              </div>
              
              <div>
              <div>

              </div>
               

            </div>
            </main>
            
            
          
            <quote>Laissez votre respiration délier les noeuds dans votre corps et votre esprit.</quote>
          </div>
          <Footer/>
        </MomentumScrollProvider>

      </DivWrapper>
    </div>
  );
}

const DivWrapper = styled.div`
  background-color: #798a94;
  
  .page-container{
    padding: 50px 25px;

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
      } 
    }
    .img-yoga-container.second{
      img{
        float: left;
        margin-right: 50px;
        margin-top: 50px;
      } 
    }

    .texte{
      margin:25px auto;
      color: #ebebeb;
      text-align: justify;
      font-family: 'Montserrat', serif;
      line-height: 2.8rem;
      padding: 20px;
      color: #ebebeb;
      font-size: 1.4rem;
      //width: 75%;
      position: relative;
      font-style : italic ;
      text-indent: 30px;
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
`

export default yoga;