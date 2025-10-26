"use server"

// import { z } from "zod"
// import { intelligentFAQ } from "@/ai/flows/intelligent-faq"

// export async function askQuestion(
//   question: string
// ): Promise<{ answer?: string; error?: string }> {
//   if (!question) {
//     return { error: "Question cannot be empty." }
//   }

//   try {
//     const response = await intelligentFAQ({ question })
//     return { answer: response.answer }
//   } catch (error) {
//     console.error("Error in intelligentFAQ flow:", error)
//     return { error: "Sorry, I couldn't get an answer. Please try again." }
//   }
// }

// const contactSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters."),
//   email: z.string().email("Invalid email address."),
//   message: z.string().min(10, "Message must be at least 10 characters."),
// })

// export type ContactFormState = {
//   message: string
//   errors?: {
//     name?: string[]
//     email?: string[]
//     message?: string[]
//   }
//   success?: boolean
// }

// export async function submitContactForm(
//   prevState: ContactFormState,
//   formData: FormData
// ): Promise<ContactFormState> {
//   const validatedFields = contactSchema.safeParse({
//     name: formData.get("name"),
//     email: formData.get("email"),
//     message: formData.get("message"),
//   })

//   if (!validatedFields.success) {
//     return {
//       errors: validatedFields.error.flatten().fieldErrors,
//       message: "Please correct the errors and try again.",
//     }
//   }

//   // Here you would typically send an email or save to a database.
//   // For this example, we'll just log it and simulate success.
//   console.log("Form submitted:", validatedFields.data)
//   await new Promise(res => setTimeout(res, 1000))

//   return {
//     success: true,
//     message: "Message sent successfully!",
//   }
// }
