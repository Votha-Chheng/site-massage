import { useRef, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";

const HomeBandeauThird = () => {
  
  const bandeauThird = useRef(null)

  return (
    <BandeauDiv ref={bandeauThird}>
      <InView className='container-page'>
        <h2 className='title-h2'>Mon approche du bien-être</h2>
        <div className="bande-photos">
          <div className='container-photo'>
            <img src='/images/close-up-relaxed-girl-getting-massage.jpg' alt="femme à l'aise" width="500"/>
            <small>Crédit photo : &copy;freepik</small>
          </div>
          <div className="logo-lotus">
            <img src="/images/logoLotus.svg" width="100px" height="100px"/>
            <div className="line-container">
              <div className="line"/>
            </div>
          </div>
          
          <div className='container-photo'>
            <img src='/images/175659034_364152124945419_4032164191564889065_n.jpg' alt="femme à l'aise" width="500"/>
          </div>
          <div className='textes-container'>
            
            <div className="texte-aside">
              <i className="fas fa-quote-left"/>
              &nbsp;Ma priorité est de vous mettre à l'aise dès le premier échange et de respecter votre intimité afin que vous puissiez vous détendre, ressentir le lâcher prise pour ainsi profiter du moment dans son intégralité. 
              <div className="texte-aside">
                Il est parfois difficile de se laisser aller auprès d'une nouvelle praticienne, cela peut prendre du temps et se faire sur plusieurs rendez-vous. Je prends le temps nécessaire à chacun <b>car nous passons par la confiance, le confort et la sécurité,</b> sentiments indispensables qui vous permettra de savourer les bienfaits des soins que je vous apporte.
              </div>
            </div>
            <div className="texte-aside">
              Une musique vous incitera à la relaxation ainsi qu'une huile aux odeurs exotique et paradisiaque comme, le monoi, la coco, le jasmin, ou encore la fleur d'oranger. <b>Vous l'aurez compris, il y en aura pour tous les sens...</b>
              <i className="fas fa-quote-right"/>
            </div>
          </div>
          
        </div>          
      </InView>
  
    </BandeauDiv>
  );
}

const BandeauDiv = styled.div`
  width: 100vw;
  overflow : hidden;
  position : relative;

  .container-page{
    padding: 25px;

    .title-h2{
      text-transform: uppercase;
      font-family: 'Playfair Display', serif;
      color: whitesmoke;
      font-size : 3rem;
      font-style : italic;
      font-weight: normal;
      margin: 25px 0px;
    }
    .fa-quote-left{
      transform: scale(1.5) translateY(-10px);
      text-indent:-20px;
    }
    .fa-quote-right{
      transform:scale(1.5) translateY(5px);
      text-indent:10px;
    }
    .bande-photos{
      width: 100%;
      display: flex;
      justify-content: space-between; 
      margin: 50px 0px;
      position : relative;
      height: 900px;
      align-items: start;

      .logo-lotus{
        margin-top: 50px;
        img{
          position: static;
        }
        .line-container{
          margin-top: -25px;
          height: 6px;
          width: 100px;
          overflow: hidden;
          border-radius: 3px;

          .line{
            width: 100px;
            height: 6px;
            background-color: whitesmoke;
          }
        }
      }

      .textes-container{
        position: absolute;
        width: 50vw;
        top: 175px;
        left: 50%;
        padding: 30px 20px 50px;
        background-color: rgba(250, 250, 250, 0.95);
        border: 4px double #64737d;
        transform: translate(-50%, 0);

        .texte-aside{
          text-indent: 30px;
          line-height: 2rem;
          font-size: 1.4rem;
          color: #64737d;
          font-style: italic;
          font-family: "Montserrat", sans-serif;
          text-align: justify;
        }
      }


      .container-photo{
        display: flex;
        flex-direction: column;
        min-width: 500px;
        overflow: hidden;
        height: 300px;
        position : relative;
        border: 4px solid whitesmoke;

        img{
          filter: brightness(120%);
          opacity: 0.80;
        }

        small{
          position: absolute;
          left: 0;
          bottom: 0;
          text-align: right;
          font-size: 0.5rem;
          font-family: "Montserrat", sans-serif;
        }
      }
    }
    
  }
  
`
export default HomeBandeauThird;