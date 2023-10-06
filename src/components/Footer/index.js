import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion, useAnimation, useInView } from "framer-motion"
import { faSpotify, faInstagram, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { useEffect, useRef } from "react"

const Footer = () => {

    const footRef = useRef(null)
    const footerInView = useInView(footRef, {once:true})
    const footAnimateControls = useAnimation()

    useEffect(()=>{
        if(footerInView){
            footAnimateControls.start("visible")
        }
    },[footerInView])

    return(
        <footer className="flex flex-col justify-center items-center pt-32 sm:pt-40 pb-5 gap-7 bg-gradient-to-b from-sky-900 to-sky-950" ref={footRef}>
            <motion.h5
            className="text-zinc-100"
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
            }}
            initial= "hidden"
            transition={{duration:0.7}}
            animate= {footAnimateControls}
            >
                Nos siga nas redes sociais!
            </motion.h5>

            <motion.ul
            className="flex gap-7"
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0}
            }}
            initial= "hidden"
            transition={{duration:0.7}}
            animate= {footAnimateControls}
            >
                <li>
                    <a href="https://open.spotify.com/intl-pt/artist/068E6kBBn7TnyjnOD3Hymr?si=IMVgZtsgQKGJ3qgcnf4K8A" target="_blank" aria-label="Spotfy">
                        <FontAwesomeIcon className="hover:scale-110 hover:cursor-pointer" icon={faSpotify} style={{color: "#f4f4f5",}} size="2xl" />
                    </a>
                </li>
                    
                <li>
                    <a href="https://www.instagram.com/zakakappel/" target="_blank" aria-label="Instagram">
                        <FontAwesomeIcon className="hover:scale-110 hover:cursor-pointer" icon={faInstagram} style={{color: "#f4f4f5",}} size="2xl" />
                    </a>
                </li>
                    
                <li>
                    <a href="https://www.tiktok.com/@zakakappel?lang=en" target="_blank" aria-label="Tik Tok">
                        <FontAwesomeIcon className="hover:scale-110 hover:cursor-pointer" icon={faTiktok} style={{color: "#f4f4f5",}} size="2xl" />
                    </a>
                </li>
                    
                <li>
                    <a href="https://www.youtube.com/@ZAKAband" target="_blank" aria-label="Youtube">
                        <FontAwesomeIcon className="hover:scale-110 hover:cursor-pointer" icon={faYoutube} style={{color: "#f4f4f5",}} size="2xl" />
                    </a>
                </li>
            </motion.ul>
        </footer>
    )
}

export default Footer