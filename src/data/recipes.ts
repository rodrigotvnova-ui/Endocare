import { Recipe } from '../types';

export const RECIPES: Recipe[] = [
  // --- CATEGORIA: RAÍZES E VEGETAIS GRELHADOS (10 RECEITAS) ---
  {
    id: 'rec-1',
    title: 'Batata-Doce Rústica Assada com Cúrcuma e Alecrim',
    category: 'raizes-grelhadas',
    prepTime: '25 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '2 batatas-doces médias cortadas em canoas',
      '1 colher de sopa de azeite de oliva extra virgem',
      '1 colher de chá de cúrcuma pura em pó',
      '1 pitada de pimenta-do-reino moída na hora (potencializa a cúrcuma)',
      'Ramos de alecrim fresco',
      'Flor de sal a gosto'
    ],
    instructions: [
      'Lave bem as batatas-doces mantendo a casca rica em fibras suaves.',
      'Corte em formato de canoa ou rodelas grossas.',
      'Em uma tigela, misture o azeite, a cúrcuma, a pimenta e o alecrim.',
      'Envolva as batatas no tempero e disponha em uma assadeira antiaderente.',
      'Asse em forno preaquecido a 200°C por 20 minutos até ficarem macias e levemente douradas por fora.'
    ],
    antiInflammatoryBenefits: 'A combinação de cúrcuma com pimenta preta e fitoquímicos da batata-doce reduz enzimas inflamatórias na pelve e fornece fibras amidos resistentes para saciedade sem inchaço.',
    imageTheme: 'sweet-potato'
  },
  {
    id: 'rec-2',
    title: 'Mandioca Doce Grelhada no Azeite e Tomilho',
    category: 'raizes-grelhadas',
    prepTime: '30 min',
    servings: '3 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: false,
    ingredients: [
      '500g de mandioca (aipim) cozida até ficar macia',
      '2 colheres de sopa de azeite de oliva extra virgem',
      '1 colher de chá de páprica doce ou defumada',
      '1 colher de sobremesa de folhas frescas de tomilho',
      'Sal marinho a gosto'
    ],
    instructions: [
      'Após cozinhar a mandioca em água com sal até ficar macia, retire o fiapo central e corte em tiras.',
      'Aqueça uma frigideira de fundo grosso com o azeite de oliva.',
      'Adicione a mandioca, a páprica e o tomilho.',
      'Grelhe em fogo médio por 3-4 minutos de cada lado até formar uma casquinha crocante e dourada.',
      'Sirva bem aquecida como acompanhamento rico em energia limpa.'
    ],
    antiInflammatoryBenefits: 'A mandioca é naturalmente isenta de glúten, acalma a mucosa intestinal e promove saciedade prolongada, reduzindo picos de insulina que pioram cólicas.',
    imageTheme: 'cassava'
  },
  {
    id: 'rec-3',
    title: 'Abóbora Cabotiá Assada com Sementes de Girassol e Gengibre',
    category: 'raizes-grelhadas',
    prepTime: '25 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '400g de abóbora cabotiá cortada em fatias com casca',
      '1 colher de chá de gengibre ralado fresco',
      '1 colher de sopa de azeite extra virgem',
      '2 colheres de sopa de sementes de girassol tostadas',
      'Sal marinho e noz-moscada ralada na hora'
    ],
    instructions: [
      'Disponha as fatias de abóbora em uma assadeira.',
      'Pincele com o azeite misturado ao gengibre ralado, sal e noz-moscada.',
      'Leve ao forno a 200°C por 20 minutos até ficar macia por dentro e tostada por fora.',
      'Polvilhe as sementes de girassol ao retirar do forno e sirva.'
    ],
    antiInflammatoryBenefits: 'Rica em betacaroteno e magnésio, reduz espasmos uterinos e ajuda a drenar o inchaço abdominal.',
    imageTheme: 'pumpkin'
  },
  {
    id: 'rec-4',
    title: 'Cenouras Caramelizadas com Gengibre e Cominho',
    category: 'raizes-grelhadas',
    prepTime: '20 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '4 cenouras médias cortadas ao meio no sentido do comprimento',
      '1 colher de chá de gengibre em pó ou fresco ralado',
      '1/2 colher de chá de cominho em grãos ou pó',
      '1 colher de sopa de óleo de coco ou azeite de oliva',
      'Salsinha fresca picada e sal marinho'
    ],
    instructions: [
      'Aqueça a frigideira com óleo de coco ou azeite.',
      'Coloque as cenouras com a parte cortada para baixo.',
      'Adicione o gengibre, o cominho e o sal.',
      'Grelhe por 6 minutos de cada lado até dourarem e caramelizarem levemente.',
      'Finalize com salsinha fresca rica em vitamina C.'
    ],
    antiInflammatoryBenefits: 'O cominho reduz gases e fermetação no cólon, combatendo o estufamento "Endo Belly".',
    imageTheme: 'carrots'
  },
  {
    id: 'rec-5',
    title: 'Beterrabas Rústicas Grelhadas com Tomilho e Zimbro',
    category: 'raizes-grelhadas',
    prepTime: '25 min',
    servings: '2 porções',
    isEndoBellyFocus: false,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: false,
    ingredients: [
      '2 beterrabas médias descascadas e fatiadas',
      '1 colher de sopa de azeite extra virgem',
      '1 colher de chá de vinagre de maçã não filtrado',
      'Ramos de tomilho fresco e sal rosa'
    ],
    instructions: [
      'Cozinhe levemente as fatias de beterraba no vapor por 8 minutos para amolecer.',
      'Em uma frigideira bem quente, adicione o azeite e sele as fatias de beterraba.',
      'Respinguinho o vinagre de maçã para desglaçar e adicione o tomilho.',
      'Deixe grelhar até formar marcações douradas.'
    ],
    antiInflammatoryBenefits: 'Antocianinas e nitratos naturais favorecem a microcirculação na zona pélvica e ajudam a desintoxicar estrogênio em excesso no fígado.',
    imageTheme: 'beetroot'
  },
  {
    id: 'rec-6',
    title: 'Inhame Supremo Grelhado com Ervas Finas e Açafrão',
    category: 'raizes-grelhadas',
    prepTime: '20 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '3 inhames médios cozidos e cortados em rodelas',
      '1 colher de sopa de azeite de oliva',
      '1 colher de chá de açafrão da terra (cúrcuma)',
      'Ervas finas desidratadas (manjerona, manjericão, orégano)',
      'Sal marinho'
    ],
    instructions: [
      'Cozinhe o inhame com casca, descasque e corte em rodelas de 1cm.',
      'Passe as rodelas no azeite temperado com açafrão e ervas finas.',
      'Grelhe em uma grelha ou frigideira bem quente por 3 minutos de cada lado.',
      'Sirva quentinho.'
    ],
    antiInflammatoryBenefits: 'O inhame contém diosgenina, fitoestrógeno benéfico que auxilia no equilíbrio do ciclo menstrual e depuração intestinal.',
    imageTheme: 'yam'
  },
  {
    id: 'rec-7',
    title: 'Zucchini e Abobrinha Amarela Grelhada com Alho e Azeitonas',
    category: 'raizes-grelhadas',
    prepTime: '15 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 abobrinha verde e 1 abobrinha amarela fatiadas na longitudinal',
      '1 colher de sopa de azeite de oliva',
      '4 azeitonas pretas picadas sem caroço',
      'Orégano e sal marinho'
    ],
    instructions: [
      'Pincele as fatias de abobrinha com azeite e polvilhe sal e orégano.',
      'Aqueça uma frigideira grelhada e grelhe por 2 minutos de cada lado.',
      'Adicione as azeitonas pretas picadas no topo e sirva imediatamente.'
    ],
    antiInflammatoryBenefits: 'Vegetal ultra digestivo e hidratante, de altíssimo teor de potássio para expelir retenção de líquidos.',
    imageTheme: 'zucchini'
  },
  {
    id: 'rec-8',
    title: 'Vegetais de Raiz Confitados em Azeite e Pimenta Rosa',
    category: 'raizes-grelhadas',
    prepTime: '35 min',
    servings: '4 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: false,
    ingredients: [
      '1 batata doce roxa, 1 cenoura amarela e 1 inhame em cubos',
      '3 colheres de sopa de azeite de oliva extra virgem',
      '1 colher de chá de pimenta rosa em grãos levemente amassados',
      '1 ramo de alecrim e sal marinho'
    ],
    instructions: [
      'Corte todos os vegetais de raiz em cubos uniformes.',
      'Misture o azeite, pimenta rosa, alecrim e sal em um refratário.',
      'Asse em fogo baixo/médio (170°C) por 30 minutos para confitar suavemente.',
      'Sirva com textura aveludada e altamente reconfortante.'
    ],
    antiInflammatoryBenefits: 'Sabor rico com lipídios anti-inflamatórios do azeite, estimula motilidade intestinal suave sem irritar o cólon.',
    imageTheme: 'mixed-roots'
  },
  {
    id: 'rec-9',
    title: 'Chips de Mandioquinha Assada com Flor de Sal e Cúrcuma',
    category: 'raizes-grelhadas',
    prepTime: '20 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '2 mandioquinhas (batata baroa) grandes fatiadas bem finas',
      '1 colher de sopa de azeite de oliva',
      '1/2 colher de chá de cúrcuma',
      'Flor de sal a gosto'
    ],
    instructions: [
      'Fatie as mandioquinhas em lâminas bem finas usando mandoline ou faca afiada.',
      'Seque com papel toalha.',
      'Envolva suavemente com o azeite e a cúrcuma.',
      'Disponha em camada única em assadeira com papel manteiga.',
      'Asse por 15 minutos a 190°C virando na metade do tempo até ficarem crocantes.'
    ],
    antiInflammatoryBenefits: 'Substituto crocante aos snacks ultraprocessados, fácil digestão e saciedade prolongada.',
    imageTheme: 'chips'
  },
  {
    id: 'rec-10',
    title: 'Mix de Raízes Douradas com Sementes de Abóbora Crocantes',
    category: 'raizes-grelhadas',
    prepTime: '25 min',
    servings: '3 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 xícara de batata doce em rodelas, 1 xícara de cenoura em tiras, 1 xícara de abóbora em cubos',
      '2 colheres de sopa de sementes de abóbora ativadas',
      '1 colher de sopa de azeite de oliva extra virgem',
      '1 colher de chá de açafrão da terra e sal rosa'
    ],
    instructions: [
      'Grelhe as raízes na frigideira com azeite e açafrão até dourarem.',
      'Toste as sementes de abóbora à parte em uma frigideira seca por 2 minutos.',
      'Misture tudo ao servir e aprecie a textura crocante e macia.'
    ],
    antiInflammatoryBenefits: 'Rico em zinco e magnésio das sementes de abóbora, cruciais na regulação da dor menstrual.',
    imageTheme: 'golden-roots'
  },

  // --- CATEGORIA: CAFÉ DA MANHÃ (10 RECEITAS) ---
  {
    id: 'rec-11',
    title: 'Pão de Amêndoas e Polvilho Doce de Frigideira (Sem Glúten e Sem Lactose)',
    category: 'cafe',
    prepTime: '10 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 ovo orgânico',
      '2 colheres de sopa de farinha de amêndoas',
      '1 colher de sopa de polvilho doce',
      '1 colher de chá de sementes de chia',
      '1 pitada de sal marinho e 1 colher de café de fermento químico'
    ],
    instructions: [
      'Em uma tigela pequena, bata o ovo com um garfo.',
      'Adicione a farinha de amêndoas, polvilho doce, chia e sal. Misture bem.',
      'Incorpore o fermento delicadamente.',
      'Despeje em uma frigideira pequena untada com fio de azeite ou óleo de coco.',
      'Tampe e cozinhe em fogo baixo por 3 minutos de cada lado até dourar.'
    ],
    antiInflammatoryBenefits: 'Zero glúten, rico em gorduras boas da amêndoa e mucilagem protetora de intestino da chia.',
    imageTheme: 'almond-bread'
  },
  {
    id: 'rec-12',
    title: 'Panqueca Funcional de Bananas com Aveia Certificada sem Glúten',
    category: 'cafe',
    prepTime: '12 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 banana madura amassada',
      '2 colheres de sopa de aveia em flocos finos certificada sem glúten',
      '1 ovo',
      '1/2 colher de chá de canela em pó do Ceilão',
      'Fio de mel puro ou pasta de amendoim sem açúcar para finalizar'
    ],
    instructions: [
      'Amasse bem a banana com o garfo.',
      'Misture o ovo, a aveia sem glúten e a canela até formar massa homogênea.',
      'Despeje porções na frigideira untada aquecida.',
      'Vire quando formar bolhas e doure o outro lado.'
    ],
    antiInflammatoryBenefits: 'A canela melhora a sensibilidade à insulina e a aveia sem glúten traz beta-glucanas para imunidade.',
    imageTheme: 'pancake'
  },
  {
    id: 'rec-13',
    title: 'Mingau de Aveia Sem Glúten com Leite de Coco e Frutas Vermelhas',
    category: 'cafe',
    prepTime: '10 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '3 colheres de sopa de aveia sem glúten',
      '150ml de leite vegetal de coco ou amêndoas',
      '1/2 colher de chá de extrato de baunilha natural',
      '1/2 xícara de frutas vermelhas (mirtilo, morango, amora)',
      '1 colher de chá de farinha de linhaça dourada'
    ],
    instructions: [
      'Leve ao fogo baixo a aveia sem glúten e o leite vegetal, mexendo sempre.',
      'Cozinhe por 5 minutos até engrossar e ficar cremoso.',
      'Adicione a baunilha e transfira para uma tigela.',
      'Decore com as frutas vermelhas antioxidantes e polvilhe a linhaça.'
    ],
    antiInflammatoryBenefits: 'Antioxidantes das frutas vermelhas combatem estresse oxidativo nas lesões endometrióticas.',
    imageTheme: 'porridge'
  },
  {
    id: 'rec-14',
    title: 'Omelete Ocre com Açafrão da Terra e Espinafre Orgânico',
    category: 'cafe',
    prepTime: '8 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '2 ovos orgânicos',
      '1 colher de chá cheia de cúrcuma pura em pó',
      '1 xícara de folhas frescas de espinafre picadas',
      '1 pitada de pimenta preta e sal marinho',
      'Azeite para untar'
    ],
    instructions: [
      'Bata os ovos com a cúrcuma, pimenta e sal.',
      'Refogue levemente o espinafre na frigideira com azeite por 1 minuto.',
      'Despeje os ovos batidos por cima do espinafre.',
      'Dobre ao meio quando as bordas estiverem firmes e sirva.'
    ],
    antiInflammatoryBenefits: 'Rico em folato, ferro de fácil assimilação e curcumina para ação analgésica.',
    imageTheme: 'omelette'
  },
  {
    id: 'rec-15',
    title: 'Crepioca de Polvilho Doce com Sementes de Chia',
    category: 'cafe',
    prepTime: '7 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de polvilho doce',
      '1 colher de chá de chia',
      'Sal rosa a gosto',
      'Recheio: pasta de gergelim (tahine) ou abacate fatiado'
    ],
    instructions: [
      'Bata o ovo com polvilho doce, chia e sal até dissolver completamente.',
      'Despeje na frigideira antiaderente levemente aquecida.',
      'Deixe dourar por 2 minutos de cada lado.',
      'Recheie com abacate ou tahine e dobre.'
    ],
    antiInflammatoryBenefits: 'Lanche leve sem lactose, com lipídios anti-inflamatórios do abacate/tahine.',
    imageTheme: 'crepioca'
  },
  {
    id: 'rec-16',
    title: 'Smoothie Cremoso de Abacate e Couve Anti-Inchaço',
    category: 'cafe',
    prepTime: '5 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1/4 de abacate maduro',
      '1 folha de couve sem o talo',
      '200ml de água de coco ou água filtrada',
      '1 rodelinha de gengibre fresco',
      'Suco de 1/2 limão'
    ],
    instructions: [
      'Bata todos os ingredientes no liquidificador até obter uma consistência ultra aveludada.',
      'Beba imediatamente sem coar para aproveitar todas as fibras.'
    ],
    antiInflammatoryBenefits: 'Glutationa do abacate e clorofila da couve estimulam a detox hepática de toxinas e estrogênios.',
    imageTheme: 'smoothie-green'
  },
  {
    id: 'rec-17',
    title: 'Waffle de Farinha de Amêndoas e Linhaça Dourada',
    category: 'cafe',
    prepTime: '15 min',
    servings: '2 waffles',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 xícara de farinha de amêndoas',
      '2 colheres de sopa de farinha de linhaça dourada',
      '2 ovos',
      '1/2 xícara de leite vegetal',
      '1 colher de chá de fermento'
    ],
    instructions: [
      'Misture os secos em uma tigela.',
      'Adicione os ovos e leite vegetal mexendo com fouet.',
      'Despeje na máquina de waffle ou frigideira antiaderente.',
      'Sirva com morangos frescos picados.'
    ],
    antiInflammatoryBenefits: 'Baixo índice glicêmico e rico em ômega-3 vegetal (ALA) da linhaça.',
    imageTheme: 'waffle'
  },
  {
    id: 'rec-18',
    title: 'Pãozinho de Frigideira de Batata Doce e Polvilho',
    category: 'cafe',
    prepTime: '12 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '2 colheres de sopa de purê de batata doce',
      '1 colher de sopa de polvilho doce',
      '1 colher de sopa de polvilho azedo',
      '1 colher de sopa de azeite',
      'Pitada de sal marinho'
    ],
    instructions: [
      'Misture o purê de batata doce com os polvilhos, azeite e sal até formar uma massinha.',
      'Molde um disco e coloque na frigideira untada.',
      'Tampe e doure por 4 minutos de cada lado em fogo bem baixo.'
    ],
    antiInflammatoryBenefits: 'Lanche aconchegante sem glúten que acalma a vontade de pão sem causar estufamento.',
    imageTheme: 'sweet-bread'
  },
  {
    id: 'rec-19',
    title: 'Golden Milk Bowl com Granola Caseira sem Glúten',
    category: 'cafe',
    prepTime: '10 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '150ml de leite de coco cremoso morno',
      '1 colher de chá de cúrcuma + 1/2 colher de chá de canela + pitada de pimenta preta',
      '3 colheres de sopa de granola de sementes (girassol, abóbora, amêndoa fatiada)',
      'Morango frescos fatiados'
    ],
    instructions: [
      'Misture as especiarias no leite de coco morno.',
      'Despeje em um bowl e cubra com a granola de sementes e morangos.'
    ],
    antiInflammatoryBenefits: 'Bebida terapêutica indiana milenar adaptada para desinflamar e acalmar o útero.',
    imageTheme: 'golden-bowl'
  },
  {
    id: 'rec-20',
    title: 'Bolo de Canela e Maçã sem Glúten em Caneca',
    category: 'cafe',
    prepTime: '5 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: false,
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de farinha de amêndoas',
      '1 colher de sopa de aveia sem glúten',
      '1/2 maçã ralada',
      '1 colher de chá de canela e 1 colher de café de fermento'
    ],
    instructions: [
      'Misture todos os ingredientes em uma caneca própria para micro-ondas.',
      'Aqueça em potência alta por 1 minuto e 30 segundos.',
      'Desenforme e sirva aquecido.'
    ],
    antiInflammatoryBenefits: 'Pectina da maçã protege o microbioma e a canela alivia sensação de letargia.',
    imageTheme: 'mug-cake'
  },

  // --- CATEGORIA: ALMOÇO E JANTAR (10 RECEITAS) ---
  {
    id: 'rec-21',
    title: 'Filé de Mignon Suíno / Peixe com Purê de Inhame e Cúrcuma',
    category: 'almoço-jantar',
    prepTime: '30 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '300g de filé de peixe branco ou filé suíno magro',
      '3 inhames médios cozidos e amassados',
      '1 colher de sopa de azeite extra virgem',
      '1 colher de chá de cúrcuma pura',
      'Ervas aromáticas (sálvia, alecrim, tomilho) e sal marinho'
    ],
    instructions: [
      'Tempere a proteína com ervas, sal e limão. Grelhe no azeite até dourar.',
      'Amasse o inhame cozido ainda quente com azeite, cúrcuma e sal até virar um purê aveludado.',
      'Sirva o purê de inhame ocre com a proteína e salada verde.'
    ],
    antiInflammatoryBenefits: 'Refeição altamente nutritiva, de facílima digestabilidade e rica em minerais desintoxicantes.',
    imageTheme: 'fish-yam'
  },
  {
    id: 'rec-22',
    title: 'Salmão Grelhado ao Forno com Crosta de Farinha de Amêndoas e Aspargos',
    category: 'almoço-jantar',
    prepTime: '25 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '2 postas de salmão fresco com pele',
      '2 colheres de sopa de farinha de amêndoas',
      '1 colher de chá de raspa de limão siciliano',
      '1 maço de aspargos frescos ou vagens delicadas',
      '1 colher de sopa de azeite extra virgem e sal marinho'
    ],
    instructions: [
      'Misture a farinha de amêndoas com as raspas de limão, azeite e sal para fazer a crosta.',
      'Pressione a mistura sobre o topo do salmão.',
      'Disponha em uma assadeira junto com os aspargos temperados.',
      'Asse por 15 minutos a 200°C.'
    ],
    antiInflammatoryBenefits: 'Altíssima concentração de ômega-3 EPA e DHA que inibem a produção de prostaglandinas inflamatórias (PGF2a) causadoras de dor.',
    imageTheme: 'salmon'
  },
  {
    id: 'rec-23',
    title: 'Escondidinho de Mandioquinha com Carne Desfiada e Ervas',
    category: 'almoço-jantar',
    prepTime: '35 min',
    servings: '3 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '400g de mandioquinha cozida e amassada',
      '250g de carne bovina magra desfiada e temperada com tomate e ervas',
      '1 colher de sopa de azeite extra virgem',
      'Sal rosa e noz-moscada'
    ],
    instructions: [
      'Amasse a mandioquinha com azeite, noz-moscada e sal.',
      'Em um refratário, faça uma camada de purê, adicione a carne desfiada e cubra com o restante do purê.',
      'Leve ao forno para gratinar por 15 minutos.'
    ],
    antiInflammatoryBenefits: 'Conforto estomacal absoluto sem lactose nem glúten, mantendo a digestão leve.',
    imageTheme: 'escondidinho'
  },
  {
    id: 'rec-24',
    title: 'Curry Suave de Abóbora Cabotiá e Grão-de-Bico com Leite de Coco',
    category: 'almoço-jantar',
    prepTime: '30 min',
    servings: '3 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: false,
    ingredients: [
      '2 xícaras de abóbora cabotiá em cubos',
      '1 xícara de grão-de-bico cozido sem pele',
      '200ml de leite de coco puro',
      '1 colher de sopa de pasta de curry suave ou curry em pó + cúrcuma',
      'Gengibre picado e coentro/salsinha fresca'
    ],
    instructions: [
      'Refogue o gengibre e o curry no azeite por 1 minuto.',
      'Adicione a abóbora em cubos e o grão de bico.',
      'Despeje o leite de coco e 1/2 xícara de água.',
      'Cozinhe em fogo baixo com a panela tampada por 20 minutos até a abóbora amaciar.',
      'Finalize com bastante coentro fresco.'
    ],
    antiInflammatoryBenefits: 'Especiarias orientais termogênicas e calmantes do trato gastrointestinal.',
    imageTheme: 'curry'
  },
  {
    id: 'rec-25',
    title: 'Salada Morna de Quinoa com Raízes Assadas e Sementes de Girassol',
    category: 'almoço-jantar',
    prepTime: '25 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 xícara de quinoa em grãos cozida',
      '1 xícara de batata doce e cenoura assadas em cubos',
      '2 colheres de sopa de sementes de girassol tostadas',
      'Folhas de rúcula fresca',
      'Molho: azeite, limão e açafrão'
    ],
    instructions: [
      'Misture a quinoa morna com as raízes assadas e a rúcula.',
      'Regue com o molho de azeite e limão.',
      'Polvilhe as sementes de girassol por cima antes de servir.'
    ],
    antiInflammatoryBenefits: 'Quinoa fornece aminoácidos completos e fitoquímicos sem irritantes de glúten.',
    imageTheme: 'quinoa-salad'
  },
  {
    id: 'rec-26',
    title: 'Moqueca Leve de Peixe com Leite de Coco e Pimentões Amarelos',
    category: 'almoço-jantar',
    prepTime: '30 min',
    servings: '3 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '400g de peixe branco em postas (namorado ou robalo)',
      '1 pimentão amarelo fatiado (mais leve que o vermelho/verde)',
      '2 tomates sem pele fatiados',
      '200ml de leite de coco',
      '1 colher de chá de azeite de dendê (opcional) e coentro'
    ],
    instructions: [
      'Monte camadas na panela: peixe, tomates, pimentão e coentro.',
      'Regue com o leite de coco e o dendê.',
      'Cozinhe em fogo baixo por 20 minutos com a panela tampada.',
      'Sirva com arroz de couve-flor ou arroz integral.'
    ],
    antiInflammatoryBenefits: 'Rica em triglicerídeos de cadeia média (TCM) do coco e proteínas de rápida digestão.',
    imageTheme: 'moqueca'
  },
  {
    id: 'rec-27',
    title: 'Frango Crocante Empanado em Farinha de Amêndoas com Zucchini',
    category: 'almoço-jantar',
    prepTime: '25 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '2 filés de peito de frango orgânico',
      '3 colheres de sopa de farinha de amêndoas',
      '1 colher de chá de ervas de provence e páprica',
      '1 ovo batido',
      '1 abobrinha grelhada para acompanhar'
    ],
    instructions: [
      'Passe os filés de frango no ovo e em seguida na mistura de farinha de amêndoas com temperos.',
      'Disponha em assadeira e asse por 20 minutos a 200°C virando na metade.',
      'Sirva crocante acompanhado de abobrinha grelhada.'
    ],
    antiInflammatoryBenefits: 'Empanado sem farinhas refinadas que elevam a glicemia e geram processos inflamatórios.',
    imageTheme: 'chicken-almond'
  },
  {
    id: 'rec-28',
    title: 'Risoto de Arroz Integral com Cogumelos Paris e Açafrão',
    category: 'almoço-jantar',
    prepTime: '35 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 xícara de arroz integral ou cateto cozido',
      '150g de cogumelos paris ou shimeji fatiados',
      '1 colher de chá de cúrcuma/açafrão da terra',
      '1 colher de sopa de azeite extra virgem',
      'Cebolinha fresca e sal marinho'
    ],
    instructions: [
      'Salteie os cogumelos no azeite com sal por 5 minutos.',
      'Adicione o arroz integral cozido e o açafrão diluído em 1/2 xícara de caldo de legumes caseiro.',
      'Mexa em fogo baixo até ficar cremoso.',
      'Finalize com cebolinha fresca.'
    ],
    antiInflammatoryBenefits: 'Beta-glucanas dos cogumelos modulam a resposta imunológica contra focos endometrióticos.',
    imageTheme: 'risotto'
  },
  {
    id: 'rec-29',
    title: 'Bolinho Assado de Batata Doce com Atum e Sementes de Chia',
    category: 'almoço-jantar',
    prepTime: '20 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 xícara de purê de batata doce',
      '1 lata de atum em azeite de oliva ou água escorrido',
      '1 colher de sopa de chia',
      'Salsinha picada e sal rosa'
    ],
    instructions: [
      'Misture a batata doce, atum, chia e salsinha até homogeneizar.',
      'Molde bolinhos com as mãos.',
      'Asse em forno ou airfryer por 15 minutos a 200°C até dourarem.'
    ],
    antiInflammatoryBenefits: 'Combinação prática de proteínas magras e carboidratos de absorção lenta.',
    imageTheme: 'tuna-cake'
  },
  {
    id: 'rec-30',
    title: 'Hambúrguer de Lentilha com Ervas e Vegetais Grelhados',
    category: 'almoço-jantar',
    prepTime: '25 min',
    servings: '3 hambúrgueres',
    isEndoBellyFocus: false,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: false,
    ingredients: [
      '1 xícara de lentilha cozida e escorrida',
      '2 colheres de sopa de farinha de aveia sem glúten',
      '1 colher de chá de cominho e páprica doce',
      'Salsinha picada e sal marinho'
    ],
    instructions: [
      'Amasse parte das lentilhas com o garfo.',
      'Misture a farinha de aveia sem glúten e temperos.',
      'Molde hambúrgueres e grelhe no azeite por 4 minutos de cada lado.'
    ],
    antiInflammatoryBenefits: 'Proteína vegetal leve rica em fibras solúveis para o trânsito intestinal.',
    imageTheme: 'lentil-burger'
  },

  // --- CATEGORIA: LANCHES & ACOMPANHAMENTOS (10 RECEITAS) ---
  {
    id: 'rec-31',
    title: 'Torta Salgada de Farinha de Amêndoas e Abobrinha sem Lactose',
    category: 'lanches',
    prepTime: '30 min',
    servings: '4 fatias',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '3 ovos',
      '1 xícara de farinha de amêndoas',
      '1/2 xícara de leite vegetal',
      '1 abobrinha pequena ralada',
      '1 colher de sopa de fermento e ervas finas'
    ],
    instructions: [
      'Bata no liquidificador os ovos, leite vegetal, azeite e farinha de amêndoas.',
      'Misture a abobrinha ralada e o fermento com uma colher.',
      'Despeje em fôrma untada e asse por 25 minutos a 180°C.'
    ],
    antiInflammatoryBenefits: 'Lanche fofinho, livre de farinha de trigo, excelente para congelar em porções.',
    imageTheme: 'savory-pie'
  },
  {
    id: 'rec-32',
    title: 'Crackers Crocantes de Chia, Linhaça e Polvilho Doce',
    category: 'lanches',
    prepTime: '20 min',
    servings: '4 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1/2 xícara de sementes de chia',
      '1/2 xícara de linhaça dourada',
      '2 colheres de sopa de polvilho doce',
      '1/2 xícara de água',
      'Sal rosa e orégano'
    ],
    instructions: [
      'Misture as sementes, polvilho, sal e água em uma tigela.',
      'Deixe descansar por 10 minutos até formar um gel denso.',
      'Espalhe bem fino em um tabuleiro com papel manteiga.',
      'Asse por 20 minutos a 180°C até ficar bem crocante. Quebre em pedaços.'
    ],
    antiInflammatoryBenefits: 'Altíssimo teor de fibras formadoras de gel que limpam o intestino sem causar gases.',
    imageTheme: 'crackers'
  },
  {
    id: 'rec-33',
    title: 'Hummus Cremoso de Cenoura Assada com Cúrcuma',
    category: 'lanches',
    prepTime: '20 min',
    servings: '4 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '2 cenouras médias assadas com azeite',
      '1 xícara de grão-de-bico cozido sem pele',
      '2 colheres de sopa de tahine (pasta de gergelim)',
      '1 colher de chá de cúrcuma e suco de 1 limão'
    ],
    instructions: [
      'Bata as cenouras assadas, grão-de-bico, tahine, cúrcuma e limão no processador.',
      'Adicione azeite aos poucos até ficar super cremoso.',
      'Sirva com palitos de pepino ou cenoura crua.'
    ],
    antiInflammatoryBenefits: 'Rico em cálcio e magnésio do gergelim para conforto muscular pélvico.',
    imageTheme: 'hummus'
  },
  {
    id: 'rec-34',
    title: 'Muffin Salgado de Legumes com Polvilho Doce',
    category: 'lanches',
    prepTime: '25 min',
    servings: '6 muffins',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '2 ovos',
      '1/2 xícara de polvilho doce + 1/2 xícara de aveia sem glúten',
      '1/2 xícara de legumes picadinhos (cenoura, abobrinha, milho)',
      '1 colher de chá de fermento em pó e sal'
    ],
    instructions: [
      'Misture os ovos, farinhas e água até homogeneizar.',
      'Incorpore os legumes picados e o fermento.',
      'Distribua em forminhas de silicone e asse por 20 minutos a 180°C.'
    ],
    antiInflammatoryBenefits: 'Praticidade para carregar na bolsa durante crises de fadiga.',
    imageTheme: 'muffin-savory'
  },
  {
    id: 'rec-35',
    title: 'Guacamole Fresco com Chips de Mandioca Assada',
    category: 'lanches',
    prepTime: '15 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 abacate maduro amassado',
      'Suco de 1 limão',
      '1 tomate pequeno picado sem sementes',
      'Coentro fresco e sal marinho',
      'Chips de mandioca assada sem glúten para acompanhar'
    ],
    instructions: [
      'Amasse o abacate com o garfo deixando pedacinhos.',
      'Misture o limão, tomate, coentro e sal.',
      'Sirva imediatamente acompanhado dos chips de mandioca.'
    ],
    antiInflammatoryBenefits: 'Gorduras monoinsaturadas do abacate reduzem sinalizadores inflamatórios no corpo.',
    imageTheme: 'guacamole'
  },
  {
    id: 'rec-36',
    title: 'Pastinha de Semente de Girassol com Ervas de Provence',
    category: 'lanches',
    prepTime: '15 min',
    servings: '4 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 xícara de sementes de girassol deixadas de molho por 4 horas',
      '2 colheres de sopa de azeite de oliva extra virgem',
      '1 colher de sopa de suco de limão',
      'Ervas de provence e sal marinho'
    ],
    instructions: [
      'Escorra a água do molho das sementes de girassol.',
      'Bata no processador com azeite, limão, ervas e sal até virar uma pastinha branca.',
      'Conserve na geladeira por até 5 dias.'
    ],
    antiInflammatoryBenefits: 'Substituto perfeito do requeijão tradicional sem caseína nem lactose.',
    imageTheme: 'sunflower-spread'
  },
  {
    id: 'rec-37',
    title: 'Castanhas e Sementes Ativadas Assadas com Páprica e Açafrão',
    category: 'lanches',
    prepTime: '15 min',
    servings: '4 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1/2 xícara de amêndoas + 1/2 xícara de sementes de abóbora',
      '1 colher de chá de páprica doce e 1 colher de chá de cúrcuma',
      '1 colher de chá de azeite de oliva e flor de sal'
    ],
    instructions: [
      'Misture as castanhas com azeite e temperos.',
      'Espalhe em assadeira e leve ao forno baixo por 10 minutos para tostar levemente.'
    ],
    antiInflammatoryBenefits: 'Snaack rico em selênio e zinco para imunidade e reparo celular.',
    imageTheme: 'nuts-seeds'
  },
  {
    id: 'rec-38',
    title: 'Pão de Beijo (Polvilho sem Queijo - Vegano e sem Lactose)',
    category: 'lanches',
    prepTime: '25 min',
    servings: '12 pãezinhos',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 xícara de purê de batata baroa ou mandioca quentinho',
      '1 xícara de polvilho doce',
      '1/2 xícara de polvilho azedo',
      '1/4 de xícara de azeite de oliva e sal marinho'
    ],
    instructions: [
      'Misture o purê quente com os polvilhos, azeite e sal até soltar das mãos.',
      'Faça bolinhas pequeninas.',
      'Asse por 20 minutos a 200°C até pipocarem e dourarem.'
    ],
    antiInflammatoryBenefits: 'Sabor de pão de queijo quentinho sem irritação láctea.',
    imageTheme: 'pao-beijo'
  },
  {
    id: 'rec-39',
    title: 'Bolinho de Canela em Caneca com Farinha de Amêndoas',
    category: 'lanches',
    prepTime: '5 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 ovo',
      '2 colheres de sopa de farinha de amêndoas',
      '1 colher de sopa de óleo de coco',
      '1 colher de chá de canela em pó e adoçante natural (stevia ou eritritol)'
    ],
    instructions: [
      'Misture os ingredientes na caneca.',
      'Leve ao micro-ondas por 1 minuto e 20 segundos.'
    ],
    antiInflammatoryBenefits: 'Conforto rápido para momentos de TPM sem picos inflamatórios.',
    imageTheme: 'cinnamon-mug'
  },
  {
    id: 'rec-40',
    title: 'Chips de Abobrinha Assada com Azeite de Oliva e Ervas',
    category: 'lanches',
    prepTime: '20 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '2 abobrinhas fatiadas fininhas em rodelas',
      '1 colher de sopa de azeite extra virgem',
      'Sal marinho e tomilho seco'
    ],
    instructions: [
      'Seque bem as fatias de abobrinha com papel toalha.',
      'Pincele azeite e sal.',
      'Asse a 160°C por 20 minutos até ficarem crocantes.'
    ],
    antiInflammatoryBenefits: 'Crocância saudável zero carboidrato refinado.',
    imageTheme: 'zucchini-chips'
  },

  // --- CATEGORIA: CHÁS & BEBIDAS TERAPÊUTICAS (5 RECEITAS) ---
  {
    id: 'rec-41',
    title: 'Chá Anti-inchaço de Gengibre, Cúrcuma e Limão',
    category: 'bebidas-chas',
    prepTime: '10 min',
    servings: '2 xícaras',
    isEndoBellyFocus: true,
    isRootVegetables: true,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '500ml de água filtrada',
      '1 colher de sobremesa de gengibre fresco fatiado',
      '1 colher de chá de cúrcuma em pó ou ralada',
      'Suco de 1/2 limão e 1 pitada minúscula de pimenta preta'
    ],
    instructions: [
      'Ferva a água com o gengibre por 5 minutos.',
      'Desligue o fogo, adicione a cúrcuma e a pimenta.',
      'Tampe e abafe por 5 minutos.',
      'Coa, adicione o suco de limão e tome morno ao longo do dia.'
    ],
    antiInflammatoryBenefits: 'Infusão máxima para alívio imediato do Endo Belly e dismenorreia.',
    imageTheme: 'tea-ginger'
  },
  {
    id: 'rec-42',
    title: 'Infusão Acalmante de Camomila, Erva-Doce e Anis Estrelado',
    category: 'bebidas-chas',
    prepTime: '8 min',
    servings: '1 xícara',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '250ml de água fervente',
      '1 colher de sopa de flores de camomila secas',
      '1 colher de chá de sementes de erva-doce',
      '1 estrela de anis'
    ],
    instructions: [
      'Despeje a água fervente sobre a camomila, erva-doce e anis.',
      'Tampe e abafe por 10 minutos.',
      'Beba à noite antes de dormir.'
    ],
    antiInflammatoryBenefits: 'Acalma espasmos musculares no trato gastrointestinal e estimula sono reparador.',
    imageTheme: 'tea-chamomile'
  },
  {
    id: 'rec-43',
    title: 'Suco Drenante com Abacaxi, Hortelã e Sementes de Chia',
    category: 'bebidas-chas',
    prepTime: '5 min',
    servings: '1 copo',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: false,
    ingredients: [
      '2 fatias de abacaxi maduro',
      'Ramos de hortelã fresca',
      '200ml de água gelada',
      '1 colher de sopa de chia'
    ],
    instructions: [
      'Bata tudo no liquidificador com pedra de gelo.',
      'Consuma sem coar.'
    ],
    antiInflammatoryBenefits: 'A bromelina do abacaxi é uma enzima proteolítica que reduz inchaços e inflamações.',
    imageTheme: 'pineapple-juice'
  },
  {
    id: 'rec-44',
    title: 'Golden Milk Termogênico com Leite de Coco e Canela',
    category: 'bebidas-chas',
    prepTime: '7 min',
    servings: '1 xícara',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '200ml de leite de coco aquecido',
      '1 colher de chá de cúrcuma',
      '1/2 colher de chá de canela em pó',
      '1 pitada de pimenta preta e 1 colher de café de óleo de coco'
    ],
    instructions: [
      'Aqueça o leite de coco com as especiarias até quase ferver.',
      'Misture com um espumador de leite para criar espuma cremosa.'
    ],
    antiInflammatoryBenefits: 'Rritual de ouro para momentos de crise de dor e estresse pélvico.',
    imageTheme: 'golden-milk'
  },
  {
    id: 'rec-45',
    title: 'Suco Drenante de Melancia com Gengibre e Sementes de Abóbora',
    category: 'bebidas-chas',
    prepTime: '5 min',
    servings: '1 copo',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: false,
    ingredients: [
      '2 xícaras de melancia picada com sementes',
      '1 pedaço pequeno de gengibre fresco',
      'Suco de 1/2 limão'
    ],
    instructions: [
      'Bata no liquidificador e sirva com pedras de gelo.'
    ],
    antiInflammatoryBenefits: 'Licitropina e citrulina da melancia auxiliam na drenagem de resíduos metabólicos.',
    imageTheme: 'watermelon-juice'
  },

  // --- CATEGORIA: DOCES FUNCIONAIS (5 RECEITAS) ---
  {
    id: 'rec-46',
    title: 'Mousse Cremoso de Cacau 100% com Leite de Coco e Abacate',
    category: 'doces-funcionais',
    prepTime: '10 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1 abacate maduro médio',
      '3 colheres de sopa de cacau em pó 100%',
      '3 colheres de sopa de leite de coco cremoso',
      '2 colheres de sopa de mel ou adoçante natural (eritritol/stevia)',
      '1 pitada de flor de sal'
    ],
    instructions: [
      'Bata todos os ingredientes no processador até ficar extremamente aveludado.',
      'Leve à geladeira por 30 minutos antes de servir.'
    ],
    antiInflammatoryBenefits: 'Cacau 100% é superalimento rico em magnésio e flavonoides para o humor e cólicas.',
    imageTheme: 'mousse-chocolate'
  },
  {
    id: 'rec-47',
    title: 'Trufas de Tâmara com Cacau 100% e Amêndoas',
    category: 'doces-funcionais',
    prepTime: '15 min',
    servings: '8 trufas',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: false,
    ingredients: [
      '1 xícara de tâmaras secas sem caroço (deixadas de molho em água morna)',
      '2 colheres de sopa de cacau em pó 100%',
      '1/2 xícara de farinha de amêndoas',
      'Cacau ou coco ralado sem açúcar para passar as trufas'
    ],
    instructions: [
      'Process os ingredientes até formar uma pasta moldável.',
      'Faça bolinhas e passe no cacau em pó.',
      'Mantenha na geladeira.'
    ],
    antiInflammatoryBenefits: 'Doce natural sem açúcar refinado que causa picos de insulínicos.',
    imageTheme: 'truffles'
  },
  {
    id: 'rec-48',
    title: 'Sorvete Natural de Banana Congelada com Morango',
    category: 'doces-funcionais',
    prepTime: '5 min',
    servings: '2 porções',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '2 bananas bem maduras fatiadas e congeladas',
      '1 xícara de morangos congelados',
      '1 colher de sopa de leite de coco'
    ],
    instructions: [
      'Bata no processador em alta velocidade até virar creme cremoso de sorvete.'
    ],
    antiInflammatoryBenefits: 'Sobremesa refrescante zero lácteos e zero aditivos químicos.',
    imageTheme: 'banana-ice'
  },
  {
    id: 'rec-49',
    title: 'Picolé Terapêutico de Frutas Vermelhas e Chá de Hibisco',
    category: 'doces-funcionais',
    prepTime: '10 min',
    servings: '4 picolés',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '200ml de infusão concentrada de chá de hibisco',
      '1 xícara de frutas vermelhas frescas',
      'Suco de 1/2 limão e mel a gosto'
    ],
    instructions: [
      'Misture o chá com frutas e limão e despeje nas forminhas de picolé.',
      'Congele por 4 horas.'
    ],
    antiInflammatoryBenefits: 'Ação diurética e protetora vascular.',
    imageTheme: 'popsicle'
  },
  {
    id: 'rec-50',
    title: 'Creme de Papaya com Sementes de Linhaça Dourada',
    category: 'doces-funcionais',
    prepTime: '5 min',
    servings: '1 porção',
    isEndoBellyFocus: true,
    isRootVegetables: false,
    isGlutenFree: true,
    isLactoseFree: true,
    isLowFodmap: true,
    ingredients: [
      '1/2 mamão papaya maduro',
      '2 colheres de sopa de leite de amêndoas bem gelado',
      '1 colher de chá de farinha de linhaça dourada'
    ],
    instructions: [
      'Bata o mamão papaya com o leite de amêndoas.',
      'Sirva na taça e polvilhe a farinha de linhaça dourada.'
    ],
    antiInflammatoryBenefits: 'Papaína reduz a rigidez intestinal e melhora o trânsito digestivo.',
    imageTheme: 'papaya-cream'
  }
];
