
"use client"

import type { FC, ReactNode } from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Cpu, FileText, Globe, HardHat, Layers, ListChecks, Percent, Repeat, Scaling, ShieldCheck, TrendingUp, Users, Wrench, Zap } from "lucide-react"
import Link from "next/link"
import React, { useRef } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { useCountUp } from "@/hooks/use-count-up"


type ServiceTitleKey = `service${1|2|3|4|5|6}Title` | 'quantifiedAdvantages';
type ServiceDetailKey = `service${1|2|3|4|5|6}Detail`;

interface ServiceInfo {
  titleKey: ServiceTitleKey;
  detailKey: ServiceDetailKey;
  dataAiHint: string;
}

interface ServiceDetailClientProps {
    serviceInfo: ServiceInfo;
}

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

const ProcessStep: FC<{ number: string; title: string; children: ReactNode }> = ({ number, title, children }) => (
  <div className="flex items-start gap-6">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-headline text-2xl flex-shrink-0">
      {number}
    </div>
    <div className="space-y-1">
      <h4 className="font-headline text-xl font-bold">{title}</h4>
      <p className="text-muted-foreground">{children}</p>
    </div>
  </div>
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
        <div className="space-y-24">
            {/* Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center max-w-4xl mx-auto space-y-6">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        {t('service4Title')}
                    </h1>
                    <p className="text-xl text-muted-foreground">{intro}</p>
                </header>
                <div className="my-12 rounded-lg border overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
                    <Image
                        src="https://placehold.co/1200x675.png"
                        data-ai-hint="3d rebar model"
                        alt="Team of engineers reviewing a 3D rebar model"
                        width={1200}
                        height={675}
                        className="w-full object-cover"
                    />
                </div>
            </div>

            {/* Problem */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 lg:h-full min-h-[24rem]">
                        <Image
                            src="https://placehold.co/800x600.png"
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

            {/* Benefits */}
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
            
            {/* Advantages */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle subtitle="Results">{advantagesTitle}</SectionTitle>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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

            {/* Process */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[600px] lg:h-full min-h-[24rem] lg:order-last">
                        <Image
                            src="https://placehold.co/800x1000.png"
                            data-ai-hint="bim workflow diagram"
                            alt="BIM workflow process"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="space-y-12">
                        <SectionTitle>{processTitle}</SectionTitle>
                        {processSteps.map((step, index) => {
                            const [title, description] = step.split(':');
                            return <ProcessStep key={title} number={`0${index + 1}`} title={title.replace(/\d+\. /, '').trim()}>{description}</ProcessStep>
                        })}
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle>{whyUsTitle}</SectionTitle>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                        {whyUsPoints.map((point) => {
                             const [title, description] = point.split(':');
                             const icons: { [key: string]: React.ReactNode } = {
                                'team': <Users className="h-8 w-8" />,
                                'technology': <Cpu className="h-8 w-8" />,
                                'approach': <Zap className="h-8 w-8" />,
                                'savings': <Percent className="h-8 w-8" />,
                                'specialized': <Wrench className="h-8 w-8" />,
                            };
                            const iconKey = Object.keys(icons).find(key => title.toLowerCase().includes(key)) || 'team';
                            return (
                                <BenefitCard key={title} icon={icons[iconKey]} title={title.replace(/\d+\. /, '')}>{description}</BenefitCard>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}


const SoftwareDevelopmentService: FC = () => {
    const { t } = useLanguage();
    const detail = t('service2Detail');
    const [
        intro,
        whyUs,
        solutionsTitle,
        solutions,
        processTitle,
        process,
        testimonialsTitle
    ] = detail.split('---SPLIT---');

    const solutionPoints = solutions ? solutions.trim().split('\n') : [];
    const processSteps = process ? process.trim().split('\n') : [];
    
    // Placeholder testimonials
    const testimonials = [
        { name: 'Romeu Reguengo', company: 'Concremat', quote: 'A fantastic partnership, deserving a 5-star rating. The tool reduced time spent by almost 70%.' },
        { name: 'Guido Honders', company: 'Casteo B.V.', quote: 'DiRoots created tools that tremendously helped speed up our process. High-quality plugins and always on time.' },
        { name: 'José S.', company: 'ICVP / LOGIMEP', quote: 'I highly recommend DiRoots. They created a personalized Revit plug-in from a Dynamo draft. Affordable price and quality work.' },
    ];

    return (
        <div className="space-y-24">
             {/* Header */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center max-w-4xl mx-auto space-y-6">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                        {t('service2Title')}
                    </h1>
                    <p className="text-xl text-muted-foreground">{intro}</p>
                </header>
                <div className="my-12 rounded-lg border overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
                    <Image
                        src="https://placehold.co/1200x675.png"
                        data-ai-hint="software code screen"
                        alt="Custom software development for AEC"
                        width={1200}
                        height={675}
                        className="w-full object-cover"
                    />
                </div>
            </div>

            {/* Why Us */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-96 lg:h-full min-h-[24rem]">
                        <Image
                            src="https://placehold.co/800x600.png"
                            data-ai-hint="engineers collaborating code"
                            alt="Software engineers with AEC industry expertise"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="space-y-6">
                        <h3 className="font-headline text-3xl font-bold text-foreground">{(whyUs || "").split('\n')[0]}</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">{(whyUs || "").split('\n').slice(1).join(' ')}</p>
                    </div>
                </div>
            </section>

            {/* Solutions */}
            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle>{solutionsTitle}</SectionTitle>
                     <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {solutionPoints.map((point) => {
                             const [title, description] = point.split(':');
                             const icons: { [key: string]: React.ReactNode } = {
                                'add-ins': <Cpu className="h-8 w-8" />,
                                'web': <Globe className="h-8 w-8" />,
                                'automation': <Zap className="h-8 w-8" />,
                            };
                            const iconKey = Object.keys(icons).find(key => title.toLowerCase().includes(key)) || 'add-ins';
                            return (
                                <BenefitCard key={title} icon={icons[iconKey]} title={title.replace(/\d+\. /, '')}>{description}</BenefitCard>
                            )
                        })}
                    </div>
                </div>
            </section>
            
            {/* Process */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[600px] lg:h-full min-h-[24rem] lg:order-last">
                        <Image
                            src="https://placehold.co/800x1000.png"
                            data-ai-hint="agile development workflow"
                            alt="Agile software development process diagram"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                    <div className="space-y-12">
                        <SectionTitle>{processTitle}</SectionTitle>
                        {processSteps.map((step, index) => {
                            const [title, description] = step.split(':');
                            return <ProcessStep key={title} number={`0${index + 1}`} title={title.replace(/\d+\. /, '').trim()}>{description}</ProcessStep>
                        })}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
             <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle>{testimonialsTitle}</SectionTitle>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                        {testimonials.map((testimonial, index) => (
                             <Card key={index} className="bg-card/80 p-6 flex flex-col">
                                <CardContent className="p-0 flex-grow">
                                    <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                                </CardContent>
                                <CardHeader className="p-0 pt-6">
                                    <CardTitle className="text-base">{testimonial.name}</CardTitle>
                                    <p className="text-sm text-primary">{testimonial.company}</p>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export const ServiceDetailClient: FC<ServiceDetailClientProps> = ({ serviceInfo }) => {
  const { t } = useLanguage()

  const ServiceComponent = () => {
    switch (serviceInfo.detailKey) {
        case 'service2Detail':
            return <SoftwareDevelopmentService />;
        case 'service4Detail':
            return <RebarDetailingService />;
        // Add cases for other services here
        default:
            return <div className="container mx-auto p-8">Service content not found.</div>;
    }
  }

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24">
        <Button asChild variant="ghost" className="-ml-4">
          <Link href="/#services">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('services')}
          </Link>
        </Button>
      </div>
      
      <div className="py-12">
        <ServiceComponent />
      </div>

      <section className="py-24 bg-primary/5 dark:bg-primary/10">
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
    </>
  )
}
