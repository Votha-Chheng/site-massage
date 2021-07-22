import styled from "styled-components";
import Footer from "./footer";
import HerosMassage from "./herosmassage";
import HomeCurveSeparation from "./homecurveseparation";

const MassageBandeauFifth = () => {
  return (
    <SectionWrapper>
      <HerosMassage title="réflexologie" image='foot-massage.jpg' translateUp="-250" />
      <div className="section-container">
        <div className="part-left-container">
          <div className="foot-img-container">
            <img src="/images/woman-getting-foot-massage.jpg" height="400"/>
            <small>Crédit photo : &copy; chevanon</small>
          </div>
        </div>
        
        <div>
          <div className="texte">
            Les pieds sont une partie du corps souvent oubliés pour les soins et le bien-être, alors qu'ils sont souvent très sollicités tout au long de la journée lorsque vous marchez ou que vous restez en position debout prolongée à cause du port des chaussures et du poids qu'ils supportent au quotidien.
          </div>
          <div className="texte">
            C'est là qu'entre en jeu la réflexologie et le massage de la voute plantaire dont les bienfaits ne sont plus à démontrer pour <b>apaiser le stress, soulager des douleurs (du dos, migraine, etc...)</b>, ou tout simplement passer un moment de qualité, agréable et enchanteur.
          </div>
        </div>

      </div>
      <HomeCurveSeparation texte="la réflexologie plantaire en détail" margin="75px 0px 200px"/>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
.section-container{
  display: flex;
  width: 90%;
  justify-content: center;
}
  .foot-img-container{
    position: relative;
    margin: 0px 40px;
    max-height: 400px;

    img{
      border: 4px solid whitesmoke;
      float: left;
    }

    small{
      position: absolute;
      top: 7px;
      left: 5px;
      font-size: 0.55rem;
    }
    
  }
  .texte{
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
`
export default MassageBandeauFifth;