import { useEffect, useContext } from "react";
import { ScrollContext } from "./MomentumScrollContext";

export const ParallaxElement =  (props) => {
  const context = useContext(ScrollContext);
  useEffect(() => context.addBlock(props), []);
  return props.children;
};

export default ParallaxElement