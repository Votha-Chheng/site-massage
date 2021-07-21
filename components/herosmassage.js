import styled from "styled-components";

const HerosMassage = ({title, image, translateUp}) => {
  return (
    <DivWrapper className="heros-container">
      <div className="hero-top-layer">
        <h3 className="massage-intuitif">{title}</h3>
      </div>
      <div className="hero" id="massage-intuitif">
        <img src={`/images/${image}`} width="100%" style={{transform:`translateY(${translateUp}px)`}} /> 
      </div>
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  margin: 100px 0px 150px;

  .hero-top-layer, .hero{
    border: 4px double black;
    position: absolute;
    top: 0;
    left: 0;
  }
  .hero{
    overflow: hidden;
    width: 100%;
    height: 250px;

    img{
      filter: grayscale(75%) blur(3.5px);
    }
  }
  .hero-top-layer{
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    background-color: rgba(250, 250, 250, 0.99);
    
    h3{
      text-align: center;
      font-family: 'Playfair Display', serif;
      color: #798a94;
      width: 600px;
      height: 150px;
      transform: translate3d(0, 25%, 0);
      font-size: 3rem;
      margin-top: 0px;
      margin-bottom: 0px;
      text-transform: uppercase;
      font-style: italic;
    }
  }
    
`

export default HerosMassage;