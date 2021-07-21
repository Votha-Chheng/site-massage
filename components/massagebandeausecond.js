import styled from "styled-components";
import HerosMassage from "./herosmassage";
import HomeCurveSeparation from "./homecurveseparation";

const MassageBandeauSecond = () => {
  return (
    <SectionWrap>
      <div className="page-container">
        <HerosMassage title="massage crânien" image="pexels-photo-3997989.jpeg" translateUp="-450" />
        <div className="section-container">
          <div className="cranien-container">
            <img src="/images/176067219_2674521086185632_6685018227844772496_n.jpg" width="300" />
            <div className="texte-cranien">
              <div>
                Ah, le massage du cuir chevelu ! Beaucoup de ceux qui sont déjà passés sous mes mains en sont tellement fan... Impossible de terminer le modelage sans passer par là. 
              </div>
              <div>
                Ce massage semble assez anodin mais ses effets positifs sur l'esprit et le corps à court et long terme sont innombrables.
              </div>
            </div> 
          </div>
          
          <div className="container-questions">
            <h4>Quels en sont les bienfaits physiques ?</h4>
            <ul>
              <li>
                <i className="fas fa-fan"/>
                Les muscles sont relâchés.
              </li>
              <li>
                <i className="fas fa-fan"/> 
                Un bien-être se diffuse dans la totalité du corps.
              </li>
              <li>
                <i className="fas fa-fan"/>
                Ce soin embellit et détend la peau.
              </li>
              <li>
                <i className="fas fa-fan"/>
                Les traits du visage sont apaisés.
              </li>
            </ul>
          </div>
          <div className="container-questions">
            <h4>Quels en sont les bienfaits physiologiques ?</h4>
            <ul>
              <li>
                <i className="fas fa-fan" style={{}}/>
                La sensation très agréable que procure le massage du cuir chevelu, libère dans le corps des endorphines, ayant des propriétés antalgiques qui apportent un sentiment de bien-être, de contentement et de bonheur.
              
              </li>
              <li>
                <div className="fan">
                  <i className="fas fa-fan"/>
                </div>
                Il procure calme, tranquillité, concentration sur le long terme et favorise le sommeil.
              </li>
              <li>
              <i className="fas fa-fan"/> 
                Il minore l’anxiété, la fatigue, le stress et maux de tête.
              </li>
            </ul>
          </div>
        </div> 
      </div>
      <HomeCurveSeparation texte="le massage crânien en détails" margin="75px 0px 250px"/>
    </SectionWrap>
  );
}

const SectionWrap = styled.section`
  .section-container{
    padding: 25px;

    .cranien-container{
      display: flex;
      width: 80%;
      margin: 0 auto;
      
      .texte-cranien{
        color: #ebebeb;
        text-align: justify;
        font-family: 'Montserrat', serif;
        line-height: 2.8rem;
        padding: 20px;
        color: #ebebeb;
        font-size: 1.4rem;
        width: 100%;
        position: relative;
        font-style : italic ;
        text-indent: 30px;
      }
      img{
        margin: 10px;
        border: 4px solid whitesmoke;
        filter: contrast(110%) blur(0.5px) contrast(90%);
        opacity: 0.9;
      }
    }
    .container-questions{
      width: 80%;
      margin: 0 auto;

      li{
        display: flex;
        list-style-type:none;
        font-family: 'Montserrat', serif;
        margin: 5px 0px;
        padding: 10px;
        color: #ebebeb;
        width: 75%;
        line-height: 2rem;
        font-size: 1.4rem;
        
        i{
          margin-right: 20px;
          height:20px;
          transform-origin: center;
          animation: rotation 3s linear infinite;
        }
      }
      h4{
        font-size: 1.9rem;
        color: white;
        font-family: 'Playfair Display', serif;
        text-transform: uppercase;
        font-style: italic;
        margin-bottom: 10px;
      }
    }
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

export default MassageBandeauSecond;