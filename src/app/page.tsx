"use client"

import type { FC } from 'react';
import React, { useEffect, useRef, useState } from 'react';
import { useFormState, useFormStatus } from "react-dom";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Check, ArrowRight, Globe, Code, Construction, Factory, School, Shapes, Building, Target, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, ContactFormState } from './actions';
import { PlexusBackground } from '@/components/plexus-background';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import { cn } from '@/lib/utils';


const Animated = ({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


const HeroSection: FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20 sm:py-32 lg:py-40">
      <div className="absolute inset-0 z-0">
         <PlexusBackground />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Animated>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t('heroHeadline')}
          </h1>
        </Animated>
        <Animated delay={150}>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-muted-foreground">
          {t('heroSubhead')}
        </p>
        </Animated>
        <Animated delay={300}>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#contact">{t('heroCTA')}</Link>
          </Button>
           <Button asChild size="lg" variant="outline">
            <Link href="#services">{t('services')}</Link>
          </Button>
        </div>
        </Animated>
      </div>
    </section>
  );
};

const AboutUsSection: FC = () => {
  const { t } = useLanguage();
  const values = [
    { text: t('aboutValue1'), icon: Target },
    { text: t('aboutValue2'), icon: Building },
    { text: t('aboutValue3'), icon: Users },
  ];
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Animated>
          <div className="space-y-6">
            <h2 className="text-base font-bold uppercase tracking-widest text-primary">{t('aboutTitle')}</h2>
            <p className="font-headline text-3xl font-bold text-foreground sm:text-4xl">{t('aboutHeadline')}</p>
            <p className="text-lg text-muted-foreground">
              {t('aboutDesc')}
            </p>
            <div className="space-y-4 pt-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-foreground">{value.text}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" variant="link" className="px-0 pt-4">
                <Link href="/about">{t('learnMore')} <ArrowRight className="ml-2 h-4 w-4"/></Link>
            </Button>
          </div>
        </Animated>
        <Animated delay={200}>
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden border shadow-lg">
             <Image src="https://placehold.co/800x600.png" data-ai-hint="3d model architecture" alt="BIM Model Visualization" layout="fill" objectFit="cover" />
          </div>
        </Animated>
      </div>
    </section>
  );
}

const ServicesSection: FC = () => {
  const { t } = useLanguage();
  const services = [
    { slug: 'global-remote-bim-teams', title: t('service1Title'), description: t('service1Desc'), icon: Globe },
    { slug: 'custom-bim-software-development', title: t('service2Title'), description: t('service2Desc'), icon: Code },
    { slug: 'on-site-bim-construction-support', title: t('service3Title'), description: t('service3Desc'), icon: Construction },
    { slug: 'bim-for-manufacturing', title: t('service4Title'), description: t('service4Desc'), icon: Factory },
    { slug: 'bim-training-and-implementation', title: t('service5Title'), description: t('service5Desc'), icon: School },
    { slug: 'comprehensive-bim-modeling', title: t('service6Title'), description: t('service6Desc'), icon: Shapes },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-bold uppercase tracking-widest text-primary">{t('services')}</h2>
          <p className="font-headline text-3xl font-bold text-foreground sm:text-4xl">{t('servicesTitle')}</p>
        </Animated>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
             <Animated key={service.slug} delay={100 * (index + 1)}>
                <Card className="bg-card/50 dark:bg-card/30 border-white/10 flex flex-col group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-full">
                  <CardHeader className="flex-row items-center gap-4">
                     <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <service.icon className="h-6 w-6" aria-hidden="true" />
                     </div>
                     <CardTitle className="font-headline text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="px-0">
                      <Link href={`/services/${service.slug}`}>
                        {t('viewDetails')} <ArrowRight className="ml-2 h-4 w-4"/>
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};


const PortfolioSection: FC = () => {
  const { t } = useLanguage();
  const projects = [
    { title: t('project1Title'), description: t('project1Desc'), image: 'https://placehold.co/600x400.png', dataAiHint: 'skyscraper architecture' },
    { title: t('project2Title'), description: t('project2Desc'), image: 'https://placehold.co/600x400.png', dataAiHint: 'modern hospital' },
    { title: t('project3Title'), description: t('project3Desc'), image: 'https://placehold.co/600x400.png', dataAiHint: 'industrial plant' },
  ];
  return (
    <section id="portfolio" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('portfolio')}</h2>
          <p className="mt-2 font-headline text-3xl font-bold text-foreground sm:text-4xl">{t('portfolioTitle')}</p>
        </Animated>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Animated key={project.title} delay={100 * (index + 1)}>
              <Card className="overflow-hidden group relative shadow-sm hover:shadow-xl transition-all duration-300 border-white/10 hover:-translate-y-2">
                <CardHeader className="p-0 relative">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10"></div>
                  <Image src={project.image} data-ai-hint={project.dataAiHint} alt={project.title} width={600} height={400} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105" />
                </CardHeader>
                <CardContent className="p-6 absolute bottom-0 z-20 text-white">
                   <CardTitle className="font-headline text-xl text-white dark:text-white">{project.title}</CardTitle>
                  <CardDescription className="mt-2 text-white/80 dark:text-white/80">{project.description}</CardDescription>
                    <Button variant="link" className="px-0 text-white dark:text-white mt-4">
                      View Project <ArrowRight className="ml-2 h-4 w-4"/>
                   </Button>
                </CardContent>
              </Card>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

const SubmitButton: FC = () => {
  const { pending } = useFormStatus();
  const { t } = useLanguage();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Sending...' : t('formSubmit')}
    </Button>
  );
};

const initialState: ContactFormState = {
  message: "",
};

const ContactSection: FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = React.useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: t('formSuccess'),
        });
        formRef.current?.reset();
      } else if (state.errors) {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }
  }, [state, toast, t]);

  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Animated className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('contact')}</h2>
          <p className="mt-2 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('contactTitle')}</p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{t('contactDesc')}</p>
        </Animated>
        <Animated delay={200}>
          <Card className="max-w-xl mx-auto mt-16 shadow-lg bg-card/50 dark:bg-card/30 border-white/10">
            <CardContent className="p-6 sm:p-8">
              <form ref={formRef} action={formAction} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('formName')}</Label>
                  <Input id="name" name="name" type="text" autoComplete="name" required />
                  {state.errors?.name && <p className="text-sm font-medium text-destructive mt-1">{state.errors.name[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="email">{t('formEmail')}</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                  {state.errors?.email && <p className="text-sm font-medium text-destructive mt-1">{state.errors.email[0]}</p>}
                </div>
                <div>
                  <Label htmlFor="message">{t('formMessage')}</Label>
                  <Textarea id="message" name="message" rows={4} required />
                  {state.errors?.message && <p className="text-sm font-medium text-destructive mt-1">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </Animated>
      </div>
    </section>
  );
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
