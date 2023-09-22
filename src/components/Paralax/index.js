import { useRef } from "react"
import AboutTheBand from "../AboutTheBand"
import './UnderTheSea.css'
import { useScroll, useTransform, motion } from "framer-motion"

const Paralax = () => {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target:ref})

    const wave = useTransform(scrollYProgress, [0,1], ["0%","-65%"])

    return(
        <div ref={ref}>
            <AboutTheBand />

            <motion.div style={{y:wave}} className="svg">
                
            </motion.div>
        </div>
    )
}

export default Paralax