import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cyan-50 p-6">
      <h1 className="text-4xl font-bold text-cyan-800 mb-12 tracking-wide">Math Nihongo 数学</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Flashcard */}
        <div className="bg-white p-12 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center h-80 card-flip">
          <p className="text-gray-400 text-sm font-bold uppercase mb-4">Vocabulary</p>
          <h2 className="text-6xl font-bold text-gray-800 mb-4">三角形</h2>
          <p className="text-2xl text-cyan-600">Sankakukei</p>
          <p className="mt-8 text-gray-500">Tap to reveal English</p>
        </div>

        {/* Practice */}
        <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col justify-between h-80">
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-4">Solve & Speak</h3>
            <p className="text-3xl font-mono mb-6">12 ÷ 4 = ?</p>
            <p className="text-gray-600 mb-2">How do you say this equation?</p>
          </div>
          
          <div className="space-y-2">
             <div className="p-3 border rounded cursor-pointer hover:bg-cyan-50">
               Juu-ni waru yon wa san
             </div>
             <div className="p-3 border rounded cursor-pointer hover:bg-cyan-50">
               Juu-ni kakeru yon wa san
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
