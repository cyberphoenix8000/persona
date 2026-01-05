
import React from 'react';
import { 
  Users, 
  User, 
  Sparkles, 
  Eye, 
  Cpu, 
  Heart, 
  GanttChartSquare, 
  Shuffle 
} from 'lucide-react';

interface DichotomySliderProps {
  label: string;
  leftTrait: string;
  rightTrait: string;
  score: number; // 0 to 100, where 100 is pure rightTrait
  color: string;
}

const traitIcons: Record<string, React.ReactNode> = {
  "Introverted": <User className="w-4 h-4" />,
  "Extraverted": <Users className="w-4 h-4" />,
  "Intuitive": <Sparkles className="w-4 h-4" />,
  "Observant": <Eye className="w-4 h-4" />,
  "Thinking": <Cpu className="w-4 h-4" />,
  "Feeling": <Heart className="w-4 h-4" />,
  "Judging": <GanttChartSquare className="w-4 h-4" />,
  "Prospecting": <Shuffle className="w-4 h-4" />
};

const DichotomySlider: React.FC<DichotomySliderProps> = ({ label, leftTrait, rightTrait, score, color }) => {
  const isRightDominant = score >= 50;
  const dominantScore = isRightDominant ? score : 100 - score;
  const dominantTrait = isRightDominant ? rightTrait : leftTrait;

  return (
    <div className="group space-y-3">
      <div className="flex justify-between items-end px-1">
        <div className="space-y-0.5">
          <p className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-300 group-hover:text-indigo-400 transition-colors">
            {label}
          </p>
          <p className="text-xs font-bold text-slate-800">
            {dominantTrait}
          </p>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black uppercase tracking-widest text-slate-300">Dominance</p>
          <p className="text-sm font-black" style={{ color }}>{dominantScore}%</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Left Icon */}
        <div className={`p-2 rounded-xl transition-all duration-500 ${!isRightDominant ? 'bg-white shadow-md border-2' : 'bg-slate-50 opacity-40 grayscale'} `} 
             style={{ borderColor: !isRightDominant ? color : 'transparent' }}>
          {React.cloneElement(traitIcons[leftTrait] as React.ReactElement, { 
            style: { color: !isRightDominant ? color : '#94a3b8' } 
          })}
        </div>

        {/* Dynamic Slider Bar */}
        <div className="flex-1 h-3 bg-slate-100 rounded-full relative overflow-hidden flex shadow-inner">
          {/* Neutral Center Marker */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/60 z-20"></div>
          
          {/* Left Fill */}
          <div 
            className="h-full transition-all duration-1000 ease-out origin-right"
            style={{ 
              width: '50%',
              background: !isRightDominant ? `linear-gradient(to left, ${color}CC, ${color})` : '#f1f5f9',
              transform: `scaleX(${!isRightDominant ? (dominantScore - 50) / 50 : 0})`
            }}
          ></div>
          
          {/* Right Fill */}
          <div 
            className="h-full transition-all duration-1000 ease-out origin-left"
            style={{ 
              width: '50%',
              background: isRightDominant ? `linear-gradient(to right, ${color}CC, ${color})` : '#f1f5f9',
              transform: `scaleX(${isRightDominant ? (dominantScore - 50) / 50 : 0})`
            }}
          ></div>

          {/* Liquid highlight effect */}
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-t from-white/0 via-white/40 to-white/0"></div>
        </div>

        {/* Right Icon */}
        <div className={`p-2 rounded-xl transition-all duration-500 ${isRightDominant ? 'bg-white shadow-md border-2' : 'bg-slate-50 opacity-40 grayscale'} `}
             style={{ borderColor: isRightDominant ? color : 'transparent' }}>
          {React.cloneElement(traitIcons[rightTrait] as React.ReactElement, { 
            style: { color: isRightDominant ? color : '#94a3b8' } 
          })}
        </div>
      </div>

      {/* Trait Labels */}
      <div className="flex justify-between px-2">
        <span className={`text-[9px] font-black uppercase tracking-widest ${!isRightDominant ? 'text-slate-900' : 'text-slate-300'}`}>
          {leftTrait}
        </span>
        <span className={`text-[9px] font-black uppercase tracking-widest ${isRightDominant ? 'text-slate-900' : 'text-slate-300'}`}>
          {rightTrait}
        </span>
      </div>
    </div>
  );
};

export default DichotomySlider;
