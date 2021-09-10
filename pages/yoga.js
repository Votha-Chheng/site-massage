import { motion, useAnimation } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";
import Footer from "../components/footer";
import HomeCurveSeparation from "../components/homecurveseparation";
import MenuHead from "../components/menuhead";
import MomentumScrollProvider from "../context/MomentumScrollContext";
import { opacityBandeau, titleAnimation } from "../utils";

const yoga = () => {
  const [sectionInView, setSectionInView] = useState(false)
  const [partOneInView, setPartOneInView] = useState(false)
  const [partTwoInView, setPartTwoInView] = useState(false)
  
  const controls = useAnimation()

  useEffect(() => {
    if(sectionInView){
      controls.start("appear")
      controls.start("animate")
    }
  }, [controls, sectionInView])

  useEffect(() => {
    if(partOneInView){
      controls.start("animate")
      controls.start("ulAppear")
    }
  }, [controls, partOneInView])

  const parentList = {
    initial : {

    },
    ulAppear : {
      transition:  {
        delayChildren : 1.5,
        staggerChildren : 0.2
      }
    }
  }

  const childList = {
    initial : {
      opacity: 0,
      x : 200
    },
    ulAppear : {
      opacity : 1,
      x:0,
      transition : {
        duration : 0.8,
      }
    }
  }

  return (   
    <div>
      <Head>
        <title>Baux't des sens | Initiation au yoga à domicile Arles Alpilles</title>
      </Head>

      <DivWrapper>
        <div className="menu-container">
          <MenuHead/>
        </div>

        <div className="big-screen">
          <MomentumScrollProvider easing={0.075}>
            <InView className="page-container" onChange={(inView, entry)=>setSectionInView(inView)} >
              <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate={controls} >Baux't des sens, c'est aussi de l'initiation au yoga...</motion.h2>
              <InView onChange={(inView, entry)=>setPartOneInView(inView)}>
                <motion.main variants={opacityBandeau} initial="initial" animate={controls} >
                  <div className="partie-haute">
                    <div className="img-yoga-container first">
                      <img src="/images/yoga-3.jpg" width='450'/>
                    </div>
                    <div className="texte up-texte">
                      Ma passion pour les pra&shy;tiques con&shy;dui&shy;sant à la rela&shy;xation ne se limite pas aux massages. Pour al&shy;ler plus loin dans cette optique, je pro&shy;pose des cours d'ini&shy;tiation au Hatha yoga basés sur la res&shy;piration, la méditation et les éti&shy;rements.
                      Ce type de yoga, le plus pra&shy;tiqué en Oc&shy;cident, permet au pra&shy;tiquant une maî&shy;trise du corps et des sens à tra&shy;vers la pra&shy;tique précise et rythmée de pos&shy;tures.
                      Contraire&shy;ment à un enchaînement de gym&shy;nastique, les postures doivent être maintenues suffisamment long&shy;temps (environ 3 minutes).                 
                    </div>
                  </div>

                  <div className="flex-container">
                    <div className="quote">
                      <i className="fas fa-quote-left" style={{transform:"scale(1.5) translateY(-10px)", textIndent:"-30px"}}/>
                      Laissez votre respiration délier les noeuds dans votre corps et votre esprit.
                      <i className="fas fa-quote-right" style={{transform:"scale(1.5) translateY(5px)", textIndent:"15px"}}/>
                    </div>
                  </div>
                </motion.main>
              </InView>
              
            </InView> 
            <HomeCurveSeparation texte="le Hata yoga dans mes prestations" margin="0px 0px" lien="/prestations/#yoga"/>
            <InView onChange={(inView, entry)=> inView && setPartTwoInView(true)} className="page-container second">
              <main>
                <motion.div 
                  className="img-yoga-container second"
                  initial={{opacity:0, x:"-150%"}} 
                  animate={partTwoInView? {opacity:1, x:0} : ""} 
                  transition={{opacity:{delay:0.1, duration:1.5}, x:{delay:0.2, duration:1.5, ease:"easeOut"} }} >
                  <img src="/images/yoga-2.jpeg" width="350" />
                </motion.div>
                <motion.div
                  className="texte"
                  initial={{opacity:0, x:"125%"}} 
                  animate={partTwoInView? {opacity:1, x:0} : ""} 
                  transition={{opacity:{delay:0.2, duration:0.8}, x:{delay:0.2, duration:2, ease:"easeOut"} }} >
                  Ces cours s'adres&shy;sent à tous les débu&shy;tants ou curieux qui sou&shy;haitent dé&shy;couvrir un nou&shy;veau moyen de bien-être et de rela&shy;xation.
                  Il se pra&shy;tique en groupe ou in&shy;divi&shy;duel&shy;lement. Il est pos&shy;sible de com&shy;biner un cours de yoga et un mas&shy;sage de votre choix (tarifs sur de&shy;mande).
                </motion.div>
                <motion.div className="texte" 
                  initial={{opacity:0}} 
                  animate={partTwoInView? {opacity:1} : ""} 
                  transition={{opacity:{delay:1.5, duration:0.8}}}>
                  Grâce au Hatha yoga :
                  <motion.ul variants={parentList} initial="initial" animate={controls} >
                    <motion.li variants={childList}>
                      <i className="fas fa-fan"/>
                      On travaille l’équilibre physique tout en disciplinant son esprit.
                    </motion.li>
                    <motion.li variants={childList}>
                      <i className="fas fa-fan"/>
                      On réduit son stress.
                    </motion.li>
                    <motion.li variants={childList}>
                      <i className="fas fa-fan"/>
                      On améliore sa respi&shy;ration et son souffle
                    </motion.li>
                    <motion.li variants={childList}>
                      <i className="fas fa-fan"/>
                      On renforce son corps et on améliore sa souplesse
                    </motion.li>
                  </motion.ul>
                  A vos tapis  !!!
                </motion.div>
              </main>
            </InView>       
            <Footer/>       
          </MomentumScrollProvider>
        </div>




        <div className="small-screen">
          <InView className="page-container" onChange={(inView, entry)=>setSectionInView(inView)} >
            <motion.h2 className="home-titles" variants={titleAnimation} initial="initial" animate={controls} >Baux't des sens, c'est aussi de l'initiation au yoga...</motion.h2>
            <InView onChange={(inView, entry)=>setPartOneInView(inView)}>
              <motion.main variants={opacityBandeau} initial="initial" animate={controls} >
                <div className="partie-haute">
                  <div className="img-yoga-container first">
                    <img src="/images/yoga-3.jpg" width='450'/>
                  </div>
                  <div className="texte up-texte">
                    Ma passion pour les pra&shy;tiques con&shy;dui&shy;sant à la rela&shy;xation ne se limite pas aux massages. Pour al&shy;ler plus loin dans cette optique, je pro&shy;pose des cours d'ini&shy;tiation au Hatha yoga basés sur la res&shy;piration, la méditation et les éti&shy;rements.
                    Ce type de yoga, le plus pra&shy;tiqué en Oc&shy;cident, permet au pra&shy;tiquant une maî&shy;trise du corps et des sens à tra&shy;vers la pra&shy;tique précise et rythmée de pos&shy;tures.
                    Contraire&shy;ment à un enchaînement de gym&shy;nastique, les postures doivent être maintenues suffisamment long&shy;temps (environ 3 minutes).                 
                  </div>
                </div>

                <div className="flex-container">
                  <div className="quote">
                    <i className="fas fa-quote-left" style={{transform:"scale(1.5) translateY(-10px)", textIndent:"-30px"}}/>
                    Laissez votre respiration délier les noeuds dans votre corps et votre esprit.
                    <i className="fas fa-quote-right" style={{transform:"scale(1.5) translateY(5px)", textIndent:"15px"}}/>
                  </div>
                </div>
              </motion.main>
            </InView>
          </InView> 
          
          <HomeCurveSeparation texte="le Hata yoga dans mes prestations" margin="0px 0px" lien="/prestations/#yoga"/>
          <InView onChange={(inView, entry)=> inView && setPartTwoInView(true)} className="page-container second">
            <main>
              <motion.div 
                className="img-yoga-container second"
                initial={{opacity:0, x:"-150%"}} 
                animate={partTwoInView? {opacity:1, x:0} : ""} 
                transition={{opacity:{delay:0.25, duration:1.5}, x:{delay:0.5, duration:1.5, ease:"easeOut"} }} >
                <img src="/images/yoga-2.jpeg" width="350" />
              </motion.div>
              <motion.div
                className="texte"
                initial={{opacity:0, x:"150%"}} 
                animate={partTwoInView? {opacity:1, x:0} : ""} 
                transition={{opacity:{delay:0.25, duration:0.8}, x:{delay:0.25, duration:2, ease:"easeOut"} }} >
                Ces cours s'adres&shy;sent à tous les débu&shy;tants ou curieux qui sou&shy;haitent dé&shy;couvrir un nou&shy;veau moyen de bien-être et de rela&shy;xation.
                Il se pra&shy;tique en groupe ou in&shy;divi&shy;duel&shy;lement. Il est pos&shy;sible de com&shy;biner un cours de yoga et un mas&shy;sage de votre choix (tarifs sur de&shy;mande).
              </motion.div>
              <motion.div className="texte" 
                initial={{opacity:0}} 
                animate={partTwoInView? {opacity:1} : ""} 
                transition={{opacity:{delay:1, duration:0.8}}}>
                Grâce au Hatha yoga :
                <motion.ul variants={parentList} initial="initial" animate={controls} >
                  <motion.li variants={childList}>
                    <i className="fas fa-fan"/>
                    On travaille l’équilibre physique tout en disciplinant son esprit.
                  </motion.li>
                  <motion.li variants={childList}>
                    <i className="fas fa-fan"/>
                    On réduit son stress.
                  </motion.li>
                  <motion.li variants={childList}>
                    <i className="fas fa-fan"/>
                    On améliore sa respi&shy;ration et son souffle
                  </motion.li>
                  <motion.li variants={childList}>
                    <i className="fas fa-fan"/>
                    On renforce son corps et on améliore sa souplesse
                  </motion.li>
                </motion.ul>
                A vos tapis  !!!
              </motion.div>
            </main>
          </InView>       
          <Footer/> 
        </div>
      </DivWrapper>
    </div>
  );
}

