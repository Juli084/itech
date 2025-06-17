export default function ResultSummary({ selectedModel, selectedProblems, total }) {
    const formatMessage = () => {
      const problemsText = selectedProblems.join(', ');
      return `Olá! Tenho um ${selectedModel} com os seguintes problemas: ${problemsText}. Qual o valor exato do conserto?`;
    };
  
    return (
      <div className="my-4 border-t pt-4">
        <h2 className="text-lg font-semibold mb-2">Resumo:</h2>
        <p><strong>Modelo:</strong> {selectedModel || '---'}</p>
        <p><strong>Problemas:</strong> {selectedProblems.length > 0 ? selectedProblems.join(', ') : '---'}</p>
        <p><strong>Valor Estimado:</strong> R$ {total}</p>
  
        <a
          href={`https://wa.me/5515997534529?text=${encodeURIComponent(formatMessage())}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
        >
          Falar com a iTech no WhatsApp
        </a>
      </div>
    );
  }

  