import React, { useState, useEffect } from 'react';
import {
  AlertTriangle,
  Flame,
  Wind,
  Coffee,
  ShieldAlert,
  Play,
  Pause,
  RotateCcw,
  Heart,
  PhoneCall,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

export const SosCrisisView: React.FC = () => {
  // Timer State for Thermal Compress (15 minutes = 900s)
  const [compressSeconds, setCompressSeconds] = useState<number>(900);
  const [compressActive, setCompressActive] = useState<boolean>(false);

  // Breathing 4-7-8 Timer State
  const [breathingPhase, setBreathingPhase] = useState<'Inhale' | 'Hold' | 'Exhale' | 'Idle'>('Idle');
  const [breathCounter, setBreathCounter] = useState<number>(0);
  const [isBreathingRunning, setIsBreathingRunning] = useState<boolean>(false);

  // Compress timer effect
  useEffect(() => {
    let interval: any = null;
    if (compressActive && compressSeconds > 0) {
      interval = setInterval(() => {
        setCompressSeconds((prev) => prev - 1);
      }, 1000);
    } else if (compressSeconds === 0) {
      setCompressActive(false);
    }
    return () => clearInterval(interval);
  }, [compressActive, compressSeconds]);

  // Breathing effect loop (4s inhale, 7s hold, 8s exhale)
  useEffect(() => {
    let timer: any = null;
    if (isBreathingRunning) {
      if (breathingPhase === 'Idle') {
        setBreathingPhase('Inhale');
        setBreathCounter(4);
      }

      timer = setInterval(() => {
        setBreathCounter((prev) => {
          if (prev > 1) return prev - 1;

          // Transition phase
          if (breathingPhase === 'Inhale') {
            setBreathingPhase('Hold');
            return 7;
          } else if (breathingPhase === 'Hold') {
            setBreathingPhase('Exhale');
            return 8;
          } else if (breathingPhase === 'Exhale') {
            setBreathingPhase('Inhale');
            return 4;
          }
          return 4;
        });
      }, 1000);
    } else {
      setBreathingPhase('Idle');
      setBreathCounter(0);
    }

    return () => clearInterval(timer);
  }, [isBreathingRunning, breathingPhase]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Banner de Crise */}
      <div className="bg-gradient-to-r from-rose-700 via-rose-600 to-pink-700 text-white p-6 sm:p-8 rounded-3xl shadow-xl shadow-rose-200">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-2xl bg-white/20 backdrop-blur-md">
            <AlertTriangle className="w-8 h-8 text-rose-100 animate-bounce" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-rose-200">
              Protocolo de Emergência Pessoal
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold">
              SOS - Alívio Rápido de Crises de Dor
            </h1>
          </div>
        </div>
        <p className="text-rose-100 text-xs sm:text-sm max-w-2xl mt-2 leading-relaxed">
          Sua dor é válida e este momento vai passar. Mantenha a calma, siga o passo a passo de alívio físico e neurológico preparado para o momento de pico de dor.
        </p>
      </div>

      {/* Grid: Compressa Térmica & Respiração 4-7-8 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Ferramenta 1: Temporizador de Compressa Morna */}
        <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base">
                  1. Termoterapia (Compressa de Água Morna)
                </h3>
                <p className="text-xs text-slate-500">
                  O calor relaxa os miócitos uterinos e bloqueia a transmissão de dor na medula.
                </p>
              </div>
            </div>

            <div className="my-6 text-center py-6 bg-rose-50/50 rounded-2xl border border-rose-100">
              <div className="text-4xl sm:text-5xl font-black text-rose-600 tracking-wider font-mono">
                {formatTime(compressSeconds)}
              </div>
              <p className="text-xs text-slate-500 mt-2">
                {compressActive ? '🔥 Aquecendo e relaxando seu ventre...' : 'Tempo recomendado: 15 minutos'}
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setCompressActive(!compressActive)}
              className={`flex-1 py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition ${
                compressActive
                  ? 'bg-amber-600 text-white hover:bg-amber-700'
                  : 'bg-rose-600 text-white hover:bg-rose-700 shadow-md shadow-rose-200'
              }`}
            >
              {compressActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{compressActive ? 'Pausar Cronômetro' : 'Iniciar 15 Minutos'}</span>
            </button>
            <button
              onClick={() => {
                setCompressActive(false);
                setCompressSeconds(900);
              }}
              className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-2xl transition"
              title="Reiniciar"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Ferramenta 2: Respiração Guiada 4-7-8 */}
        <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-100 text-blue-600">
                <Wind className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base">
                  2. Respiração Descompressiva 4-7-8
                </h3>
                <p className="text-xs text-slate-500">
                  Estimula o nervo vago e desliga o estado de pânico neurológico.
                </p>
              </div>
            </div>

            <div className="my-4 text-center py-6 bg-gradient-to-b from-blue-50/50 to-indigo-50/50 rounded-2xl border border-blue-100 flex flex-col items-center justify-center min-h-[160px]">
              {isBreathingRunning ? (
                <div className="space-y-2">
                  <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center text-xl font-black transition-all duration-1000 ${
                    breathingPhase === 'Inhale'
                      ? 'scale-125 border-emerald-500 bg-emerald-100 text-emerald-800'
                      : breathingPhase === 'Hold'
                      ? 'scale-110 border-amber-500 bg-amber-100 text-amber-800'
                      : 'scale-90 border-blue-500 bg-blue-100 text-blue-800'
                  }`}>
                    {breathCounter}s
                  </div>
                  <span className="text-sm font-extrabold text-slate-800 block uppercase tracking-wider">
                    {breathingPhase === 'Inhale' && '🌸 INSPIRE pelo nariz...'}
                    {breathingPhase === 'Hold' && '🛑 SEGURE o ar...'}
                    {breathingPhase === 'Exhale' && '🌬️ EXPIRE suavemente pela boca...'}
                  </span>
                </div>
              ) : (
                <div className="text-slate-500 text-xs">
                  Clique no botão abaixo para iniciar o guia de respiração ritmo 4-7-8.
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setIsBreathingRunning(!isBreathingRunning)}
            className={`w-full py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition ${
              isBreathingRunning
                ? 'bg-slate-700 text-white hover:bg-slate-800'
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-200'
            }`}
          >
            {isBreathingRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            <span>{isBreathingRunning ? 'Parar Respiração' : 'Iniciar Respiração Guiada'}</span>
          </button>
        </div>

      </div>

      {/* Seção 3: Bebida Instantânea de Emergência & Posições de Alívio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Bebida anti-inflamatória SOS */}
        <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-amber-100 text-amber-600">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 text-base">
              3. Chá SOS de Gengibre com Cúrcuma
            </h3>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <p className="font-semibold text-slate-700">
              Ingredientes para preparo em 5 minutos:
            </p>
            <ul className="list-disc list-inside space-y-1 bg-amber-50/60 p-3 rounded-2xl border border-amber-100">
              <li>300ml de água morna ou fervente</li>
              <li>1 colher de chá de gengibre ralado fresco</li>
              <li>1 colher de chá de cúrcuma pura em pó</li>
              <li>1 pitada minúscula de pimenta preta</li>
              <li>Suco de 1/2 limão</li>
            </ul>
            <p className="text-slate-500 italic">
              Modo de usar: Beba aos poucos, bem morno, respirando o vapor do chá.
            </p>
          </div>
        </div>

        {/* Posições de alívio da pelve */}
        <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-purple-100 text-purple-600">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-800 text-base">
              4. Posições de Descompressão Pélvica
            </h3>
          </div>

          <div className="space-y-3 text-xs text-slate-600">
            <div className="p-3 bg-purple-50/60 rounded-2xl border border-purple-100">
              <span className="font-bold text-purple-900 block mb-1">
                🧘 Posso da Criança com travesseiro sob o peito:
              </span>
              Ajoelhe-se na cama, abra as coxas e deite o peito sobre um travesseiro macio. Abraço o travesseiro.
            </div>

            <div className="p-3 bg-purple-50/60 rounded-2xl border border-purple-100">
              <span className="font-bold text-purple-900 block mb-1">
                🛋️ Pernas na Cadeira / Sofá em 90 graus:
              </span>
              Deite de costas no chão/tapete e apoie as panturrilhas e pés sobre o assento de uma cadeira em ângulo reto.
            </div>
          </div>
        </div>

      </div>

      {/* Seção 4: Sinais de Alerta Médico - Quando procurar Pronto Atendimento */}
      <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 shadow-xs">
        <h3 className="text-base font-extrabold text-rose-900 mb-3 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-rose-600" />
          <span>Quando ir imediatamente ao Pronto Socorro / Emergência?</span>
        </h3>
        <p className="text-xs text-rose-700 mb-4">
          Apesar das crises de endometriose serem muito dolorosas, fique atenta aos seguintes sinais de alerta vermelhos (Red Flags):
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs font-semibold text-rose-800">
          <li className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-rose-200">
            <span className="text-rose-600">🚨</span>
            Dor súbita e insuportável acompanhada de febre alta (&gt; 38°C)
          </li>
          <li className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-rose-200">
            <span className="text-rose-600">🚨</span>
            Vômitos ininterruptos que impedem a hidratação oral
          </li>
          <li className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-rose-200">
            <span className="text-rose-600">🚨</span>
            Tontura grave, desmaio (síncope) ou palidez extrema
          </li>
          <li className="flex items-center gap-2 bg-white/80 p-2.5 rounded-xl border border-rose-200">
            <span className="text-rose-600">🚨</span>
            Sangramento vaginal muito abundante (encharcando absorventes em &lt; 1h)
          </li>
        </ul>
      </div>

    </div>
  );
};
