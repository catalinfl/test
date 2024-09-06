import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react';

const Container = () => {

    const ref = useRef(null);
    const {scrollYProgress} = useScroll();

    
  return (
    <>
    <div className="parent-container" ref={ref}>
        <div className="container">
            <div className="leftpart"> Test <span className="inverted-text"> salut. </span> </div>
            <div className="rightpart"> Last die cantzen loss </div>
            <motion.div className="progress-bar" style={{scaleX: scrollYProgress}} />
        </div>
    </div>
    </>
)
}

export default Container