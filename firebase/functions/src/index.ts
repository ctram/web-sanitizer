import { GoogleGenerativeAI } from "@google/generative-ai";

import { LLM } from "./llm";

const GOOGLE_GEMINI_API_KEY = "my-key";
const GEMINI_MODEL = "gemini-1.5-pro-latest";
const API_KEY = GOOGLE_GEMINI_API_KEY;

const googleGemini = new LLM(GOOGLE_GEMINI_API_KEY, GEMINI_MODEL, "undefined");

const genAI = new GoogleGenerativeAI(API_KEY);

async function generateContent(content: string) {
  const model = genAI.getGenerativeModel({ model: GEMINI_MODEL });

  const result = await model.generateContent(
    "Review the following HTML. Identify content that " +
      "is inappropriate or harmful for users under the age of 12 years old." +
      "Modify the HTML such that, in the place of such content, " +
      "the following text is displayed: 'Content removed because it is inappropriate.'." +
      "The HTML is as follows: \n\n\n\n\n" +
      `${content}`
  );

  const response = await result.response;
  console.log(response.text());
  return response;
}

/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

export const sanitizeContent = onRequest((request, response) => {
  const { text } = request.body;
  const res = generateContent(text);
  response.send(res);
});
