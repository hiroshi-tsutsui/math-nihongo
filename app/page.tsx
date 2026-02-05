import MathDojo from './components/MathDojo';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 p-4">
      <h1 className="text-4xl font-black text-slate-800 mb-2">Math Nihongo</h1>
      <p className="text-slate-500 mb-8 font-medium">Calculate in Japanese.</p>
      <MathDojo />
      <p className="mt-12 text-slate-400 text-xs">Educational Fleet: App 7/11</p>
    </div>
  )
}
