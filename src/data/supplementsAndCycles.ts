import { Supplement, CyclePhaseCare } from '../types';

export const SUPPLEMENTS: Supplement[] = [
  {
    id: 'sup-1',
    name: 'Ômega 3 Refinado (Selo IFOS / Ultra Puro)',
    dosage: '1000mg a 2000mg (com alta concentração de EPA e DHA)',
    bestTime: 'Junto com o almoço ou jantar (refeição com gordura boa)',
    benefitsForEndo: 'Diminui significativamente a síntese de prostaglandinas inflamatórias (PGF2-alfa) causadoras das cólicas menstruais intensas. Estudos mostram redução da dor pélvica crônica e melhora no refluxo menstrual.',
    evidenceLevel: 'Excelente',
    precautions: 'Consulte seu médico se fizer uso de anticoagulantes. Escolha marcas testadas contra metais pesados.'
  },
  {
    id: 'sup-2',
    name: 'Curcumina Padronizada com Piperina',
    dosage: '500mg de extrato padronizado (95% curcuminóides) + 5mg piperina',
    bestTime: 'Após o café da manhã ou almoço',
    benefitsForEndo: 'Atua como inibidor natural da via NF-kB, reduzindo a angiogênese (formação de novos vasos sanguíneos que alimentam os focos de endometriose) e a aderência tecidual.',
    evidenceLevel: 'Excelente',
    precautions: 'Evitar em casos de obstrução das vias biliares ou úlcera gástrica ativa.'
  },
  {
    id: 'sup-3',
    name: 'Magnésio Dimalato ou Bisglicinato',
    dosage: '250mg a 400mg de magnésio elementar',
    bestTime: 'À noite, cerca de 1 hora antes de dormir',
    benefitsForEndo: 'Relaxante muscular pélvico por excelência. Bloqueia os canais de cálcio na musculatura uterina, aliviando espasmos, cólicas, enxaqueca hormonal e ansiedade.',
    evidenceLevel: 'Excelente',
    precautions: 'Se causar fezes amolecidas, reduza a dose ou opte pela forma bisglicinada.'
  },
  {
    id: 'sup-4',
    name: 'Vitamina D3 + Vitamina K2 (MK-7)',
    dosage: '2000 UI a 5000 UI de D3 + 100mcg de K2 (ajustar por exame de sangue)',
    bestTime: 'No almoço (vitamina lipossolúvel)',
    benefitsForEndo: 'Imunomodulador essencial. Pacientes com endometriose frequentemente apresentam níveis baixos de vitamina D. Níveis otimizados (acima de 40-50 ng/mL) reduzem marcadores inflamatórios peritoneal.',
    evidenceLevel: 'Excelente',
    precautions: 'Dosar periodicamente a 25-hidroxivitamina D no sangue.'
  },
  {
    id: 'sup-5',
    name: 'N-Acetilcisteína (NAC)',
    dosage: '600mg, 1 a 2 vezes ao dia',
    bestTime: 'Entre as refeições com um copo grande de água',
    benefitsForEndo: 'Precursor da glutationa (maior antioxidante celular). Estudos clínicos italianos demonstraram redução expressiva no tamanho de endometriomas ovarianos após 3 meses de uso alternado.',
    evidenceLevel: 'Muito Boa',
    precautions: 'Pode causar leve desconforto gástrico se tomado em jejum absoluto.'
  },
  {
    id: 'sup-6',
    name: 'Resveratrol',
    dosage: '100mg a 200mg de Trans-Resveratrol',
    bestTime: 'Pela manhã com uma fonte de gordura',
    benefitsForEndo: 'Inibe a aromatase (enzima que produz estrogênio nos focos endometrióticos) e reduz a expressão de COX-2, aliviando a dor inflamatória.',
    evidenceLevel: 'Muito Boa',
    precautions: 'Não recomendado durante a gestação ou tentativa imediata de fertilização sem acompanhamento.'
  },
  {
    id: 'sup-7',
    name: 'Zinco Quelato',
    dosage: '15mg a 30mg',
    bestTime: 'À noite antes de dormir',
    benefitsForEndo: 'Regula o sistema imunológico, favorece a cicatrização tecidual e reduz o estresse oxidativo nas trompas e ovários.',
    evidenceLevel: 'Muito Boa',
    precautions: 'Se usado por longos períodos (mais de 3 meses), associar com 1mg de Cobre.'
  },
  {
    id: 'sup-8',
    name: 'Probióticos Específicos para Eixo Intestino-Útero (Estroboloma)',
    dosage: '10 a 25 bilhões de UFC (Lactobacillus rhamnosus, L. acidophilus, Bifidobacterium)',
    bestTime: 'À noite ao deitar ou em jejum de manhã',
    benefitsForEndo: 'Equilibra o estroboloma (bactérias intestinais que regulam a reabsorção de estrogênio no corpo), diminuindo a hiperestrogenemia relativa que alimenta a doença.',
    evidenceLevel: 'Muito Boa',
    precautions: 'Aumentar gradualmente se houver sensibilidade a gases.'
  }
];

