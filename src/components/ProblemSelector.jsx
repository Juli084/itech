import {
  ScreenShare,
  BatteryCharging,
  Power,
  Volume2,
  Camera,
  CircleAlert,
  Zap,
} from "lucide-react";

export default function ProblemSelector({ selectedProblems, setSelectedProblems }) {
  const problems = [
    "Tela quebrada",
    "Bateria descarregando rápido",
    "iPhone não liga",
    "Sem áudio",
    "Câmera não funciona",
    "Botão Home falhando",
    "Travamentos"
  ];

  const icons = {
    "Tela quebrada": <ScreenShare size={20} />,
    "Bateria descarregando rápido": <BatteryCharging size={20} />,
    "iPhone não liga": <Power size={20} />,
    "Sem áudio": <Volume2 size={20} />,
    "Câmera não funciona": <Camera size={20} />,
    "Botão Home falhando": <CircleAlert size={20} />,
    "Travamentos": <Zap size={20} />,
  };

  const toggleProblem = (problem) => {
    setSelectedProblems((prev) =>
      prev.includes(problem)
        ? prev.filter((p) => p !== problem)
        : [...prev, problem]
    );
  };

  return (
    <div className="my-6">
      <h2 className="text-2xl font-semibold mb-4">Quais problemas você está enfrentando?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {problems.map((problem) => {
          const isSelected = selectedProblems.includes(problem);
          return (
            <button
              type="button"
              key={problem}
              onClick={() => toggleProblem(problem)}
              className={`flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 shadow-sm
                ${isSelected ? 'bg-[#e5e5ea] border-gray-700' : 'bg-white border-gray-300 hover:border-gray-500'}
              `}
            >
              <div className="text-gray-700">{icons[problem]}</div>
              <span className="text-[15px] font-medium">{problem}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
