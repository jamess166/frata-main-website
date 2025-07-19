
"use client"

import { useState, type ReactNode } from "react"
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarInset,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { manualContent, type Addin, type Category } from "@/lib/manual-content"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"

function ManualContentDisplay({ addin, className }: { addin: Addin, className?: string }) {
  const { t } = useLanguage()

  return (
    <article className={`prose prose-lg dark:prose-invert max-w-4xl py-8 lg:py-12 ${className}`}>
      <h1>{t(addin.titleKey)}</h1>
      <p className="lead">{t(addin.descriptionKey)}</p>

      {addin.image && (
        <div className="my-8 rounded-lg border overflow-hidden shadow-lg">
          <Image
            src={addin.image.src}
            alt={addin.image.alt}
            width={1200}
            height={700}
            className="w-full object-cover"
            data-ai-hint={addin.image.dataAiHint}
          />
        </div>
      )}

      {addin.steps.length > 0 && (
        <>
          <h2>{t('manualStepsTitle')}</h2>
          <ol>
            {addin.steps.map((step, index) => (
              <li key={index}>{t(step)}</li>
            ))}
          </ol>
        </>
      )}

      {addin.usageVideo && (
        <div className="my-10">
          <h2>{t('manualVideoTitle')}</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden border">
            <iframe
              src={addin.usageVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </article>
  )
}

export default function ManualPage() {
  const [selectedAddinId, setSelectedAddinId] = useState<string>("search-view")
  const { t } = useLanguage()

  const selectedAddin = manualContent
    .flatMap(category => category.addins)
    .find(addin => addin.id === selectedAddinId)

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-background">
        <Sidebar collapsible="icon">
          <SidebarHeader>
            <div className="h-10 flex items-center justify-center">
              <h2 className="font-headline text-lg font-bold whitespace-nowrap">
                BIMtools Manual
              </h2>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {manualContent.map((category: Category) => (
                <SidebarMenuItem key={category.id}>
                  <h3 className="px-4 pt-8 pb-2 text-sm font-semibold text-muted-foreground tracking-wider uppercase">
                    {t(category.titleKey)}
                  </h3>
                  <ul className="space-y-1 pl-4">
                    {category.addins.map((addin: Addin) => (
                      <SidebarMenuItem key={addin.id}>
                        <SidebarMenuButton
                          onClick={() => setSelectedAddinId(addin.id)}
                          isActive={selectedAddinId === addin.id}
                        >
                          <span>{t(addin.titleKey)}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </ul>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter/>
        </Sidebar>

        <SidebarInset>
          <header className="absolute top-0 z-10 flex w-full items-center justify-between border-b bg-background/80 px-4 py-2 backdrop-blur-sm sm:px-6 lg:px-8">
            <SidebarTrigger className="md:hidden" />
            <h1 className="text-xl font-bold md:hidden">{selectedAddin ? t(selectedAddin.titleKey) : ""}</h1>
            <div></div>
          </header>
          <div className="p-4 sm:p-6 lg:p-8">
            {selectedAddin ? (
              <ManualContentDisplay addin={selectedAddin} />
            ) : (
              <div className="flex h-full items-center justify-center">
                <p className="text-muted-foreground">{t('manualSelect')}</p>
              </div>
            )}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
