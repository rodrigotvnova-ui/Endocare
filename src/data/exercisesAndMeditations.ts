import { ExerciseItem } from '../types';

export const EXERCISES_LIBRARY: ExerciseItem[] = [
  {
    id: 'ex-1',
    title: 'Posição da Criança com Abertura de Quadril (Balasana Adaptado)',
    type: 'alongamento',
    duration: '5 minutos',
    objective: 'alivio-dor-aguda',
    physicalRestrictions: 'deitada-sem-esforço',
    instructions: [
      'Ajoelhe-se no tapete de ioga ou na cama, afastando os joelhos na largura do quadril.',
      'Junte os polegares dos pés e sente-se sobre os calcanhares.',
      'Caminhe com as mãos para a frente, inclinando o tronco e apoiando a testa suavemente no chão ou em um travesseiro macio.',
      'Respire profundamente pelo nariz, direcionando o ar para o fundo da pelve e lombar.',
      'Permaneça por 3 a 5 minutos relaxando totalmente a mandíbula e os ombros.'
    ],
    benefits: 'Descomprime as vértebras lombares, relaxa os ligamentos uterossagrados e alivia a pressão dos focos endometrióticos no fundo de saco de Douglas.',
    precautions: 'Se sentir desconforto nos joelhos, coloque uma almofada dobrada entre as coxas e as panturrilhas.'
  },
  {
    id: 'ex-2',
    title: 'Borboleta Deitada com Suporte (Supta Baddha Konasana)',
    type: 'liberacao-pélvica',
    duration: '7 minutos',
    objective: 'alivio-dor-aguda',
    physicalRestrictions: 'deitada-sem-esforço',
    instructions: [
      'Deite-se de costas em uma superfície confortável.',
      'Dobre os joelhos e una a sola dos pés, deixando os joelhos caírem suavemente para os lados.',
      'Coloque uma almofada sob cada joelho para não forçar a virilha.',
      'Repouse as mãos delicadamente sobre o baixo ventre (útero).',
      'Sinta o calor das mãos acalmando a região e faça respirações abdominais lentas.'
    ],
    benefits: 'Melhora o fluxo sanguíneo na cavidade pélvica, suaviza contraturas do assoalho pélvico e acalma o sistema nervoso simpático.',
    precautions: 'Não force a abertura das pernas além do seu limite de conforto.'
  },
  {
    id: 'ex-3',
    title: 'Pernas Elevadas na Parede com Drenagem Pélvica (Viparita Karani)',
    type: 'liberacao-pélvica',
    duration: '10 minutos',
    objective: 'desinchar-barriga',
    physicalRestrictions: 'deitada-sem-esforço',
    instructions: [
      'Sente-se de lado bem perto de uma parede limpa.',
      'Gire o corpo para deitar de costas e eleve as pernas estendidas apoiadas na parede.',
      'Aproxime o quadril da parede o quanto for confortável.',
      'Coloque um travesseiro fino ou almofada sob o quadril para elevação suave.',
      'Mantenha os braços relaxados ao lado do corpo com as palmas voltadas para cima.',
      'Respire no ritmo 4 segundos inspirando e 6 segundos expirando.'
    ],
    benefits: 'Promove a drenagem linfática da região pélvica, reduz o inchaço abdominal (Endo Belly) e alivia o peso nas pernas e na lombar.',
    precautions: 'Se sentir formigamento nas pernas, dobre levemente os joelhos.'
  },
  {
    id: 'ex-4',
    title: 'Mobilidade Suave Gato-Vaca (Marjaryasana-Bitilasana)',
    type: 'fortalecimento-suave',
    duration: '4 minutos',
    objective: 'relaxar-lombar',
    physicalRestrictions: 'sem-impacto',
    instructions: [
      'Fique em posição de 4 apoios (mãos sob os ombros e joelhos sob o quadril).',
      'Ao inspirar, incline a pelve suavemente para baixo, abra o peito e olhe para a frente (Vaca).',
      'Ao expirar, arredonde a coluna para cima como um gato assustado, levando o queixo ao peito e recolhendo o umbigo suavemente (Gato).',
      'Repita o movimento sincronizado com a respiração por 8 a 10 ciclos fluidos.'
    ],
    benefits: 'Lubrifica a coluna vertebral, alivia a rigidez na fáscia toracolombar e libera aderências pélvicas superficiais.',
    precautions: 'Faça movimentos muito pequenos e suaves se estiver em dia de dor moderada.'
  },
  {
    id: 'ex-5',
    title: 'Alongamento Acolhedor de Psoas e Quadríceps',
    type: 'alongamento',
    duration: '6 minutos',
    objective: 'relaxar-lombar',
    physicalRestrictions: 'alongamento-leve',
    instructions: [
      'Ajoelhe-se com um joelho no chão (use uma almofada sob o joelho) e o outro pé à frente formando ângulo de 90 graus.',
      'Mantenha o tronco ereto e projete o quadril levemente para a frente até sentir o alongamento na virilha da perna de trás.',
      'Mantenha a posição por 45 segundos respirando fundo.',
      'Troque de lado delicadamente.'
    ],
    benefits: 'O músculo psoas é o "músculo da alma" e costuma estar hiperfocalizado em espasmo defensivo por causa da dor pélvica crônica. Seu relaxamento alivia a lombar.',
    precautions: 'Evite hiperestender a coluna lombar para trás.'
  },
  {
    id: 'ex-6',
    title: 'Torção Suave de Coluna no Chão com Joelhos Dobrados',
    type: 'alongamento',
    duration: '5 minutos',
    objective: 'desinchar-barriga',
    physicalRestrictions: 'deitada-sem-esforço',
    instructions: [
      'Deite-se de costas com os joelhos dobrados e pés apoiados no chão.',
      'Abra os braços em formato de "T" na altura dos ombros.',
      'Deixe ambos os joelhos caírem juntos suavemente para o lado direito.',
      'Gire a cabeça suavemente para o lado esquerdo.',
      'Mantenha por 2 minutos de cada lado respirando no abdômen.'
    ],
    benefits: 'Massajeia os órgãos abdominais e intestinos, aliviando o estufamento por gases e constipação.',
    precautions: 'Não force os joelhos a tocarem o chão se houver tensão excessiva.'
  },
  {
    id: 'ex-7',
    title: 'Respiração Descompressiva Anti-Dor (Técnica 4-7-8)',
    type: 'respiracao',
    duration: '5 minutos',
    objective: 'alivio-dor-aguda',
    physicalRestrictions: 'deitada-sem-esforço',
    instructions: [
      'Deite-se ou sente-se confortavelmente com a coluna alinhada.',
      'Encoste a ponta da língua no céu da boca, logo atrás dos dentes da frente.',
      'Inspire silenciosamente pelo nariz contando até 4.',
      'Reteha o ar nos pulmões por 7 segundos.',
      'Expire completamente pela boca fazendo som de sopro suave por 8 segundos.',
      'Repita o ciclo por 4 a 6 vezes.'
    ],
    benefits: 'Ativa instantaneamente o nervo vago e o sistema nervoso parassimpático, desligando o circuito de pânico da dor no cérebro.',
    precautions: 'Se sentir leve tontura, volte à respiração natural imediatamente.'
  },
  {
    id: 'ex-8',
    title: 'Meditação Guiada de Escaneamento e Acolhimento Pélvico',
    type: 'meditacao-guiada',
    duration: '10 minutos',
    objective: 'alivio-dor-aguda',
    physicalRestrictions: 'deitada-sem-esforço',
    instructions: [
      'Deite-se confortavelmente, coloque uma mão sobre o peito e outra no baixo ventre.',
      'Feche os olhos e visualize uma luz dourada morna e suave envolvendo todo o seu útero e ovários.',
      'Imagine que a cada expiração você liberta a tensão muscular acumulada, o medo e a frustração.',
      'Repita mentalmente a afirmação: "Meu corpo é meu templo sagrado. Eu acolho minhas sensações e envio amor e cura para a minha pelve."'
    ],
    benefits: 'Reduz a percepção central de dor (sensibilização central) e reduz os níveis de cortisol no sangue.',
    precautions: 'Pratique em um ambiente calmo e silencioso.'
  },
  {
    id: 'ex-9',
    title: 'Sons da Natureza & Ruído Rosa para Sono e Alívio Noturno',
    type: 'meditacao-guiada',
    duration: '15 minutos',
    objective: 'sono-tranquilo',
    physicalRestrictions: 'deitada-sem-esforço',
    instructions: [
      'Coloque fones de ouvido confortáveis.',
      'Ajuste o volume suavemente.',
      'Deixe-se embalar pelo som contínuo de chuva suave na floresta e ondas do mar que acalmam as ondas cerebrais.'
    ],
    benefits: 'Induz ondas cerebrais Alfa e Theta, facilitando a transição para o sono profundo reparador.',
    precautions: 'Apenas aproveite o momento de descompressão.'
  }
];
