import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify, faInstagram, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <footer className="flex flex-col justify-center items-center pt-10 pb-5 gap-7 bg-gradient-to-b from-sky-900 to-sky-950">
            <h3 className=" text-zinc-100">
                Nos siga nas redes sociais!
            </h3>
            <div className="flex gap-7">
                <FontAwesomeIcon className="hover:scale-110 hover:cursor-pointer" icon={faSpotify} style={{color: "#f4f4f5",}} size="2xl" />
                <FontAwesomeIcon className="hover:scale-110 hover:cursor-pointer" icon={faInstagram} style={{color: "#f4f4f5",}} size="2xl" />
                <FontAwesomeIcon className="hover:scale-110 hover:cursor-pointer" icon={faTiktok} style={{color: "#f4f4f5",}} size="2xl" />
                <FontAwesomeIcon className="hover:scale-110 hover:cursor-pointer" icon={faYoutube} style={{color: "#f4f4f5",}} size="2xl" />
            </div>
        </footer>
    )
}

export default Footer