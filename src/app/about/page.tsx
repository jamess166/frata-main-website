
"use client"

import type { FC } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Target, Globe, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  icon: string;
  text: string;
  className?: string;
  animationDelay?: string;
  animationDuration?: string;
}

const FloatingCard: FC<FloatingCardProps> = ({ icon, text, className, animationDelay, animationDuration }) => (
    <div
      className={cn(
        "absolute bg-background/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white font-medium flex items-center gap-2 animate-float",
        className
      )}
      style={{
        animationDelay: animationDelay || '0s',
        animationDuration: animationDuration || '8s'
      }}
    >
      <span>{icon}</span>
      <span>{text}</span>
    </div>
);


const HeroSection: FC = () => {
  const { t } = useLanguage()
  return (
    <section className="relative bg-slate-900 text-white py-32 lg:py-48 overflow-hidden">
       <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-50 animate-float"></div>
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

        {/* Floating elements */}
        <FloatingCard icon="🏗️" text="BIM Technology" className="top-[15%] left-[10%]" animationDuration="10s" />
        <FloatingCard icon="🚀" text="Innovation" className="top-[25%] right-[12%]" animationDelay="2s" animationDuration="12s" />
        <FloatingCard icon="📊" text="Digital Solutions" className="bottom-[30%] left-[20%]" animationDelay="1s" animationDuration="9s" />
        <FloatingCard icon="🌍" text="Global Reach" className="bottom-[15%] right-[25%]" animationDelay="3s" animationDuration="11s" />


        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text">
          {t('aboutHeadline')}
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-slate-300">
          {t('aboutDesc')}
        </p>
      </div>
    </section>
  )
}

const OurStorySection: FC = () => {
  const { t } = useLanguage()

  const timelineEvents = [
    { title: 'ourStoryHeadline', description: 'ourStoryDesc', dataAiHint: 'engineering blueprint peru' },
    { title: 'timelineEvent2Title', description: 'timelineEvent2Desc', dataAiHint: 'global business network' },
    { title: 'timelineEvent3Title', description: 'timelineEvent3Desc', dataAiHint: 'innovation technology abstract' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-base font-bold uppercase tracking-widest text-primary">{t('ourStoryTitle')}</h2>
        </div>
        <div className="relative mt-16 max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-4 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative mb-12 flex items-center justify-center">
                 <div className={cn("w-[calc(50%-2rem)] p-6 bg-card rounded-lg shadow-md",
                 index % 2 === 0 ? "mr-auto text-right" : "ml-auto text-left"
                 )}>
                    <h3 className="font-headline text-xl font-bold text-foreground">{t(event.title as any)}</h3>
                    <p className="mt-2 text-muted-foreground">{t(event.description as any)}</p>
                </div>
                 <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-secondary"></div>
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MissionVisionValuesSection: FC = () => {
  const { t } = useLanguage()
  const items = [
    { icon: Target, title: 'missionTitle', description: 'missionDesc' },
    { icon: Globe, title: 'visionTitle', description: 'visionDesc' },
    { icon: Zap, title: 'valuesTitle', description: 'valuesDesc' },
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="text-center border-0 shadow-none bg-transparent">
              <CardHeader className="items-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-2xl font-bold">{t(item.title as any)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t(item.description as any)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const CtaSection: FC = () => {
    const { t } = useLanguage()
    return (
        <section className="text-center bg-primary/5 dark:bg-primary/10 py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-headline text-3xl font-bold">{t('ctaTitle')}</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                {t('ctaDesc')}
                </p>
                <div className="mt-8">
                <Button asChild size="lg">
                    <Link href="/#contact">{t('heroCTA')}</Link>
                </Button>
                </div>
            </div>
        </section>
    )
}


const AboutPage: FC = () => {

  return (
    <div className="bg-background">
      <HeroSection />
      <OurStorySection />
      <MissionVisionValuesSection />
      <CtaSection />
    </div>
  )
}

export default AboutPage
    