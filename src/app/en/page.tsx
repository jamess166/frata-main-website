import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  Bot,
  Building2,
  Cable,
  CheckCircle2,
  Code2,
  Compass,
  HardHat,
  Layers3,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HomeContactSection } from "@/components/home/contact-section";

export const metadata: Metadata = {
  title: "BIM Consulting, BIM Modeling and Development for Revit or Tekla",
  description:
    "Frata Ingenieros delivers BIM consulting, BIM modeling, digital coordination and applications for Revit or Tekla focused on productivity and technical control.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en",
  },
};

const services = [
  {
    title: "BIM consulting",
    description:
      "Strategy, implementation, standards, coordination and support for companies that need to structure their BIM operation.",
    icon: Compass,
    href: "/en/services/bim-training-and-implementation",
  },
  {
    title: "BIM modeling",
    description:
      "Coordinated architectural, structural and MEP models for design, documentation, quantity takeoff and technical control.",
    icon: Layers3,
    href: "/en/services/comprehensive-bim-modeling",
  },
  {
    title: "Revit and Tekla development",
    description:
      "Add-ins, automations and technical applications for repetitive tasks, exports, parameters and validations.",
    icon: Code2,
    href: "/en/services/custom-bim-software-development",
  },
  {
    title: "On-site BIM support",
    description:
      "Direct assistance to resolve clashes, review models and connect digital information with real execution.",
    icon: HardHat,
    href: "/en/services/on-site-bim-construction-support",
  },
];

const proofPoints = [
  "BIM consulting focused on real operations, not only on presentation-level methodology.",
  "Detailed structural and multidisciplinary BIM modeling for design, control and fabrication support.",
  "BIMtools as a real product line tied to operational pain points inside Revit workflows.",
  "The ability to build custom software on top of Revit API, IFC and technical BIM processes.",
];

const capabilities = [
  {
    title: "BIM standards and coordination",
    description: "Better organized models, more consistent deliverables and less friction between disciplines.",
    icon: ShieldCheck,
  },
  {
    title: "Automation of repetitive work",
    description: "Fewer lost hours on manual tasks, exports and parameter management.",
    icon: Bot,
  },
  {
    title: "Tools for technical teams",
    description: "Interfaces and utilities designed for Revit, Tekla and documentation-heavy BIM workflows.",
    icon: Blocks,
  },
];

const process = [
  { step: "01", title: "Technical assessment", description: "We review your BIM workflow, pain points, software stack and business goals." },
  { step: "02", title: "Scope definition", description: "We prioritize deliverables, standards, automation or custom development." },
  { step: "03", title: "Implementation", description: "We execute modeling, consulting, support or development with clear follow-up." },
  { step: "04", title: "Scaling and support", description: "We document, train and leave a stronger base for long-term growth." },
];

