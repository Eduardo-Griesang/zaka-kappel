import { useEffect, useRef } from "react"
import photo1 from "../../assets/imgs/zaka.jpg"
import photo2 from "../../assets/imgs/zaka2.jpg"
import photo3 from "../../assets/imgs/zaka3.jpg"
import { useAnimation, useInView, motion } from "framer-motion"

const Photos = () => {

    const imgRef = useRef()
    const imgInView = useInView(imgRef, {once:true})
    const imgAnimate = useAnimation()

    useEffect(()=>{
        if (imgInView){
            imgAnimate.start("visible")
        }
    },[imgInView])

    return (
        <motion.section className="flex items-center justify-center flex-col gap-3 pt-20 pb-10 lg:pb-32 xl:pb-60 2xl:pb-72 md:flex-row md:justify-center" ref={imgRef}
        variants={{
            hidden:{opacity:0, x:-50},
            visible:{opacity:1, x:0}
        }}
        initial="hidden"
        transition={{duration:0.7}}
        animate={imgAnimate}
        >
            <img className="px-1 rounded-xl md:max-w-xs lg:max-w-md" src={photo3} alt="Banda Zaka no show de abertura do Maroon 5" loading="lazy" />
            <div className="flex items-center justify-center flex-col gap-3 ">
                <img className="px-1 rounded-xl md:max-w-xs lg:max-w-md" src={photo2} alt="Banda Zaka no palco Pepsi on Stage" loading="lazy" />
                <img className="px-1 rounded-xl md:max-w-xs lg:max-w-md" src={photo1} alt="Banda Zaka tocando" loading="lazy" />
            </div>
        </motion.section>
    )
}

export default Photos