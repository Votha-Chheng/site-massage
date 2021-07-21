import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import usePageYOffset from "../hooks/usePagesYOffset";
import HomeCurveSeparation from "./homecurveseparation";

const HomeBandeauFifth = () => {
  const [mouseEnter, setMouseEnter] = useState(false)
  const [mapDimension, setMapDimension] = useState({width : 0, height : 0})
  const [agrandissement, setAgrandissement] = useState(false)


  const imgZoneRef = useRef(null) 
  const mapRef = useRef(null)
  const agrandirRef = useRef(null)

  useEffect(() => {
    setMapDimension({width:mapRef.current.clientWidth, height:mapRef.current.clientHeight})
    console.log(mapDimension.width)
  }, [mapDimension.height, mapDimension.width])


  useEffect(() => {
    
    const getMousePosition = (event, ref)=>{
      const {clientX, clientY} = event
      if(ref.current && imgZoneRef.current){
        ref.current.style.transform =`translate3d(${+clientX - imgZoneRef.current.getBoundingClientRect().left}px, ${+clientY - imgZoneRef.current.getBoundingClientRect().top}px, 0)`
      }
      
    }
    document.addEventListener('mousemove', function(event){
      getMousePosition(event, agrandirRef)
    })

    return()=> document.removeEventListener("mousemove", function(event){getMousePosition(event, agrandirRef)})
  }, [])

  const unzoomHandler = ()=>{
    setMouseEnter(false) 
    setAgrandissement(false) 
  }

  console.log(mouseEnter, agrandissement)

  return (
    <SectionWrapper>
      <div className="container-page">
        <h2 className="home-titles">Un service uniquement à domicile</h2>
        <div className="content" ref={imgZoneRef}>
          <div 
            ref={agrandirRef} 
            className="agrandir" 
            style={{display:`${mouseEnter?"block":"none"}`}} 
            onMouseEnter={()=>setMouseEnter(true)} 
            onClick={()=>setAgrandissement(prev=>!prev)}>
              <div>{agrandissement? "Dézoomer":"Agrandir"}</div>
          </div>
          
          <div className="partie-textes">
            <img className="img-car" src="/images/deplacement.svg"/>
            <div className='texte first'>
              <b>Quoi de mieux de se faire masser sans avoir à se déplacer ?</b> Avec <span className="marque">Baux't des sens</span>, c'est le bien-être et la détente qui viennent chez vous ! C'est pourquoi <b>je me déplace <u>uniquement</u> à domicile, dans les gîtes, les hôtels,</b> ou même au bord de votre piscine. Et ce, <b>avec tout le matériel nécessaire</b> (table de massage, linge, etc...) pour que vous n'ayez à vous occuper de rien. Tout ce qui vous reste donc à faire, c'est vous allonger et vous laisser aller...
            </div>
            <div className='texte'>
              Mes zones de déplacement vont <b>d'Arles et ses alentours</b> jusqu'à <b>St-Martin-de-Crau</b>, ainsi que toute la <b>zone englobant les Alpilles</b> (les Baux-de-Provence, Fontvieille, St-Rémy-de-Provence...).
            </div>
          </div>
          <div className='deplacement-container' style={{cursor:'none', minWidth:`${mapDimension.width}px`, minHeight:`${mapDimension.height}px`}}>
            <img 
              className="small-map"
              ref={mapRef}
              src="/images/zonedeplacement.jpg" 
              alt="zones où je me déplace"  
              onMouseEnter={()=>setMouseEnter(true)} 
              onMouseLeave={()=>setMouseEnter(false)} 
              onMouseEnter={()=>setMouseEnter(true)}
              onClick={()=>setAgrandissement(prev=>!prev)}
              style={{cursor:`${mouseEnter ? "none" : "default"}`, zIndex:4, opacity:`${agrandissement?"0":"1"}`}} />
            <img 
              className="zoom-map" 
              src="/images/zonedeplacement.jpg" 
              width="700" 
              height="auto" 
              style={{display:`${agrandissement? "block" :"none"}`, position:"absolute", right:"0", bottom:"0", zIndex:5}}
              onMouseEnter={()=>setMouseEnter(true)} 
              onMouseLeave={()=>setMouseEnter(false)} 
              onMouseOut={()=>setMouseEnter(false)}
              onClick={()=>unzoomHandler()}/>
          </div>
          
        </div>

      </div>
      <HomeCurveSeparation texte="prendre un rendez-vous" margin="50px 0px 100px"/>
    </SectionWrapper>

  );
}


const SectionWrapper = styled.section`
  .container-page{
    padding: 25px;

    .content{
      display: flex;
      position: relative;
      margin: 50px 0px;

      .agrandir{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: yellowgreen;
        position: absolute;
        z-index:6;
        transform-origin: center;
        transition: all 0.2s ease-out;
        text-align: center;
        display: flex;
        align-items: center;
        cursor:none; 
        top:0; 
        left:0;
        
        div{
          margin-top: 50%;
          transform: translate3d(0, -50%, 0);
        }
      }

      .img-car{
        float: left;
        margin-right: 5%;
        margin-bottom: 1%;
      }
      
      .partie-textes{
        padding: 20px 50px;
        margin-right: 10px;

        .texte.first{
          text-indent: 0px;
        }
        .texte{
          text-align: justify;
          font-family: "Montserrat", sans-serif;
          line-height: 2.5rem;
          color: #ebebeb;
          font-size: 1.4rem;
          width: 100%;
          position: relative;
          text-indent: 30px;
          text-align: justify;
          font-style: italic;

          .marque{
            font-family: "Parisienne", "script";
            font-size: 1.8rem;
          }
        }
      }
      .deplacement-container{   
        position: relative;
        margin-top: 30px;

        img.small-map{
          border: 4px solid whitesmoke;
          z-index: 5;
          transition: all 0.2s ease-out;
          position: absolute;
          height:"auto";
          right:0;
          top:0px;
          width: 400px;
        }
      }
      
    }
  }
`

export default HomeBandeauFifth;