export default function EnglishHomePage() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_32%),radial-gradient(circle_at_75%_18%,_rgba(249,115,22,0.16),_transparent_24%)]" />
        <div className="container mx-auto px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                Frata Ingenieros
              </div>
              <h1 className="mt-6 font-headline text-5xl font-bold tracking-tight text-foreground sm:text-6xl xl:text-7xl">
                BIM consulting, modeling and technical development for teams that need to move faster with more control.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                We help AEC companies structure BIM operations, model with technical rigor and develop applications for
                Revit or Tekla that reduce manual work and improve delivery quality.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link href="#contact">Request proposal</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                  <Link href="/en/bimtools">
                    Explore BIMtools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm">
                  <p className="text-3xl font-bold text-primary">BIM</p>
                  <p className="mt-2 text-sm text-muted-foreground">Consulting, standards and digital coordination.</p>
                </div>
                <div className="rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm">
                  <p className="text-3xl font-bold text-primary">Revit</p>
                  <p className="mt-2 text-sm text-muted-foreground">Add-ins, automation and productivity improvement.</p>
                </div>
                <div className="rounded-3xl border border-border/70 bg-card/70 p-5 shadow-sm">
                  <p className="text-3xl font-bold text-primary">Tekla</p>
                  <p className="mt-2 text-sm text-muted-foreground">Technical development for structural and fabrication workflows.</p>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-10">
              <div className="absolute -left-4 top-8 hidden h-40 w-40 rounded-full bg-accent/15 blur-3xl lg:block" />
              <div className="grid gap-5">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/25">
                  <Image src="/images/ModeladoIntegral.jpg" alt="Comprehensive BIM modeling" width={1200} height={900} className="h-[340px] w-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">BIM operations</p>
                    <p className="mt-2 text-2xl font-semibold">Coordinated models, clear workflows and traceable deliverables.</p>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Card className="rounded-[1.75rem] border-primary/15 bg-card/85">
                    <CardContent className="p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <ScanSearch className="h-5 w-5" />
                      </div>
                      <p className="mt-5 text-lg font-semibold">Assessment and control</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        We review parameters, workflows, exports and technical bottlenecks before scaling.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="rounded-[1.75rem] border-accent/15 bg-card/85">
                    <CardContent className="p-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                        <Cable className="h-5 w-5" />
                      </div>
                      <p className="mt-5 text-lg font-semibold">Business-aligned development</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        We do not just code. We build tools that matter to technical and production teams.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-secondary/45">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Positioning</p>
              <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Where a BIM website should demonstrate authority
              </h2>
            </div>
            <div className="grid gap-4">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl border bg-background/80 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm leading-7 text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Services</p>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Clear capabilities for companies that take BIM seriously
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Your offer should read from a business and delivery perspective. These are the lines that deserve the
            strongest visibility across the site.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="group rounded-[2rem] border-border/70 bg-card/75 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                    <CardDescription className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Button asChild variant="link" className="px-0">
                  <Link href={service.href}>
                    View service details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-y bg-slate-950 text-white">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">BIM software</p>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Application development for Revit or Tekla with real technical criteria
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              This is a real competitive advantage. Not every consultancy can solve production problems with purpose-built software, and that capability should be central to your site.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-white text-slate-950 hover:bg-white/90">
                <Link href="/en/services/custom-bim-software-development">Explore BIM development</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10">
                <Link href="/en/bimtools">View BIMtools</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((item) => (
              <Card key={item.title} className="rounded-[1.75rem] border-white/10 bg-white/5 text-white">
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
            <div className="overflow-hidden rounded-[1.75rem] border border-white/10 sm:col-span-2">
              <Image src="/images/softwareDeveloper.png" alt="BIM development for Revit and Tekla" width={1200} height={700} className="h-64 w-full object-cover opacity-80" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Method</p>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              A working model that turns BIM into operational capability
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              When someone lands on your site, they need to understand fast how you work and why that reduces risk.
            </p>
          </div>

          <div className="grid gap-5">
            {process.map((item) => (
              <div key={item.step} className="grid gap-4 rounded-[1.75rem] border bg-card/75 p-6 sm:grid-cols-[88px_1fr]">
                <div className="font-headline text-4xl font-bold text-primary">{item.step}</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-secondary/40">
        <div className="container mx-auto grid gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">BIMtools</p>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Your product can reinforce the value of your services
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              BIMtools and its manuals are now aligned with your actual add-ins. That helps you present product know-how, automation capability and technical depth inside the same commercial website.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-[1.75rem] border bg-background/80 p-5">
              <div className="flex items-center gap-3">
                <Building2 className="h-5 w-5 text-primary" />
                <p className="font-medium">Stronger commercial narrative</p>
              </div>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Your tools stop looking like isolated extras and become part of a mature BIM offer.
              </p>
            </div>
            <div className="rounded-[1.75rem] border bg-background/80 p-5">
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5 text-primary" />
                <p className="font-medium">Better long-tail SEO</p>
              </div>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Every documented add-in opens room for technical keywords related to Revit and BIM productivity.
              </p>
            </div>
            <Button asChild size="lg" className="mt-2 rounded-full px-7">
              <Link href="/en/bimtools/manual">
                Explore BIMtools manuals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <HomeContactSection locale="en" />
    </div>
  );
}
