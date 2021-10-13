import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components'

const MenuHead = ({color}) => {

  const [burger, setBurger] = useState(false)
  const [secondMenuHeight, setSecondMenuHeight] = useState(0)

  const secondMenuRef = useRef(null)

  useEffect(() => {
    setSecondMenuHeight(secondMenuRef.current.offsetHeight)
  },[secondMenuHeight])
  
  return (
    <Wrapper style={{color}} role="navigation" aria-label="navigation site Baux't des sens">
      <nav className="second-menu" ref={secondMenuRef} style={{top:`${burger ? "40" : -secondMenuHeight-40}px`}} >
        <li><a href='/prestations'>Prestations</a></li>
        <li><a href='/massagecranien'>Massage crânien</a></li>
        <li><a href='/yoga'>Yoga</a></li>
        <li className="massages-menu">
          <a href='/temoignages'>Ils me font confiance</a>
        </li>
        <li><a href='/infospratiques'>Infos</a></li>
      </nav>
      <a href="/">
        <div className="logo">
          <img src='/images/silhouette.svg' alt="logo Baux't des sens" height="50"/>
            <span id="bauxt">Baux't des sens</span>
        </div>
      </a>
      <div id="mini-menu" onClick={()=>setBurger(prev=>!prev)} >
        {
          !burger? 
          <img src="/images/burger-menu.svg" height="30" id="burger-menu" />
          :
          <img src="/images/close.svg" height="30" id="close-menu" />
        }
        
      </div>
        
        <ul>
          <li><a href='/prestations'>Prestations</a></li>
          <li><a href='/massagecranien'>Massage crânien</a></li>
          <li><a href='/yoga'>Yoga</a></li>
          <li className="massages-menu"><a href='/temoignages'>Ils me font confiance</a></li>
          <li><a href='/infospratiques'>Infos</a></li>
        </ul> 
    </Wrapper>
  );
}

MenuHead.defaultProps = {
  color : "white"
}

const Wrapper = styled.nav`
  width : 100vw;
  height : 100%;
  padding-left : 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(121, 138, 148, 0.9);
  position: relative;
  padding: 5px 0;

  .second-menu{
    position: absolute;
    transition: all 0.3s ease-out;
    left: 0;
    background-color: rgba(121, 138, 148, 0.9);
    width : 100%;
    display : none;

    li{
      list-style-type: none;
      padding: 5px 0px;

    }
  }

  #mini-menu{
    position: relative;
    display: none;
    margin-right: 20px;
    cursor: pointer;
  }

  ul{
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding-left: 0;
    width: 750px;
    margin: 0;
  }

  li, .logo{
    text-align: center;
    font-size: 1.15em; 
  }
  li{
    margin: 0 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    
    &:hover{
      color: gold;
    }
  }

  .logo{
    display: flex;
    align-items: center;
    font-family: 'Mrs Saint Delafield', 'cursive';
    font-size: 1.75em;
    line-height: 1em;
    transition: transform 0.3s ease-out;
    cursor: pointer;
    display: flex;
    margin-left: 20px;
    margin-top: 5px;
    font-weight: normal;

    img{
      margin-right: 10px;
    }

    &:hover{
      transform: scale(1.15);
    }
  }

  @media (max-width: 890px){
    ul{
      display: none;
    }
    #mini-menu{
      display: block;
      
    }
    .second-menu{
      display : block;
    }
  }
`


export default MenuHead
