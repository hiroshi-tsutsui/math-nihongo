'use client';

import { useState, useEffect } from 'react';

type Problem = {
  text: string;
  answer: number;
};

const numToKanji = (n: number): string => {
  const map = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  if (n <= 10) return map[n];
  // Simple 11-19 support
  if (n < 20) return '十' + map[n - 10];
  return n.toString(); // Fallback
};

const numToReading = (n: number): string => {
    const map = ['zero', 'ichi', 'ni', 'san', 'yon', 'go', 'roku', 'nana', 'hachi', 'kyuu', 'juu'];
    if (n <= 10) return map[n];
    if (n < 20) return 'juu-' + map[n - 10];
    return n.toString();
};

export default function MathDojo() {
  const [problem, setProblem] = useState<Problem>({ text: '', answer: 0 });
  const [input, setInput] = useState('');
  const [score, setScore] = useState(0);
  const [mode, setMode] = useState<'kanji' | 'reading'>('kanji');
  const [feedback, setFeedback] = useState<'none' | 'correct' | 'wrong'>('none');

  const generateProblem = () => {
    const a = Math.floor(Math.random() * 10) + 1; // 1-10
    const b = Math.floor(Math.random() * 10) + 1; // 1-10
    const isPlus = Math.random() > 0.5;
    
    const valA = mode === 'kanji' ? numToKanji(a) : numToReading(a);
    const valB = mode === 'kanji' ? numToKanji(b) : numToReading(b);
    const op = mode === 'kanji' ? (isPlus ? '+' : '-') : (isPlus ? 'tasu' : 'hiku');
    
    const text = `${valA} ${op} ${valB} = ?`;
    const answer = isPlus ? a + b : a - b;

    setProblem({ text, answer });
    setInput('');
    setFeedback('none');
  };

  useEffect(() => {
    generateProblem();
  }, [mode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = parseInt(input);
    if (isNaN(val)) return;

    if (val === problem.answer) {
        setScore(s => s + 10);
        setFeedback('correct');
        setTimeout(generateProblem, 1000);
    } else {
        setScore(s => Math.max(0, s - 5));
        setFeedback('wrong');
        setTimeout(() => setFeedback('none'), 1000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl shadow-xl flex flex-col gap-6">
      
      <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-slate-700">Score: {score}</div>
          <div className="flex gap-2">
              <button 
                onClick={() => setMode('kanji')}
                className={`px-3 py-1 rounded text-sm font-bold ${mode === 'kanji' ? 'bg-indigo-600 text-white' : 'bg-slate-200'}`}
              >
                  Kanji
              </button>
              <button 
                onClick={() => setMode('reading')}
                className={`px-3 py-1 rounded text-sm font-bold ${mode === 'reading' ? 'bg-indigo-600 text-white' : 'bg-slate-200'}`}
              >
                  Reading
              </button>
          </div>
      </div>

      <div className={`h-48 flex items-center justify-center rounded-xl border-4 transition-colors duration-300
        ${feedback === 'correct' ? 'border-green-500 bg-green-50' : feedback === 'wrong' ? 'border-red-500 bg-red-50' : 'border-indigo-100 bg-slate-50'}
      `}>
          <h2 className="text-5xl font-black text-slate-800">{problem.text}</h2>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
          <input 
            type="number" 
            value={input}
            onChange={e => setInput(e.target.value)}
            className="flex-1 text-center text-3xl font-bold p-4 border-2 border-slate-300 rounded-lg focus:border-indigo-500 focus:outline-none"
            placeholder="?"
            autoFocus
          />
          <button 
            type="submit"
            className="bg-indigo-600 text-white px-8 rounded-lg font-bold text-xl hover:bg-indigo-700"
          >
            Go
          </button>
      </form>

      <div className="text-center text-slate-400 text-sm">
          Solve the problem. Enter the number.
      </div>
    </div>
  );
}
