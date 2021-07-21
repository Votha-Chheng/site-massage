import { useEffect, useRef, useState } from "react";

const usePageYOffset = () => {

  const [scrollY, setScrollY] = useState(0)

  const pageYScroll = useRef(null)

  useEffect(()=>{
    
    function getScrollY(){
      pageYScroll.current = window.scrollY
    }

    window.addEventListener("scroll", getScrollY)

    return ()=> window.removeEventListener("scroll", getScrollY)

  }, [])

  return pageYScroll.current
}

export default usePageYOffset;