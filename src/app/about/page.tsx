"use client"

import type { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from "@/hooks/use-language"
import { Target, Globe, Zap, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FloatingCardProps {
  icon: string;
  text: string;
  className?: string;
  moveFactor?: number;
}

const useMouseFollowAnimation = (moveFactor: number) => {
  const [style, setStyle] = useState({});
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const moveX = (clientX / innerWidth - 0.5) * moveFactor;
      const moveY = (clientY / innerHeight - 0.5) * moveFactor;

      setStyle({
        transform: `translate(${moveX}px, ${moveY}px)`,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [moveFactor]);

  return { ref, style };
};


const FloatingCard: FC<FloatingCardProps> = ({ icon, text, className, moveFactor = 20 }) => {
    const { ref, style } = useMouseFollowAnimation(moveFactor);
    return (
        <div
            ref={ref}
            className={cn(
                "absolute bg-background/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white font-medium flex items-center gap-2 transition-transform duration-500 ease-out",
                className
            )}
            style={style}
            >
            <span>{icon}</span>
            <span>{text}</span>
        </div>
    );
};


const HeroSection: FC = () => {
  const { t } = useLanguage()
  return (
    <section className="relative bg-slate-900 text-white py-32 lg:py-48 overflow-hidden">
       <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-50"></div>
       
       <FloatingCard icon="🏗️" text="BIM Technology" className="hidden lg:block top-[15%] left-[55%] lg:left-[65%]" moveFactor={50} />
       <FloatingCard icon="🚀" text="Innovation" className="hidden lg:block top-[45%] right-[10%] lg:right-[15%]" moveFactor={-45} />
       <FloatingCard icon="📊" text="Digital Solutions" className="hidden lg:block bottom-[30%] left-[40%] lg:left-[50%]" moveFactor={35} />
       <FloatingCard icon="🌍" text="Global Reach" className="hidden lg:block bottom-[15%] right-[25%] lg:right-[35%]" moveFactor={-30} />

       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-xl text-center lg:text-left">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text">
            {t('aboutHeadline')}
            </h1>
            <p className="mt-6 text-lg max-w-3xl leading-8 text-slate-300">
            {t('aboutDesc')}
            </p>
        </div>
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
    { icon: Users, title: 'valuesTitle', description: 'valuesDesc' },
  ]

  return (
    <section className="py-24 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden border shadow-lg bg-secondary order-last lg:order-first">
                    <Image
                        src="/images/quienesSomos.png"
                        alt="Frata Ingenieros office or team collaboration"
                        layout="fill"
                        objectFit="cover"
                        data-ai-hint="engineering office collaboration"
                    />
                </div>
                <div className="space-y-12">
                    {items.map((item, index) => (
                        <div key={index} className="flex items-start gap-6">
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-headline text-2xl font-bold">{t(item.title as any)}</h3>
                                <p className="mt-2 text-muted-foreground">{t(item.description as any)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}


const TeamSection: FC = () => {
  const { t } = useLanguage()
  const teamMembers = [
    { name: "James Cabrera", role: t('teamRole1'), image: 'https://media.licdn.com/dms/image/v2/D5603AQFPIvHL…eta&t=ex7Jw-1odE-917TULU6K6rkAgfBnaZmfprQYZ1uwoH8', dataAiHint: "male engineer portrait" },
    { name: "Sheyla Gonzales", role: t('teamRole1'), image: 'https://media.licdn.com/dms/image/v2/C4E03AQH3mZy7b1GnYA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1648053960670?e=1762992000&v=beta&t=KJvFTkWOIARZ4gBrh76EfzuEawIHNmeOOhVAsYCA3xg', dataAiHint: "female architect portrait" },
  ]
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-base font-bold uppercase tracking-widest text-primary">{t('teamTitle')}</h2>
          <p className="mt-2 font-headline text-3xl font-bold text-foreground sm:text-4xl">{t('teamHeadline')}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center border-0 shadow-lg bg-card/50 hover:-translate-y-2 transition-transform duration-300">
              <CardContent className="p-6">
                 <Avatar className="h-32 w-32 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage src={member.image} alt={member.name} data-ai-hint={member.dataAiHint} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
                <CardDescription className="text-primary">{member.role}</CardDescription>
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
      <TeamSection />
      <CtaSection />
    </div>
  )
}

export default AboutPage
