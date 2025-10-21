import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config(); // load GEMINI_API_KEY from .env

async function main() {
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  const model = 'gemini-2.5-flash-lite'; // text-only model

  const contents = [
    {
      role: 'user', // required by Gemini SDK
      parts: [
        {
          text: 'INSERT_INPUT_HERE', // your prompt
        },
      ],
    },
  ];

  const config = {
    thinkingConfig: {
      thinkingBudget: 0,
    },
  };

  // Streaming response
  const stream = ai.models.generateContentStream({
    model,
    contents,
    config,
  });

  for await (const chunk of stream) {
    if (chunk.text) {
      console.log(chunk.text); // print text output
    }
  }
}

main();
