import { useEffect, useRef, useState } from "react"
import AboutTheBand from "../AboutTheBand"
import './UnderTheSea.css'
import { useScroll, useTransform, motion } from "framer-motion"
import Photos from "../Photos"
import useWindowDimensions from "../useWindowDimensions"

const Paralax = () => {

    const { height, width } = useWindowDimensions()

    const [start, setStart] = useState("-50%")
    const [end, setEnd] = useState("-132.5%")

    useEffect(() =>{
        if(width >= 768){
            setStart("-30%")
            setEnd("-135%")
        }
    })

    useEffect(() =>{
        if(width >= 1024){
            setStart("-30%")
            setEnd("-155.5%")
        }
    })

    useEffect(() =>{
        if(width >= 1280){
            setStart("-20%")
            setEnd("-167%")
        }
    })

    useEffect(() =>{
        if(width >= 1536){
            setStart("-19.2%")
            setEnd("-170%")
        }
    })

    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target:ref})

    const wave = useTransform(scrollYProgress, [0,2], [start, end])

    return(
        <>
            <AboutTheBand />
            <div className="relative gradient" ref={ref}>
                <Photos />
                <motion.div style={{y:wave}} className="svg relative">
                </motion.div>
            </div>
        </>
    )
}

export default Paralax