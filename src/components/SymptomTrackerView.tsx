import React, { useState } from 'react';
import {
  Activity,
  PlusCircle,
  Calendar,
  Flame,
  Utensils,
  Smile,
  Trash2,
  CheckCircle,
  Filter,
  BarChart2
} from 'lucide-react';
import { SymptomEntry, CyclePhase } from '../types';

interface SymptomTrackerViewProps {
  logs: SymptomEntry[];
  onAddLog: (newEntry: SymptomEntry) => void;
  onDeleteLog: (id: string) => void;
}

export const SymptomTrackerView: React.FC<SymptomTrackerViewProps> = ({
  logs,
  onAddLog,
  onDeleteLog,
}) => {
  const [painLevel, setPainLevel] = useState<number>(4);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedTriggers, setSelectedTriggers] = useState<string[]>([]);
  const [mood, setMood] = useState<string>('Tranquila');
  const [cyclePhase, setCyclePhase] = useState<CyclePhase>('luteal');
  const [notes, setNotes] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(true);

  const symptomOptions = [
    'Cólicas Intensas',
    'Inchaço Abdominal (Endo Belly)',
    'Dor Lombar / Costas',
    'Fadiga Crônica / Cansaço Excesso',
    'Dor nas Relações Sexuais',
    'Náusea / Enjoo',
    'Dor ao Evacuar',
    'Dor ao Urinar',
    'Enxaqueca / Dor de Cabeça',
    'Ansiedade / Irritabilidade',
    'Gases / Estufamento',
  ];

  const triggerOptions = [
    'Glúten (Trigo, pães comuns)',
    'Lactose / Laticínio',
    'Açúcar Refinado / Doces',
    'Alimentos Processados / Embutidos',
    'Álcool / Vinho',
    'Café em Excesso',
    'Fritura / Gordura Trans',
    'Refrigerante',
    'Adoçante Artificial',
  ];

  const moodOptions = ['Tranquila', 'Acolhida', 'Cansada', 'Triste', 'Irritada', 'Em Crise'];

  const toggleSymptom = (item: string) => {
    if (selectedSymptoms.includes(item)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== item));
    } else {
      setSelectedSymptoms([...selectedSymptoms, item]);
    }
  };

  const toggleTrigger = (item: string) => {
    if (selectedTriggers.includes(item)) {
      setSelectedTriggers(selectedTriggers.filter((t) => t !== item));
    } else {
      setSelectedTriggers([...selectedTriggers, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: SymptomEntry = {
      id: `log-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      painLevel,
      symptoms: selectedSymptoms,
      foodTriggers: selectedTriggers,
      mood,
      cyclePhase,
      notes,
    };

    onAddLog(newEntry);
    setNotes('');
    setSelectedSymptoms([]);
    setSelectedTriggers([]);
    alert('Log de sintomas registrado com sucesso!');
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-rose-100 shadow-xs">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 flex items-center gap-2">
            <Activity className="w-6 h-6 text-rose-600" />
            <span>Diário de Monitoramento de Sintomas</span>
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Mapeie a intensidade da dor, gatilhos alimentares e padrão do seu ciclo para levar dados precisos à sua médica.
          </p>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-rose-600 text-white font-bold text-xs shadow-md hover:bg-rose-700 transition"
        >
          <PlusCircle className="w-4 h-4" />
          <span>{showForm ? 'Ocultar Formulário' : 'Novo Registro'}</span>
        </button>
      </div>

      {/* Form Area */}
      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-md space-y-6">
          <h3 className="text-base font-bold text-slate-800 pb-2 border-b border-rose-100 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-rose-500" />
            <span>Registro Diário - {new Date().toLocaleDateString('pt-BR')}</span>
          </h3>

          {/* Pain Scale Selector */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="font-bold text-slate-800 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-600" />
                <span>Intensidade da Dor (0 a 10):</span>
              </label>
              <span className={`text-sm font-extrabold px-3 py-1 rounded-xl ${
                painLevel >= 7
                  ? 'bg-rose-600 text-white'
                  : painLevel >= 4
                  ? 'bg-amber-100 text-amber-800'
                  : 'bg-emerald-100 text-emerald-800'
              }`}>
                Nível {painLevel} {painLevel >= 7 ? '(Forte / Crise)' : painLevel >= 4 ? '(Moderada)' : '(Leve / Ausente)'}
              </span>
            </div>
            
            <input
              type="range"
              min="0"
              max="10"
              value={painLevel}
              onChange={(e) => setPainLevel(Number(e.target.value))}
              className="w-full h-3 bg-rose-100 rounded-lg appearance-none cursor-pointer accent-rose-600"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>0 (Sem dor)</span>
              <span>5 (Dor moderada)</span>
              <span>10 (Insuportável)</span>
            </div>
          </div>

          {/* Symptoms List */}
          <div>
            <label className="block font-bold text-slate-800 text-sm mb-2">
              Sintomas Presentes Hoje:
            </label>
            <div className="flex flex-wrap gap-2">
              {symptomOptions.map((sym) => {
                const isSelected = selectedSymptoms.includes(sym);
                return (
                  <button
                    type="button"
                    key={sym}
                    onClick={() => toggleSymptom(sym)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition border ${
                      isSelected
                        ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-rose-50'
                    }`}
                  >
                    {isSelected && '✓ '}
                    {sym}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Food Triggers */}
          <div>
            <label className="block font-bold text-slate-800 text-sm mb-2 flex items-center gap-1.5">
              <Utensils className="w-4 h-4 text-amber-600" />
              <span>Gatilhos Alimentares Ingeridos Hoje (suspeita de reação):</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {triggerOptions.map((trig) => {
                const isSelected = selectedTriggers.includes(trig);
                return (
                  <button
                    type="button"
                    key={trig}
                    onClick={() => toggleTrigger(trig)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition border ${
                      isSelected
                        ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-amber-50'
                    }`}
                  >
                    {isSelected && '⚠️ '}
                    {trig}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cycle Phase & Mood */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-800 text-xs mb-1">
                Fase do Ciclo Menstrual:
              </label>
              <select
                value={cyclePhase}
                onChange={(e) => setCyclePhase(e.target.value as CyclePhase)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500/30"
              >
                <option value="menstrual">Menstrual (Dias 1-5)</option>
                <option value="follicular">Folicular (Dias 6-13)</option>
                <option value="ovulatory">Ovulatória (Dias 14-16)</option>
                <option value="luteal">Lútea / Pré-menstrual (Dias 17-28)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-800 text-xs mb-1">
                Humor Predominante:
              </label>
              <select
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-rose-500/30"
              >
                {moodOptions.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block font-bold text-slate-800 text-xs mb-1">
              Anotações e Observações Pessoais:
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Tomei chá de gengibre morno às 15h e a dor aliviou. Inchaço começou após o almoço..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-rose-500/30"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 text-white font-extrabold text-sm shadow-lg shadow-rose-200 hover:from-rose-700 hover:to-pink-700 transition"
          >
            Salvar Log no Diário
          </button>
        </form>
      )}

      {/* History Log List */}
      <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-xs">
        <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center justify-between">
          <span className="flex items-center gap-2">
            <BarChart2 className="w-5 h-5 text-rose-600" />
            <span>Histórico de Logs Recentes ({logs.length})</span>
          </span>
        </h3>

        {logs.length === 0 ? (
          <div className="p-8 text-center bg-slate-50 rounded-2xl text-slate-500 text-xs">
            Nenhum log registrado ainda. Use o formulário acima para começar a registrar seus sintomas diários.
          </div>
        ) : (
          <div className="space-y-3">
            {logs.map((log) => (
              <div
                key={log.id}
                className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-slate-800">{log.date}</span>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                      log.painLevel >= 7
                        ? 'bg-rose-600 text-white'
                        : log.painLevel >= 4
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      Dor {log.painLevel}/10
                    </span>
                    <span className="text-[10px] bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md capitalize font-semibold">
                      Fase {log.cyclePhase}
                    </span>
                    <span className="text-[10px] bg-slate-200 text-slate-700 px-2 py-0.5 rounded-md">
                      Humor: {log.mood}
                    </span>
                  </div>

                  {log.symptoms.length > 0 && (
                    <p className="text-xs text-slate-600 font-medium">
                      <span className="font-bold text-slate-700">Sintomas:</span> {log.symptoms.join(', ')}
                    </p>
                  )}

                  {log.foodTriggers.length > 0 && (
                    <p className="text-xs text-amber-700 font-medium">
                      <span className="font-bold">Gatilhos:</span> {log.foodTriggers.join(', ')}
                    </p>
                  )}

                  {log.notes && (
                    <p className="text-xs text-slate-500 italic">
                      "{log.notes}"
                    </p>
                  )}
                </div>

                <button
                  onClick={() => onDeleteLog(log.id)}
                  className="p-2 text-slate-400 hover:text-rose-600 rounded-xl hover:bg-rose-50 transition self-end sm:self-center"
                  title="Excluir log"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
