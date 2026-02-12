
import React, { useState } from 'react';
import Calculator from './components/Calculator';
import TimelineDisplay from './components/TimelineDisplay';
import AiSupport from './components/AiSupport';
import QuickEscape from './components/QuickEscape';
import { CalculationResult } from './types';
import { FAQ_ITEMS } from './constants';
// Fix: Added missing Clock import from lucide-react
import { Heart, ShieldCheck, HelpCircle, Clock } from 'lucide-react';

const App: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Heart className="text-white" size={18} />
            </div>
            <h1 className="text-xl font-bold text-slate-800">ChoicePath</h1>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
            <ShieldCheck size={14} className="text-indigo-600" />
            프라이버시 안전함
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Intro */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
            안전하고 투명한 정보를<br />제공받을 권리가 있습니다.
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto">
            임신 주수를 확인하고, 현재 상황에서 가능한 선택지를 확인해 보세요. 
            혼자가 아닙니다. 당신의 결정을 존중합니다.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Calculation */}
          <div className="space-y-8">
            <Calculator onCalculate={setResult} />
            
            {/* Common FAQ */}
            <div className="bg-slate-800 text-white p-6 rounded-2xl shadow-xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <HelpCircle size={20} className="text-indigo-400" />
                자주 묻는 질문
              </h3>
              <div className="space-y-4">
                {FAQ_ITEMS.map((faq, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-indigo-300 font-bold text-sm">Q. {faq.q}</p>
                    <p className="text-slate-300 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Results & Timeline */}
          <div className="space-y-8">
            {result ? (
              <TimelineDisplay result={result} />
            ) : (
              <div className="bg-white p-12 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center">
                  <Clock className="text-slate-300" size={32} />
                </div>
                <p className="text-slate-400 font-medium">
                  먼저 왼쪽에서 주수를 계산해 보세요.<br />상세 옵션이 여기에 나타납니다.
                </p>
              </div>
            )}
            
            <AiSupport />
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-12 text-center text-slate-400 text-xs leading-relaxed max-w-2xl mx-auto border-t border-slate-200 pt-8">
          <p>이 웹사이트는 정보 제공만을 목적으로 하며, 의학적 진단이나 법적 자문을 대신할 수 없습니다.</p>
          <p className="mt-2">긴급한 의학적 도움이 필요하거나 위험 징후(극심한 통증, 과다 출혈 등)가 있는 경우 즉시 응급 센터를 방문하십시오.</p>
        </footer>
      </main>

      <QuickEscape />
    </div>
  );
};

export default App;
