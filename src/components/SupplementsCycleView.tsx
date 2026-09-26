import React, { useState } from 'react';
import {
  Pill,
  Calendar,
  Sparkles,
  Clock,
  ShieldCheck,
  CheckCircle,
  HeartHandshake,
  Activity,
  Flame,
  Battery
} from 'lucide-react';
import { SUPPLEMENTS, CYCLE_CARE_PLANS } from '../data/supplementsAndCycles';
import { CyclePhase } from '../types';

export const SupplementsCycleView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'supplements' | 'cycle'>('supplements');
  const [selectedPhase, setSelectedPhase] = useState<CyclePhase>('luteal');

  const currentPlan = CYCLE_CARE_PLANS[selectedPhase];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold mb-2">
            <Pill className="w-3.5 h-3.5" />
            <span>Suplementação & Ciclo Hormonal</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800">
            Nutracêuticos e Autocuidado por Fase
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Descubra os suplementos de maior evidência científica e sincronize sua rotina com cada fase do seu ciclo.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex bg-slate-100 p-1 rounded-2xl text-xs font-bold shrink-0">
          <button
            onClick={() => setActiveTab('supplements')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'supplements'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            💊 Suplementos Ideais
          </button>
          <button
            onClick={() => setActiveTab('cycle')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'cycle'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🌸 Autocuidado do Ciclo
          </button>
        </div>
      </div>

      {/* TAB 1: SUPLEMENTOS */}
      {activeTab === 'supplements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SUPPLEMENTS.map((sup) => (
            <div
              key={sup.id}
              className="bg-white rounded-3xl p-6 border border-rose-100 shadow-xs hover:shadow-md transition space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-extrabold text-slate-800 text-base">
                    {sup.name}
                  </h3>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 uppercase">
                    Evidência {sup.evidenceLevel}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {sup.benefitsForEndo}
                </p>
              </div>

              <div className="space-y-2 text-xs pt-3 border-t border-slate-100">
                <div className="p-2.5 rounded-2xl bg-purple-50/60 border border-purple-100 text-purple-900 font-medium">
                  <span className="font-bold block text-purple-950 mb-0.5">📏 Dosagem Sugerida:</span>
                  {sup.dosage}
                </div>

                <div className="p-2.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-700 font-medium">
                  <span className="font-bold block text-slate-900 mb-0.5">⏰ Melhor Horário:</span>
                  {sup.bestTime}
                </div>

                {sup.precautions && (
                  <div className="p-2.5 rounded-2xl bg-amber-50/60 border border-amber-100 text-amber-900 text-[11px]">
                    <span className="font-bold block mb-0.5">⚠️ Cuidados & Contraindicações:</span>
                    {sup.precautions}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: AUTOCUIDADO DO CICLO */}
      {activeTab === 'cycle' && (
        <div className="space-y-6">
          
          {/* Phase selector buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {(['menstrual', 'follicular', 'ovulatory', 'luteal'] as CyclePhase[]).map((phase) => {
              const isSelected = selectedPhase === phase;
              return (
                <button
                  key={phase}
                  onClick={() => setSelectedPhase(phase)}
                  className={`p-4 rounded-3xl text-left border transition ${
                    isSelected
                      ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-200'
                      : 'bg-white text-slate-700 border-rose-100 hover:border-purple-200'
                  }`}
                >
                  <span className="text-[10px] font-extrabold uppercase opacity-80 block mb-1">
                    Fase Hormonal
                  </span>
                  <span className="font-extrabold text-sm block capitalize">
                    {phase === 'menstrual'
                      ? '1. Menstrual'
                      : phase === 'follicular'
                      ? '2. Folicular'
                      : phase === 'ovulatory'
                      ? '3. Ovulatória'
                      : '4. Lútea'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Current Plan Details Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-6">
            <div className="border-b border-rose-100 pb-4">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-1">
                Plano Personalizado de Autocuidado
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800">
                {currentPlan.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                {currentPlan.hormoneContext}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <span className="font-bold text-slate-500 block mb-1">🔋 Nível de Energia Estimado:</span>
                <span className="font-extrabold text-slate-800 text-sm">{currentPlan.energyLevel}</span>
              </div>
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 text-xs">
                <span className="font-bold text-rose-500 block mb-1">⚡ Risco de Dor & Crise:</span>
                <span className="font-extrabold text-rose-800 text-sm">{currentPlan.painRisk}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nutrição da Fase */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span>Nutrição & Alimentos Chave:</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentPlan.nutritionFocus.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rituais de Autocuidado */}
              <div className="space-y-3">
                <h4 className="font-extrabold text-slate-800 text-sm flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-purple-600" />
                  <span>Rituais de Autocuidado Recomendados:</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  {currentPlan.selfCareRoutine.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 bg-purple-50/50 p-2.5 rounded-xl border border-purple-100">
                      <span className="text-purple-600 font-bold">✨</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Orientação de Exercício */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs text-amber-900">
              <span className="font-bold block text-amber-950 mb-1">🧘‍♂️ Orientação de Movimento para esta Fase:</span>
              {currentPlan.exerciseGuidance}
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
