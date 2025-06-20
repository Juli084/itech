import { Zap, Wrench, PhoneCall, ShieldCheck } from 'lucide-react';

const items = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: 'Atendimento Ágil',
    desc: 'Diagnóstico e solução com rapidez e precisão.',
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: 'Especialização Apple',
    desc: 'Foco em iPhones e iPads com peças de alta qualidade.',
  },
  {
    icon: <PhoneCall className="w-8 h-8 text-blue-600" />,
    title: 'Suporte Humanizado',
    desc: 'Fale direto com quem resolve. Sem enrolação.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    title: 'Garantia e Confiança',
    desc: 'Serviços com garantia e transparência total.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-6" id="diferenciais">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Por que escolher a iTech?</h2>
        <p className="text-gray-600 mb-12 max-w-xl mx-auto">
          Nosso compromisso é entregar soluções rápidas, honestas e com qualidade de ponta.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 text-left">
              <div className="bg-blue-100 p-3 rounded-full">
                {icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
