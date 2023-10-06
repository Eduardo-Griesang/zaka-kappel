import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Member from "../Member";

const AboutTheBand = () => {

  const [membro1, setMembro1] = useState("hidden");
  const [membro2, setMembro2] = useState("hidden");
  const [membro3, setMembro3] = useState("hidden");

  const membros = [
    {
      nome: "Zaka Kappel",
      função: "Vocalista",
      bio: "Breve biografia...Breve biografia...Breve biografia...Breve biografia...Breve biografia...",
      view: membro1,
      setView: setMembro1,
      id: 1,
    },
    {
      nome: "Nome",
      função: "Função",
      bio: "Breve biografia...Breve biografia...Breve biografia...Breve biografia...Breve biografia...",
      view: membro2,
      setView: setMembro2,
      id: 2,
    },
    {
      nome: "Nome",
      função: "Função",
      bio: "Breve biografia...Breve biografia...Breve biografia...Breve biografia...Breve biografia...Breve biografia...",
      view: membro3,
      setView: setMembro3,
      id: 3,
    },
  ];

  function changeView(id) {
    membros.forEach((mem) => {
      console.log(id);
      if (mem.id === id) {
        if(mem.view === ""){
            mem.setView("hidden")
        } else{
            mem.setView("");
        }
      } else{
        mem.setView("hidden")
      }
    });
  }

  const bandRef = useRef(null)
  const bandInView = useInView(bandRef, {once: true})
  const animateText = useAnimation()

  useEffect(()=>{
    if(bandInView){
      animateText.start("visible")
    }
  },[bandInView])

  return (
    <div className="flex flex-col justify-center items-center lg:pb-4 z-0" ref={bandRef}>
      <motion.h2 
      className="py-5 font-body text-xl lg:py-14"
      variants={{
        hidden : {opacity: 0, y: 30},
        visible : {opacity: 1, y: 0}
      }}
      initial = "hidden"
      transition={{duration:0.7}}
      animate = {animateText}
      >
        Conheça a banda:
      </motion.h2>
      <motion.div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-20"
      variants={{
        hidden : {opacity: 0, x: -50},
        visible : {opacity: 1, x:0}
      }}
      initial = "hidden"
      transition={{duration:0.7}}
      animate = {animateText}
      >
        {membros.map((membro) => {
          return (
            <Member
              name={membro.nome}
              func={membro.função}
              bio={membro.bio}
              view={membro.view}
              key={membro.id}
              id={membro.id}
              changeView={changeView}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default AboutTheBand;
