export interface IntelligentFAQInput {
  question: string;
}

export interface IntelligentFAQOutput {
  answer: string;
}

export async function intelligentFAQ(input: IntelligentFAQInput): Promise<IntelligentFAQOutput> {
  return {
    answer: `AI disabled: ${input.question}`,
  };
}
