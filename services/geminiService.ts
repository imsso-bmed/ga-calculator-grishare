
import { GoogleGenAI } from "@google/genai";

export async function getSupportiveInfo(question: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `당신은 임신 중지(낙태)를 고민하는 여성을 위한 공감 능력이 뛰어난 전문 상담사입니다. 
        1. 비판하지 않고 지지적인 태도를 유지하세요. 
        2. 의학적인 정보는 한국의 표준적인 지침을 따르되, 최종 결정은 전문의와 상담하라고 권고하세요. 
        3. 사용자의 프라이버시를 존중하세요. 
        4. 답변은 친절한 한국어 문어체로 작성하세요.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "현재 상담 기능을 일시적으로 사용할 수 없습니다. 잠시 후 다시 시도해 주세요.";
  }
}
