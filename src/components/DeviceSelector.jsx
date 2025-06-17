export default function DeviceSelector({ selectedModel, setSelectedModel }) {
  const models = [
    "iPhone 8",
    "iPhone 8 Plus",
    "iPhone X",
    "iPhone XR",
    "iPhone XS",
    "iPhone XS Max",
    "iPhone 11",
    "iPhone 11 Pro",
    "iPhone 11 Pro Max",
    "iPhone 12",
    "iPhone 12 Pro",
    "iPhone 12 Pro Max",
    "iPhone 13",
    "iPhone 13 Pro",
    "iPhone 13 Pro Max",
    "iPhone 14",
    "iPhone 14 Plus",
    "iPhone 14 Pro",
    "iPhone 14 Pro Max",
    "iPhone 15",
    "iPhone 15 Plus",
    "iPhone 15 Pro",
    "iPhone 15 Pro Max",
  ];

  const handleChange = (e) => {
    setSelectedModel(e.target.value);
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Selecione o modelo do seu iPhone</h2>
      <select
        value={selectedModel}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-base font-medium text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      >
        <option value="" disabled>Escolha o modelo</option>
        {models.map((model) => (
          <option key={model} value={model}>{model}</option>
        ))}
      </select>
    </div>
  );
}
