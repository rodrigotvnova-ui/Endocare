import React, { useState } from 'react';
import {
  Heart,
  AlertTriangle,
  Activity,
  Utensils,
  Package,
  Pill,
  Dumbbell,
  Stethoscope,
  MessageSquare,
  Flame,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldAlert,
  Smile,
  Frown,
  Meh,
  Zap
} from 'lucide-react';
import { UserProfile, CyclePhase, SymptomEntry } from '../types';
import { CYCLE_CARE_PLANS } from '../data/supplementsAndCycles';

interface DashboardViewProps {
  userProfile: UserProfile;
  setActiveTab: (tab: string) => void;
  recentLogs: SymptomEntry[];
  onAddQuickLog: (painLevel: number, mood: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  userProfile,
  setActiveTab,
  recentLogs,
  onAddQuickLog,
}) => {
  const [selectedPhase, setSelectedPhase] = useState<CyclePhase>(userProfile.primaryCyclePhase || 'luteal');
  const [quickPain, setQuickPain] = useState<number>(3);
  const [quickMood, setQuickMood] = useState<string>('Tranquila');
  const [loggedToday, setLoggedToday] = useState(false);

  const currentPlan = CYCLE_CARE_PLANS[selectedPhase];

  const handleQuickSubmit = () => {
    onAddQuickLog(quickPain, quickMood);
    setLoggedToday(true);
  };

  const moods = [
    { label: 'Calma', emoji: '😌' },
    { label: 'Cansada', emoji: '😴' },
    { label: 'Sensível', emoji: '🥺' },
    { label: 'Irritada', emoji: '😤' },
    { label: 'Com Dor', emoji: '😣' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 text-white p-6 sm:p-8 shadow-xl shadow-rose-200/50">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Seu espaço diário de acolhimento</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Olá, {userProfile.name || 'Guerreira'}! 👋
          </h1>
          <p className="mt-2 text-rose-100 text-sm sm:text-base leading-relaxed">
            Como seu corpo está se sentindo hoje? Lembre-se: sua dor é real, seu ritmo é único e cada dia é uma vitória no cuidado com a endometriose.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => setActiveTab('sos')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white text-rose-700 font-bold text-xs sm:text-sm shadow-md hover:bg-rose-50 transition active:scale-95"
            >
              <AlertTriangle className="w-4 h-4 text-rose-600 animate-bounce" />
              <span>SOS Alívio de Crise</span>
            </button>
            <button
              onClick={() => setActiveTab('tracker')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-rose-700/60 hover:bg-rose-700 text-white font-semibold text-xs sm:text-sm backdrop-blur-md border border-white/20 transition"
            >
              <Activity className="w-4 h-4" />
              <span>Registrar Sintoma Completo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Quick Pain Tracker & Current Cycle Phase */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Widget 1: Quick Pain Tracker */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-rose-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-rose-100 text-rose-600">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 text-base">
                  Como está sua dor agora?
                </h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                Escala 0-10
              </span>
            </div>

            {loggedToday ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-center my-4">
                <p className="font-bold text-sm">✓ Registro diário feito!</p>
                <p className="text-xs text-emerald-600 mt-1">
                  Nível de dor: <span className="font-extrabold">{quickPain}/10</span> | Humor: {quickMood}
                </p>
                <button
                  onClick={() => setLoggedToday(false)}
                  className="mt-2 text-xs font-semibold text-emerald-700 hover:underline"
                >
                  Atualizar registro
                </button>
              </div>
            ) : (
              <>
                <div className="my-4">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mb-2">
                    <span>Sem dor (0)</span>
                    <span className="text-lg font-extrabold text-rose-600 bg-rose-50 px-3 py-1 rounded-xl border border-rose-200">
                      {quickPain} / 10
                    </span>
                    <span>Dor Insuportável (10)</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={quickPain}
                    onChange={(e) => setQuickPain(Number(e.target.value))}
                    className="w-full h-3 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-slate-600 mb-2">
                    Humor / Estado Emocional:
                  </label>
                  <div className="flex justify-between gap-1">
                    {moods.map((m) => (
                      <button
                        key={m.label}
                        onClick={() => setQuickMood(m.label)}
                        className={`flex-1 py-2 rounded-xl text-center text-xs font-medium transition border ${
                          quickMood === m.label
                            ? 'bg-rose-600 text-white border-rose-600 font-bold shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-rose-50'
                        }`}
                      >
                        <span className="text-base block">{m.emoji}</span>
                        <span className="text-[10px] mt-0.5 block">{m.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleQuickSubmit}
                  className="w-full py-2.5 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-200 transition"
                >
                  Salvar Registro do Dia
                </button>
              </>
            )}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Logs registrados: {recentLogs.length}</span>
            <button
              onClick={() => setActiveTab('tracker')}
              className="text-rose-600 font-bold hover:underline flex items-center gap-1"
            >
              Ver histórico <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Widget 2: Current Cycle Phase Care */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-rose-100">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-pink-100 text-pink-600">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-800 text-base">
                Fase do Ciclo Hormonal
              </h3>
            </div>

            {/* Selector buttons */}
            <div className="flex gap-1 bg-slate-100 p-1 rounded-2xl text-xs font-semibold">
              {(['menstrual', 'follicular', 'ovulatory', 'luteal'] as CyclePhase[]).map((phase) => (
                <button
                  key={phase}
                  onClick={() => setSelectedPhase(phase)}
                  className={`px-3 py-1.5 rounded-xl capitalize transition ${
                    selectedPhase === phase
                      ? 'bg-white text-rose-700 font-bold shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {phase === 'menstrual'
                    ? 'Menstrual'
                    : phase === 'follicular'
                    ? 'Folicular'
                    : phase === 'ovulatory'
                    ? 'Ovulatória'
                    : 'Lútea'}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-rose-50/60 to-pink-50/60 rounded-2xl p-4 border border-rose-100/80 mb-4">
            <h4 className="font-extrabold text-slate-800 text-sm sm:text-base text-rose-800">
              {currentPlan.title}
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {currentPlan.hormoneContext}
            </p>

            <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-rose-200/50 text-xs">
              <div>
                <span className="text-slate-500 block">Nível de Energia:</span>
                <span className="font-bold text-slate-700">{currentPlan.energyLevel}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Risco de Dor:</span>
                <span className="font-bold text-rose-600">{currentPlan.painRisk}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
              <span className="font-bold text-slate-800 block mb-1">💡 Nutrição Recomendada:</span>
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                {currentPlan.nutritionFocus.slice(0, 2).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
              <span className="font-bold text-slate-800 block mb-1">🧘‍♀️ Ritmos de Autocuidado:</span>
              <ul className="space-y-1 text-slate-600 list-disc list-inside">
                {currentPlan.selfCareRoutine.slice(0, 2).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Navigation Cards Grid */}
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-rose-500" />
          <span>Ferramentas de Cuidado Diário</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <button
            onClick={() => setActiveTab('recipes')}
            className="group bg-white p-4 rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-lg transition text-left flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-800 text-sm block group-hover:text-rose-600 transition">
                50 Receitas
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Desinchantes e Anti-inflamatórias
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('pantry')}
            className="group bg-white p-4 rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-lg transition text-left flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-800 text-sm block group-hover:text-rose-600 transition">
                Dispensa (30)
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Ingredientes cruciais sem glúten/lactose
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('supplements')}
            className="group bg-white p-4 rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-lg transition text-left flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <Pill className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-800 text-sm block group-hover:text-rose-600 transition">
                Suplementos
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Guia de dosagens e ciclo
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('exercises')}
            className="group bg-white p-4 rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-lg transition text-left flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <Dumbbell className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-800 text-sm block group-hover:text-rose-600 transition">
                Exercícios & IA
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Alongamentos e meditação
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('medical')}
            className="group bg-white p-4 rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-lg transition text-left flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-800 text-sm block group-hover:text-rose-600 transition">
                Guia Médico
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Sintomas e exames precisos
              </span>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('chat')}
            className="group bg-white p-4 rounded-2xl border border-rose-100 hover:border-rose-300 hover:shadow-lg transition text-left flex flex-col justify-between"
          >
            <div className="w-10 h-10 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center mb-3 group-hover:scale-110 transition">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-800 text-sm block group-hover:text-rose-600 transition">
                Chat com IA
              </span>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                Dra. EndoAcolhe 24h
              </span>
            </div>
          </button>

        </div>
      </div>

    </div>
  );
};
