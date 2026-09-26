export type CyclePhase = 'menstrual' | 'follicular' | 'ovulatory' | 'luteal';

export interface SymptomEntry {
  id: string;
  date: string;
  painLevel: number; // 0-10
  symptoms: string[];
  foodTriggers: string[];
  mood: string;
  cyclePhase: CyclePhase;
  notes?: string;
}

export interface Recipe {
  id: string;
  title: string;
  category: 'cafe' | 'almoço-jantar' | 'lanches' | 'bebidas-chas' | 'doces-funcionais' | 'raizes-grelhadas';
  prepTime: string;
  servings: string;
  isEndoBellyFocus: boolean;
  isRootVegetables: boolean;
  isGlutenFree: boolean;
  isLactoseFree: boolean;
  isLowFodmap: boolean;
  ingredients: string[];
  instructions: string[];
  antiInflammatoryBenefits: string;
  imageTheme: string;
}

export interface PantryItem {
  id: string;
  name: string;
  category: 'farinhas-polvilhos' | 'sementes-graos' | 'especiarias' | 'oleos-gorduras' | 'leites-adoçantes' | 'frescos-raizes';
  description: string;
  whyEssential: string;
  substitutionTip: string;
}

export interface Supplement {
  id: string;
  name: string;
  dosage: string;
  bestTime: string;
  benefitsForEndo: string;
  evidenceLevel: 'Excelente' | 'Muito Boa' | 'Promissora';
  precautions: string;
}

export interface CyclePhaseCare {
  phase: CyclePhase;
  title: string;
  hormoneContext: string;
  energyLevel: string;
  painRisk: string;
  nutritionFocus: string[];
  recommendedSupplements: string[];
  selfCareRoutine: string[];
  exerciseGuidance: string;
}

export interface ExerciseItem {
  id: string;
  title: string;
  type: 'alongamento' | 'liberacao-pélvica' | 'fortalecimento-suave' | 'meditacao-guiada' | 'respiracao';
  duration: string;
  objective: 'alivio-dor-aguda' | 'desinchar-barriga' | 'relaxar-lombar' | 'energia-suave' | 'sono-tranquilo';
  physicalRestrictions: 'deitada-sem-esforço' | 'sem-impacto' | 'alongamento-leve' | 'qualquer-nivel';
  instructions: string[];
  benefits: string;
  precautions: string;
}

export interface UserProfile {
  username: string;
  name: string;
  isLoggedIn: boolean;
  diagnosed: boolean;
  primaryCyclePhase: CyclePhase;
  favoriteRecipeIds: string[];
  pantryStockIds: string[];
}
