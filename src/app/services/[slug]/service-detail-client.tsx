
"use client"

import type { FC, ReactNode } from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Cpu, FileText, Globe, HardHat, Layers, ListChecks, Percent, Repeat, Scaling, ShieldCheck, TrendingUp, Users, Wrench, Zap, AlertTriangle, Briefcase, Lightbulb, Search, Award, BarChart, Check, Clock, Code, Users2, Building, University, Landmark } from "lucide-react"
import Link from "next/link"
import React, { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useCountUp } from "@/hooks/use-count-up"
import { cn } from "@/lib/utils"


type ServiceTitleKey = `service${1|2|3|4|5|6}Title` | 'quantifiedAdvantages' | 'whatWeModel' | 'keyBenefits';
type ServiceDetailKey = `service${1|2|3|4|5|6}Detail`;

interface ServiceInfo {
  titleKey: ServiceTitleKey;
  detailKey: ServiceDetailKey;
  dataAiHint: string;
}

interface ServiceDetailClientProps {
    serviceInfo: ServiceInfo;
}

const AnimatedSection: FC<{ children: ReactNode, className?: string, delay?: number }> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });
  const isVisible = !!entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


const SectionTitle: FC<{ children: ReactNode, subtitle?: string }> = ({ children, subtitle }) => (
  <div className="text-center max-w-3xl mx-auto">
    {subtitle && <h2 className="text-base font-bold uppercase tracking-widest text-primary">{subtitle}</h2>}
    <p className="font-headline text-3xl font-bold text-foreground sm:text-4xl mt-2">{children}</p>
  </div>
);

const BenefitCard: FC<{ icon: React.ReactNode; title: string; children: ReactNode }> = ({ icon, title, children }) => (
    <Card className="bg-secondary/50 border-0 shadow-none text-center p-6">
        <CardHeader className="items-center p-0">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                {icon}
            </div>
            <CardTitle className="font-headline text-xl text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-0 pt-4">
            <p className="text-muted-foreground">{children}</p>
        </CardContent>
    </Card>
);

