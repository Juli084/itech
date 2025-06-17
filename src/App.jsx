import { useState } from 'react';
import Header from './components/Header';
import DeviceSelector from './components/DeviceSelector';
import ProblemSelector from './components/ProblemSelector';
import ResultSummary from './components/ResultSummary';

function App() {
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedProblems, setSelectedProblems] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [note, setNote] = useState('');

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
            customerName={customerName}
            setCustomerName={setCustomerName}
            note={note}
            setNote={setNote}
          />
        )}
      </main>
    </div>
  );
}

export default App;
