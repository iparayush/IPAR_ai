import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PROFILE, EXPERIENCES, PROJECTS, SKILLS } from "../constants";

// Construct a system context that feeds the resume data to the model
const SYSTEM_INSTRUCTION = `
You are an AI assistant for Ayush Ipar's portfolio website. 
Your goal is to answer questions about Ayush based on his resume information provided below.
Be professional, concise, and helpful. Act as if you are Ayush's virtual representative.

Resume Context:
Name: ${PROFILE.name}
Title: ${PROFILE.title}
Tagline: ${PROFILE.tagline}
About: ${PROFILE.about}

Experience:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.tags.join(', ')})`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.name} (${s.category})`).join('\n')}

If asked about contact info, refer to: ${JSON.stringify(PROFILE.social)}.
If asked about something not in the resume, politely say you don't have that information but suggest contacting Ayush directly.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    // API Key must be in process.env.API_KEY
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables.");
      // In a real app we might handle this gracefully, for now we let the error propagate or mock it if needed for UI demo purposes without key.
      // However, per instructions, we assume valid key.
    }

    const ai = new GoogleGenAI({ apiKey: apiKey || '' }); 
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageStream = async (message: string) => {
  const chat = getChatSession();
  try {
    return await chat.sendMessageStream({ message });
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};
