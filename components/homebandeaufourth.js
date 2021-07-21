import styled from "styled-components";
import HorizontalAccordion from "./horizontalaccordion"

const HomeBandeauFourth = () => {
  return (
    <SectionWrapper>
      <div className='container-section'>
        <h2 className="home-titles">Mes différentes pratiques</h2>
        <div className="accordion-container">
          <h3 className="categorie"><span>Types de massages</span></h3>
          <HorizontalAccordion/>  
        </div> 
        <h3 className="categorie"><span>Mais aussi...</span></h3>   
        <div className="container-yoga"> 
          <img
            src='/images/pexels-photo-7593054.jpeg' 
            width = "600" />
            <h3 className="titre">Initiation au yoga</h3>
        </div>
      </div>
      
    </SectionWrapper>
  );
}

const SectionWrapper = styled.section`
  padding-bottom: 100px;

  .container-section{
    padding: 25px;

    .accordion-container{
      margin : 50px 0px 100px;
    }
    h3.categorie{
      font-family: "Montserrat", sans-serif;  
      font-size: 1.4rem;
      text-align: left;
      //text-transform: uppercase;
      letter-spacing: 1.5px;
      font-style: italic;
      

      span{
        background-color: rgb(240,248,255, 0.8);
        padding: 5px 10px;
        color: #64737d;
        border: 4px double #90857d;
      }
    }
    .container-yoga{
      border: 4px solid whitesmoke;
      position: relative;
      width: 500px;
      overflow: hidden;
      height: 300px;
      margin: 0 auto;
      cursor: pointer; 
      transition: all 0.5s cubic-bezier(.21,.59,.65,1.04);

      img{
        transition: all 0.35s cubic-bezier(.21,.59,.65,1.04);
        filter:grayscale(60%) brightness(125%)  contrast(100%);
      }

      &:hover {
        width: 600px;

        img{
        
          transform: scale(1.4) translateY(10%);
          filter : grayscale(0%) contrast(150%);
          opacity: 0.8;
        }
      }

      .titre{
        position: absolute;
        top: 50%;
        left: 0px;
        font-size: calc(1rem + 0.8vw);
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        background: rgba(255, 255, 255, 0.85);
        padding: 5px;
        transition: all 0.25s cubic-bezier(.21,.59,.65,1.04);
        font-style: italic;
        color : #5b6871;


      }
    }
  }
`

export default HomeBandeauFourth;