const DivWrapper = styled.div`
  background-color: #798a94;
  min-height: 2240px;

  @media (max-width : 1680px){
    min-height: 2260px;
  }
  @media (max-width : 1600px){
    min-height: 2338px;
  }
  @media (max-width : 1300px){
    min-height: 2923px;
  }

  .small-screen {
    display: none;
  }

  @media (max-width : 1024px){
    .small-screen{
      display: block;
    }
    .big-screen{
      display: none;
    }
  }
  
  .flex-container{
    display: flex;
    flex-direction: column;
    width: 900px;
    margin: 50px auto;
  }
  .quote{
    color: white;
    text-shadow: 1px 1px 1px grey;
    text-align: justify;
    font-family: 'Playfair Display', serif;
    line-height: 2.8rem;
    padding: 20px;
    color: #ebebeb;
    font-size: 1.75rem;
    width: 75%;
    position: relative;
    font-style : italic ;
    text-indent: 50px;
    margin:25px auto 0px;
    align-self: center;
    text-align: center;
  }

  .page-container.second{
    margin-bottom: 50px;
  }
  .page-container{
    padding: 50px 25px;

    .home-titles{
      margin-top:50px;
      margin-bottom : 75px;
    }

    main{
      margin: 75px 0px;
      width: 90%;
      margin: 0px auto;
    }
    .img-yoga-container{
      img{
        border: 4px solid whitesmoke;
      } 
    }
    .img-yoga-container.first{
      img{
        float: right;
        margin-left: 50px;
        margin-top : 40px;
      } 
    }
    .img-yoga-container.second{
      float: left;
      margin-right: 50px;
      margin-top : 40px;
    }


    .texte{
      color: #ebebeb;
      text-align: justify;
      font-family: 'Montserrat', serif;
      line-height: 2.8rem;
      padding: 20px;
      color: #ebebeb;
      font-size: 1.4rem;
      position: relative;
      font-style : italic ;
      text-indent: 30px;

      ul{
        margin-top :0px;

        li{
          list-style: none;

          i{
            text-indent: 0px;
            margin-right: 20px;
            height:20px;
            width:20px;
            transform-origin: center;
            animation: rotation 3s linear infinite;
            color: pink;
          }
        }
      }
      
    }
    .texte.uptexte{
      padding-right: 20px;
    }
  }

  .menu-container{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
  }
  
  .home-titles{
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    color: whitesmoke;
    font-size : 3rem;
    font-style : italic;
    font-weight: normal;
    margin: 25px 0px;
  }

  @keyframes rotation{
    from{
      transform: rotateZ(0deg);
    }
    to{
      transform: rotateZ(-360deg)
    }
  }

  @media (max-width : 1440px){
    .page-container{
      margin:0px 0px 31vh;
      padding: 0;
    } 
  }
  @media (max-width : 1368px){
    .page-container{
      margin:0px 0px 72vh;
      padding: 0;
    } 
  }


  @media (max-width: 1225px){
    .img-yoga-container.second{ 
      float: none !important;
      text-align: center;

      img{
        margin: auto;
      }
    }
  }

  @media (max-width: 825px){
    .img-yoga-container.first{  
      text-align: center;
      
      img{
        float: none !important;
        width: 300px;
      }
    }
    .texte{
      font-size: 1.2rem !important;
    }
    .flex-container{
      justify-content: flex-start !important;
      width: 100%;
    }
  }

`

export default yoga;