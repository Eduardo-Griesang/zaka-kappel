import membro from "../../assets/imgs/membro da banda.jpg";

const Member = ({ name, func, bio, view, id, changeView }) => {
  function changeV() {
    changeView(id);
  }

  return (
    <div className="flex flex-col items-center lg:relative z-30">
      <img
        className="rounded-full w-40 align-super hover:cursor-pointer z-30"
        src={membro}
        alt="membro da banda"
        onMouseOver={() => changeV()}
        loading="lazy"
      />

      <section
        className={`bg-slate-100 mx-2 rounded-md lg:absolute lg:top-44 lg:-left-16 lg:w-72 ${view} `}
      >
        <header className="flex justify-around items-center pt-3 px-3 pb-3">
          <h2 className="font-body text-xl">{name}</h2>
          <span className="font-body text-md text-stone-500">{func}</span>
        </header>

        <div className="h-1 bg-white rounded-sxl"></div>
        <p className="p-1 text-sm">{bio}</p>
      </section>

    </div>
  );
};

export default Member;
