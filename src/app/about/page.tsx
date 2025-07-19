"use client"

import type { FC } from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Building, Target, Users, Zap, Milestone, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const AboutPage: FC = () => {
  const { t } = useLanguage()

  const values = [
    { text: t('aboutValue1'), icon: Target },
    { text: t('aboutValue2'), icon: Building },
    { text: t('aboutValue3'), icon: Users },
  ];

  const teamMembers = [
    { name: "CEO & Founder", role: t('teamRole1'), image: "https://placehold.co/400x400.png", dataAiHint: "professional headshot" },
    { name: "Lead BIM Manager", role: t('teamRole2'), image: "https://placehold.co/400x400.png", dataAiHint: "engineer portrait" },
    { name: "Head of Software Dev", role: t('teamRole3'), image: "https://placehold.co/400x400.png", dataAiHint: "developer profile" },
  ];


  return (
    <div className="py-16 sm:py-24 space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {t('aboutHeadline')}
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-muted-foreground">
          {t('aboutDesc')}
        </p>
      </section>

      {/* Our Story Section */}
       <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-base font-bold uppercase tracking-widest text-primary">{t('ourStoryTitle')}</h2>
          <p className="font-headline text-3xl font-bold text-foreground sm:text-4xl">{t('ourStoryHeadline')}</p>
          <p className="text-lg text-muted-foreground">
            {t('ourStoryDesc')}
          </p>
        </div>
        <div className="relative h-96 lg:h-full min-h-[24rem]">
           <Image src="https://placehold.co/600x800.png" data-ai-hint="engineering blueprint peru" alt="Frata Ingenieros Origins" layout="fill" objectFit="cover" className="rounded-lg shadow-xl" />
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-24 sm:py-32 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
             <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="h-6 w-6"/>
            </div>
            <h3 className="font-headline text-2xl font-bold">{t('missionTitle')}</h3>
            <p className="text-muted-foreground">{t('missionDesc')}</p>
          </div>
           <div className="space-y-4">
             <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Building className="h-6 w-6"/>
            </div>
            <h3 className="font-headline text-2xl font-bold">{t('visionTitle')}</h3>
            <p className="text-muted-foreground">{t('visionDesc')}</p>
          </div>
           <div className="space-y-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-6 w-6"/>
            </div>
            <h3 className="font-headline text-2xl font-bold">{t('valuesTitle')}</h3>
            <p className="text-muted-foreground">{t('valuesDesc')}</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
       {/* <section>
        <div className="text-center">
          <h2 className="text-base font-bold uppercase tracking-widest text-primary">{t('teamTitle')}</h2>
          <p className="mt-2 font-headline text-3xl font-bold text-foreground sm:text-4xl">{t('teamHeadline')}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center border-0 shadow-none bg-transparent">
              <CardContent className="p-0">
                <div className="relative h-80 w-full mb-4">
                  <Image src={member.image} data-ai-hint={member.dataAiHint} alt={member.name} layout="fill" objectFit="cover" className="rounded-lg shadow-lg" />
                </div>
                <h4 className="font-headline text-xl font-bold">{member.name}</h4>
                <p className="text-primary">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

       {/* CTA Section */}
      <section className="text-center bg-primary/5 dark:bg-primary/10 rounded-lg p-10">
        <h2 className="font-headline text-3xl font-bold">{t('ctaTitle')}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {t('ctaDesc')}
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/#contact">{t('heroCTA')}</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
