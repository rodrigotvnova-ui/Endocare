import React, { useState } from 'react';
import {
  PackageCheck,
  Search,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  ShoppingBag,
  Sparkles,
  Info
} from 'lucide-react';
import { PANTRY_ITEMS } from '../data/pantryItems';

interface PantryViewProps {
  pantryStockIds: string[];
  onTogglePantryItem: (id: string) => void;
}

export const PantryView: React.FC<PantryViewProps> = ({
  pantryStockIds,
  onTogglePantryItem,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copied, setCopied] = useState(false);

  const categories = [
    { id: 'all', label: 'Todos os 30 Itens' },
    { id: 'farinhas-polvilhos', label: '🌾 Farinhas & Polvilhos' },
    { id: 'sementes-graos', label: '🌻 Sementes & Grãos' },
    { id: 'especiarias', label: '🌿 Especiarias' },
    { id: 'oleos-gorduras', label: '🫒 Óleos & Gorduras Boas' },
    { id: 'leites-adoçantes', label: '🥛 Leites & Adoçantes' },
    { id: 'frescos-raizes', label: '🍠 Frescos & Raízes' },
  ];

  const filteredItems = PANTRY_ITEMS.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const missingItems = PANTRY_ITEMS.filter((item) => !pantryStockIds.includes(item.id));

  const handleCopyShoppingList = () => {
    const listText = missingItems.map((item) => `[ ] ${item.name}`).join('\n');
    navigator.clipboard.writeText(`🛒 LISTA DE COMPRAS ENDOCARE:\n\n${listText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="bg-white p-6 rounded-3xl border border-rose-100 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-2">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>30 Ingredientes Essenciais</span>
          </div>
          <h1 className="text-2xl font-extrabold text-slate-800">
            Dispensa Anti-inflamatória EndoCare
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Lista completa de 30 itens cruciais (farinhas sem glúten, polvilhos, sementes e especiarias) para manter em casa e cozinhar sem inflamação.
          </p>
        </div>

        {/* Copy list button */}
        <button
          onClick={handleCopyShoppingList}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-200 transition"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? 'Lista Copiada!' : `Copiar Lista de Compras (${missingItems.length})`}</span>
        </button>
      </div>

      {/* Category Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex gap-2 overflow-x-auto w-full no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-emerald-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filtrar ingrediente..."
            className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          />
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => {
          const inStock = pantryStockIds.includes(item.id);

          return (
            <div
              key={item.id}
              onClick={() => onTogglePantryItem(item.id)}
              className={`p-5 rounded-3xl border transition cursor-pointer flex flex-col justify-between ${
                inStock
                  ? 'bg-emerald-50/50 border-emerald-200 hover:border-emerald-300'
                  : 'bg-white border-slate-200 hover:border-rose-200 shadow-xs'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className={`font-extrabold text-sm ${inStock ? 'text-emerald-950' : 'text-slate-800'}`}>
                    {item.name}
                  </h3>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onTogglePantryItem(item.id);
                    }}
                    className="shrink-0 focus:outline-none"
                  >
                    {inStock ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-300 hover:text-emerald-500" />
                    )}
                  </button>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {item.description}
                </p>

                <div className="space-y-2 text-[11px] pt-3 border-t border-slate-100">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 text-slate-700">
                    <span className="font-bold text-slate-900 block mb-0.5">🌟 Por que é essencial:</span>
                    {item.whyEssential}
                  </div>

                  <div className="p-2 rounded-xl bg-amber-50/60 border border-amber-100 text-amber-900">
                    <span className="font-bold block mb-0.5">💡 Dica de Substituição:</span>
                    {item.substitutionTip}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-2 flex items-center justify-between text-[11px] font-bold">
                <span className={inStock ? 'text-emerald-700' : 'text-slate-400'}>
                  {inStock ? '✓ Disponível na Dispensa' : '🛒 Adicionar à Lista de Compras'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
