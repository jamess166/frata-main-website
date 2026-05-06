import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Blocks, Building2, Code2, Compass, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About | Frata Ingenieros",
  description:
    "Learn more about Frata Ingenieros, a firm focused on BIM consulting, BIM modeling and technical development for Revit or Tekla.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en/about",
  },
};

const values = [
  {
    title: "Technical thinking",
    description: "We make decisions from the perspective of production, coordination and information control.",
    icon: Compass,
  },
  {
    title: "Execution capability",
    description: "We do not stay in BIM discourse. We model, coordinate and develop tools that teams can actually use.",
    icon: Blocks,
  },
  {
    title: "Closeness to real problems",
    description: "We work around the needs of technical offices, jobsites, fabrication and software operations.",
    icon: Users2,
  },
];

const timeline = [
  {
    year: "Origin",
    title: "We started from real BIM practice",
    description:
      "Frata emerged from the need to solve real modeling, coordination and production problems in technical projects.",
  },
  {
    year: "Expansion",
    title: "From services to solutions",
    description:
      "The firm evolved from traditional BIM support into an offer that combines consulting, modeling and automation.",
  },
  {
    year: "Today",
    title: "Engineering backed by software capability",
    description:
      "BIMtools and development for Revit/Tekla reinforce a clear position: we do not just implement BIM, we build technical capability.",
  },
];

const strengths = [
  "BIM consulting focused on operations rather than only documentation.",
  "Comprehensive BIM modeling for architecture, structure and MEP.",
  "Add-in and automation development for Revit or Tekla.",
  "The ability to support teams in technical office, jobsite and fabrication environments.",
];

export default function AboutPageEn() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.14),_transparent_32%),radial-gradient(circle_at_80%_16%,_rgba(249,115,22,0.12),_transparent_22%)]" />
        <div className="container mx-auto px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">About</p>
              <h1 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                A BIM firm that combines engineering judgment with real software capability.
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Frata Ingenieros should not be positioned as just another consultancy. Our strength lies in connecting BIM consulting, modeling, coordination and technical software so clients can operate better.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link href="/en/#contact">Talk to Frata</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                  <Link href="/en/bimtools">
                    View BIMtools
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950 shadow-2xl shadow-slate-950/20">
              <Image src="/images/quienesSomos.png" alt="Frata Ingenieros team" width={1200} height={900} className="h-[360px] w-full object-cover opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Frata Ingenieros</p>
                <p className="mt-2 text-lg text-slate-200">
                  BIM consulting, modeling and technical development for teams that need to execute better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="rounded-[1.75rem] border-border/70 bg-card/75">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <value.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-headline text-2xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-secondary/45">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Trajectory</p>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              How our positioning has evolved
            </h2>
          </div>
          <div className="grid gap-5">
            {timeline.map((item) => (
              <div key={item.title} className="grid gap-4 rounded-[1.75rem] border bg-background/80 p-6 sm:grid-cols-[120px_1fr]">
                <div className="font-headline text-2xl font-bold text-primary">{item.year}</div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border shadow-xl">
            <Image src="/images/equipoBIM2.png" alt="Frata Ingenieros BIM capabilities" width={1200} height={900} className="h-[380px] w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Strengths</p>
            <h2 className="mt-4 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Where Frata can stand apart from an average BIM consultancy
            </h2>
            <div className="mt-8 grid gap-4">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border bg-card/70 p-4">
                  <Building2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y bg-slate-950 text-white">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">Positioning</p>
            <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Development for Revit or Tekla should be a central part of your brand identity.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Many firms talk about BIM. Far fewer can show they solve technical problems through their own software. That is a strong advantage for both commercial narrative and SEO.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <Card className="rounded-[1.75rem] border-white/10 bg-white/5 text-white">
              <CardContent className="p-6">
                <Code2 className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-5 text-xl font-semibold">Own software capability</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Product development reinforces technical authority and automation capacity.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-[1.75rem] border-white/10 bg-white/5 text-white">
              <CardContent className="p-6">
                <Blocks className="h-6 w-6 text-cyan-300" />
                <h3 className="mt-5 text-xl font-semibold">More credible services</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Consulting and modeling gain weight when they are backed by real tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <h2 className="font-headline text-3xl font-bold sm:text-4xl">
          If you want a more modern firm, the website has to show this blend of BIM and development much more clearly.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          This page already pushes in that direction. The natural next step would be applying the same logic to case studies, testimonials and product-specific landing pages.
        </p>
        <Button asChild size="lg" className="mt-8 rounded-full px-7">
          <Link href="/en/#contact">Request a meeting</Link>
        </Button>
      </section>
    </div>
  );
}
