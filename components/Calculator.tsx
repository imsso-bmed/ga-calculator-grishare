
import React, { useState } from 'react';
import { Calendar as CalendarIcon, Info } from 'lucide-react';
import { CalculationResult } from '../types';

interface CalculatorProps {
  onCalculate: (result: CalculationResult) => void;
}

const Calculator: React.FC<CalculatorProps> = ({ onCalculate }) => {
  const [lmp, setLmp] = useState<string>('');

  const calculate = () => {
    if (!lmp) return;

    const lmpDate = new Date(lmp);
    const today = new Date();
    
    // Total difference in milliseconds
    const diff = today.getTime() - lmpDate.getTime();
    if (diff < 0) {
      alert("마지막 생일 시작일이 오늘보다 이후일 수 없습니다.");
      return;
    }

    const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    const weeks = Math.floor(totalDays / 7);
    const days = totalDays % 7;

    const estimatedConception = new Date(lmpDate);
    estimatedConception.setDate(lmpDate.getDate() + 14); // Standard approximation

    onCalculate({
      weeks,
      days,
      totalDays,
      estimatedConception,
      currentDate: today
    });
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <CalendarIcon className="text-indigo-600" size={24} />
        임신 주수 계산기
      </h2>
      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
        마지막 생리 시작일(LMP)을 기준으로 현재 임신 몇 주차인지 확인해 보세요. 
        임신 중지는 주수에 따라 가능한 방법이 달라질 수 있습니다.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            마지막 생리 시작일
          </label>
          <input
            type="date"
            value={lmp}
            onChange={(e) => setLmp(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          />
        </div>
        
        <button
          onClick={calculate}
          disabled={!lmp}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-md"
        >
          계산하기
        </button>
      </div>

      <div className="mt-6 flex items-start gap-2 p-3 bg-amber-50 rounded-lg text-xs text-amber-800 border border-amber-100">
        <Info size={16} className="shrink-0 mt-0.5" />
        <p>이 계산 결과는 추정치이며, 실제 주수는 산부인과 초음파 검사를 통해 가장 정확하게 확인할 수 있습니다.</p>
      </div>
    </div>
  );
};

export default Calculator;
