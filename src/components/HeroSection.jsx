export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* Imagem para desktop */}
      <div className="absolute inset-0 hidden md:block">
        <img
          src="/img/foto-iphone.jpg"
          alt="iPhone consertado"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Imagem para mobile */}
      <div className="absolute inset-0 md:hidden">
        <img
          src="/img/iphone.png"
          alt="iPhone mobile"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Texto centralizado com efeito vidro */}
      <div className="relative z-20 flex items-center justify-center h-full px-4">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 md:p-10 text-center text-white max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Seu iPhone como novo
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90">
            Diagnóstico rápido e assistência especializada com qualidade e confiança.
          </p>
          <a
            href="https://wa.me/5515997534529"
            className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
