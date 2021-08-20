import { motion } from "framer-motion";
import { useState } from "react";
import {InView} from "react-intersection-observer";
import styled from "styled-components";

const ListeResponsive = ({title, link, photo, alt}) => {
  const [elementInView, setElementInView] = useState(false)

  return (
    <DivWrapper>
      <InView onChange={(inView, entry)=> inView && setElementInView(true) } >
        <a href={link} >
          <motion.div 
            className="container-yoga" 
            initial={{opacity:0, y:"100%"}} 
            animate={elementInView ? {opacity:1, y :0} : ""} 
            transition={{opacity:{delay : 0.25, duration : 1}, y:{delay : 0.25, duration : 1.2, ease:"easeOut"}}} 
            tabIndex="11"> 
            <img
              src={`/images/${photo}`}
              alt={alt}
              width = "600"/>
            <h3 className="titre">
              {title}
            </h3>
          </motion.div>
        </a>

      </InView>
    </DivWrapper>

  );
}

const DivWrapper = styled.div`
  margin: 25px auto;
`
export default ListeResponsive;