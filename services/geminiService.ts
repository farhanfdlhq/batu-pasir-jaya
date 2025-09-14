
import { GoogleGenAI, Type } from "@google/genai";
import type { EstimatedMaterial } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this context, we'll proceed, and the UI will show an error if the key is missing.
  console.warn("Gemini API key is not set. The Estimator feature will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const estimateMaterials = async (projectDescription: string): Promise<EstimatedMaterial[]> => {
  if (!API_KEY) {
    throw new Error("API key is missing. Please configure your environment variables.");
  }
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Based on the following construction project description, provide a list of recommended materials (sand, stone, etc.), their estimated quantities, and units. Project: "${projectDescription}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              materialName: {
                type: Type.STRING,
                description: 'The name of the recommended building material (e.g., "Pasir Pasang", "Batu Split 2/3").',
              },
              quantity: {
                type: Type.STRING,
                description: 'The estimated quantity of the material needed, as a string to accommodate ranges (e.g., "10-12").',
              },
              unit: {
                type: Type.STRING,
                description: 'The unit of measurement for the quantity (e.g., "m³", "pcs", "karung").',
              },
              notes: {
                type: Type.STRING,
                description: 'Brief notes on why this material is recommended or its primary use in the project.',
              }
            },
            required: ["materialName", "quantity", "unit", "notes"]
          },
        },
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
        throw new Error("Received an empty response from the AI. Please try rephrasing your project description.");
    }

    const parsedResponse = JSON.parse(jsonText);
    return parsedResponse as EstimatedMaterial[];
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error && error.message.includes('API key not valid')) {
       throw new Error("The configured Gemini API key is not valid. Please check your environment variables.");
    }
    throw new Error("Failed to get estimation from AI. Please try again later.");
  }
};
