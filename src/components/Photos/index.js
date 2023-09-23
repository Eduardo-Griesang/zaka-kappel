import photo1 from "../../assets/imgs/zaka.jpg"
import photo2 from "../../assets/imgs/zaka2.jpg"
import photo3 from "../../assets/imgs/zaka3.jpg"

const Photos = () => {
    return (
        <section className="flex items-center justify-center flex-col gap-3 pt-20 pb-10 lg:pb-32 xl:pb-60 2xl:pb-72 md:flex-row md:justify-center">
            <img className="px-1 rounded-xl md:max-w-xs lg:max-w-md" src={photo3} alt="Banda Zaka no show de abertura do Maroon 5" />
            <div className="flex items-center justify-center flex-col gap-3 ">
                <img className="px-1 rounded-xl md:max-w-xs lg:max-w-md" src={photo2} alt="Banda Zaka no palco Pepsi on Stage" />
                <img className="px-1 rounded-xl md:max-w-xs lg:max-w-md" src={photo1} alt="Banda Zaka tocando" />
            </div>
        </section>
    )
}

export default Photos