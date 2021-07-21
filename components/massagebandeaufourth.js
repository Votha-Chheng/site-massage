import styled from "styled-components";
import HerosMassage from "./herosmassage";
import HomeCurveSeparation from "./homecurveseparation";

const MassageBandeauFourth = () => {
  return (
    <SectionWrapper>
      <HerosMassage title="massage à la bougie" image='176187352_2922669511298633_3323829876291585340_n.jpg' translateUp='-400'/>
      <div className="section-container">
        <div className="flex-1">
          <div className="bougie-container">
            <img src="/images/massageBougie2.jpg" width="400" height="400" />
          </div>
          <div className="texte">
            Ce type de massage réalisé sur l'ensemble du corps est réputé pour sa capacité à détendre les muscles et à supprimer les tensions dues au stress. Originaire de Thaïlande, il reste encore assez méconnu en Occident. L’huile est appliquée sur l’ensemble du corps par de longs mouvements fluides. 
          </div>
        </div>
        <div className="flex-2">
          <div className="texte-container">
            <div className="texte">
              Les bougies de massage sont des bougies spécifiques, 100% naturelles à base de cire végétale ou d’abeilles et enrichies en huiles essentielles, senteurs propices à la décontraction. La fonte de la bougie produit de la cire liquide qui se transforme en huile de massage hydratante. Avec un parfum agréable, des vertus adoucissantes et nourrissantes pour la peau, ce massage est conseillé pour les peaux sèches et sensibles. De plus, <b>la douce sensation de la cire tiède sur la peau en fait un massage idéal pour l'hiver</b>. 
            </div>
            <div className="bougie-container">
              <img src="/images/massageBougie.jpg" width="400" height="400"/>
            </div>
          </div>
            <div className="texte fin">
              <br/>Bref, effet enveloppant, confort immédiat et sensation de cocooning garantis !
            </div>
          
        </div>
      </div>
      <HomeCurveSeparation texte="Le massage à la bougie en détails" margin="75px 0px 200px" lien=""/>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  .section-container{
    width:1200px;
    margin: 0 auto;
  }
  .flex-1, .flex-2{
    display: flex;
    align-items: center;
    margin-bottom : 25px;
    border-bottom: 2px solid white ;
    border-radius: 10%;
    padding-bottom: 50px;
  }
  .flex-1{
    
  }
  .flex-2{
    flex-direction: column;
    
    
    .texte-container{
      display: flex;
      align-items: center;
    }
  }

  .texte{
    padding:0px 20px;
    color: #ebebeb;
    text-align: justify;
    font-family: 'Montserrat', serif;
    line-height: 2.8rem;
    color: #ebebeb;
    font-size: 1.4rem;
    width: 100%;
    position: relative;
    font-style : italic ;
    text-indent: 30px;
  }
  .texte.fin{
    margin-top: 20px;
    font-size: 2.5rem;
    font-weight: bold;
    font-family: 'Playfair Display', serif;
    text-transform: uppercase;
    text-indent: 0px;
    text-align: center;
    line-height: 3.5rem;
  }

  .bougie-container{
    img{
      margin: 0px 20px;
      border: 4px solid whitesmoke;
      object-fit: cover;
    }
    
  }
`
export default MassageBandeauFourth;