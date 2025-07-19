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
    ...freeFeatures,
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {t('bimToolsTitle')}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                {t('bimToolsDesc')}
            </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Version Card */}
            <Card className="flex flex-col">
                <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl">{t('bimToolsFreeTitle')}</CardTitle>
                <CardDescription>{t('bimToolsFreeDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                <h4 className="font-semibold text-center">{t('includedFeatures')}</h4>
                <ul className="space-y-2">
                    {freeFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                    </li>
                    ))}
                </ul>
                </CardContent>
                <CardFooter className="flex-col gap-4 p-6">
                <Button size="lg" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    {t('downloadFree')}
                    </Button>
                    <Button variant="outline" className="w-full">
                    {t('viewManual')}
                    </Button>
                </CardFooter>
            </Card>

            {/* Pro Version Card */}
            <Card className="flex flex-col border-primary shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 text-sm font-bold rounded-bl-lg flex items-center gap-1">
                    <Star className="h-4 w-4"/> PRO
                </div>
                <CardHeader className="text-center">
                <CardTitle className="font-headline text-3xl text-primary">{t('bimToolsProTitle')}</CardTitle>
                <CardDescription>{t('bimToolsProDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                <h4 className="font-semibold text-center">{t('includedFeatures')}</h4>
                <ul className="space-y-2">
                    {proFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                    </li>
                    ))}
                </ul>
                </CardContent>
                <CardFooter className="flex-col gap-4 p-6">
                    <Button size="lg" className="w-full" asChild>
                    <Link href="/#contact">{t('upgradeToPro')}</Link>
                    </Button>
                    <Button variant="outline" className="w-full">
                    {t('viewManual')}
                    </Button>
                </CardFooter>
            </Card>
            </div>
        </div>
      </main>
    </div>
  )
}

export default BIMtoolsPage;
