"use client"

import type { FC } from 'react';
import React, { useEffect } from 'react';
import { useFormState, useFormStatus } from "react-dom";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Check, ArrowRight, Globe, Code, Construction, Factory, School, FileClock } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm, ContactFormState } from './actions';

const initialState: ContactFormState = {
  message: "",
};

const HeroSection: FC = () => {
  const { t } = useLanguage();
  return (
    <section className="relative py-20 sm:py-32 lg:py-40 bg-background">
       <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom_1px_center mask-image-gradient"></div>
      <div className="container mx-auto px-4 text-center relative">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {t('heroHeadline')}
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto leading-8 text-muted-foreground">
          {t('heroSubhead')}
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#contact">{t('heroCTA')}</Link>
          </Button>
           <Button asChild size="lg" variant="outline">
            <Link href="#services">{t('services')}</Link>
          </Button>
        </div>
      </div>
      <style jsx>{`
        .mask-image-gradient {
          mask-image: linear-gradient(to bottom, white, transparent);
          -webkit-mask-image: linear-gradient(to bottom, white, transparent);
        }
      `}</style>
    </section>
  );
};

const ServicesSection: FC = () => {
  const { t } = useLanguage();
  const services = [
    {
      title: t('service1Title'),
      description: t('service1Desc'),
      icon: Globe,
    },
    {
      title: t('service2Title'),
      description: t('service2Desc'),
      icon: Code,
    },
    {
      title: t('service3Title'),
      description: t('service3Desc'),
      icon: Construction,
    },
    {
      title: t('service4Title'),
      description: t('service4Desc'),
      icon: Factory,
    },
    {
      title: t('service5Title'),
      description: t('service5Desc'),
      icon: School,
    },
    {
      title: t('service6Title'),
      description: t('service6Desc'),
      icon: FileClock,
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-base font-bold uppercase tracking-widest text-primary">{t('services')}</h2>
          <p className="mt-2 font-headline text-3xl font-bold text-foreground sm:text-4xl">{t('servicesTitle')}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/50 dark:bg-card/30 border-white/10 flex flex-col group hover:border-primary/50 transition-colors duration-300">
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
                 <Button variant="link" className="px-0 text-primary">
                    Learn More <ArrowRight className="ml-2 h-4 w-4"/>
                 </Button>
              </CardFooter>
            </Card>
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
    <section id="portfolio" className="py-24 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('portfolio')}</h2>
          <p className="mt-2 font-headline text-3xl font-bold text-foreground sm:text-4xl">{t('portfolioTitle')}</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group relative shadow-sm hover:shadow-xl transition-shadow duration-300 border-white/10">
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
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary">{t('contact')}</h2>
          <p className="mt-2 font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{t('contactTitle')}</p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">{t('contactDesc')}</p>
        </div>
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
      </div>
    </section>
  );
};


export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
