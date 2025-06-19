export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/img/foto-iphone.jpg')`
      }}
    >
      
      <div className="absolute bg-black opacity-25 inset-0 backdrop-blur-none"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Seu iPhone como novo
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-xl mx-auto">
          Diagnóstico rápido e assistência especializada com qualidade e confiança.
        </p>
        <a
          href="#formulario"
          className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Solicitar orçamento
        </a>
      </div>
    </section>
  );
}
