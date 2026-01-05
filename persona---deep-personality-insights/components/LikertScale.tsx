
import React from 'react';

interface LikertScaleProps {
  value: number;
  onChange: (value: number) => void;
}

const LikertScale: React.FC<LikertScaleProps> = ({ value, onChange }) => {
  const options = [-3, -2, -1, 0, 1, 2, 3];
  
  const getSizeClass = (opt: number) => {
    const abs = Math.abs(opt);
    if (abs === 3) return "w-10 h-10 md:w-12 md:h-12";
    if (abs === 2) return "w-8 h-8 md:w-10 md:h-10";
    if (abs === 1) return "w-6 h-6 md:w-8 md:h-8";
    return "w-5 h-5 md:w-6 md:h-6";
  };

  return (
    <div className="flex flex-col items-center space-y-4 w-full max-w-lg mx-auto py-4">
      <div className="flex items-center justify-between w-full px-1">
        <span className="text-emerald-600 font-bold text-[10px] md:text-xs tracking-wider">AGREE</span>
        <span className="text-purple-600 font-bold text-[10px] md:text-xs tracking-wider">DISAGREE</span>
      </div>
      
      <div className="flex items-center justify-between w-full relative px-2">
        {/* Connection Line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-slate-200 -z-10 -translate-y-1/2"></div>
        
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`
              rounded-full border-2 transition-all duration-300 flex items-center justify-center
              ${getSizeClass(opt)}
              ${opt < 0 
                ? (value === opt ? 'bg-emerald-500 border-emerald-500 scale-110 shadow-lg shadow-emerald-100' : 'bg-white border-emerald-300 hover:border-emerald-400') 
                : opt > 0
                ? (value === opt ? 'bg-purple-500 border-purple-500 scale-110 shadow-lg shadow-purple-100' : 'bg-white border-purple-300 hover:border-purple-400')
                : (value === opt ? 'bg-slate-400 border-slate-400' : 'bg-white border-slate-300 hover:border-slate-400')
              }
            `}
          >
            {value === opt && (
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LikertScale;
