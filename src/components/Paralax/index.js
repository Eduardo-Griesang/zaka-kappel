import { useRef } from "react"
import AboutTheBand from "../AboutTheBand"
import './UnderTheSea.css'
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion"
import Photos from "../Photos"

const Paralax = () => {

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target:ref})

    const wave = useTransform(scrollYProgress, [0,1], ["0%","-60%"])

    return(
        <div className="relative AAAAAA "  ref={ref}>
            <AboutTheBand />
            <Photos />
            <motion.div style={{y:wave}} className="svg relative">
            </motion.div>
        </div>
    )
}

export default Paralax