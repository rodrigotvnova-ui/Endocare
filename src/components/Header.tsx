import React from 'react';
import {
  Heart,
  Activity,
  AlertTriangle,
  UtensilsCrossed,
  PackageCheck,
  Pill,
  Dumbbell,
  Stethoscope,
  MessageCircleHeart,
  User,
  LogOut,
  Sparkles
} from 'lucide-react';
import { UserProfile } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userProfile: UserProfile;
  onOpenLogin: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  userProfile,
  onOpenLogin,
  onLogout,
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Início', icon: Heart },
    { id: 'tracker', label: 'Diário & Sintomas', icon: Activity },
    { id: 'sos', label: 'SOS Crise', icon: AlertTriangle, highlight: true },
    { id: 'recipes', label: '50 Receitas', icon: UtensilsCrossed },
    { id: 'pantry', label: 'Dispensa (30)', icon: PackageCheck },
    { id: 'supplements', label: 'Suplementação & Ciclo', icon: Pill },
    { id: 'exercises', label: 'Exercícios & Meditação', icon: Dumbbell },
    { id: 'medical', label: 'Guia Médico', icon: Stethoscope },
    { id: 'chat', label: 'Chat com IA', icon: MessageCircleHeart },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <button
            onClick={() => setActiveTab('dashboard')}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-rose-200 group-hover:scale-105 transition">
              <Heart className="w-5 h-5 fill-white/20" />
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-rose-600 via-rose-700 to-pink-600 bg-clip-text text-transparent">
                EndoCare
              </span>
              <span className="block text-[10px] font-medium text-rose-400 tracking-wider uppercase">
                Acolhimento & Saúde
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              if (item.highlight) {
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition shadow-xs ${
                      isActive
                        ? 'bg-rose-600 text-white shadow-rose-200'
                        : 'bg-rose-100 text-rose-700 hover:bg-rose-200'
                    }`}
                  >
                    <AlertTriangle className="w-3.5 h-3.5 animate-pulse text-rose-600 dark:text-rose-100" />
                    <span>{item.label}</span>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition ${
                    isActive
                      ? 'bg-rose-50 text-rose-700 border border-rose-200/60 shadow-2xs'
                      : 'text-slate-600 hover:text-rose-600 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-rose-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* User profile & Login button */}
          <div className="flex items-center gap-3">
            {userProfile.isLoggedIn ? (
              <div className="flex items-center gap-2 bg-rose-50/80 border border-rose-200/70 py-1.5 px-3 rounded-full">
                <div className="w-7 h-7 rounded-full bg-rose-500 text-white flex items-center justify-center font-bold text-xs">
                  {userProfile.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-xs font-semibold text-slate-700 hidden sm:inline">
                  {userProfile.name}
                </span>
                <button
                  onClick={onLogout}
                  title="Sair"
                  className="p-1 text-slate-400 hover:text-rose-600 transition rounded-full hover:bg-rose-100"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLogin}
                className="flex items-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold hover:shadow-md hover:shadow-rose-300 transition active:scale-95"
              >
                <User className="w-4 h-4" />
                <span>Entrar</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2 border-t border-rose-100 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition ${
                  isActive
                    ? 'bg-rose-600 text-white font-bold'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
