"use client"

import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Book } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const BIMtoolsPage: FC = () => {
  const { t } = useLanguage()

  const tools = [
    {
      title: t('tool1Title'),
      description: t('tool1Desc'),
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: 'abstract tech'
    },
    {
      title: t('tool2Title'),
      description: t('tool2Desc'),
      imageUrl: "https://placehold.co/600x400.png",
      dataAiHint: 'blueprint wireframe'
    },
  ]

  return (
    <div className="bg-background min-h-screen -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <main className="py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t('bimToolsTitle')}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            {t('bimToolsDesc')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                 <img src={tool.imageUrl} alt={tool.title} className="rounded-lg object-cover w-full h-64" data-ai-hint={tool.dataAiHint} />
              </CardContent>
              <CardFooter className="flex justify-end gap-4 bg-muted/50 p-4">
                <Button variant="outline">
                  <Book className="mr-2 h-4 w-4" />
                  {t('viewManual')}
                </Button>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  {t('download')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  )
}

export default BIMtoolsPage
