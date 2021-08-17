import { useState } from "react";
import styled from "styled-components";

const HorizontalAccordion = () => {
  const [photoHovered, setPhotoHovered] = useState('')

  const selectedPhotoHandler = (event)=>{
    setPhotoHovered(event.target.id)
  }

  console.log(photoHovered)

  return (
    <DivWrapper>
      <div className={`photo ${photoHovered==="1"? "hovered" : ""}`} tabIndex="6">  
        <img 
          src='/images/176156940_1637465016462471_4662970500857421866_n.jpg' 
          width = "600" 
          id="1" 
          onMouseEnter={(event)=>selectedPhotoHandler(event)} 
          onMouseLeave={()=>{setPhotoHovered('')}}
          style={{transform:`translateX(${(photoHovered !== '') && (photoHovered !=="1") ? "-10" : "0"}%) scale(${(photoHovered ==="1")? "1.3" : "1"})`}}/>
        <h3 className="titre" id="1" onMouseEnter={(event)=>selectedPhotoHandler(event)} >Intuitif</h3>
      </div>
      <div className={`photo left ${photoHovered==="2"? "hovered" : ""}`} tabIndex="7">
        <img
          src='/images/pexels-photo-3997989.jpeg' 
          width = "600" 
          id="2" 
          onMouseEnter={(event)=>selectedPhotoHandler(event)} 
          onMouseLeave={()=>{setPhotoHovered('')}} 
          style={{transform:`translateX(${(photoHovered !== '') && (photoHovered !=="2") ? "-10" : "0"}%) scale(${(photoHovered ==="2")? "1.3" : "1"})`}}/>
        <h3 className="titre" id="2" onMouseEnter={(event)=>selectedPhotoHandler(event)} >Crânien</h3>
      </div>
      <div className={`photo left ${photoHovered==="3"? "hovered" : ""}`} tabIndex="8">
        <img 
          src='/images/photo-1537673156864-5d2c72de7824.jpg' 
          width = "600" 
          id="3" 
          onMouseEnter={(event)=>selectedPhotoHandler(event)} 
          onMouseLeave={()=>{setPhotoHovered('')}}
          style={{transform:`translateX(${(photoHovered !== '') && (photoHovered !=="3") ? "-10" : "0"}%) scale(${(photoHovered ==="3")? "1.3" : "1"})`}}/>
        <h3 className="titre" id="3" onMouseEnter={(event)=>selectedPhotoHandler(event)} >Pour bébé</h3>
      </div>
      <div className={`photo left ${photoHovered==="4"? "hovered" : ""}`} tabIndex="9"> 
        <img
          src='/images/massageBougie.jpg' 
          width = "600" 
          id="4"
          onMouseEnter={(event)=>selectedPhotoHandler(event)} 
          onMouseLeave={()=>{setPhotoHovered('')}} 
          style={{transform:`translateX(${(photoHovered !== '') && (photoHovered !=="4") ? "-10" : "0"}%) scale(${(photoHovered ==="4")? "1.3" : "1"})`}}/>
          <h3 className="titre" id="4" onMouseEnter={(event)=>selectedPhotoHandler(event)} >&Agrave; la bougie</h3>
      </div>
      <div className={`photo left ${photoHovered==="5"? "hovered" : ""}`} tabIndex="10"> 
        <img
          src='/images/reflexologie.jpg' 
          width = "600" 
          id="5"
          onMouseEnter={(event)=>selectedPhotoHandler(event)} 
          onMouseLeave={()=>{setPhotoHovered('')}} 
          style={{transform:`translateX(${(photoHovered !== '') && (photoHovered !=="5") ? "-10" : "0"}%) scale(${(photoHovered ==="5")? "1.3" : "1"})`}}/>
          <h3 className="titre" id="5" onMouseEnter={(event)=>selectedPhotoHandler(event)} >Réflexologie</h3>
      </div>
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border: 4px solid whitesmoke;

  .photo.left {
    border-left: 4px solid whitesmoke;
  }
  .photo{
    width: 20%;
    height: 360px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.45s ease-out;
    position: relative;
    
    img{
      transition: all 0.35s cubic-bezier(.21,.59,.65,1.04);
      filter:grayscale(60%) brightness(125%)  contrast(100%);
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
      min-width:60%;
      font-style: italic;
      color : #5b6871;
    }
  }

  .photo.hovered{
    width: 45%;

    img{
      transform: scale(1.4) translateY(10%);
      filter : grayscale(0%) contrast(150%);
      opacity: 0.8;
    } 
    .titre{
      font-size: calc(1rem + 1.2vw);
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
    }
  }
`

export default HorizontalAccordion;