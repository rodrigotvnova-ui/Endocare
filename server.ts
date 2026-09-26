import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());

// Initialize Gemini AI Client with standard telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// AI Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userContext } = req.body;
    
    const systemInstruction = `Você é a Dra. EndoAcolhe, uma especialista em endometriose e saúde integrativa feminina com postura acolhedora, empática, científica e extremamente cuidadosa.
Seu objetivo é orientar sobre sintomas, manejo de crises, alimentação anti-inflamatória, bem-estar emocional, suplementação e rituais do ciclo hormonal.
Contexto atual da usuária: ${userContext ? JSON.stringify(userContext) : 'Usuária em busca de suporte e orientação.'}.

Regras de Conduta:
1. Responda em português brasileiro caloroso, empático e claro.
2. Formate as respostas com elegância usando marcadores e tópicos destacados quando pertinente.
3. Se a usuária relatar dor intensa (nota 8 a 10), ofereça suporte emocional imediato e sugira medidas de alívio rápido (comprentas morna, chá aquecedor, respiração de emergência).
4. Sempre incline o conselho ao acompanhamento médico com ginecologista especialista em endometriose.
5. Nunca faça diagnósticos definitivos, mas ajude a usuária a compreender sinais e formular perguntas para sua médica.`;

    const formattedContents = (messages || []).map((m: { role: string; content: string }) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }));

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: formattedContents,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    res.json({ text: response.text });
  } catch (err: any) {
    console.error('API /api/chat Error:', err);
    res.status(500).json({ error: 'Erro ao conectar ao suporte de IA.', details: err?.message || String(err) });
  }
});

// AI Personal Exercise Recommendation Endpoint
app.post('/api/exercises/ai-recommendation', async (req, res) => {
  try {
    const { objective, physicalRestrictions, painLevel, cyclePhase } = req.body;

    const prompt = `Atuando como fisioterapeuta pélvica e especialista em endometriose, crie um plano sob medida com 3 exercícios/alongamentos leves e 1 técnica de respiração/meditação para uma mulher com o seguinte perfil:
- Objetivo desejado: ${objective || 'Alívio geral da dor pélvica e lombar'}
- Restrições físicas: ${physicalRestrictions || 'Nenhuma restrição grave'}
- Nível de dor atual (0 a 10): ${painLevel ?? 4}
- Fase do ciclo hormonal: ${cyclePhase || 'Lútea'}

Retorne EXCLUSIVAMENTE um objeto JSON válido no seguinte formato:
{
  "recommendations": [
    {
      "title": "Nome do Exercício/Alongamento",
      "type": "alongamento" | "exercicio" | "meditacao",
      "duration": "Ex: 5 minutos",
      "difficulty": "Suave",
      "instructions": ["Passo 1...", "Passo 2...", "Passo 3..."],
      "benefit": "Como este movimento alivia a dor ou inchaço da endometriose",
      "precautions": "Cuidados a tomar ao realizar"
    }
  ],
  "personalizedTip": "Uma mensagem acolhedora e dica específica para este momento do ciclo hormonal."
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (err: any) {
    console.error('API /api/exercises/ai-recommendation Error:', err);
    res.status(500).json({ error: 'Erro ao gerar exercícios via IA.', details: err?.message || String(err) });
  }
});

// Express server setup
async function startServer() {
  const PORT = process.env.PORT || 3000;

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, '../dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`EndoCare Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
