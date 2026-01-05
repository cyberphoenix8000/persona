
import React, { useState, useRef } from 'react';
import { QUESTIONS } from './constants';
import { UserResponse, PersonalityScores, AnalysisResult, Dimension } from './types';
import { getPersonalityAnalysisAlgorithmic } from './services/personalityAlgorithm';
import LikertScale from './components/LikertScale';
import PersonalityChart from './components/PersonalityChart';
import DichotomySlider from './components/DichotomySlider';
import { 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw, 
  Sparkles, 
  Brain, 
  Briefcase, 
  Heart, 
  Target, 
  AlertCircle, 
  Quote, 
  Zap, 
  Share2, 
  Info,
  GraduationCap,
  Layers,
  Compass,
  Users,
  TrendingUp,
  CloudLightning,
  AlertTriangle,
  Download
} from 'lucide-react';

const QUESTIONS_PER_PAGE = 6;

const App: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'test' | 'loading' | 'results'>('intro');
  const [currentPage, setCurrentPage] = useState(0);
  const [responses, setResponses] = useState<UserResponse[]>([]);
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(QUESTIONS.length / QUESTIONS_PER_PAGE);
  const currentQuestions = QUESTIONS.slice(
    currentPage * QUESTIONS_PER_PAGE,
    (currentPage + 1) * QUESTIONS_PER_PAGE
  );

  const progress = Math.round((responses.length / QUESTIONS.length) * 100);

  const handleResponse = (questionId: number, value: number) => {
    setResponses(prev => {
      const existing = prev.findIndex(r => r.questionId === questionId);
      if (existing > -1) {
        const next = [...prev];
        next[existing] = { questionId, value };
        return next;
      }
      return [...prev, { questionId, value }];
    });
  };

  const isPageComplete = () => {
    return currentQuestions.every(q => responses.find(r => r.questionId === q.id));
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const calculateScores = (): { scores: PersonalityScores, typeCode: string } => {
    const scores = { [Dimension.EI]: 0, [Dimension.SN]: 0, [Dimension.TF]: 0, [Dimension.JP]: 0 };
    const counts = { [Dimension.EI]: 0, [Dimension.SN]: 0, [Dimension.TF]: 0, [Dimension.JP]: 0 };

    responses.forEach(resp => {
      const q = QUESTIONS.find(qi => qi.id === resp.questionId);
      if (q) {
        let normalizedValue = resp.value;
        if (q.reverse) normalizedValue = -normalizedValue;
        const percentage = ((normalizedValue + 3) / 6) * 100;
        scores[q.dimension] += percentage;
        counts[q.dimension]++;
      }
    });

    const finalScores: PersonalityScores = {
      Extraversion: Math.round(scores[Dimension.EI] / (counts[Dimension.EI] || 1)),
      Sensing: Math.round(scores[Dimension.SN] / (counts[Dimension.SN] || 1)),
      Thinking: Math.round(scores[Dimension.TF] / (counts[Dimension.TF] || 1)),
      Judging: Math.round(scores[Dimension.JP] / (counts[Dimension.JP] || 1))
    };

    const typeCode = [
      finalScores.Extraversion > 50 ? 'E' : 'I',
      finalScores.Sensing > 50 ? 'S' : 'N',
      finalScores.Thinking > 50 ? 'T' : 'F',
      finalScores.Judging > 50 ? 'J' : 'P'
    ].join('');

    return { scores: finalScores, typeCode };
  };

  const handleSubmit = async () => {
    if (responses.length < QUESTIONS.length) {
      setError("Please answer all questions.");
      return;
    }

    setStep('loading');
    setError(null);
    
    setTimeout(() => {
      try {
        const { scores, typeCode } = calculateScores();
        const result = getPersonalityAnalysisAlgorithmic(scores, typeCode);
        setAnalysis(result);
        setStep('results');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) {
        console.error(err);
        setError("Analysis failed. Please try again.");
        setStep('results');
      }
    }, 1800);
  };

  const resetTest = () => {
    setResponses([]);
    setCurrentPage(0);
    setAnalysis(null);
    setStep('intro');
    setError(null);
  };

  if (step === 'intro') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-2xl bg-white rounded-[3rem] shadow-2xl p-12 md:p-20 space-y-8 border border-slate-100">
          <div className="w-24 h-24 bg-indigo-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-indigo-100 rotate-6 transform transition-transform hover:rotate-0">
            <Sparkles className="text-white w-12 h-12" />
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-tight">
              Know your <br/><span className="text-indigo-600 italic">True Self.</span>
            </h1>
            <p className="text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
              Take our deterministic 60-question assessment based on proven psychological archetypes. Deeply human, mathematically precise.
            </p>
          </div>
          <button
            onClick={() => setStep('test')}
            className="bg-indigo-600 text-white px-14 py-5 rounded-full font-black text-xl hover:bg-indigo-700 transition-all shadow-2xl hover:shadow-indigo-200 transform hover:-translate-y-1 active:scale-95"
          >
            Start Test
          </button>
          <div className="flex items-center justify-center space-x-8 text-slate-400 text-[10px] font-black uppercase tracking-widest pt-8 border-t border-slate-100">
            <span className="flex items-center gap-2"><Target className="w-4 h-4" /> 60 Variables</span>
            <span className="flex items-center gap-2"><Brain className="w-4 h-4" /> Jungian Theory</span>
            <span className="flex items-center gap-2"><RotateCcw className="w-4 h-4" /> 100% Free</span>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'test') {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="sticky top-4 z-20 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-indigo-50 p-5 mb-8">
            <div className="flex justify-between items-center mb-3 px-1">
              <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Your Journey</span>
              <span className="text-indigo-600 font-black text-xl">{progress}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 via-indigo-500 to-purple-600 transition-all duration-1000 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-8" ref={scrollRef}>
            {currentQuestions.map((q) => {
              const currentResponse = responses.find(r => r.questionId === q.id);
              return (
                <div 
                  key={q.id} 
                  className={`bg-white rounded-[2.5rem] p-10 md:p-16 text-center space-y-10 shadow-sm border-2 transition-all duration-500 ${currentResponse ? 'border-indigo-100 scale-[1.01]' : 'border-transparent'}`}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-snug max-w-2xl mx-auto">
                    {q.text}
                  </h2>
                  <LikertScale 
                    value={currentResponse?.value ?? 99}
                    onChange={(val) => handleResponse(q.id, val)}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4">
            <button
              disabled={currentPage === 0}
              onClick={prevPage}
              className="w-full md:w-auto flex items-center justify-center space-x-2 text-slate-400 hover:text-indigo-600 disabled:opacity-0 transition-all font-black uppercase tracking-widest text-xs px-8 py-3"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back</span>
            </button>

            <span className="text-slate-400 font-black text-xs uppercase tracking-widest">
              Part {currentPage + 1} / {totalPages}
            </span>

            {currentPage === totalPages - 1 ? (
              <button
                disabled={!isPageComplete() || progress < 100}
                onClick={handleSubmit}
                className="w-full md:w-auto bg-indigo-600 text-white px-14 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-700 disabled:bg-slate-300 transition-all shadow-2xl shadow-indigo-100"
              >
                Get My Analysis
              </button>
            ) : (
              <button
                disabled={!isPageComplete()}
                onClick={nextPage}
                className="w-full md:w-auto flex items-center justify-center space-x-2 bg-indigo-600 text-white px-14 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-indigo-700 disabled:bg-slate-300 transition-all shadow-2xl shadow-indigo-100"
              >
                <span>Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (step === 'loading') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="space-y-10">
          <div className="relative">
            <div className="w-32 h-32 bg-indigo-600 rounded-[2rem] flex items-center justify-center mx-auto animate-spin-slow">
              <Brain className="text-white w-14 h-14" />
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2">
              <Sparkles className="text-amber-400 w-10 h-10 animate-bounce" />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter">Decoding your Persona...</h2>
            <p className="text-slate-400 max-w-sm mx-auto text-sm leading-relaxed">
              We're mapping 60 unique psychological variables against the 16 core Jungian archetypes.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { scores } = calculateScores();

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
              {/* Header UI */}
              <div className="bg-gradient-to-br from-[#4f46e5] via-[#6366f1] to-[#a855f7] p-10 md:p-16 text-white relative">
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
                  <div className="space-y-4">
                    <div className="bg-white/20 inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md mb-2">
                      Your Personality Type
                    </div>
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">{analysis?.typeCode}</h1>
                    <p className="text-3xl md:text-4xl font-bold text-white/90">The {analysis?.typeName}</p>
                  </div>
                  <div className="bg-black/10 p-8 rounded-[2rem] backdrop-blur-xl border border-white/10 text-center shrink-0">
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-4">Core Dichotomies</p>
                    <div className="flex gap-3">
                      {analysis?.typeCode?.split('').map((char, i) => (
                        <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/20 flex items-center justify-center font-black text-2xl shadow-xl">
                          {char}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              </div>

              <div className="p-10 md:p-16 space-y-16">
                {/* Visual Strategy Card */}
                <section className="bg-white rounded-[3rem] p-10 md:p-12 border border-slate-100 shadow-2xl shadow-indigo-100/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-6">
                    <div className="bg-indigo-50 p-2 rounded-lg">
                      <Zap className="w-4 h-4 text-indigo-400" />
                    </div>
                  </div>
                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-12 flex items-center gap-3">
                    <Target className="w-4 h-4 text-indigo-500" /> Personality Trait Strategy
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
                    <DichotomySlider label="Mind" leftTrait="Introverted" rightTrait="Extraverted" score={scores.Extraversion} color="#6366f1" />
                    <DichotomySlider label="Energy" leftTrait="Intuitive" rightTrait="Observant" score={scores.Sensing} color="#10b981" />
                    <DichotomySlider label="Nature" leftTrait="Feeling" rightTrait="Thinking" score={scores.Thinking} color="#f59e0b" />
                    <DichotomySlider label="Tactics" leftTrait="Prospecting" rightTrait="Judging" score={scores.Judging} color="#8b5cf6" />
                  </div>
                </section>

                {/* Deep Analysis */}
                <section className="space-y-8">
                  <div className="flex items-center space-x-3 text-indigo-600">
                    <Brain className="w-6 h-6" />
                    <h2 className="font-black uppercase tracking-widest text-sm">Deep Profile Analysis</h2>
                  </div>
                  <div className="relative">
                    <Quote className="absolute -top-6 -left-4 w-12 h-12 text-indigo-50" />
                    <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium italic pl-8 relative z-10">
                      {analysis?.summary}
                    </p>
                  </div>
                </section>

                {/* Cognitive Functions Booster */}
                <section className="bg-[#1e1b4b] rounded-[2.5rem] p-10 text-white space-y-8 shadow-2xl shadow-indigo-200">
                  <div className="flex items-center gap-4">
                    <Zap className="w-8 h-8 text-amber-300" />
                    <h3 className="text-2xl font-black tracking-tight">Cognitive Architecture</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                      <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-2">Dominant Function</p>
                      <p className="text-xl font-bold">{analysis?.cognitiveFunctions.dominant}</p>
                    </div>
                    <div className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                      <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300 mb-2">Auxiliary Function</p>
                      <p className="text-xl font-bold">{analysis?.cognitiveFunctions.auxiliary}</p>
                    </div>
                  </div>
                  <p className="text-indigo-100/80 leading-relaxed font-medium bg-black/20 p-8 rounded-3xl border border-white/5">
                    {analysis?.cognitiveFunctions.explanation}
                  </p>
                </section>

                {/* Relatable Section */}
                <section className="space-y-8">
                  <h3 className="text-2xl font-black text-slate-800 flex items-center gap-3 tracking-tight">
                    <Sparkles className="w-6 h-6 text-amber-400" /> You might relate if...
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {analysis?.relatableTraits.map((trait, i) => (
                      <div key={i} className="bg-white border-2 border-slate-50 p-6 rounded-2xl flex items-center gap-5 hover:border-indigo-100 hover:shadow-xl transition-all group cursor-default">
                        <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform shrink-0 shadow-lg shadow-indigo-100"></div>
                        <p className="text-sm font-bold text-slate-600 leading-snug">{trait}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Real Life Insights Expanded */}
                <section className="space-y-12">
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Life Dynamics</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all space-y-4">
                      <div className="flex items-center gap-3 text-indigo-500">
                        <div className="bg-indigo-50 p-2 rounded-xl"><Briefcase className="w-5 h-5" /></div>
                        <span className="font-black uppercase tracking-widest text-[11px]">Professional Drive</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{analysis?.lifeInsights.work}</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all space-y-4">
                      <div className="flex items-center gap-3 text-blue-500">
                        <div className="bg-blue-50 p-2 rounded-xl"><Users className="w-5 h-5" /></div>
                        <span className="font-black uppercase tracking-widest text-[11px]">Social Circle</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{analysis?.lifeInsights.friendships}</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all space-y-4">
                      <div className="flex items-center gap-3 text-rose-500">
                        <div className="bg-rose-50 p-2 rounded-xl"><Heart className="w-5 h-5" /></div>
                        <span className="font-black uppercase tracking-widest text-[11px]">Intimacy & Love</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{analysis?.lifeInsights.relationships}</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all space-y-4">
                      <div className="flex items-center gap-3 text-amber-500">
                        <div className="bg-amber-50 p-2 rounded-xl"><CloudLightning className="w-5 h-5" /></div>
                        <span className="font-black uppercase tracking-widest text-[11px]">Crisis Mode</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{analysis?.lifeInsights.stress}</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all space-y-4">
                      <div className="flex items-center gap-3 text-emerald-500">
                        <div className="bg-emerald-50 p-2 rounded-xl"><TrendingUp className="w-5 h-5" /></div>
                        <span className="font-black uppercase tracking-widest text-[11px]">Evolution Path</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{analysis?.lifeInsights.growth}</p>
                    </div>
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all space-y-4">
                      <div className="flex items-center gap-3 text-slate-500">
                        <div className="bg-slate-50 p-2 rounded-xl"><AlertTriangle className="w-5 h-5" /></div>
                        <span className="font-black uppercase tracking-widest text-[11px]">Warning Signs</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed font-medium">{analysis?.lifeInsights.unhealthy}</p>
                    </div>
                  </div>
                </section>

                {/* Recommendations Section */}
                <section className="space-y-10">
                  <div className="flex items-center gap-3">
                    <Compass className="w-8 h-8 text-indigo-600" />
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Growth Roadmap</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white border-2 border-slate-50 rounded-[2.5rem] p-10 hover:border-indigo-100 transition-all shadow-sm space-y-8">
                      <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600">
                        <Briefcase className="w-7 h-7" />
                      </div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Career Synergy</h4>
                      <div className="flex flex-wrap gap-2">
                        {analysis?.recommendations.careers.map((career, i) => (
                          <span key={i} className="px-4 py-1.5 bg-indigo-50 text-indigo-700 text-[11px] font-black rounded-xl">
                            {career}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-white border-2 border-slate-50 rounded-[2.5rem] p-10 hover:border-emerald-100 transition-all shadow-sm space-y-8">
                      <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600">
                        <Layers className="w-7 h-7" />
                      </div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Execution Style</h4>
                      <ul className="space-y-3">
                        {analysis?.recommendations.workStyles.map((style, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-600 text-xs font-bold">
                            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-md shadow-emerald-100" />
                            {style}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-white border-2 border-slate-50 rounded-[2.5rem] p-10 hover:border-amber-100 transition-all shadow-sm space-y-8">
                      <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600">
                        <GraduationCap className="w-7 h-7" />
                      </div>
                      <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Intellectual Flow</h4>
                      <ul className="space-y-3">
                        {analysis?.recommendations.learningMethods.map((method, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-600 text-xs font-bold">
                            <div className="w-2 h-2 rounded-full bg-amber-400 shadow-md shadow-amber-100" />
                            {method}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Disclaimer */}
                <footer className="pt-10 border-t border-slate-100 text-center">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-3">Professional Disclaimer</p>
                  <p className="text-[10px] text-slate-300 max-w-lg mx-auto italic leading-relaxed font-medium">
                    This assessment is designed for self-exploration based on archetype theory. It does not provide medical or psychological diagnosis. Your results reflect your self-reported preferences at this moment.
                  </p>
                </footer>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-10 sticky top-10 border border-slate-100 flex flex-col h-auto max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
              <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-4 tracking-tighter">
                <Target className="w-6 h-6 text-indigo-600" />
                Dichotomy Map
              </h3>
              
              <PersonalityChart scores={scores} />
              
              <div className="mt-10 space-y-6">
                <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em]">System Logic</p>
                  <p className="text-xs text-slate-500 leading-relaxed font-bold">
                    Analysis based on 60 unique psychological nodes. Processed via a high-fidelity Jungian classification engine.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  <button
                    onClick={() => window.print()}
                    className="flex items-center justify-center gap-3 bg-indigo-50 text-indigo-600 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-indigo-100 transition-all active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    Save PDF Report
                  </button>
                  <button
                    onClick={resetTest}
                    className="flex items-center justify-center gap-3 bg-[#0f172a] text-white py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl active:scale-95"
                  >
                    <RotateCcw className="w-4 h-4" />
                    New Assessment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
