import { useState } from "react";
import { motion } from "framer-motion";
import Member from "../Member";

const AboutTheBand = () => {

  const [membro1, setMembro1] = useState("hidden");
  const [membro2, setMembro2] = useState("hidden");
  const [membro3, setMembro3] = useState("hidden");

  const membros = [
    {
      nome: "Zaka Kappel",
      função: "Vocalista",
      bio: "Zaka tem 25 anos e começou a banda em 2019, com seu background de surf e skate, traz essa vibe para os palcos.",
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

  return (
    <motion.div className="flex flex-col justify-center items-center pb-10 z-0">
      <h2 className="py-5 font-body text-xl lg:py-10">Conheça a banda:</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-20">
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
      </div>
    </motion.div>
  );
};

export default AboutTheBand;
