const Music = () => {
  return (
    <section className="bg-sky-900">
      <div className="flex items-center justify-center relative h-72">
        <iframe
          className="absolute -top-60 sm:-top-52 md:w-1/2 lg:-top-72 xl:-top-80 2xl:-top-96"
          style={{ borderRadius: 12 }}
          src="https://open.spotify.com/embed/artist/068E6kBBn7TnyjnOD3Hymr?utm_source=generator&theme=0"
          width="100%"
          height="352"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Music;
