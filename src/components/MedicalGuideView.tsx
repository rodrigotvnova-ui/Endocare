import React, { useState } from 'react';
import {
  Stethoscope,
  AlertTriangle,
  CheckSquare,
  Square,
  HelpCircle,
  FileText,
  Copy,
  Check,
  ShieldCheck,
  Search
} from 'lucide-react';
import {
  MEDICAL_SYMPTOMS,
  DOCTOR_QUESTIONS,
  DIAGNOSTIC_STEPS
} from '../data/medicalGuide';

export const MedicalGuideView: React.FC = () => {
  const [checkedQuestions, setCheckedQuestions] = useState<string[]>([]);
  const [copiedReport, setCopiedReport] = useState(false);

  const toggleQuestion = (id: string) => {
    if (checkedQuestions.includes(id)) {
      setCheckedQuestions(checkedQuestions.filter((q) => q !== id));
    } else {
      setCheckedQuestions([...checkedQuestions, id]);
    }
  };

  const handleCopyQuestions = () => {
    const text = DOCTOR_QUESTIONS.map((q) => `[ ] ${q.question}\n   Motivo: ${q.reason}`).join('\n\n');
    navigator.clipboard.writeText(`📋 PERGUNTAS PARA O MEU GINECOLOGISTA (ENDOCARE):\n\n${text}`);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 3000);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold mb-2">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Guia Médico & Diagnóstico Preciso</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800">
            Como Identificar e Quando Buscar Especialista
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Informações científicas para identificar a doença precocemente e conduzir suas consultas médicas com segurança.
          </p>
        </div>

        <button
          onClick={handleCopyQuestions}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs shadow-md shadow-teal-200 transition shrink-0"
        >
          {copiedReport ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copiedReport ? 'Perguntas Copiadas!' : 'Copiar Roteiro de Consulta'}</span>
        </button>
      </div>

      {/* Seção 1: O que é a Endometriose & Como Identificar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-4">
        <h2 className="text-lg font-extrabold text-slate-800 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-teal-600" />
          <span>O que é a Endometriose?</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          A endometriose é uma doença inflamatória crônica caracterizada pela presença de tecido semelhante ao endométrio (o revestimento interno do útero) fora da cavidade uterina — afetando ovários, trompas, peritônio, ligamentos pélvicos, intestino e bexiga.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-xs">
            <strong className="text-teal-900 block mb-1 text-sm">1. Superficial / Peritoneal</strong>
            <p className="text-slate-600">Focos delgados espalhados pelo revestimento da pelve.</p>
          </div>
          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-xs">
            <strong className="text-teal-900 block mb-1 text-sm">2. Ovariana (Endometrioma)</strong>
            <p className="text-slate-600">Cistos ovarianos contendo líquido espesso e escuro (cistos de chocolate).</p>
          </div>
          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 text-xs">
            <strong className="text-teal-900 block mb-1 text-sm">3. Profunda Infiltrativa</strong>
            <p className="text-slate-600">Lesões que penetram mais de 5mm nos tecidos, acometendo intestino, bexiga e ureter.</p>
          </div>
        </div>
      </div>

      {/* Seção 2: Sintomas Chave vs Red Flags */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-6">
        <div className="flex justify-between items-center flex-wrap gap-2">
          <h2 className="text-lg font-extrabold text-slate-800">
            Sinais de Alerta e Sintomas da Doença
          </h2>
          <span className="text-xs font-bold text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            ⚠️ Sinais Vermelhos Exigem Especialista
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MEDICAL_SYMPTOMS.map((sym, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition ${
                sym.isRedFlag
                  ? 'bg-rose-50/60 border-rose-200 text-rose-950'
                  : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${
                  sym.isRedFlag ? 'bg-rose-600 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  {sym.category}
                </span>
                {sym.isRedFlag && (
                  <span className="text-[10px] font-bold text-rose-600">Sinal de Alerta 🚨</span>
                )}
              </div>

              <h4 className="font-extrabold text-xs sm:text-sm mb-1">{sym.name}</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">{sym.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seção 3: Passos para o Diagnóstico Preciso */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-4">
        <h2 className="text-lg font-extrabold text-slate-800">
          O Caminho do Diagnóstico Sem Demora
        </h2>
        <p className="text-xs text-slate-500">
          Em média, o diagnóstico de endometriose pode atrasar de 7 a 10 anos se feito com exames convencionais. Siga este protocolo:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {DIAGNOSTIC_STEPS.map((st, idx) => (
            <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="font-bold text-xs text-teal-600">{st.step}</span>
              <p className="text-xs text-slate-600 leading-relaxed">{st.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Seção 4: Checklist de Perguntas para a Consulta */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <h2 className="text-lg font-extrabold text-slate-800">
              Checklist de Perguntas para o Ginecologista
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Marque as perguntas que você deseja levar impressas ou anotadas na sua próxima consulta.
            </p>
          </div>

          <span className="text-xs font-bold text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full border border-teal-200">
            {checkedQuestions.length} de {DOCTOR_QUESTIONS.length} Selecionadas
          </span>
        </div>

        <div className="space-y-3 pt-2">
          {DOCTOR_QUESTIONS.map((q) => {
            const isChecked = checkedQuestions.includes(q.id);
            return (
              <div
                key={q.id}
                onClick={() => toggleQuestion(q.id)}
                className={`p-4 rounded-2xl border transition cursor-pointer flex items-start gap-3 ${
                  isChecked ? 'bg-teal-50/60 border-teal-200' : 'bg-slate-50 border-slate-200 hover:border-teal-200'
                }`}
              >
                <div className="mt-0.5 shrink-0">
                  {isChecked ? (
                    <CheckSquare className="w-5 h-5 text-teal-600" />
                  ) : (
                    <Square className="w-5 h-5 text-slate-300" />
                  )}
                </div>

                <div className="space-y-1 text-xs">
                  <span className="font-extrabold text-slate-800 block text-sm">
                    "{q.question}"
                  </span>
                  <p className="text-slate-600">
                    <strong className="text-teal-800">Por que perguntar:</strong> {q.reason}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
