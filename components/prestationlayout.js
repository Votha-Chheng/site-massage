import styled from "styled-components";

const PrestationLayout = ({imgUrl, bgPosition, titre, tableau}) => {
  return (
    <DivWrapper style = {{backgroundImage :`url(${imgUrl})` , backgroundPosition: bgPosition}}>
      <h3 className={titre? "titre-massage":"no-title"}>
        {titre}
        <div className= {titre ? "right" : ""}/>
        <div className={titre ? "down" : ""}/>
      </h3>
      <ul tabIndex="5">
        {
          tableau.map((element, index)=>
            <li key={index}>
              <div className="titre-temps">
                <div className="titre-service">
                  {element.service}
                </div>
                <div className="prix">
                  {element.prix} {element.prix === "Tarif sur demande" ? "" : "€"}
                </div>
              </div>
              <div className="description">
                {element.description}
              </div>
            </li>
          )
        }
      </ul>
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  background-size: cover; 
  width : 900px;
  position: relative;
  /* border: 2px solid black; */
  margin-left: 100px;
  margin-bottom: 120px;
  padding-top : 75px;

  &::before{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    background-color: white;
    opacity: 0.5;
    filter: blur(0.25px);
  }

  h3.no-title{
    padding: 0;
  }

  h3.titre-massage{
    position: absolute;
    top: -50px;
    left: -50px;

    /* &::before{
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      content: '';
      background-color: black;
      
    } */
    &::after{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      content: '';
      /* background-color: black;  */
    }
  }
  ul{
    margin: 40px 0px;
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: rgba(0, 0, 0, 0.9);
    list-style-type: none;
    height: auto;
    border-top: 2px solid white ;
    border-bottom: 2px solid white ;

    li{
      color: white;
      font-size: 1.5rem;
      padding: 10px 5px;
      font-family: "Playfair Display", "script";
      font-style: italic;
      padding-right : 20px;
      margin-bottom: 20px;

      .titre-temps{
        display: flex;
        justify-content: space-between;
        color: #cb90b3;
        letter-spacing: 1px;
        font-weight: bold;

        .prix{
          padding-left: 50px;
          min-width: 150px;
          text-align: right;
        }
      }
      .description{
        font-family: "Montserrat", sans-serif;
        font-size: 1.2rem;
        color: #ffffff;
        width: 600px;
      }
    }
  }
  
  h3{
    font-family: "Pinyon Script", "script";
    color: #6f3456;
    font-size: 3.5rem;
    margin: 0;
    background-color:rgba(235, 235, 235, 0.95);
    padding: 10px 15px;

    .right{
      position: absolute;
      right: -2px;
      top: 0;
      width: 2px;
      height : 50px;
      /* background: black; */
    }
    .down{
      position: absolute;
      left: 2px;
      bottom: 0;
      width: 48px;
      height : 2px;
      /* background: black; */
    }
  }

  @media (max-width: 1044px){
    width: 100%;
    margin-left: 0px;
    h3{
      position: static;
      filter: contrast(125%);
      border: none;
    }
  }
  @media (max-width: 850px){
    ul{
      padding-left: 0px;
      li{
        .titre-temps{
          flex-direction: column;
        }
        .temps{
          align-self: start !important;
        }
        .description{
          width: 100%;
        }
      }
    }
  }
  @media (max-width: 580px){
    h3{
      font-size:calc(1.5rem + 2.2vw)  !important;
    }
    .titre-massage{
      left:-10px !important;
    }
    .titre-service{
      max-width: 300px !important;
    }
    .titre-temps{
      font-size: 1.25rem !important;
      flex-direction : row !important;
      width: 100% !important;
      justify-content: space-between !important;
      //flex-wrap : nowrap;
    }
    .temps{
      padding-left: 0 !important;
      min-width: 100px !important;
      font-size : 1.1rem !important;

    }
    .description{
      font-size : 1rem !important;
      margin-top: 5px;
    }
  }
`

export default PrestationLayout;