'use client';

import {
  Smartphone,
  BatteryLow,
  Power,
  VolumeX,
  CameraOff,
  Droplet,
} from 'lucide-react';

import * as Motion from 'framer-motion';

const problems = [
  { icon: Smartphone, label: 'Tela quebrada' },
  { icon: BatteryLow, label: 'Bateria descarregando rápido' },
  { icon: Power, label: 'iPhone não liga' },
  { icon: VolumeX, label: 'Sem áudio' },
  { icon: CameraOff, label: 'Câmera não funciona' },
  { icon: Droplet, label: 'Aparelho molhado' },
];

export default function CommonProblems() {
  return (
    <section className="bg-[#f5f5f7] py-20 px-6" id="problemas-comuns">
      <div className="max-w-5xl mx-auto text-center">
        <Motion.motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10 text-[#1d1d1f]"
        >
          Problemas mais comuns
        </Motion.motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {problems.map(({ icon, label }, index) => {
            const Icon = icon; // ← transformando corretamente em componente React

            return (
              <Motion.motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center bg-white rounded-xl p-5 shadow hover:shadow-md hover:-translate-y-1 transition duration-300"
              >
                <div className="bg-blue-100 p-4 rounded-full mb-3">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium text-center">{label}</p>
              </Motion.motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
