'use server';
/**
 * @fileOverview An AI-powered chatbot for answering frequently asked questions about BIM services and Frata Ingenieros.
 *
 * - intelligentFAQ - A function that handles the question answering process.
 * - IntelligentFAQInput - The input type for the intelligentFAQ function.
 * - IntelligentFAQOutput - The return type for the intelligentFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const IntelligentFAQInputSchema = z.object({
  question: z.string().describe('The question to be answered by the chatbot.'),
});
export type IntelligentFAQInput = z.infer<typeof IntelligentFAQInputSchema>;

const IntelligentFAQOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
});
export type IntelligentFAQOutput = z.infer<typeof IntelligentFAQOutputSchema>;

export async function intelligentFAQ(input: IntelligentFAQInput): Promise<IntelligentFAQOutput> {
  return intelligentFAQFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentFAQPrompt',
  input: {schema: IntelligentFAQInputSchema},
  output: {schema: IntelligentFAQOutputSchema},
  prompt: `You are an AI-powered chatbot designed to answer frequently asked questions about BIM services and Frata Ingenieros.

  Answer the following question to the best of your ability using your knowledge of BIM services and Frata Ingenieros.

  Question: {{{question}}}`,
});

const intelligentFAQFlow = ai.defineFlow(
  {
    name: 'intelligentFAQFlow',
    inputSchema: IntelligentFAQInputSchema,
    outputSchema: IntelligentFAQOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
