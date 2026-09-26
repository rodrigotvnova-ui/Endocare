export interface DoctorQuestion {
  id: string;
  question: string;
  reason: string;
}

export interface MedicalSymptomSign {
  name: string;
  description: string;
  isRedFlag: boolean;
  category: 'Ginecológico' | 'Intestinal' | 'Urinário' | 'Sistêmico';
}

export const MEDICAL_SYMPTOMS: MedicalSymptomSign[] = [
  {
    name: 'Cólicas Menstruais Incapacitantes (Dismenorreia grave)',
    description: 'Dores intensas no baixo ventre durante o período menstrual que não cedem com analgésicos comuns e impedem atividades do dia a dia (escola, trabalho, lazer).',
    isRedFlag: true,
    category: 'Ginecológico'
  },
  {
    name: 'Dor nas Relações Sexuais (Dispareunia de Profundidade)',
    description: 'Dor aguda ou pontada no fundo da vagina durante ou após o contato íntimo profundo, decorrente de focos no fundo de saco de Douglas ou ligamentos uterossagrados.',
    isRedFlag: true,
    category: 'Ginecológico'
  },
  {
    name: 'Dor ao Evacuar durante a Menstruação (Disquezia)',
    description: 'Sensação de pontadas abdominais graves, puxões ou dor intensa no reto no momento de evacuar durante os dias menstruais.',
    isRedFlag: true,
    category: 'Intestinal'
  },
  {
    name: 'Inchaço Abdominal Severo ("Endo Belly")',
    description: 'Aumento repentino e visível do volume abdominal ao longo do dia, parecendo uma gestação de meses, acompanhado de sensação de estufamento duro.',
    isRedFlag: false,
    category: 'Intestinal'
  },
  {
    name: 'Dor ao Urinar no Período Menstrual (Disúria)',
    description: 'Ardor, pontadas ou sensação de peso na bexiga durante a micção especificamente na fase menstrual.',
    isRedFlag: true,
    category: 'Urinário'
  },
  {
    name: 'Dor Pélvica Crônica (Duração maior que 6 meses)',
    description: 'Dor constante ou intermitente no baixo ventre, quadris ou parte inferior das costas, independente da menstruação.',
    isRedFlag: true,
    category: 'Ginecológico'
  },
  {
    name: 'Fadiga Crônica Incapacitante',
    description: 'Cansaço extremo que não melhora com o sono, provocado pela inflamação sistêmica contínua no organismo.',
    isRedFlag: false,
    category: 'Sistêmico'
  },
  {
    name: 'Sangramento Intestinal ou Urinário Menstrual',
    description: 'Presença de sangue no vaso sanitário ao evacuar ou urinar durante os dias de fluxo menstrual.',
    isRedFlag: true,
    category: 'Intestinal'
  },
  {
    name: 'Dificuldade para Engravidar (Infertilidade)',
    description: 'Incapacidade de conceber após 12 meses de tentativas sem contracepção (a endometriose é responsável por 30% a 50% dos casos de infertilidade feminina).',
    isRedFlag: false,
    category: 'Ginecológico'
  }
];

export const DOCTOR_QUESTIONS: DoctorQuestion[] = [
  {
    id: 'q1',
    question: 'Você é um ginecologista especialista em Endometriose e cirurgia ginecológica minimamente invasiva?',
    reason: 'A endometriose é uma doença complexa e multidisciplinar que exige treinamento específico além da ginecologia geral.'
  },
  {
    id: 'q2',
    question: 'Você indica Ultrassom Transvaginal com Preparo Intestinal ou Ressonância Magnética de Pelve com protocolo para endometriose?',
    reason: 'Exames comuns de ultrassom pélvico de rotina NÃO detectam endometriose profunda em até 90% dos casos.'
  },
  {
    id: 'q3',
    question: 'Qual o seu plano terapêutico integrativo (estilo de vida, fisioterapia pélvica, nutrição e tratamento hormonal/cirúrgico)?',
    reason: 'O tratamento bem-sucedido combina abordagem médica com mudanças no estilo de vida e suporte nutricional.'
  },
  {
    id: 'q4',
    question: 'Caso seja necessária cirurgia, o procedimento será feito por Laparoscopia ou Cirurgia Robótica por equipe multidisciplinar (com proctologista e urologista)?',
    reason: 'Evita cirurgias incompletas caso haja acometimento do intestino, bexiga ou ureteres.'
  },
  {
    id: 'q5',
    question: 'Como podemos preservar minha fertilidade e reserva ovariana?',
    reason: 'Crucial para mulheres que desejam gestar no futuro antes de procedimentos cirúrgicos nos ovários.'
  }
];

export const DIAGNOSTIC_STEPS = [
  {
    step: '1. Mapeamento dos Sintomas',
    description: 'Registre diariamente no aplicativo a escala de dor, frequência de cólicas, alterações intestinais e dor nas relações durante pelo menos 2 a 3 ciclos.'
  },
  {
    step: '2. Consulta com Ginecologista Especialista',
    description: 'Agende uma consulta focada em dor pélvica crônica. Leve seu diário de sintomas do EndoCare e a lista de perguntas.'
  },
  {
    step: '3. Exames de Imagem Especializados',
    description: 'Ultrassom transvaginal com preparo intestinal feito por radiologista especializado em endometriose OU Ressonância Magnética de pelve com gel vaginal e retal.'
  },
  {
    step: '4. Diagnóstico e Plano Personalizado',
    description: 'A partir do mapeamento das lesões (superficial, ovariana ou profunda), a equipe médica definirá se o tratamento será clínico (hormonal + hábitos) ou cirúrgico.'
  }
];
