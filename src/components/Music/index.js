const Music = () => {
  return (
    <section className="bg-sky-900">
      <div className="flex items-center justify-center relative h-96 pb-40 sm:pb-20">
        <iframe
          name="Spotfy"
          className="absolute -top-60 sm:-top-52 md:w-1/2 lg:-top-72 xl:-top-80 2xl:-top-96 rounded-md"
          src="https://open.spotify.com/embed/artist/068E6kBBn7TnyjnOD3Hymr?utm_source=generator&theme=0"
          width="100%"
          height="352"
          allow="autoplay; encrypted-media; picture-in-picture"
          loading="lazy"
        ></iframe>

        <iframe
          name="YouTube"
          className="mt-96 lg:mt-80 xl:mt-72 2xl:mt-60 rounded-md"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/SZhdh8nmY6g?si=El9Sf8dsdzXdl_VA"
          title="YouTube video player"
          allow="accelerometer; autoplay; encrypted-media; fullscreen"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Music;
