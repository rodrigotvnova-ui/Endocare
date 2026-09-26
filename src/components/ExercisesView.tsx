import React, { useState } from 'react';
import {
  Dumbbell,
  Play,
  Pause,
  Filter,
  Sparkles,
  Bot,
  Clock,
  CheckCircle,
  HelpCircle,
  Volume2
} from 'lucide-react';
import { EXERCISES_LIBRARY } from '../data/exercisesAndMeditations';
import { ExerciseItem } from '../types';

export const ExercisesView: React.FC = () => {
  const [selectedObjective, setSelectedObjective] = useState<string>('all');
  const [selectedRestriction, setSelectedRestriction] = useState<string>('all');

  // AI Recommendation State
  const [aiObjective, setAiObjective] = useState<string>('Alívio imediato da dor pélvica');
  const [aiRestriction, setAiRestriction] = useState<string>('Deitada na cama sem impacto');
  const [aiPainLevel, setAiPainLevel] = useState<number>(5);
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiResult, setAiResult] = useState<any>(null);

  // Audio / Player State
  const [activeExercise, setActiveExercise] = useState<ExerciseItem | null>(null);

  const filteredExercises = EXERCISES_LIBRARY.filter((ex) => {
    const matchesObj = selectedObjective === 'all' || ex.objective === selectedObjective;
    const matchesRest = selectedRestriction === 'all' || ex.physicalRestrictions === selectedRestriction;
    return matchesObj && matchesRest;
  });

  const handleAiSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setAiLoading(true);
    setAiResult(null);

    try {
      const res = await fetch('/api/exercises/ai-recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          objective: aiObjective,
          physicalRestrictions: aiRestriction,
          painLevel: aiPainLevel,
          cyclePhase: 'Lútea',
        }),
      });

      const data = await res.json();
      setAiResult(data);
    } catch (err) {
      console.error('Error getting AI recommendation:', err);
      alert('Erro ao gerar recomendação com IA. Tente novamente.');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Exercícios Leves & Meditação Guiada</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800">
            Liberação Pélvica, Alongamentos & Relaxamento
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Práticas suaves focadas no alívio de aderências, soltura do psoas, descompressão lombar e controle do estresse.
          </p>
        </div>
      </div>

      {/* IA Exercise Recommendation Form */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-xl bg-blue-500/20 backdrop-blur-md border border-blue-400/30 text-blue-300">
            <Bot className="w-5 h-5" />
          </div>
          <h3 className="font-extrabold text-base sm:text-lg">
            Recomendação Personalizada por IA (Dra. EndoAcolhe)
          </h3>
        </div>
        <p className="text-xs text-blue-200 mb-6">
          Descreva seus objetivos e limitações físicas de hoje para receber um treino feito sob medida via Inteligência Artificial.
        </p>

        <form onSubmit={handleAiSearch} className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block text-blue-200 font-bold mb-1">
              Objetivo do Dia:
            </label>
            <input
              type="text"
              value={aiObjective}
              onChange={(e) => setAiObjective(e.target.value)}
              placeholder="Ex: Alívio de dor aguda, desinchar barriga..."
              className="w-full p-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-blue-200 font-bold mb-1">
              Restrições Físicas:
            </label>
            <input
              type="text"
              value={aiRestriction}
              onChange={(e) => setAiRestriction(e.target.value)}
              placeholder="Ex: Deitada sem fazer força, sem dobrar joelho..."
              className="w-full p-2.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-blue-200 font-bold mb-1">
              Nível de Dor Atual: {aiPainLevel}/10
            </label>
            <input
              type="range"
              min="0"
              max="10"
              value={aiPainLevel}
              onChange={(e) => setAiPainLevel(Number(e.target.value))}
              className="w-full h-3 bg-blue-950 rounded-lg appearance-none cursor-pointer accent-blue-400 mt-2"
            />
          </div>

          <div className="md:col-span-3">
            <button
              type="submit"
              disabled={aiLoading}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-extrabold text-xs shadow-lg shadow-blue-500/30 transition flex items-center justify-center gap-2"
            >
              {aiLoading ? (
                <span>Consultando IA...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Gerar Treino Personalizado por IA</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* AI Result Area */}
        {aiResult && (
          <div className="mt-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 space-y-4 animate-in fade-in duration-300 text-xs">
            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-100 font-medium">
              💡 <span className="font-bold text-white">Conselho da IA:</span> {aiResult.personalizedTip}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-800">
              {aiResult.recommendations?.map((item: any, idx: number) => (
                <div key={idx} className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 space-y-2">
                  <div className="flex justify-between items-start">
                    <h4 className="font-extrabold text-sm text-slate-900">{item.title}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-100 text-blue-800">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-xs">{item.benefit}</p>
                  <ul className="list-disc list-inside text-slate-500 space-y-1">
                    {item.instructions?.map((st: string, sIdx: number) => (
                      <li key={sIdx}>{st}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Manual Library Filters */}
      <div className="bg-white p-4 rounded-2xl border border-rose-100 flex flex-wrap gap-4 items-center text-xs">
        <span className="font-bold text-slate-700 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5 text-rose-500" />
          Filtros de Biblioteca:
        </span>

        <div>
          <select
            value={selectedObjective}
            onChange={(e) => setSelectedObjective(e.target.value)}
            className="p-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700 focus:outline-none"
          >
            <option value="all">Todos os Objetivos</option>
            <option value="alivio-dor-aguda">Alívio de Dor Aguda</option>
            <option value="desinchar-barriga">Desinchar Barriga (Endo Belly)</option>
            <option value="relaxar-lombar">Relaxar Lombar</option>
            <option value="sono-tranquilo">Sono Tranquilo</option>
          </select>
        </div>

        <div>
          <select
            value={selectedRestriction}
            onChange={(e) => setSelectedRestriction(e.target.value)}
            className="p-2 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-700 focus:outline-none"
          >
            <option value="all">Todas as Restrições</option>
            <option value="deitada-sem-esforço">Deitada sem Esforço</option>
            <option value="sem-impacto">Sem Impacto</option>
            <option value="alongamento-leve">Alongamento Leve</option>
          </select>
        </div>
      </div>

      {/* Library Exercises Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExercises.map((ex) => (
          <div
            key={ex.id}
            className="bg-white rounded-3xl p-6 border border-rose-100 shadow-xs hover:shadow-md transition flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-blue-100 text-blue-800 uppercase">
                  {ex.duration}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 capitalize">
                  {ex.type}
                </span>
              </div>

              <h3 className="font-extrabold text-slate-800 text-base mb-2">
                {ex.title}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-3">
                {ex.benefits}
              </p>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                <span className="font-bold text-xs text-slate-800 block mb-1">Passo a Passo:</span>
                <ol className="list-decimal list-inside space-y-1 text-xs text-slate-600">
                  {ex.instructions.slice(0, 3).map((st, i) => (
                    <li key={i}>{st}</li>
                  ))}
                </ol>
              </div>
            </div>

            <button
              onClick={() => setActiveExercise(ex)}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-200 transition flex items-center justify-center gap-2"
            >
              <Play className="w-3.5 h-3.5" />
              <span>Iniciar Exercício</span>
            </button>
          </div>
        ))}
      </div>

      {/* Exercise Active Player Modal */}
      {activeExercise && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-rose-100 shadow-2xl space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase text-blue-600">Sessão em Andamento</span>
                <h3 className="font-extrabold text-xl text-slate-800">{activeExercise.title}</h3>
              </div>
              <button
                onClick={() => setActiveExercise(null)}
                className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-blue-50/60 rounded-2xl border border-blue-100 text-xs text-blue-900 leading-relaxed">
              <strong>Benefício:</strong> {activeExercise.benefits}
            </div>

            <div className="space-y-2 max-h-60 overflow-y-auto text-xs text-slate-700">
              <span className="font-bold text-slate-900 block">Instruções Completas:</span>
              {activeExercise.instructions.map((step, idx) => (
                <div key={idx} className="p-2.5 bg-slate-50 rounded-xl border border-slate-100 flex gap-2">
                  <span className="font-bold text-blue-600">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setActiveExercise(null)}
              className="w-full py-3 bg-blue-600 text-white font-bold text-xs rounded-2xl hover:bg-blue-700 transition"
            >
              Concluir Prática
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
