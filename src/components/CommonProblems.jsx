import {
  Smartphone,
  BatteryLow,
  Power,
  VolumeX,
  CameraOff,
  Droplet,
} from 'lucide-react';

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
    <section className="bg-[#f5f5f7] py-16 px-6" id="problemas-comuns">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Problemas mais comuns</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div key={problem.label} className="flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-3">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium">{problem.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
