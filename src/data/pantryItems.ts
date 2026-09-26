import { PantryItem } from '../types';

export const PANTRY_ITEMS: PantryItem[] = [
  {
    id: 'pan-1',
    name: 'Farinha de Amêndoas',
    category: 'farinhas-polvilhos',
    description: 'Farinha de baixo carboidrato rica em vitamina E, magnésio e gorduras saudáveis.',
    whyEssential: 'Substituto ideal da farinha de trigo para preparar pães, bolos e tortas sem glúten nem lactose sem elevar a glicemia.',
    substitutionTip: 'Pode ser usada pura ou misturada com aveia certificada sem glúten para dar estrutura a massas de torta e bolos fofos.'
  },
  {
    id: 'pan-2',
    name: 'Aveia Certificada Sem Glúten',
    category: 'farinhas-polvilhos',
    description: 'Aveia processada em maquinário exclusivo livre de contaminação cruzada por trigo.',
    whyEssential: 'Fonte de beta-glucanas que alimentam a microbiota intestinal saudável e ajudam a eliminar excesso de estrogênio.',
    substitutionTip: 'Use em flocos finos para mingaus e panquecas, ou bata para fazer farinha instantânea.'
  },
  {
    id: 'pan-3',
    name: 'Polvilho Doce',
    category: 'farinhas-polvilhos',
    description: 'Fécula de mandioca extrafina, naturalmente sem glúten e sem alérgenos.',
    whyEssential: 'Garante a elasticidade e maciez perfeita em pães de frigideira, crepiocas e biscoitos sem glúten.',
    substitutionTip: 'Combine com farinha de amêndoas para fazer pães macios sem adição de lácteos.'
  },
  {
    id: 'pan-4',
    name: 'Polvilho Azedo',
    category: 'farinhas-polvilhos',
    description: 'Mandioca fermentada e seca que confere expansão e textura aerada.',
    whyEssential: 'Indispensável para preparar o pão de beijo (versão vegana sem lactose do pão de queijo) e biscoitos crocantes.',
    substitutionTip: 'Misture meio a meio com polvilho doce para crocância externa e miolo puxa-puxa.'
  },
  {
    id: 'pan-5',
    name: 'Farinha de Linhaça Dourada',
    category: 'farinhas-polvilhos',
    description: 'Semente moída rica em lignanas e ácido alfa-linolênico (Ômega-3 vegetal).',
    whyEssential: 'Modula o metabolismo dos estrogênios e atua como substituto do ovo (ovo de linhaça) em receitas veganas.',
    substitutionTip: 'Misture 1 colher de sopa de linhaça com 3 colheres de sopa de água e aguarde 10 minutos para formar gel ligante.'
  },
  {
    id: 'pan-6',
    name: 'Psyllium em Flocos',
    category: 'farinhas-polvilhos',
    description: 'Fibra solúvel purificada extraída da casca da planta Plantago ovata.',
    whyEssential: 'Absorve água no intestino formando um gel higiênico que alivia tanto a constipação quanto o inchaço abdominal.',
    substitutionTip: 'Adicione 1 colher de chá em massas de pão sem glúten para dar liga e maciez duradoura.'
  },
  {
    id: 'pan-7',
    name: 'Farinha de Arroz Integral',
    category: 'farinhas-polvilhos',
    description: 'Farinha neutra rica em vitaminas do complexo B e minerais.',
    whyEssential: 'Base leve e econômica para estruturar bolos e tortas salgadas sem fermentação que cause gases.',
    substitutionTip: 'Combine com fécula de batata e polvilho doce para uma mistura para bolos sem glúten versátil.'
  },
  {
    id: 'pan-8',
    name: 'Cacau em Pó 100% Puro',
    category: 'farinhas-polvilhos',
    description: 'Cacau puro sem adição de açúcares, gorduras hidrogenadas nem leite.',
    whyEssential: 'Riquíssimo em flavonoides e magnésio que relaxam a musculatura uterina e melhoram o humor na fase lútea.',
    substitutionTip: 'Use em mousses de abacate, vitaminas e bolos funcionais de caneca.'
  },
  {
    id: 'pan-9',
    name: 'Cúrcuma (Açafrão da Terra) Pura',
    category: 'especiarias',
    description: 'Raiz ocre de potente ação anti-inflamatória e analgésica natural.',
    whyEssential: 'Seu princípio ativo, a curcumina, inibe citocinas inflamatórias (TNF-alfa e IL-6) responsáveis pelas dores da endometriose.',
    substitutionTip: 'Sempre consuma associada a uma pitada de pimenta preta e azeite/óleo de coco para aumentar a absorção em 2000%.'
  },
  {
    id: 'pan-10',
    name: 'Gengibre Fresco e em Pó',
    category: 'especiarias',
    description: 'Rizoma picante e aromático com gingeróis antieméticos e anti-inflamatórios.',
    whyEssential: 'Alivia náuseas menstruais, ativa a digestão lenta e reduz o estufamento Endo Belly em minutos.',
    substitutionTip: 'Faça chá de gengibre morno após as refeições principais ou adicione raspas em sucos e vegetais grelhados.'
  },
  {
    id: 'pan-11',
    name: 'Azeite de Oliva Extra Virgem (Prensado a Frio)',
    category: 'oleos-gorduras',
    description: 'Gordura monoinsaturada rica em oleocanthal, composto com ação similar ao ibuprofeno.',
    whyEssential: 'Espinha dorsal da dieta anti-inflamatória, protege o revestimento intestinal e reduz marcadores de dor.',
    substitutionTip: 'Use abundante sobre vegetais grelhados, saladas e na finalização de pratos quentes.'
  },
  {
    id: 'pan-12',
    name: 'Leite Vegetal de Coco ou Amêndoas',
    category: 'leites-adoçantes',
    description: 'Bebida vegetal pura sem lactose, proteína do leite (caseína) nem açúcares adicionados.',
    whyEssential: 'Substituto perfeito do leite de vaca tradicional que causa inflamação sistêmica e gases em quem tem endometriose.',
    substitutionTip: 'Use em mingaus, molhos brancos funcionais, vitaminas e bebidas quentes.'
  },
  {
    id: 'pan-13',
    name: 'Sementes de Abóbora Ativadas',
    category: 'sementes-graos',
    description: 'Sementes crocantes ricas em zinco, magnésio e triptofano.',
    whyEssential: 'O zinco atua no reparo tecidual e na modulação imunológica contra os focos endometrióticos.',
    substitutionTip: 'Toste levemente na frigideira e polvilhe em sopas, saladas e refeições de vegetais assados.'
  },
  {
    id: 'pan-14',
    name: 'Sementes de Chia',
    category: 'sementes-graos',
    description: 'Pequenas sementes com altíssima capacidade de retenção de água e mucilagem.',
    whyEssential: 'Ajudam a formar fezes macias, prevenindo a dor ao evacuar nos períodos menstruais.',
    substitutionTip: 'Prepare "pudim de chia" deixando 2 colheres de chia em 100ml de leite vegetal durante a noite.'
  },
  {
    id: 'pan-15',
    name: 'Sementes de Girassol',
    category: 'sementes-graos',
    description: 'Fonte concentrada de Vitamina E natural e fitoesteróis anti-inflamatórios.',
    whyEssential: 'Combate o estresse oxidativo tecidual na cavidade pélvica.',
    substitutionTip: 'Bata com azeite, limão e ervas para criar uma pastinha salgada sem lácteos.'
  },
  {
    id: 'pan-16',
    name: 'Castanha-do-Pará e Amêndoas',
    category: 'sementes-graos',
    description: 'Oleaginosas ricas em selênio orgânico e ácidos graxos insaturados.',
    whyEssential: '1 a 2 castanhas-do-pará por dia fornecem 100% da necessidade diária de selênio para a tireoide e imunidade.',
    substitutionTip: 'Consuma como snack prático entre as refeições.'
  },
  {
    id: 'pan-17',
    name: 'Sal Marinho Integral / Flor de Sal',
    category: 'especiarias',
    description: 'Sal não refinado preservando mais de 80 minerais traço como magnésio e potássio.',
    whyEssential: 'Ao contrário do sal refinado branco, não provoca retenção hídrica tóxica.',
    substitutionTip: 'Use com moderação para realçar o sabor natural dos vegetais de raiz.'
  },
  {
    id: 'pan-18',
    name: 'Óleo de Coco Extra Virgem',
    category: 'oleos-gorduras',
    description: 'Gordura rica em ácido láurico e triglicerídeos de cadeia média (TCM).',
    whyEssential: 'Possui ação antifúngica e antibacteriana no trato gastrointestinal, controlando disbiose.',
    substitutionTip: 'Ideal para grelhar panquecas, preparar doces funcionais e temperar cafés/chás.'
  },
  {
    id: 'pan-19',
    name: 'Pimenta Preta Moída na Hora',
    category: 'especiarias',
    description: 'Contém piperina, alcaloide natural que potencializa a absorção da curcumina.',
    whyEssential: 'Sem a pimenta preta, a absorção da cúrcuma no intestino é limitada.',
    substitutionTip: 'Adicione sempre uma pitada nos pratos onde usar cúrcuma ou açafrão.'
  },
  {
    id: 'pan-20',
    name: 'Orégano, Alecrim e Tomilho Desidratados',
    category: 'especiarias',
    description: 'Ervas aromáticas ricas em ácido rosmarínico e carvacrol.',
    whyEssential: 'Propriedades antiespasmódicas e antimicrobianas que reduzem o inchaço e cólicas abdominais.',
    substitutionTip: 'Polvilhe generosamente sobre batata-doce, abóbora e mandioca antes de assar.'
  },
  {
    id: 'pan-21',
    name: 'Canela do Ceilão em Pó',
    category: 'especiarias',
    description: 'A verdadeira canela pura, com baixo teor de coumarina.',
    whyEssential: 'Melhora a sensibilidade à insulina, reduz o desejo por doces e reduz o fluxo menstrual excessivo.',
    substitutionTip: 'Adicione no café, frutas cozidas, mingaus de aveia e receitas em caneca.'
  },
  {
    id: 'pan-22',
    name: 'Vinagre de Maçã Orgânico Não Filtrado',
    category: 'leites-adoçantes',
    description: 'Vinagre vivo fermentado mantendo a "mãe" (bactérias probióticas e enzimas).',
    whyEssential: 'Melhora o pH estomacal e a digestão de proteínas, evitando que alimentos cheguem mal digeridos ao cólon.',
    substitutionTip: 'Tome 1 colher de chá diluída em 50ml de água morna 10 minutos antes do almoço.'
  },
  {
    id: 'pan-23',
    name: 'Quinoa em Grãos ou Flocos',
    category: 'sementes-graos',
    description: 'Pseudocereal andino naturalmente sem glúten com perfil completo de aminoácidos.',
    whyEssential: 'Substituto nutritivo para o cuscuz tradicional de trigo ou macarrão comum.',
    substitutionTip: 'Cozinhe em água com sal e cúrcuma por 12 minutos e use em saladas mornas.'
  },
  {
    id: 'pan-24',
    name: 'Tâmaras Secas Orgânicas',
    category: 'leites-adoçantes',
    description: 'Fruta desidratada densa em potássio, fibras e doçura natural.',
    whyEssential: 'Adoçante inteiro e natural para sobremesas funcionais sem açúcar refinado.',
    substitutionTip: 'Processe com cacau 100% e farinha de amêndoas para fazer trufas anti-inflamatórias.'
  },
  {
    id: 'pan-25',
    name: 'Páprica Doce e Defumada',
    category: 'especiarias',
    description: 'Pimentão vermelho desidratado e moído rico em capsaicina suave e vitamina C.',
    whyEssential: 'Confera sabor rico e cor atraente aos pratos sem necessidade de caldos industrializados com MSG.',
    substitutionTip: 'Use para temperar tubérculos grelhados e carne desfiada.'
  },
  {
    id: 'pan-26',
    name: 'Camomila e Erva-Doce para Infusão',
    category: 'especiarias',
    description: 'Ervas medicinais com propriedades carminativas e sedativas suaves.',
    whyEssential: 'Acalmam o sistema nervoso autônomo, relaxam a musculatura lisa do útero e do intestino.',
    substitutionTip: 'Beba 1 xícara morna após o jantar para preparar o corpo para um sono reparador.'
  },
  {
    id: 'pan-27',
    name: 'Adoçantes Naturais (Eritritol ou Stevia Pura)',
    category: 'leites-adoçantes',
    description: 'Adoçantes de origem vegetal que não causam fermentação nem picos glicêmicos.',
    whyEssential: 'Permite adoçar receitas sem alimentar processos inflamatórios por açúcar branco.',
    substitutionTip: 'Use em pouca quantidade apenas para ajustar o dulçor de bolos e chás.'
  },
  {
    id: 'pan-28',
    name: 'Alho e Cebola Orgânicos',
    category: 'frescos-raizes',
    description: 'Vegetais alióceos ricos em alicina e quercetina.',
    whyEssential: 'A quercetina é um flavonóide anti-histamínico natural que reduz a inflamação nas lesões de endometriose.',
    substitutionTip: 'Refogue levemente no azeite de oliva no início das preparações.'
  },
  {
    id: 'pan-29',
    name: 'Batata-Doce, Inhame e Abóbora Cabotiá',
    category: 'frescos-raizes',
    description: 'Tubérculos de baixo/médio índice glicêmico e fibras medicinais.',
    whyEssential: 'Raízes essenciais para saciedade duradoura, digestão sem inchaço e energia constante.',
    substitutionTip: 'Deixe sempre cozidas na geladeira para assar ou grelhar rapidamente na hora das refeições.'
  },
  {
    id: 'pan-30',
    name: 'Frutas Vermelhas Congeladas (Mirtilo, Morango, Amora)',
    category: 'frescos-raizes',
    description: 'Frutas de baixa carga glicêmica ricas em antocianinas e resveratrol.',
    whyEssential: 'Poderosos varredores de radicais livres que combatem o envelhecimento tecidual e inflamação pélvica.',
    substitutionTip: 'Adicione em mingaus quentes, picolés caseiros e smoothies detox.'
  }
];
