"use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
// import { FaqChat } from "@/components/faq-chat"
// import { MessageCircle } from "lucide-react"
// import { useLanguage } from "@/hooks/use-language"

// export function FaqChatButton() {
//   const [isOpen, setIsOpen] = useState(false)
//   const { t } = useLanguage()

//   return (
//     <>
//       <Button
//         className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg z-50"
//         size="icon"
//         onClick={() => setIsOpen(true)}
//         aria-label={t('faqButton')}
//       >
//         <MessageCircle className="h-8 w-8" />
//       </Button>
//       <Sheet open={isOpen} onOpenChange={setIsOpen}>
//         <SheetContent className="w-full sm:max-w-lg flex flex-col p-0">
//           <SheetHeader className="p-6 pb-2">
//             <SheetTitle className="font-headline text-2xl">{t('faqTitle')}</SheetTitle>
//             <SheetDescription>
//               {t('heroSubhead')}
//             </SheetDescription>
//           </SheetHeader>
//           <FaqChat />
//         </SheetContent>
//       </Sheet>
//     </>
//   )
// }
