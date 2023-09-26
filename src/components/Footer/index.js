import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify, faInstagram, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <footer className="flex flex-col justify-center items-center pt-32 sm:pt-40 pb-5 gap-7 bg-gradient-to-b from-sky-900 to-sky-950">
            <h3 className=" text-zinc-100">
                Nos siga nas redes sociais!
            </h3>
            <ul className="flex gap-7">
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
            </ul>
        </footer>
    )
}

export default Footer