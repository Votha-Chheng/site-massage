import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterStyle>
      <div className="footer-container">
        <div className="part-left">
          <div className="presentation">
            <h2 className="footer-title">Baux't des sens</h2>
            <img src="/images/logoLotus.svg" width='100' />
            <h3 className="sub">Masssage & Yoga à domicile</h3>
            <h4>Disponible 7/7 jours</h4>
          </div>

        </div>
        <div className="part-right">
          <h2 className="contact">Contact</h2>
          <div className="infos">
            <div className="telephone">
              <a href="tel:0616838962"><i className="fas fa-phone-alt"></i>  06 16 83 89 62 </a>
            </div>
          </div>
          <div className="reseau">
            <a href="https://www.facebook.com/bauxt.dessens.73" target="_blank">
              <svg width="75" height="80" viewBox="0 0 185 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5587 200.203C9.89925 199.552 4.79369 195.59 2.33656 189.943C1.41305 187.82 0.974993 186.051 0.760327 183.577C0.642126 182.214 0.602467 155.16 0.636068 98.8103L0.685418 16.0453L1.14342 14.2263C3.05408 6.63797 8.52775 1.44343 15.608 0.499328C17.578 0.236654 167.086 0.236654 169.056 0.499328C173.522 1.09479 177.538 3.49881 180.264 7.20896C182.351 10.0483 183.546 13.2369 183.889 16.8786C184.124 19.3762 184.125 181.404 183.891 183.849C183.662 186.228 183.197 187.984 182.226 190.133C180.606 193.716 177.889 196.68 174.639 198.409C172.663 199.46 171.046 199.968 168.886 200.215C166.937 200.437 17.4953 200.426 15.5592 200.203L15.5587 200.203ZM98.1695 151.471V120.729H87.2453H76.3211V107.178V93.6261H87.2453H98.1695L98.1735 81.848C98.1755 75.3701 98.2507 69.2514 98.3398 68.2509C99.1394 59.2721 101.822 52.2844 106.499 46.9984C111.325 41.545 116.954 38.6244 125.021 37.3886C128.039 36.9262 142.343 37.1469 148.537 37.7514L149.788 37.8734L149.831 50.1972L149.874 62.521L141.992 62.5218C135.968 62.5224 133.766 62.5836 132.646 62.7819C127.166 63.7521 124.798 66.5834 124.192 72.8895C124.101 73.8399 124.025 78.8945 124.023 84.1219L124.02 93.6262H136.414H148.809L147.263 107.041C146.413 114.42 145.714 120.518 145.71 120.593C145.706 120.668 140.824 120.729 134.861 120.729H124.02V151.471V182.212H145.702H167.384V100.356V18.501H92.3318H17.2799V100.356V182.212H57.7245H98.1692L98.1695 151.471Z" fill="#000000"/>
              </svg>
            </a>
          </div>

         
        </div>
      </div>
      
      <div className='credit'>
        Copyright - Mai 2021 &copy; Votha Chheng
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  background-color : #90857d;
  padding : 20px;
  height: 600px;
  border-top: 6px double black;

  .footer-container{
    display: flex;
    justify-content: space-between;
    padding: 25px;
    height: 550px;
    
    .part-right{
      color: #000000;
      border-left: 15px solid black;
      border-radius: 50%;
      padding-left: 150px;
      width: 40%;
      max-height: 65%;
      display: flex;
      flex-direction: column;
      align-items: start;
      margin-bottom: 10%;
      justify-content :flex-start;
      
      .contact{
        font-size: 3rem;
        font-family: 'Montserrat', sans-serif;
        color: #000000;
      }

      .infos{
      font-family: "Montserrat", sans-serif;
      font-weight: bold;

      .telephone{
        font-size: 2rem;
        margin-bottom: 20px;

        a{
          transition: color 0.4s ease-out;
        }
        &:hover{
          a{
            color: gray;
          }
        }
      }
      
    }
      .reseau{
        margin :0;

        svg:hover{
          transform: scale(1.15);
          transition: transform 0.5s ease-out;

          path{
            fill : gray;
            transition: transform 0.5s ease-out;
          }  
        }
      }

    }

    .part-left{
      display: flex;
      flex-direction: column;
      width: 50%;
      justify-content: flex-start;
      
      
      .presentation{
        text-align: center;
        border: 4px double whitesmoke;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 30px;
        background-color: #8e9ca4;
        min-height : 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img{
          margin: 10px 0px;
        }
      }
    }
  }
  .credit{
    margin: 0 auto;
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
    border-top: 2px solid #000000;
  }
  h2.footer-title{
    font-family: "Parisienne", "script";
    font-size: 2.5rem;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  h3.sub{
    font-family: "Montserrat", sans-serif;
    margin-bottom: 10px;
  }
  h4{
    margin-top: 0px;
    padding-bottom :20px;
    padding-left: 15px;
    padding-right: 15px;
    font-family: 'Playfair Display', serif;
    font-size: 1rem;
    letter-spacing: 1.8px;
    border-bottom: 4px solid #285330;
    border-radius: 50%;
  }
`

export default Footer;