const StatCard: FC<{ value: number; suffix: string; title: string; description: string }> = ({ value, suffix, title, description }) => {
    const ref = useRef<HTMLDivElement>(null);
    const entry = useIntersectionObserver(ref, { threshold: 0.1, freezeOnceVisible: true });
    const isVisible = !!entry?.isIntersecting;
    const count = useCountUp(value, 2000, isVisible);

    return (
        <div ref={ref} className="p-6 bg-transparent border-0 shadow-none text-center items-center flex flex-col">
            <div className="text-5xl font-bold font-headline text-primary mb-2">
                {count}{suffix}
            </div>
            <h4 className="font-semibold text-lg mb-2">{title}</h4>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
};


const RemoteTeamsService: FC = () => {
    const { t } = useLanguage();
    const detail = t('service1Detail');
    const [
        intro,
        advantagesTitle,
        advantages,
        servicesTitle,
        services,
        processTitle,
        process
    ] = detail.split('---SPLIT---');

    const advantagePoints = advantages ? advantages.trim().split('\n') : [];
    const servicePoints = services ? services.trim().split('\n') : [];
    const processSteps = process ? process.trim().split('\n') : [];

    const advantageIcons: { [key: string]: React.ReactNode } = {
        '1.': <Globe className="h-8 w-8 text-primary" />,
        '2.': <Scaling className="h-8 w-8 text-primary" />,
        '3.': <TrendingUp className="h-8 w-8 text-primary" />,
        '4.': <ShieldCheck className="h-8 w-8 text-primary" />,
    };

    const serviceIcons: { [key: string]: React.ReactNode } = {
        '1.': <Users className="h-8 w-8" />,
        '2.': <Layers className="h-8 w-8" />,
        '3.': <Search className="h-8 w-8" />,
    };

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto">{intro}</p>
                 <AnimatedSection className="my-16">
                    <div className="relative aspect-video rounded-lg border overflow-hidden shadow-lg">
                        <Image
                            src="/images/equipoBIM.png"
                            data-ai-hint="remote team collaboration"
                            alt="Global remote BIM team collaborating"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </AnimatedSection>
            </div>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle>{advantagesTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {advantagePoints.map((point, index) => {
                            const [title, description] = point.substring(3).split(':');
                            const iconKey = Object.keys(advantageIcons).find(key => point.startsWith(key)) || '1.';
                            return (
                                <AnimatedSection key={title} delay={100 * (index + 1)}>
                                    <Card className="bg-card/50 p-6 text-center border-0 shadow-none h-full">
                                        <div className="flex justify-center mb-4">{advantageIcons[iconKey]}</div>
                                        <h3 className="font-headline text-xl font-bold mb-2">{title}</h3>
                                        <p className="text-muted-foreground">{description}</p>
                                    </Card>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

             <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                             <div className="space-y-4">
                                <SectionTitle>{servicesTitle}</SectionTitle>
                                <div className="space-y-8 pt-8">
                                    {servicePoints.map((point, index) => {
                                        const [title, description] = point.substring(3).split(':');
                                        const iconKey = Object.keys(serviceIcons).find(key => point.startsWith(key)) || '1.';
                                        return (
                                            <div key={title} className="flex items-start gap-4">
                                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                                                    {serviceIcons[iconKey]}
                                                </div>
                                                <div>
                                                    <h3 className="font-headline text-xl font-bold mb-1">{title}</h3>
                                                    <p className="text-muted-foreground">{description}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                             </div>
                        </AnimatedSection>
                        <AnimatedSection delay={200}>
                            <div className="relative aspect-square">
                                 <Image
                                    src="/images/equipoBIM2.png"
                                    data-ai-hint="engineers architect collaboration"
                                    alt="Seamless collaboration with remote teams"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg shadow-xl"
                                />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <AnimatedSection>
                        <SectionTitle>{processTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="relative mt-16 max-w-3xl mx-auto">
                        <div className="absolute left-1/2 top-4 bottom-0 w-0.5 bg-border -translate-x-1/2" aria-hidden="true"></div>
                            {processSteps.map((step, index) => {
                                const [title, description] = step.substring(3).split(':');
                                return (
                                    <div key={title} className="relative mb-12 flex items-center justify-center">
                                        <div className={cn("w-[calc(50%-2rem)] p-6 bg-card rounded-lg shadow-md",
                                        index % 2 === 0 ? "mr-auto text-right" : "ml-auto text-left"
                                        )}>
                                            <h3 className="font-headline text-xl font-bold text-foreground">{title}</h3>
                                            <p className="mt-2 text-muted-foreground">{description}</p>
                                        </div>
                                        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-secondary"></div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </section>
        </>
    );
}

const SoftwareDevelopmentService: FC = () => {
    const { t } = useLanguage();
    const detail = t('service2Detail');
    const [
        intro,
        whyUsTitle,
        whyUs,
        solutionsTitle,
        solutions,
        processTitle,
        process,
        testimonialsTitle
    ] = detail.split('---SPLIT---');

    const solutionPoints = solutions ? solutions.trim().split('\n') : [];
    const processSteps = process ? process.trim().split('\n') : [];
    
    const testimonials = [
        { name: 'Oscar Quiróz', company: 'QC Ingenieros', quote: 'Una colaboración fantástica, merecedora de 5 estrellas. La herramienta que desarrollaron para nosotros redujo el tiempo que dedicábamos a tareas manuales en casi un 70%.' },
        { name: 'Mario Tello', company: '5YMAS Estudio Ténico', quote: 'Frata Ingenieros creó un conjunto de herramientas para Revit que aceleraron enormemente nuestro proceso. Entregaron plugins de alta calidad y siempre a tiempo. Su enfoque profesional y amigable es lo que más destaco.' },
        { name: 'Francisco Loyola', company: 'LF Ingeniería', quote: 'Recomiendo encarecidamente a Frata Ingenieros. Crearon un plug-in de Revit personalizado a partir de un borrador que teníamos en Dynamo. Aprecié su precio asequible, el respeto por los plazos y la calidad del trabajo.' },
    ];

    return (
        <>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto">{intro}</p>
            </section>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <div className="relative h-96 lg:h-full min-h-[24rem]">
                            <Image
                                src="/images/softwareDeveloper.png"
                                data-ai-hint="engineers collaborating code"
                                alt="Software engineers with AEC industry expertise"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className="space-y-6">
                            <h3 className="font-headline text-3xl font-bold text-foreground">{whyUsTitle}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">{whyUs}</p>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle>{solutionsTitle}</SectionTitle>
                    </AnimatedSection>
                     <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {solutionPoints.map((point, index) => {
                             const [title, description] = point.substring(3).split(':');
                             const icons: { [key: string]: React.ReactNode } = {
                                '1.': <Cpu className="h-8 w-8" />,
                                '2.': <Globe className="h-8 w-8" />,
                                '3.': <Zap className="h-8 w-8" />,
                            };
                            const iconKey = Object.keys(icons).find(key => point.startsWith(key)) || '1.';
                            return (
                                <AnimatedSection key={title} delay={100 * (index + 1)}>
                                    <BenefitCard icon={icons[iconKey]} title={title}>{description}</BenefitCard>
                                </AnimatedSection>
                            )
                        })}
                    </div>
                </div>
            </section>
            
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                         <SectionTitle>{processTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="relative mt-16 max-w-3xl mx-auto">
                        <div className="absolute left-8 top-0 h-full w-0.5 bg-border" aria-hidden="true" />
                        <div className="relative flex flex-col gap-12">
                            {processSteps.map((step, index) => {
                                const [title, description] = step.substring(3).split(':');
                                return (
                                    <AnimatedSection key={title} delay={100 * (index + 1)}>
                                        <div className="flex items-start gap-6">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-headline text-2xl flex-shrink-0 z-10 border-4 border-background">
                                                {`0${index + 1}`}
                                            </div>
                                            <div className="space-y-1 pt-3">
                                                <h4 className="font-headline text-xl font-bold">{title}</h4>
                                                <p className="text-muted-foreground">{description}</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

             <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <AnimatedSection>
                        <SectionTitle>{testimonialsTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                        {testimonials.map((testimonial, index) => (
                             <AnimatedSection key={index} delay={100 * (index + 1)}>
                                <Card className="bg-card/80 p-6 flex flex-col h-full">
                                    <CardContent className="p-0 flex-grow">
                                        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                                    </CardContent>
                                    <CardHeader className="p-0 pt-6">
                                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                                        <p className="text-sm text-primary">{testimonial.company}</p>
                                    </CardHeader>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

const OnSiteSupportService: FC = () => {
    const { t } = useLanguage();
    const detail = t('service3Detail');
    const [
        intro,
        whyUsTitle,
        features,
        processTitle,
        process,
        resultsTitle,
        results
    ] = detail.split('---SPLIT---');

    const featurePoints = features ? features.trim().split('\n') : [];
    const processSteps = process ? process.trim().split('\n') : [];
    const resultPoints = results ? results.trim().split('\n') : [];

    const featureIcons: { [key: string]: React.ReactNode } = {
        '1.': <HardHat className="h-8 w-8" />,
        '2.': <CheckCircle className="h-8 w-8" />,
        '3.': <Clock className="h-8 w-8" />,
        '4.': <Users2 className="h-8 w-8" />,
    };

     const resultIcons: { [key: string]: React.ReactNode } = {
        '1.': <AlertTriangle className="h-8 w-8 text-primary" />,
        '2.': <TrendingUp className="h-8 w-8 text-primary" />,
        '3.': <Award className="h-8 w-8 text-primary" />,
        '4.': <Lightbulb className="h-8 w-8 text-primary" />,
    };

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto">{intro}</p>
                <AnimatedSection className="my-16">
                    <div className="relative aspect-video rounded-lg border overflow-hidden shadow-lg">
                        <Image
                            src="/images/BIMObra.png"
                            data-ai-hint="construction site engineer tablet"
                            alt="Engineer on construction site with a tablet"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </AnimatedSection>
            </div>
            
             <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle>{whyUsTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {featurePoints.map((point, index) => {
                            const [title, description] = point.substring(3).split(':');
                            const iconKey = Object.keys(featureIcons).find(key => point.startsWith(key)) || '1.';
                            return (
                                <AnimatedSection key={title} delay={100 * (index + 1)}>
                                    <Card className="p-6 text-center border-0 shadow-sm h-full hover:shadow-lg transition-shadow duration-300">
                                        <div className="flex justify-center mb-4">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                {featureIcons[iconKey]}
                                            </div>
                                        </div>
                                        <h3 className="font-headline text-xl font-bold mb-2">{title}</h3>
                                        <p className="text-muted-foreground">{description}</p>
                                    </Card>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

             <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <AnimatedSection>
                    <SectionTitle>{processTitle}</SectionTitle>
                </AnimatedSection>
                <div className="grid md:grid-cols-4 gap-8 mt-16">
                    {processSteps.map((step, index) => {
                        const [title, description] = step.substring(3).split(':');
                        return (
                            <AnimatedSection key={title} delay={100 * (index + 1)}>
                                <div className="flex flex-col items-center text-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-headline text-2xl flex-shrink-0 z-10 border-4 border-background">
                                        {`0${index + 1}`}
                                    </div>
                                    <div className="mt-4">
                                        <h4 className="font-headline text-xl font-bold">{title}</h4>
                                        <p className="text-muted-foreground mt-1 max-w-xs">{description}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </section>

             <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle>{resultsTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                        {resultPoints.map((point, index) => {
                            const [title, description] = point.substring(3).split(':');
                            const iconKey = Object.keys(resultIcons).find(key => point.startsWith(key)) || '1.';
                            return (
                                <AnimatedSection key={title} delay={100 * (index + 1)}>
                                     <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">{resultIcons[iconKey]}</div>
                                        <div>
                                            <h4 className="font-bold text-lg text-foreground">{title}</h4>
                                            <p className="text-muted-foreground">{description}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}


const RebarDetailingService: FC = () => {
    const { t } = useLanguage();
    const detail = t('service4Detail');
    const [
        intro,
        problem,
        benefitsTitle,
        benefits,
        advantagesTitle,
        processTitle,
        process,
        whyUsTitle,
        whyUs
    ] = detail.split('---SPLIT---');

    const benefitsByPhase = benefits ? benefits.trim().split('\n') : [];
    const quantifiedAdvantagesText = t('quantifiedAdvantages');
    const quantifiedAdvantages = quantifiedAdvantagesText ? quantifiedAdvantagesText.trim().split('\n') : [];
    const processSteps = process ? process.trim().split('\n') : [];
    const whyUsPoints = whyUs ? whyUs.trim().split('\n') : [];

    return (
        <>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12">
                <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto">{intro}</p>
                 <div className="my-12 rounded-lg border overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
                    <Image
                        src="/images/Ingenieria_Detalle.JPG"
                        data-ai-hint="3d rebar model"
                        alt="Team of engineers reviewing a 3D rebar model"
                        width={1200}
                        height={675}
                        className="w-full object-cover"
                    />
                </div>
            </section>
            
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 lg:h-full min-h-[24rem]">
                        <Image
                            src="/images/Plano_Ingenieria_Detalle.png"
                            data-ai-hint="2d blueprint drawing"
                            alt="Traditional 2D rebar drawing with errors"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="space-y-6">
                        <h3 className="font-headline text-3xl font-bold text-foreground">{(problem || "").split('\n')[0]}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{(problem || "").split('\n').slice(1).join(' ')}</p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle={t('benefits')}>{benefitsTitle}</SectionTitle>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {benefitsByPhase.map((benefit) => {
                            const [phase, description] = benefit.split(':');
                            return (
                                <Card key={phase} className="bg-card/50 border-white/10 flex flex-col group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 h-full p-6">
                                    <CardTitle className="font-headline text-xl text-primary">{phase}</CardTitle>
                                    <CardContent className="p-0 pt-4 flex-grow">
                                        <p className="text-muted-foreground">{description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>
            
            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle subtitle="Results">{advantagesTitle}</SectionTitle>
                </div>
                <div className="grid md:grid-cols-3 gap-8 mt-12 container mx-auto px-4 sm:px-6 lg:px-8">
                    {quantifiedAdvantages.map((advantage, index) => {
                        const [value, title, description] = advantage.split('; ');
                        const numValue = parseInt(value, 10);
                        const suffix = value.includes('%') ? '%' : '';
                        return (
                           <StatCard 
                             key={index} 
                             value={numValue}
                             suffix={suffix}
                             title={title}
                             description={description}
                           />
                        )
                    })}
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                     <AnimatedSection>
                         <SectionTitle>{processTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="relative mt-16 max-w-3xl mx-auto">
                        <div className="absolute left-8 top-0 h-full w-0.5 bg-border" aria-hidden="true" />
                        <div className="relative flex flex-col gap-12">
                            {processSteps.map((step, index) => {
                                const [title, description] = step.substring(3).split(':');
                                return (
                                     <AnimatedSection key={title} delay={100 * (index + 1)}>
                                        <div className="flex items-start gap-6">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-headline text-2xl flex-shrink-0 z-10 border-4 border-background">
                                                {`0${index + 1}`}
                                            </div>
                                            <div className="space-y-1 pt-3">
                                                <h4 className="font-headline text-xl font-bold">{title}</h4>
                                                <p className="text-muted-foreground">{description}</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle>{whyUsTitle}</SectionTitle>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {whyUsPoints.map((point) => {
                             const [title, description] = point.substring(3).split(':');
                             const icons: { [key: string]: React.ReactNode } = {
                                '1.': <Code className="h-8 w-8" />,
                                '2.': <BarChart className="h-8 w-8" />,
                                '3.': <Users className="h-8 w-8" />,
                                '4.': <Check className="h-8 w-8" />,
                                '5.': <Wrench className="h-8 w-8" />,
                            };
                            const iconKey = Object.keys(icons).find(key => point.startsWith(key)) || '1.';
                            return (
                                <BenefitCard key={title} icon={icons[iconKey]} title={title}>{description}</BenefitCard>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

const TrainingService: FC = () => {
    const { t } = useLanguage();
    const detail = t('service5Detail');
    const [
        intro,
        isoTitle,
        iso,
        programsTitle,
        programs,
        methodologyTitle,
        methodology,
        audienceTitle,
        audience
    ] = detail.split('---SPLIT---');

    const isoPoints = iso ? iso.trim().split('\n') : [];
    const programPoints = programs ? programs.trim().split('\n') : [];
    const methodologySteps = methodology ? methodology.trim().split('\n') : [];
    const audiencePoints = audience ? audience.trim().split('\n') : [];

    const programIcons = {
        '1.': <Briefcase className="h-8 w-8 text-primary" />,
        '2.': <Landmark className="h-8 w-8 text-primary" />,
        '3.': <Zap className="h-8 w-8 text-primary" />,
    };

    const audienceIcons = {
        '1.': <Building className="h-10 w-10 text-primary" />,
        '2.': <Landmark className="h-10 w-10 text-primary" />,
        '3.': <University className="h-10 w-10 text-primary" />,
    };

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto">{intro}</p>
            </div>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8 mt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <div className="relative h-96">
                             <Image
                                src="/images/Capacitacion.jpeg"
                                data-ai-hint="ISO standard document"
                                alt="ISO 19650 Standard"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <div className="space-y-4">
                            <h3 className="font-headline text-3xl font-bold text-foreground">{isoTitle}</h3>
                            <ul className="space-y-4">
                                {isoPoints.map(point => {
                                    const [title, description] = point.substring(3).split(':');
                                    return (
                                        <li key={title} className="flex items-start gap-4">
                                            <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-foreground">{title}</h4>
                                                <p className="text-muted-foreground">{description}</p>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                 <AnimatedSection>
                    <SectionTitle>{programsTitle}</SectionTitle>
                </AnimatedSection>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                     {programPoints.map((point, index) => {
                        const [title, description] = point.substring(3).split(':');
                        const iconKey = Object.keys(programIcons).find(key => point.startsWith(key)) || '1.';
                        return (
                            <AnimatedSection key={title} delay={100 * (index + 1)}>
                                 <Card className="p-6 h-full border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
                                     <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0">{programIcons[iconKey]}</div>
                                        <div>
                                            <h4 className="font-bold text-lg text-foreground mb-1">{title}</h4>
                                            <p className="text-muted-foreground">{description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </section>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle>{methodologyTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-4 gap-8 mt-16">
                        {methodologySteps.map((step, index) => {
                            const [title, description] = step.substring(3).split(':');
                            return (
                                <AnimatedSection key={title} delay={100 * (index + 1)}>
                                    <div className="flex flex-col items-center text-center">
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-headline text-2xl flex-shrink-0 z-10 border-4 border-background">
                                            {`0${index + 1}`}
                                        </div>
                                        <div className="mt-4">
                                            <h4 className="font-headline text-xl font-bold">{title}</h4>
                                            <p className="text-muted-foreground mt-1 max-w-xs">{description}</p>
                                        </div>
                                    </div>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <AnimatedSection>
                    <SectionTitle>{audienceTitle}</SectionTitle>
                </AnimatedSection>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                    {audiencePoints.map((point, index) => {
                        const [title, description] = point.substring(3).split(':');
                        const iconKey = Object.keys(audienceIcons).find(key => point.startsWith(key)) || '1.';
                        return (
                            <AnimatedSection key={title} delay={150 * (index + 1)}>
                                <Card className="p-8 text-center bg-card/50 hover:bg-card/70 transition-colors duration-300 h-full">
                                    <div className="flex justify-center mb-4">{audienceIcons[iconKey]}</div>
                                    <h3 className="font-headline text-2xl font-bold mb-2">{title}</h3>
                                    <p className="text-muted-foreground">{description}</p>
                                </Card>
                            </AnimatedSection>
                        )
                    })}
                </div>
            </section>
        </>
    );
}

const ComprehensiveModelingService: FC = () => {
    const { t } = useLanguage();
    const detail = t('service6Detail');
    const [
        intro,
        whatWeModelTitle,
        whatWeModel,
        benefitsTitle,
        benefits,
        processTitle,
        process,
    ] = detail.split('---SPLIT---');

    const whatWeModelPoints = whatWeModel ? whatWeModel.trim().split('\n') : [];
    const benefitPoints = benefits ? benefits.trim().split('\n') : [];
    const processSteps = process ? process.trim().split('\n') : [];

    const whatWeModelIcons: { [key: string]: React.ReactNode } = {
        '1.': <Building className="h-8 w-8" />,
        '2.': <Landmark className="h-8 w-8" />, // Using Landmark for Structure
        '3.': <Wrench className="h-8 w-8" />, // Using Wrench for MEP
    };

    return (
        <>
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-xl text-muted-foreground text-center max-w-4xl mx-auto">{intro}</p>
                <AnimatedSection className="my-16">
                    <div className="relative aspect-video rounded-lg border overflow-hidden shadow-lg">
                        <Image
                            src="/images/ModeladoIntegral.jpg"
                            data-ai-hint="3d architectural model"
                            alt="Comprehensive BIM model showing multiple disciplines"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </AnimatedSection>
            </section>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle>{whatWeModelTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {whatWeModelPoints.map((point, index) => {
                            const [title, description] = point.substring(3).split(':');
                            const iconKey = Object.keys(whatWeModelIcons).find(key => point.startsWith(key)) || '1.';
                            return (
                                <AnimatedSection key={title} delay={100 * (index + 1)}>
                                    <BenefitCard icon={whatWeModelIcons[iconKey]} title={title}>{description}</BenefitCard>
                                </AnimatedSection>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle>{benefitsTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
                        {benefitPoints.map((point, index) => {
                             const [title, description] = point.substring(3).split(':');
                             return (
                                 <AnimatedSection key={title} delay={100 * (index + 1)}>
                                      <div className="flex items-start gap-4">
                                         <div className="flex-shrink-0"><CheckCircle className="h-6 w-6 text-primary mt-1" /></div>
                                         <div>
                                             <h4 className="font-bold text-lg text-foreground">{title}</h4>
                                             <p className="text-muted-foreground">{description}</p>
                                         </div>
                                     </div>
                                 </AnimatedSection>
                             );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection>
                        <SectionTitle>{processTitle}</SectionTitle>
                    </AnimatedSection>
                    <div className="relative mt-16 max-w-3xl mx-auto">
                        <div className="absolute left-8 top-0 h-full w-0.5 bg-border" aria-hidden="true" />
                        <div className="relative flex flex-col gap-12">
                            {processSteps.map((step, index) => {
                                const [title, description] = step.substring(3).split(':');
                                return (
                                    <AnimatedSection key={title} delay={100 * (index + 1)}>
                                        <div className="flex items-start gap-6">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-headline text-2xl flex-shrink-0 z-10 border-4 border-background">
                                                {`0${index + 1}`}
                                            </div>
                                            <div className="space-y-1 pt-3">
                                                <h4 className="font-headline text-xl font-bold">{title}</h4>
                                                <p className="text-muted-foreground">{description}</p>
                                            </div>
                                        </div>
                                    </AnimatedSection>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export const ServiceDetailClient: FC<ServiceDetailClientProps> = ({ serviceInfo }) => {
  const { t } = useLanguage()

  const ServiceComponent = () => {
    switch (serviceInfo.detailKey) {
        case 'service1Detail':
            return <RemoteTeamsService />;
        case 'service2Detail':
            return <SoftwareDevelopmentService />;
        case 'service3Detail':
            return <OnSiteSupportService />;
        case 'service4Detail':
            return <RebarDetailingService />;
        case 'service5Detail':
            return <TrainingService />;
        case 'service6Detail':
            return <ComprehensiveModelingService />;
        default:
             return (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
                    <AlertTriangle className="mx-auto h-12 w-12 text-yellow-500" />
                    <h2 className="mt-4 text-2xl font-bold">Contenido no disponible</h2>
                    <p className="mt-2 text-muted-foreground">
                        El contenido detallado para este servicio aún no ha sido implementado.
                    </p>
                </div>
            );
    }
  }

  const renderServiceLayout = (serviceComponent: ReactNode) => {
    // Shared wrapper for all services
    return (
        <div className="bg-background">
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
                <Button asChild variant="ghost" className="-ml-4">
                    <Link href="/#services">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {t('services')}
                    </Link>
                </Button>
                <header className="text-center max-w-4xl mx-auto space-y-6 mt-8">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        {t(serviceInfo.titleKey)}
                    </h1>
                </header>
             </div>
            
            <div className="mt-12">
                {serviceComponent}
            </div>

            <section className="py-24 bg-primary/5 dark:bg-primary/10 mt-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-headline text-3xl font-bold">{t('ctaTitle')}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        {t('ctaDesc')}
                    </p>
                    <Button asChild size="lg" className="mt-8">
                        <Link href="/#contact">{t('heroCTA')}</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
  }

  return renderServiceLayout(<ServiceComponent />);
}
