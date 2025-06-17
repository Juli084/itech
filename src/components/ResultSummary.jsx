export default function ResultSummary({
  selectedModel,
  selectedProblems,
  customerName,
  setCustomerName,
  note,
  setNote
}) {
  const message = `
Olá! Tenho um ${selectedModel} com os seguintes problemas: ${selectedProblems.join(", ")}.
${customerName ? `\nNome ou número de série: ${customerName}` : ""}
${note ? `\nObservações: ${note}` : ""}
Poderia me informar o valor do conserto?`;

  const whatsappLink = `https://wa.me/5515997534529?text=${encodeURIComponent(message)}`;

  const handleSend = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="mt-6 p-4 border-t border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Resumo</h3>

      <p className="mb-2"><strong>Dispositivo:</strong> {selectedModel}</p>
      <p className="mb-4"><strong>Problemas:</strong> {selectedProblems.join(", ")}</p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nome ou número de série (opcional):
        </label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Observações (opcional):
        </label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleSend}
        className="w-full text-center bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-xl transition duration-200"
      >
        Enviar para o WhatsApp
      </button>
    </div>
  );
}
