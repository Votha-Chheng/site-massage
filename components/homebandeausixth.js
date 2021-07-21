import { useEffect, useState } from "react";
import styled from "styled-components";

const HomeBandeauSixth = () => {

  const [index, setIndex] = useState(1)

  const tableauAvis = ["temoin1", "temoin2", "temoin3", "temoin4", "temoin5", "temoin6", "temoin7"]

  return (
    <BandeauSection>
      <div className="container-page">
        <h2 className="home-titles">Baux't des sens, c'est encore les autres qui en parlent le mieux...</h2>
        <div className="grid-container">
          {
            tableauAvis.map((avis, idx)=>
            <div className="avis" key={idx}>
              <img src={`/images/${avis}.jpg`} width="300" />
            </div>
          )
          }
        </div>
        <h2 className='home-titles' style={{textAlign:"right", fontSize:'1.75rem'}} >Merci à eux pour leur confiance !</h2>
      </div>
    </BandeauSection>
  );
}

const BandeauSection = styled.section`
  .container-page{
    padding: 25px;
    overflow-x : hidden;

    .grid-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      margin: 0px;
      min-height : 250px;

      .avis{
        padding: 10px;
        background-color:whitesmoke;
        margin: 15px;
        transition: all 0.5s ease-out;
        animation: bubble 7.5s ease-out infinite;
        
        &:hover{
          transform: scale(1.4);
        }
      }
    }
  }
  @keyframes bubble{
    0%{
      transform: scale(1.01);
    }
    50%{
      transform: scale(0.99)
    }
    100%{
      transform: scale(1.01);
    }
  }
`

export default HomeBandeauSixth;