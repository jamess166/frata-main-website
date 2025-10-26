"use client"

// import { useState, useRef, useEffect, type FormEvent } from "react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { ScrollArea } from "@/components/ui/scroll-area"
// import { askQuestion } from "@/app/actions.disabled"
// import { Bot, User } from "lucide-react"

// interface Message {
//   role: "user" | "assistant"
//   content: string
// }

// export function FaqChat() {
//   const [messages, setMessages] = useState<Message[]>([])
//   const [input, setInput] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const scrollAreaRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (scrollAreaRef.current) {
//       scrollAreaRef.current.scrollTo({
//         top: scrollAreaRef.current.scrollHeight,
//         behavior: "smooth",
//       })
//     }
//   }, [messages])

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     if (!input.trim()) return

//     const userMessage: Message = { role: "user", content: input }
//     setMessages(prev => [...prev, userMessage])
//     setInput("")
//     setIsLoading(true)

//     try {
//       const { answer, error } = await askQuestion(input)
//       let assistantMessage: Message;
//       if (error) {
//         assistantMessage = { role: "assistant", content: error }
//       } else {
//         assistantMessage = { role: "assistant", content: answer || "I'm not sure how to answer that." }
//       }
//       setMessages(prev => [...prev, assistantMessage])
//     } catch (err) {
//       const errorMessage: Message = { role: "assistant", content: "An unexpected error occurred." }
//       setMessages(prev => [...prev, errorMessage])
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="flex flex-col h-full">
//       <ScrollArea className="flex-grow p-4" ref={scrollAreaRef}>
//         <div className="space-y-4">
//           {messages.map((message, index) => (
//             <div
//               key={index}
//               className={`flex items-start gap-3 ${
//                 message.role === "user" ? "justify-end" : ""
//               }`}
//             >
//               {message.role === "assistant" && (
//                 <Avatar className="h-8 w-8">
//                   <AvatarFallback><Bot/></AvatarFallback>
//                 </Avatar>
//               )}
//               <div
//                 className={`rounded-lg px-4 py-2 max-w-[80%] whitespace-pre-wrap ${
//                   message.role === "user"
//                     ? "bg-primary text-primary-foreground"
//                     : "bg-muted"
//                 }`}
//               >
//                 <p className="text-sm">{message.content}</p>
//               </div>
//               {message.role === "user" && (
//                 <Avatar className="h-8 w-8">
//                   <AvatarFallback><User/></AvatarFallback>
//                 </Avatar>
//               )}
//             </div>
//           ))}
//           {isLoading && (
//             <div className="flex items-start gap-3">
//               <Avatar className="h-8 w-8">
//                 <AvatarFallback><Bot/></AvatarFallback>
//               </Avatar>
//               <div className="rounded-lg px-4 py-2 bg-muted">
//                 <div className="flex items-center space-x-2">
//                   <span className="h-2 w-2 bg-foreground rounded-full animate-pulse [animation-delay:-0.3s]"></span>
//                   <span className="h-2 w-2 bg-foreground rounded-full animate-pulse [animation-delay:-0.15s]"></span>
//                   <span className="h-2 w-2 bg-foreground rounded-full animate-pulse"></span>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </ScrollArea>
//       <div className="p-4 border-t bg-background">
//         <form onSubmit={handleSubmit} className="flex items-center gap-2">
//           <Input
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             placeholder="Ask about BIM services..."
//             className="flex-grow"
//             disabled={isLoading}
//           />
//           <Button type="submit" disabled={isLoading || !input.trim()}>
//             Send
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }
