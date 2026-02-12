
import React from 'react';
import { CalculationResult, ProcedureType } from '../types';
import { TIMELINE_DATA } from '../constants';
import { CheckCircle2, AlertCircle, Clock } from 'lucide-react';

interface TimelineDisplayProps {
  result: CalculationResult;
}

const TimelineDisplay: React.FC<TimelineDisplayProps> = ({ result }) => {
  const currentWeek = result.weeks;

  const getStatusIcon = (type: ProcedureType) => {
    switch (type) {
      case ProcedureType.MEDICAL: return <CheckCircle2 className="text-emerald-500" />;
      case ProcedureType.SURGICAL: return <Clock className="text-blue-500" />;
      case ProcedureType.CONSULTATION_REQUIRED: return <AlertCircle className="text-amber-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 text-center">
        <p className="text-indigo-600 font-medium mb-1">현재 상태</p>
        <div className="text-4xl font-bold text-indigo-900">
          {result.weeks}주 {result.days}일
        </div>
        <p className="text-slate-500 text-sm mt-2">
          (총 {result.totalDays}일 경과)
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="font-bold text-lg mb-4">시술 옵션 타임라인</h3>
        <div className="space-y-4">
          {TIMELINE_DATA.map((item, idx) => {
            const isActive = currentWeek >= item.startWeek && currentWeek < item.endWeek;
            const isPast = currentWeek >= item.endWeek;

            return (
              <div 
                key={idx} 
                className={`p-4 rounded-xl border-2 transition-all ${
                  isActive ? 'border-indigo-500 bg-indigo-50' : 'border-slate-100 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 font-bold">
                    {getStatusIcon(item.type)}
                    <span>{item.description}</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-200 rounded text-slate-700">
                    {item.startWeek}~{item.endWeek}주
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.advice}
                </p>
                {isActive && (
                  <div className="mt-3 py-1 px-3 bg-indigo-200 text-indigo-800 text-xs font-bold rounded-full inline-block">
                    현재 당신의 구간입니다
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TimelineDisplay;
