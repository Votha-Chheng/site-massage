import { useEffect, useRef, useState } from "react";

const useScrollDirection = () => {

  const [scrollWay, setScrollWay] = useState(undefined)

  const oldValueY = useRef(0)
  const newValueY = useRef(0)

  useEffect(()=>{
    
    function getScrollDirection(){
      oldValueY.current === 0
      newValueY.current = pageYOffset
      
      if(oldValueY.current < newValueY.current){
        setScrollWay("down")
      }
      if(oldValueY.current > newValueY.current){
        setScrollWay("up")
      }
      oldValueY.current = newValueY.current
    }

    window.addEventListener("scroll", getScrollDirection)

    return ()=> window.removeEventListener("scroll", getScrollDirection)

  }, [])

  return scrollWay
}

export default useScrollDirection;