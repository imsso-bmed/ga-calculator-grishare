
import React from 'react';
import { ShieldX } from 'lucide-react';

const QuickEscape: React.FC = () => {
  const handleEscape = () => {
    window.location.href = 'https://www.google.com/search?q=weather';
  };

  return (
    <button
      onClick={handleEscape}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-red-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-red-700 transition-all font-bold animate-pulse"
      title="Quick Escape (Privacy)"
    >
      <ShieldX size={20} />
      <span className="hidden sm:inline">빠른 나가기 (프라이버시)</span>
    </button>
  );
};

export default QuickEscape;
