import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/site/eyebrow";
import { NumberedRow } from "@/components/site/numbered-row";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "Suscripcion Premium BIMtools | Frata",
  description:
    "Suscripcion premium BIMtools para Revit. Accede a todos los addins premium por USD 20 al mes o USD 100 al año.",
  alternates: {
    canonical: "https://www.frataingenieros.com/bimtools/suscripcion",
  },
};

const activationEmail = "info@frataingenieros.com";
const paypalUrl = "https://www.paypal.com/ncp/payment/Y38JM4SMMDME2";

export default function BimtoolsSubscriptionPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section>
        <div className="container mx-auto px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <Reveal>
            <Link
              href="/bimtools"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a BIMtools
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <Eyebrow className="mt-10">Suscripción premium</Eyebrow>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="mt-6 max-w-4xl font-headline text-display-lg font-black text-foreground">
              Todos los addins premium.
              <br />
              <span className="text-muted-foreground">Una sola suscripción.</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              Para profesionales y equipos que quieren automatización real en Revit, más
              velocidad en producción y acceso completo al ecosistema premium.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-none px-8 text-xs font-medium uppercase tracking-[0.14em]">
                <Link href={paypalUrl} target="_blank" rel="noreferrer">
                  Pagar con PayPal
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-border px-8 text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary"
              >
                <Link href="#pago">Ver proceso completo</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Planes ───────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid gap-px border border-border bg-border lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="flex h-full flex-col bg-background p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Plan mensual</p>
                <p className="mt-6 font-headline text-5xl font-black text-foreground">USD 20</p>
                <p className="mt-2 text-sm text-muted-foreground">por mes</p>
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
                  <li className="border-t border-border pt-4">Acceso a todos los addins premium</li>
                  <li className="border-t border-border pt-4">Ideal para empezar sin compromiso anual</li>
                  <li className="border-t border-border pt-4">Mismo ecosistema premium completo</li>
                </ul>
                <Button
                  asChild
                  variant="outline"
                  className="mt-10 w-full rounded-none border-border text-xs font-medium uppercase tracking-[0.14em] hover:bg-secondary sm:w-auto"
                >
                  <Link href="#pago">Suscribirme mensual</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={100} className="h-full">
              <div className="flex h-full flex-col bg-secondary p-8 lg:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Plan anual · Mejor valor
                </p>
                <p className="mt-6 font-headline text-5xl font-black text-foreground">USD 100</p>
                <p className="mt-2 text-sm text-muted-foreground">por año</p>
                <ul className="mt-8 flex-1 space-y-4 text-sm leading-7 text-muted-foreground">
                  <li className="border-t border-border pt-4">Acceso a todos los addins premium</li>
                  <li className="border-t border-border pt-4">Mejor valor para uso continuo</li>
                  <li className="border-t border-border pt-4">Un solo acceso para todo el stack premium</li>
                </ul>
                <Button asChild className="mt-10 w-full rounded-none text-xs font-medium uppercase tracking-[0.14em] sm:w-auto">
                  <Link href="#pago">Suscribirme anual</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Proceso ──────────────────────────────────────────── */}
      <section className="border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>Proceso</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                Cómo funciona la compra y activación.
              </h2>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <NumberedRow
                index="01"
                title="Prueba el instalador"
                description="Si quieres revisar primero el entorno BIMtools, descarga e instala la versión de prueba desde /download."
              />
            </Reveal>
            <Reveal delay={80}>
              <NumberedRow
                index="02"
                title="Paga con PayPal"
                description="En el pago debes indicar si quieres el acceso mensual de USD 20 o el acceso anual de USD 100."
              />
            </Reveal>
            <Reveal delay={160}>
              <NumberedRow
                index="03"
                title="Solicita la activación"
                description={`Después del pago, envía un correo a ${activationEmail} solicitando la activación de tu acceso premium.`}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pago ─────────────────────────────────────────────── */}
      <section id="pago" className="scroll-mt-24 border-t border-border">
        <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8 lg:py-32">
          <div>
            <Reveal>
              <Eyebrow>Pago</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
                Compra tu acceso premium.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
                <li className="border-t border-border pt-4">
                  <strong className="text-foreground">Mensual:</strong> USD 20
                </li>
                <li className="border-t border-border pt-4">
                  <strong className="text-foreground">Anual:</strong> USD 100
                </li>
                <li className="border-t border-border pt-4">
                  Después del pago, envía el correo de activación a {activationEmail}
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="border border-border bg-secondary p-8 lg:p-12">
              <h3 className="font-headline text-2xl font-bold text-foreground sm:text-3xl">
                Pagar con PayPal
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Abre PayPal, completa tu compra y luego escribe a {activationEmail} indicando
                si tu pago corresponde al plan mensual o anual.
              </p>
              <ul className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
                <li className="border-t border-border pt-4">Si quieres acceso mensual, elige el plan de USD 20</li>
                <li className="border-t border-border pt-4">Si quieres acceso anual, elige el plan de USD 100</li>
                <li className="border-t border-border pt-4">Luego solicita la activación por correo</li>
              </ul>
              <Button asChild size="lg" className="mt-10 w-full rounded-none text-xs font-medium uppercase tracking-[0.14em]">
                <Link href={paypalUrl} target="_blank" rel="noreferrer">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Abrir pago en PayPal
                </Link>
              </Button>
              <p className="mt-4 text-xs leading-6 text-muted-foreground">
                Si el pago no deja claro el plan, indícalo en el correo de activación junto con tu comprobante.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
