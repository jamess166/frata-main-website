
"use client"

import type { FC, ReactNode } from "react"
import Image from "next/image"
import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Cpu, FileText, Globe, HardHat, Layers, ListChecks, Percent, Repeat, Scaling, ShieldCheck, TrendingUp, Users, Wrench, Zap, AlertTriangle, Briefcase, Lightbulb, Search } from "lucide-react"
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
        '1.': <Users className="h-8 w-8 text-primary" />,
        '2.': <Layers className="h-8 w-8 text-primary" />,
        '3.': <Search className="h-8 w-8 text-primary" />,
    };

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-xl text-muted-foreground">{intro}</p>
                <div className="my-12 rounded-lg border overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
                    <Image
                        src="https://placehold.co/1200x675.png"
                        data-ai-hint="global team online meeting"
                        alt="Global remote BIM team collaborating online"
                        width={1200}
                        height={675}
                        className="w-full object-cover"
                    />
                </div>
            </div>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle>{advantagesTitle}</SectionTitle>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                        {advantagePoints.map((point) => {
                            const [title, description] = point.substring(3).split(':');
                            const iconKey = Object.keys(advantageIcons).find(key => point.startsWith(key)) || '1.';
                            return (
                                <Card key={title} className="bg-card/50 p-6 text-center border-0 shadow-none">
                                    <div className="flex justify-center mb-4">{advantageIcons[iconKey]}</div>
                                    <h3 className="font-headline text-xl font-bold mb-2">{title}</h3>
                                    <p className="text-muted-foreground">{description}</p>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <SectionTitle>{servicesTitle}</SectionTitle>
                <div className="grid lg:grid-cols-3 gap-12 mt-16 items-start">
                    {servicePoints.map((point) => {
                         const [title, description] = point.substring(3).split(':');
                         const iconKey = Object.keys(serviceIcons).find(key => point.startsWith(key)) || '1.';
                         return (
                            <div key={title} className="flex flex-col items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                     {serviceIcons[iconKey]}
                                </div>
                                <h3 className="font-headline text-2xl font-bold mb-4">{title}</h3>
                                <p className="text-muted-foreground">{description}</p>
                            </div>
                         )
                    })}
                </div>
            </div>

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle>{processTitle}</SectionTitle>
                    <div className="relative mt-16">
                        <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2 hidden md:block" aria-hidden="true"></div>
                        <div className="space-y-12 md:space-y-0">
                            {processSteps.map((step, index) => {
                                const [title, description] = step.substring(3).split(':');
                                const isOdd = index % 2 !== 0;
                                return (
                                    <div key={title} className={`relative flex items-center md:justify-center ${isOdd ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                        <div className="md:w-5/12">
                                            <Card className={`p-6 ${isOdd ? 'text-left' : 'md:text-right'}`}>
                                                <h4 className="font-headline text-xl font-bold mb-2 text-primary">{title}</h4>
                                                <p className="text-muted-foreground">{description}</p>
                                            </Card>
                                        </div>
                                        <div className="absolute md:relative h-12 w-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl z-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 mx-auto md:mx-6">
                                            {`0${index + 1}`}
                                        </div>
                                        <div className="hidden md:block w-5/12"></div>
                                    </div>
                                );
                            })}
                        </div>
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
        { name: 'Carlos Vargas', company: 'QC Ingenieros', quote: 'Una colaboración fantástica, merecedora de 5 estrellas. La herramienta que desarrollaron para nosotros redujo el tiempo que dedicábamos a tareas manuales en casi un 70%.' },
        { name: 'Sofía Montoya', company: '5YMAS Constructora', quote: 'Frata Ingenieros creó un conjunto de herramientas para Revit que aceleraron enormemente nuestro proceso. Entregaron plugins de alta calidad y siempre a tiempo. Su enfoque profesional y amigable es lo que más destaco.' },
        { name: 'Luis Fernández', company: 'LF Ingeniería', quote: 'Recomiendo encarecidamente a Frata Ingenieros. Crearon un plug-in de Revit personalizado a partir de un borrador que teníamos en Dynamo. Aprecié su precio asequible, el respeto por los plazos y la calidad del trabajo.' },
    ];

    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-xl text-muted-foreground">{intro}</p>
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

            <section className="py-24 bg-secondary -mx-4 sm:-mx-6 lg:-mx-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle>{solutionsTitle}</SectionTitle>
                     <div className="grid md:grid-cols-3 gap-8 mt-12">
                        {solutionPoints.map((point) => {
                             const [title, description] = point.substring(3).split(':');
                             const icons: { [key: string]: React.ReactNode } = {
                                '1.': <Cpu className="h-8 w-8" />,
                                '2.': <Globe className="h-8 w-8" />,
                                '3.': <Zap className="h-8 w-8" />,
                            };
                            const iconKey = Object.keys(icons).find(key => point.startsWith(key)) || '1.';
                            return (
                                <BenefitCard key={title} icon={icons[iconKey]} title={title}>{description}</BenefitCard>
                            )
                        })}
                    </div>
                </div>
            </section>
            
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
                            const [title, description] = step.substring(3).split(':');
                            return <ProcessStep key={title} number={`0${index + 1}`} title={title}>{description}</ProcessStep>
                        })}
                    </div>
                </div>
            </section>

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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-xl text-muted-foreground">{intro}</p>
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
            
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
                            const [title, description] = step.substring(3).split(':');
                            return <ProcessStep key={title} number={`0${index + 1}`} title={title}>{description}</ProcessStep>
                        })}
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
                                '1.': <Users className="h-8 w-8" />,
                                '2.': <Cpu className="h-8 w-8" />,
                                '3.': <Zap className="h-8 w-8" />,
                                '4.': <Percent className="h-8 w-8" />,
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

export const ServiceDetailClient: FC<ServiceDetailClientProps> = ({ serviceInfo }) => {
  const { t } = useLanguage()

  const ServiceComponent = () => {
    switch (serviceInfo.detailKey) {
        case 'service1Detail':
            return <RemoteTeamsService />;
        case 'service2Detail':
            return <SoftwareDevelopmentService />;
        case 'service4Detail':
            return <RebarDetailingService />;
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

  return (
    <>
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
      
      
        <div className="space-y-24 mt-12">
            <ServiceComponent />
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
    </>
  )
}
