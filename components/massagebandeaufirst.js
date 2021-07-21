import styled from "styled-components";
import HerosMassage from "./herosmassage";
import HomeCurveSeparation from "./homecurveseparation";

const MassageBandeauFirst = () => {
  return (
    <SectionWrap>
      <h2 className="massages-titles">Types de massage proposés</h2>
      <HerosMassage title="massage intuitif" image="oil-massage.jpg" translateUp="-150"/>
      <div className="section-container">
        
        <div className='img-citation'>
          <img src="/images/pexels-daria-sannikova-5221036.jpg" width="450" />
          <div className="quote">
            <i className="fas fa-quote-left" style={{transform:"scale(1.5) translateY(-10px)", textIndent:"-30px"}}/>
            Voir le corps se déposer, pren&shy;dre contact avec lui, l'écouter, s'arrêter, lisser, masser, d'un mou&shy;vement toujours lent. Il se crispe parfois et fait prendre cons&shy;cience, du lien avec l'esprit, des blo&shy;cages émo&shy;tion&shy;nels et af&shy;fec&shy;tifs. C'est là que le chemin com&shy;mence... Par le toucher, il cherche à instal&shy;ler le mieux-être, dans la durée, en libé&shy;rant les ten&shy;sions inu&shy;tiles. Tel est le massage intuitif.
            <i className="fas fa-quote-right" style={{transform:"scale(1.5) translateY(5px)", textIndent:"20px"}}/> 
          </div>
        </div>
        <div className="texte-container">
          <div className="lotus-container">
            <img src="/images/logoLotus.svg" width="75" />
          </div>
          <div>
            Ainsi, le massage intuitif cherche à installer le mieux être pas seulement dans l'immédiat <b>mais aussi dans la durée</b>. C'est un mas&shy;sage que je pra&shy;tique grâce et avec mon res&shy;senti, mon intuition. <b>Il est personnalisé et adapté à la personne qui le reçoit à l'instant T</b>. 
          </div>
          <div>
            Par mon attention, j'ai la facul&shy;té d'entrer en connexion avec le rece&shy;veur, l'harmo&shy;nie du massage se crée grâce à la façon que j'ai de m'ajuster à la respi&shy;ration du massé. <b>Je perçois des in&shy;forma&shy;tions non verbales </b>qui me permet&shy;tent de compren&shy;dre si je dois passer plus de temps sur telles parties du corps afin de le libérer de toutes tensions ou d'uti&shy;liser tel&shy;les tech&shy;niques pour vous ac&shy;compagner à lâcher prise...
          </div>
          <div>
            Ce massage person&shy;nalisé et complet à base d’huiles es&shy;sentiel&shy;les biolo&shy;giques, prend en compte <b>l’ap&shy;proche glo&shy;bale de l’être humain</b> et le tou&shy;che dans ses dif&shy;férentes dimen&shy;sions (physique, men&shy;tale, émo&shy;tion&shy;nelle et éner&shy;gé&shy;tique) afin que cel&shy;les-ci soient ré&shy;har&shy;monisées.
          </div>
        </div>
      </div> 
      <HomeCurveSeparation texte="le massage personnalisé en détails" margin="80px 0px 200px" lien="/prestations#massage-perso"/> 
    </SectionWrap>
  );
}

const SectionWrap = styled.section`
  padding-top: 50px; 

  .img-citation{
    margin: 0px auto;

    img{
      float: left;
      margin: 30px 50px 10px 10%;
      border: 4px solid whitesmoke;
      filter: brightness(120%);
      opacity: 0.8;
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
      margin:25px auto;
    }
  }
  .texte-container{
    margin:25px auto;
    color: #ebebeb;
    text-align: justify;
    font-family: 'Montserrat', serif;
    line-height: 2.8rem;
    padding: 20px;
    color: #ebebeb;
    font-size: 1.4rem;
    width: 75%;
    position: relative;
    font-style : italic ;
    text-indent: 30px;

    .lotus-container{
      width : 100%;
      text-align: center;
      margin: 50px 0px;
    }
  }

`

export default MassageBandeauFirst;