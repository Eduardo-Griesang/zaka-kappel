import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const Header = () => {
    const refE = useRef(null)
    const inView = useInView(refE, {once:true})

    const animateControls = useAnimation()

    useEffect(() => {
        if(inView){
            animateControls.start("visible")
        }
    },[inView])

    return (
        <div className="flex flex-col justify-center items-center bg-gradient-to-br from-amber-300 from-20% to-teal-400 to-70% h-screen" ref={refE}>
            <p className="font-body">
                Do Brasil para o mundo!
            </p>

            <motion.h1
            className="font-bold text-zinc-100 text-8.5xl ml-2 md:text-10xl md:ml-0
            font-title text-center"
            variants={{
                hidden: {opacity:0 , x: -100},
                visible: {opacity:1, x:0}
            }}
            transition={{duration:0.3}}
            initial="hidden"
            animate={animateControls}
            >
                Zaka Kappel
            </motion.h1>

            <div className="h-1 w-40 bg-slate-200"></div>
        </div>
    )
}

export default Header