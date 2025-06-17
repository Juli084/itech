import { useState } from 'react';
import Header from './components/Header';
import DeviceSelector from './components/DeviceSelector';
import ProblemSelector from './components/ProblemSelector';
import ResultSummary from './components/ResultSummary';
import priceTable from './data/priceTable';

function App() {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedProblems, setSelectedProblems] = useState([]);

  const total = selectedProblems.reduce((acc, problem) => {
    const price = priceTable[selectedModel]?.[problem] || 0;
    return acc + price;
  }, 0);

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-10">
        <DeviceSelector
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
        />
        <ProblemSelector
          selectedProblems={selectedProblems}
          setSelectedProblems={setSelectedProblems}
        />
        {selectedModel && selectedProblems.length > 0 && (
          <ResultSummary
            selectedModel={selectedModel}
            selectedProblems={selectedProblems}
            total={total}
          />
        )}
      </main>
    </div>
  );
}

export default App;
