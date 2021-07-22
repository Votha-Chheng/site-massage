import styled from "styled-components";

const PrestationLayout = ({imgUrl, bgPosition, titre, tableau}) => {
  return (
    <DivWrapper style = {{backgroundImage :`url(${imgUrl})` , backgroundPosition: bgPosition}}>
    <h3>
      {titre}
      <div className="right"/>
      <div className="down"/>
    </h3>
    <ul>
      {
        tableau.map((element, index)=>
          <li key={index}>
            <div className="titre-temps">
              <div>
                {element.service}
              </div>
              <div className="temps">
                Durée : {element.temps}
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
  border: 2px solid black;
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
    filter: blur(2px);
  }

  h3{
    position: absolute;
    top: -50px;
    left: -50px;

    &::before{
      position: absolute;
      top: 0;
      left: 0;
      width: 2px;
      height: 100%;
      content: '';
      background-color: black;
      
    }
    &::after{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 2px;
      content: '';
      background-color: black; 
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

        .temps{
          padding-left: 50px;
          min-width: 250px;
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
      background: black;
    }
    .down{
      position: absolute;
      left: 2px;
      bottom: 0;
      width: 48px;
      height : 2px;
      background: black;
    }

  }
`

export default PrestationLayout;