'use client';
import { Zap, Wrench, PhoneCall, ShieldCheck } from 'lucide-react';
import * as Motion from 'framer-motion';

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
    <section className="bg-white py-20 px-6" id="diferenciais">
      <div className="max-w-6xl mx-auto text-center">
        <Motion.motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f]"
        >
          Por que escolher a iTech?
        </Motion.motion.h2>

        <Motion.motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg"
        >
          Nosso compromisso é entregar soluções rápidas, honestas e com qualidade de ponta.
        </Motion.motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {items.map(({ icon, title, desc }, index) => (
            <Motion.motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex items-start gap-4 bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
            >
              <div className="bg-blue-100 p-3 rounded-full shadow-md">{icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-[#1d1d1f]">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            </Motion.motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
