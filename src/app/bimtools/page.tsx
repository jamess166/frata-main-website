
"use client"

import type { FC } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Check, Star } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import Link from 'next/link';

const BIMtoolsPage: FC = () => {
  const { t } = useLanguage()

  const freeFeatures = [
    t('featureOpenModelFolder'),
    t('featureSearchView'),
    t('featureMergeParameter'),
    t('featureFreezeElements'),
    t('featureSuperMatch'),
    t('featureShowRebar'),
    t('featureSolidRebar'),
  ]

  const proFeatures = [
    t('featureChangeParameter'),
    t('featureUngroupRebar'),
    t('featureHostSync'),
    t('featureSelectByParameter'),
    t('featureApiAccess'),
    t('featurePrioritySupport'),
  ]

  return (
    <div className="bg-background min-h-screen">
      <main className="py-16 sm:py-24">
        <div className="w-full h-full px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 w-full">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t('bimToolsTitle')}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
                {t('bimToolsDesc')}
            </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full justify-center">
                {/* Free Version Card */}
                <Card className="flex flex-col w-full max-w-md lg:max-w-none">
                    <CardHeader className="text-center">
                    <CardTitle className="font-headline text-3xl">{t('bimToolsFreeTitle')}</CardTitle>
                    <CardDescription className="text-center mx-auto">{t('bimToolsFreeDesc')}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                    <h4 className="font-semibold text-center">{t('includedFeatures')}</h4>
                    <ul className="space-y-2 flex flex-col items-center">
                        {freeFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 w-full max-w-sm justify-start">
                            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-left">{feature}</span>
                        </li>
                        ))}
                    </ul>
                    </CardContent>
                    <CardFooter className="flex-col gap-4 p-6">
                    <Button size="lg" className="w-full" asChild>
                        <a href="https://drive.google.com/file/d/1051hVc9SBB7m9oClDOF7Yqi2ewQkEdpb/view" target="_blank" rel="noopener noreferrer">
                            <Download className="mr-2 h-4 w-4" />
                            {t('downloadFree')}
                        </a>
                    </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/manual">{t('viewManual')}</Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Pro Version Card */}
                <Card className="flex flex-col border-primary shadow-lg relative overflow-hidden w-full max-w-md lg:max-w-none">
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-lg flex items-center gap-1">
                        <Star className="h-4 w-4"/> PRO
                    </div>
                    <CardHeader className="text-center">
                    <CardTitle className="font-headline text-3xl text-primary">{t('bimToolsProTitle')}</CardTitle>
                    <CardDescription className="text-center mx-auto">{t('bimToolsProDesc')}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                    <h4 className="font-semibold text-center">{t('proFeatures')}</h4>
                    <ul className="space-y-2 flex flex-col items-center">
                        {proFeatures.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3 w-full max-w-sm justify-start">
                            <Check className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-left">{feature}</span>
                        </li>
                        ))}
                    </ul>
                    </CardContent>
                    <CardFooter className="flex-col gap-4 p-6">
                        <Button size="lg" className="w-full" asChild>
                        <Link href="/#contact">{t('upgradeToPro')}</Link>
                        </Button>
                        <Button variant="outline" className="w-full" asChild>
                          <Link href="/manual">{t('viewManual')}</Link>
                        </Button>
                    </CardFooter>
                </Card>
              </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default BIMtoolsPage;
