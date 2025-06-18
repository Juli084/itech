// src/pages/Obrigado.jsx

export default function Obrigado() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f7] text-[#1d1d1f] px-6">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-4">✅</div>
        <h1 className="text-3xl font-bold mb-2">Mensagem enviada!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Recebemos suas informações e em breve entraremos em contato pelo WhatsApp.
        </p>
        <a
          href="/"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Voltar para o início
        </a>
      </div>
    </div>
  );
}
