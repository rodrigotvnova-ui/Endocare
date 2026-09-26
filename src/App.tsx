import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { LoginModal } from './components/LoginModal';
import { DashboardView } from './components/DashboardView';
import { SymptomTrackerView } from './components/SymptomTrackerView';
import { SosCrisisView } from './components/SosCrisisView';
import { RecipesView } from './components/RecipesView';
import { PantryView } from './components/PantryView';
import { SupplementsCycleView } from './components/SupplementsCycleView';
import { ExercisesView } from './components/ExercisesView';
import { MedicalGuideView } from './components/MedicalGuideView';
import { AIChatView } from './components/AIChatView';
import { UserProfile, SymptomEntry } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  // User Profile State
  const [userProfile, setUserProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('endocare_user_profile');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return {
      username: 'mariana_endo',
      name: 'Mariana',
      isLoggedIn: true,
      diagnosed: true,
      primaryCyclePhase: 'luteal',
      favoriteRecipeIds: ['rec-1', 'rec-11', 'rec-41'],
      pantryStockIds: ['pan-1', 'pan-2', 'pan-3', 'pan-9', 'pan-10', 'pan-11', 'pan-12'],
    };
  });

  // Symptom Logs State
  const [symptomLogs, setSymptomLogs] = useState<SymptomEntry[]>(() => {
    const saved = localStorage.getItem('endocare_symptom_logs');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return [
      {
        id: 'log-1',
        date: new Date().toISOString().split('T')[0],
        painLevel: 4,
        symptoms: ['Inchaço Abdominal (Endo Belly)', 'Cólicas Intensas'],
        foodTriggers: ['Lactose / Laticínio'],
        mood: 'Cansada',
        cyclePhase: 'luteal',
        notes: 'Senti inchaço após o almoço. Tomei chá de gengibre com cúrcuma.',
      },
    ];
  });

  // Save profile to localStorage
  useEffect(() => {
    localStorage.setItem('endocare_user_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  // Save logs to localStorage
  useEffect(() => {
    localStorage.setItem('endocare_symptom_logs', JSON.stringify(symptomLogs));
  }, [symptomLogs]);

  // Handle adding new log entry
  const handleAddLog = (newEntry: SymptomEntry) => {
    setSymptomLogs([newEntry, ...symptomLogs]);
  };

  // Quick log from dashboard
  const handleQuickAddLog = (painLevel: number, mood: string) => {
    const quickEntry: SymptomEntry = {
      id: `log-${Date.now()}`,
      date: new Date().toISOString().split('T')[0],
      painLevel,
      symptoms: painLevel > 5 ? ['Dor Pélvica / Cólica'] : [],
      foodTriggers: [],
      mood,
      cyclePhase: userProfile.primaryCyclePhase,
      notes: 'Registro rápido via painel de início.',
    };
    setSymptomLogs([quickEntry, ...symptomLogs]);
  };

  // Delete log entry
  const handleDeleteLog = (id: string) => {
    setSymptomLogs(symptomLogs.filter((l) => l.id !== id));
  };

  // Favorite recipes toggle
  const handleToggleFavoriteRecipe = (recipeId: string) => {
    const favs = userProfile.favoriteRecipeIds || [];
    const updated = favs.includes(recipeId)
      ? favs.filter((id) => id !== recipeId)
      : [...favs, recipeId];

    setUserProfile({ ...userProfile, favoriteRecipeIds: updated });
  };

  // Pantry item stock toggle
  const handleTogglePantryItem = (itemId: string) => {
    const stock = userProfile.pantryStockIds || [];
    const updated = stock.includes(itemId)
      ? stock.filter((id) => id !== itemId)
      : [...stock, itemId];

    setUserProfile({ ...userProfile, pantryStockIds: updated });
  };

  const handleLogout = () => {
    setUserProfile({
      ...userProfile,
      isLoggedIn: false,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50 text-slate-800">
      
      {/* Top Header & Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userProfile={userProfile}
        onOpenLogin={() => setIsLoginOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <DashboardView
            userProfile={userProfile}
            setActiveTab={setActiveTab}
            recentLogs={symptomLogs}
            onAddQuickLog={handleQuickAddLog}
          />
        )}

        {activeTab === 'tracker' && (
          <SymptomTrackerView
            logs={symptomLogs}
            onAddLog={handleAddLog}
            onDeleteLog={handleDeleteLog}
          />
        )}

        {activeTab === 'sos' && <SosCrisisView />}

        {activeTab === 'recipes' && (
          <RecipesView
            favoriteIds={userProfile.favoriteRecipeIds || []}
            onToggleFavorite={handleToggleFavoriteRecipe}
          />
        )}

        {activeTab === 'pantry' && (
          <PantryView
            pantryStockIds={userProfile.pantryStockIds || []}
            onTogglePantryItem={handleTogglePantryItem}
          />
        )}

        {activeTab === 'supplements' && <SupplementsCycleView />}

        {activeTab === 'exercises' && <ExercisesView />}

        {activeTab === 'medical' && <MedicalGuideView />}

        {activeTab === 'chat' && <AIChatView userProfile={userProfile} />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-rose-100 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-rose-800">
            EndoCare - Acolhimento, Nutrição e Cuidado Integral na Endometriose
          </p>
          <p className="text-[11px] text-slate-400">
            Aviso Legal: O EndoCare é uma ferramenta informativa e de suporte ao autocuidado. Suas orientações não substituem consultas, diagnósticos ou tratamentos fornecidos por ginecologistas e profissionais de saúde especializados.
          </p>
        </div>
      </footer>

      {/* Login / Auth Modal */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        userProfile={userProfile}
        onLoginSuccess={(updatedProfile) => setUserProfile(updatedProfile)}
      />

    </div>
  );
}
