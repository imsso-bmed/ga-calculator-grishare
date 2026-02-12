
import React, { useState } from 'react';
import { MessageCircle, Send, Loader2 } from 'lucide-react';
import { getSupportiveInfo } from '../services/geminiService';

const AiSupport: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');
    const res = await getSupportiveInfo(query);
    setResponse(res || "답변을 가져오는 중 오류가 발생했습니다.");
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-8">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <MessageCircle className="text-pink-500" size={24} />
        AI 상담 및 지원 정보
      </h3>
      <p className="text-sm text-slate-600 mb-4">
        임신 중지 절차, 법적 권리, 정서적 지원에 대해 궁금한 점을 물어보세요. 
        개인정보는 저장되지 않습니다.
      </p>

      <form onSubmit={handleSubmit} className="relative mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="무엇이 궁금하신가요? (예: 초기 수술은 아픈가요?)"
          className="w-full pl-4 pr-12 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-pink-500 outline-none"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="absolute right-2 top-1.5 p-1.5 bg-pink-500 text-white rounded-lg hover:bg-pink-600 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
        </button>
      </form>

      {response && (
        <div className="p-4 bg-pink-50 rounded-xl border border-pink-100 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <p className="text-sm text-slate-800 leading-relaxed whitespace-pre-wrap">
            {response}
          </p>
        </div>
      )}
    </div>
  );
};

export default AiSupport;
