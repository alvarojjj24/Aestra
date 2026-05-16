export type CoachMessage = {
  role: 'user' | 'assistant';
  content: string;
};

export interface CoachModel {
  generateReply: (messages: CoachMessage[]) => Promise<string>;
}

export class RuleBasedCoachModel implements CoachModel {
  async generateReply(messages: CoachMessage[]) {
    const lastUser = [...messages].reverse().find((m) => m.role === 'user')?.content.toLowerCase() ?? '';

    if (lastUser.includes('knee') || lastUser.includes('rodilla')) {
      return 'Reduce impacto 48h: cambia sesión de carrera por bici suave + movilidad de cadera.';
    }

    if (lastUser.includes('tired') || lastUser.includes('cansado')) {
      return 'Hoy prioriza recuperación: baja la intensidad y añade 20-30 min de zona 1.';
    }

    if (lastUser.includes('missed') || lastUser.includes('perdí')) {
      return 'No compenses volumen completo mañana; reparte carga en 2-3 días para evitar fatiga.';
    }

    return 'Mantén consistencia: calidad en días clave, recuperación activa entre cargas.';
  }
}

export class FutureLLMCoachModel implements CoachModel {
  async generateReply() {
    return 'LLM provider scaffold ready. Plug OpenAI/Gemini later.';
  }
}
