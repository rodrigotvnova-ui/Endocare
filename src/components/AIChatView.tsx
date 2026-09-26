import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  Send,
  Bot,
  User,
  Sparkles,
  RefreshCw,
  Heart,
  Shield
} from 'lucide-react';
import { UserProfile } from '../types';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIChatViewProps {
  userProfile: UserProfile;
}

export const AIChatView: React.FC<AIChatViewProps> = ({ userProfile }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `Olá, ${userProfile.name || 'minha querida'}! Sou a Dra. EndoAcolhe, sua assistente virtual especializada em endometriose, saúde feminina e estilo de vida anti-inflamatório. 🌸

Como posso te apoiar hoje? Você pode me perguntar sobre:
• Como aliviar cólicas ou inchaço abdominal ("endo belly")
• Dúvidas sobre suplementos (Ômega 3, Cúrcuma, Magnésio)
• Sugestões de receitas da nossa dispensa
• Sintomas e como se preparar para consultas médicas.`
    }
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input.trim();
    setInput('');

    const newMessages: Message[] = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          userContext: {
            username: userProfile.name,
            cyclePhase: userProfile.primaryCyclePhase,
          },
        }),
      });

      const data = await response.json();

      if (data.text) {
        setMessages([...newMessages, { role: 'assistant', content: data.text }]);
      } else {
        setMessages([
          ...newMessages,
          {
            role: 'assistant',
            content:
              'Estou com dificuldades para responder no momento, mas saiba que você não está sozinha. Tente enviar novamente em alguns segundos.'
          }
        ]);
      }
    } catch (err) {
      console.error('Chat AI Error:', err);
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Desculpe, ocorreu uma falha na conexão. Por favor, tente novamente.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    'O que fazer quando estou com inchaço grave no abdômen?',
    'Como a cúrcuma com pimenta ajuda na dor da endometriose?',
    'Quais exames devo pedir para o ginecologista?',
    'Receita rápida de lanche sem glúten e sem lactose',
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100 text-pink-800 text-xs font-bold mb-2">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Suporte de IA 24h</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800">
            Chat Acolhedor - Dra. EndoAcolhe
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Tire dúvidas sobre sintomas, nutrição anti-inflamatória, técnicas de relaxamento e acolhimento emocional.
          </p>
        </div>
      </div>

      {/* Chat Container */}
      <div className="bg-white rounded-3xl border border-rose-100 shadow-lg overflow-hidden flex flex-col h-[600px]">
        
        {/* Messages list */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-slate-50/50">
          {messages.map((msg, idx) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={idx}
                className={`flex gap-3 max-w-2xl ${
                  isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold shrink-0 text-xs shadow-xs ${
                    isUser
                      ? 'bg-rose-600 text-white'
                      : 'bg-gradient-to-tr from-pink-500 to-rose-500 text-white'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>

                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-rose-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 shadow-2xs rounded-tl-none whitespace-pre-wrap'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex gap-3 max-w-2xl mr-auto">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-500 animate-pulse">
                Dra. EndoAcolhe está digitando uma resposta carinhosa...
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-white border-t border-slate-100 flex gap-2 overflow-x-auto no-scrollbar">
          {quickPrompts.map((prompt, pIdx) => (
            <button
              key={pIdx}
              onClick={() => setInput(prompt)}
              className="px-3 py-1.5 rounded-full bg-slate-100 hover:bg-rose-50 hover:text-rose-700 text-slate-600 text-[11px] font-medium whitespace-nowrap transition border border-slate-200"
            >
              💡 {prompt}
            </button>
          ))}
        </div>

        {/* Input bar */}
        <form onSubmit={handleSend} className="p-4 bg-white border-t border-rose-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Digite sua dúvida ou desabafo..."
            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-rose-500/30"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white font-bold text-xs shadow-md shadow-rose-200 transition disabled:opacity-50 flex items-center gap-2"
          >
            <span>Enviar</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

      </div>

    </div>
  );
};