export const CYCLE_CARE_PLANS: Record<string, CyclePhaseCare> = {
  menstrual: {
    phase: 'menstrual',
    title: 'Fase Menstrual (Dias 1 a 5) - Recolhimento & Alívio Térmico',
    hormoneContext: 'Níveis de estrogênio e progesterona em queda. A mucosa uterina está se descamando, o que aciona a produção de prostaglandinas inflamatórias.',
    energyLevel: 'Baixa a Moderada. O corpo direciona grande energia para o processo menstrual.',
    painRisk: 'ALTO. Período crítico para cólicas, dor lombar e inchaço pélvico.',
    nutritionFocus: [
      'Alimentos aquecidos, cozidos e de fácil digestão (sopas de raízes, purê de inhame, vegetais assados).',
      'Chás medicinais mornos (Gengibre + Cúrcuma + Camomila).',
      'Fontes de ferro de boa absorção (ovos orgânicos, vegetais verde-escuros refogados, carne magra).',
      'Evitar terminantemente: bebidas geladas, laticínios, açúcares e glúten.'
    ],
    recommendedSupplements: ['Magnésio Dimalato', 'Ômega 3', 'Curcumina', 'Chá de Gengibre'],
    selfCareRoutine: [
      'Compressa de água morna na região supra-púbica e lombar por 20 minutos, 3x ao dia.',
      'Banho quente relaxante com sais de magnésio ou óleo essencial de lavanda.',
      'Priorizar o descanso sem culpa. Dormir de 8 a 9 horas.',
      'Massagem suave na barriga em sentido horário com óleo de gergelim aquecido.'
    ],
    exerciseGuidance: 'Apenas alongamentos leves na cama ou no tapete (Posição da Criança, Pernas na Parede). Evitar impactos e inversões.'
  },
  follicular: {
    phase: 'follicular',
    title: 'Fase Folicular (Dias 6 a 13) - Renovação & Fibras Limpas',
    hormoneContext: 'O estrogênio começa a subir gradualmente. O corpo ganha vitalidade e os folículos ovarianos estão em maturação.',
    energyLevel: 'Crescente e Disposta. Sensação de leveza e clareza mental.',
    painRisk: 'BAIXO. Mínima tendência a dores agudas.',
    nutritionFocus: [
      'Vegetais crucíferos e folhosos (brócolis, couve, rúcula) para metabolizar o estrogênio emergente.',
      'Fibras solúveis (sementes de chia, linhaça dourada, aveia sem glúten).',
      'Proteínas leves (peixes magros, frango orgânico, ovos).',
      'Sucos verdes drenantes e bastante água.'
    ],
    recommendedSupplements: ['Vitamina D3+K2', 'Probióticos', 'Zinco Quelato'],
    selfCareRoutine: [
      'Aproveite a clareza mental para planejar projetos e tarefas da semana.',
      'Caminhadas ao ar livre ao sol da manhã para sintetizar vitamina D natural.',
      'Esfoliação suave da pele e hidratação com óleos vegetais.'
    ],
    exerciseGuidance: 'Ótimo momento para caminhadas dinâmicas, ioga fluida, fortalecimento pélvico leve e exercícios de mobilidade de quadril.'
  },
  ovulatory: {
    phase: 'ovulatory',
    title: 'Fase Ovulatória (Dias 14 a 16) - Vigor & Antioxidantes',
    hormoneContext: 'Pico de estrogênio e surto de hormônio luteinizante (LH). Ocorre a liberação do óvulo. Algumas mulheres sentem dor da ovulação (Mittelschmerz).',
    energyLevel: 'Ápice de Energia, libido e comunicação.',
    painRisk: 'MODERADO. Pode haver pontadas na fosa ilíaca direita ou esquerda devido à ovulação.',
    nutritionFocus: [
      'Alimentos de altíssimo teor antioxidante (frutas vermelhas, cacau 100%, sementes de abóbora).',
      'Abundância de água de coco e vegetais frescos altamente hidratantes (abobrinha, pepino).',
      'Refeições coloridas e anti-inflamatórias.'
    ],
    recommendedSupplements: ['Resveratrol', 'NAC (N-Acetilcisteína)', 'Ômega 3'],
    selfCareRoutine: [
      'Práticas de respiração consciente para ancorar a energia vital.',
      'Rituais de autocuidado estético, automassagem e expressão criativa.',
      'Manter excelente hidratação para auxiliar o muco cervical saudável.'
    ],
    exerciseGuidance: 'Exercícios de intensidade moderada, pilates, caminhadas energéticas e dança suave.'
  },
  luteal: {
    phase: 'luteal',
    title: 'Fase Lútea (Dias 17 a 28) - Descompressão & Pré-Prevenção de Crise',
    hormoneContext: 'Predomínio de progesterona. Nos últimos dias da fase, se não houver gestação, ambos os hormônios despencam, o que pode desencadear retenção hídrica, estufamento (Endo Belly) e irritabilidade.',
    energyLevel: 'Decrescente. O corpo pede desaceleração à medida que se aproxima a menstruação.',
    painRisk: 'MODERADO A ALTO (pré-menstrual). Inchaço abdominal grave e sensibilidade mamária.',
    nutritionFocus: [
      'Alimentos ricos em B6 e Magnésio para conter a ansiedade e fissura por doces (banana, cacau 100%, abóbora cabotiá, batata-doce).',
      'Raízes e vegetais grelhados para otimizar digestão lenta provocada pela progesterona.',
      'Chás drenantes anti-inchaço (Salsa, Dente-de-leão, Erva-doce, Gengibre).',
      'Reduzir drasticamente o sódio refinado para conter a retenção hídrica.'
    ],
    recommendedSupplements: ['Magnésio Dimalato', 'Curcumina', 'B-Complex/B6', 'Chá Anti-Inchaço'],
    selfCareRoutine: [
      'Evitar compromissos estressantes no final desta fase.',
      'Banhos de imersão mornos ou escalda-pés com sal amargo e óleo essencial de camomila.',
      'Desconexão de telas 1 hora antes de dormir para proteger a melatonina.',
      'Uso de roupas confortáveis que não pressionem a região do ventre.'
    ],
    exerciseGuidance: 'Reduzir a intensidade. Focar em ioga restaurativa, alongamentos de psoas, caminhadas lentas e meditação guiada.'
  }
};
