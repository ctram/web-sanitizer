"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.sanitizeContent = exports.helloWorld = void 0;
const generative_ai_1 = require("@google/generative-ai");
const llm_1 = require("./llm");
const GOOGLE_GEMINI_API_KEY = "AIzaSyA2426EeLCgzHHHamFBh6-zkgTuLYgIz04";
const googleGemini = new llm_1.LLM(GOOGLE_GEMINI_API_KEY, "gemini-1.5-pro-latest", "undefined");
const API_KEY = "YOUR_API_KEY";
const genAI = new generative_ai_1.GoogleGenerativeAI(API_KEY);
async function generateContent(content) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
    const result = await model.generateContent("Review the following HTML. Identify content that " +
        "is inappropriate or harmful for users under the age of 12 years old." +
        "Modify the HTML such that, in the place of such content, " +
        "the following text is displayed: 'Content removed because it is inappropriate.'." +
        "The HTML is as follows: \n\n\n\n\n" +
        `${content}`);
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
const https_1 = require("firebase-functions/v2/https");
const logger = __importStar(require("firebase-functions/logger"));
// Start writing functions
// https://firebase.google.com/docs/functions/typescript
exports.helloWorld = (0, https_1.onRequest)((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
exports.sanitizeContent = (0, https_1.onRequest)((request, response) => {
    const { text } = request.body;
    const res = generateContent(text);
    response.send(res);
});
//# sourceMappingURL=index.js.map