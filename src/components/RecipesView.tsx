import React, { useState } from 'react';
import {
  Utensils,
  Search,
  Filter,
  Clock,
  Users,
  Sparkles,
  Heart,
  ChevronRight,
  X,
  Check,
  Flame
} from 'lucide-react';
import { RECIPES } from '../data/recipes';
import { Recipe } from '../types';

interface RecipesViewProps {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
}

export const RecipesView: React.FC<RecipesViewProps> = ({
  favoriteIds,
  onToggleFavorite,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filterEndoBelly, setFilterEndoBelly] = useState(false);
  const [filterRootsOnly, setFilterRootsOnly] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const categories = [
    { id: 'all', label: 'Todas (50)' },
    { id: 'raizes-grelhadas', label: '🌱 Raízes Grelhadas' },
    { id: 'cafe', label: '☕ Café da Manhã' },
    { id: 'almoço-jantar', label: '🍲 Almoço & Jantar' },
    { id: 'lanches', label: '🥪 Lanches & Snacks' },
    { id: 'bebidas-chas', label: '🫖 Chás & Bebidas' },
    { id: 'doces-funcionais', label: '🫐 Doces Funcionais' },
  ];

  const filteredRecipes = RECIPES.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.ingredients.some((i) => i.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory =
      selectedCategory === 'all' || r.category === selectedCategory;

    const matchesEndoBelly = !filterEndoBelly || r.isEndoBellyFocus;
    const matchesRoots = !filterRootsOnly || r.isRootVegetables;

    return matchesSearch && matchesCategory && matchesEndoBelly && matchesRoots;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Title Header */}
      <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold mb-2">
            <Utensils className="w-3.5 h-3.5" />
            <span>50 Receitas Anti-inflamatórias</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800">
            Alimentação Terapêutica e Desinchante
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Receitas rápidas sem glúten nem lactose, focadas na diminuição do inchaço ("Endo Belly") e saborosas raízes grelhadas.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por nome ou ingrediente..."
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs focus:outline-none focus:ring-2 focus:ring-rose-500/30"
          />
        </div>
      </div>

      {/* Filters Bar */}
      <div className="space-y-3">
        {/* Category Pill Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-rose-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Feature Switches */}
        <div className="flex flex-wrap items-center gap-3 bg-white p-3 rounded-2xl border border-rose-100/80 text-xs font-semibold text-slate-700">
          <span className="text-slate-400 font-bold uppercase text-[10px] tracking-wider">
            Filtros Especiais:
          </span>

          <label className="flex items-center gap-2 cursor-pointer bg-rose-50 px-3 py-1.5 rounded-xl border border-rose-200 hover:bg-rose-100 transition">
            <input
              type="checkbox"
              checked={filterEndoBelly}
              onChange={(e) => setFilterEndoBelly(e.target.checked)}
              className="accent-rose-600 rounded"
            />
            <span className="text-rose-800">✨ Foco Anti-Inchaço (Endo Belly)</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-200 hover:bg-orange-100 transition">
            <input
              type="checkbox"
              checked={filterRootsOnly}
              onChange={(e) => setFilterRootsOnly(e.target.checked)}
              className="accent-orange-600 rounded"
            />
            <span className="text-orange-800">🌱 Raízes & Vegetais Grelhados</span>
          </label>

          <span className="ml-auto text-slate-400 text-xs">
            Exibindo <span className="font-bold text-slate-800">{filteredRecipes.length}</span> receitas
          </span>
        </div>
      </div>

      {/* Recipes Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecipes.map((recipe) => {
          const isFav = favoriteIds.includes(recipe.id);

          return (
            <div
              key={recipe.id}
              className="bg-white rounded-3xl border border-rose-100 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="p-6">
                {/* Badges bar */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex flex-wrap gap-1">
                    {recipe.isEndoBellyFocus && (
                      <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-700 text-[10px] font-extrabold">
                        Anti-Inchaço
                      </span>
                    )}
                    {recipe.isRootVegetables && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 text-[10px] font-extrabold">
                        Raízes
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onToggleFavorite(recipe.id)}
                    className={`p-1.5 rounded-full transition ${
                      isFav
                        ? 'bg-rose-100 text-rose-600'
                        : 'bg-slate-100 text-slate-400 hover:text-rose-600'
                    }`}
                    title={isFav ? 'Remover dos Favoritos' : 'Salvar Favorito'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-600' : ''}`} />
                  </button>
                </div>

                <h3 className="font-extrabold text-slate-800 text-base group-hover:text-rose-600 transition leading-snug">
                  {recipe.title}
                </h3>

                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                  {recipe.antiInflammatoryBenefits}
                </p>

                {/* Quick Info Tags */}
                <div className="flex items-center gap-4 text-[11px] font-semibold text-slate-500 mt-4 pt-3 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-rose-500" />
                    {recipe.prepTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-rose-500" />
                    {recipe.servings}
                  </span>
                </div>
              </div>

              {/* View recipe button */}
              <button
                onClick={() => setSelectedRecipe(recipe)}
                className="w-full py-3 bg-slate-50 hover:bg-rose-50 border-t border-rose-100 text-rose-700 font-bold text-xs flex items-center justify-center gap-2 transition"
              >
                <span>Ver Receita Completa & Passo a Passo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-rose-100 my-8 max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-6 text-white relative">
              <button
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-extrabold uppercase">
                  Sem Glúten
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-extrabold uppercase">
                  Sem Lactose
                </span>
                {selectedRecipe.isEndoBellyFocus && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-300 text-amber-950 text-[11px] font-extrabold uppercase">
                    Foco Endo Belly
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold">{selectedRecipe.title}</h2>
              
              <div className="flex items-center gap-4 text-xs text-rose-100 mt-2 font-semibold">
                <span>⏱️ {selectedRecipe.prepTime}</span>
                <span>🍽️ {selectedRecipe.servings}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 overflow-y-auto">
              
              {/* Benefício Terapêutico */}
              <div className="p-4 bg-rose-50/80 rounded-2xl border border-rose-100">
                <h4 className="font-bold text-rose-900 text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-rose-600" />
                  Benefício Anti-inflamatório para a Endometriose:
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedRecipe.antiInflammatoryBenefits}
                </p>
              </div>

              {/* Ingredientes */}
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm mb-3">
                  Ingredientes Necessários:
                </h4>
                <ul className="space-y-2">
                  {selectedRecipe.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-[10px] font-bold mt-0.5">
                        ✓
                      </span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Passo a Passo */}
              <div>
                <h4 className="font-extrabold text-slate-800 text-sm mb-3">
                  Modo de Preparo Passo a Passo:
                </h4>
                <ol className="space-y-3">
                  {selectedRecipe.instructions.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <span className="w-6 h-6 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
              <button
                onClick={() => onToggleFavorite(selectedRecipe.id)}
                className="px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border border-slate-200 hover:bg-white transition"
              >
                <Heart className={`w-4 h-4 ${favoriteIds.includes(selectedRecipe.id) ? 'fill-rose-600 text-rose-600' : 'text-slate-400'}`} />
                <span>{favoriteIds.includes(selectedRecipe.id) ? 'Salvo em Favoritos' : 'Salvar em Favoritos'}</span>
              </button>

              <button
                onClick={() => setSelectedRecipe(null)}
                className="px-5 py-2 bg-rose-600 text-white font-bold text-xs rounded-xl hover:bg-rose-700 transition"
              >
                Fechar
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
