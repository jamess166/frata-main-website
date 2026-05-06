import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CreditCard, Download, Mail, ShieldCheck, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="bg-background">
      <section className="border-b bg-[linear-gradient(180deg,_rgba(8,145,178,0.08),_transparent_55%)]">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Link
            href="/bimtools"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a BIMtools
          </Link>

          <div className="mt-8 max-w-4xl">
            <Badge className="rounded-full">
              <Star className="mr-1 h-3 w-3" />
              Suscripcion premium
            </Badge>
            <h1 className="mt-6 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
              Accede a todos los addins premium de BIMtools con una sola suscripcion
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              BIMtools Premium esta pensado para profesionales y equipos que quieren automatizacion real en Revit, mas
              velocidad en produccion y acceso completo a todo el ecosistema premium.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <Link href={paypalUrl} target="_blank" rel="noreferrer">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Pagar con PayPal
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="#pago">Ver proceso completo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/70 bg-card/70">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Plan mensual</CardTitle>
              <CardDescription>Ideal para empezar rapido y medir el ahorro real de tiempo.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-foreground">USD 20</div>
              <p className="mt-1 text-sm text-muted-foreground">por mes</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>Acceso a todos los addins premium</li>
                <li>Ideal para empezar sin compromiso anual</li>
                <li>Mismo ecosistema premium completo</li>
              </ul>
              <Button asChild className="mt-6 rounded-full">
                <Link href="#pago">Suscribirme mensual</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-primary/30 bg-card/80 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Plan anual</CardTitle>
              <CardDescription>La mejor opcion si BIMtools ya forma parte de tu flujo diario.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-foreground">USD 100</div>
              <p className="mt-1 text-sm text-muted-foreground">por año</p>
              <p className="mt-3 text-sm font-medium text-foreground">Mejor valor para equipos y uso continuo.</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
                <li>Acceso a todos los addins premium</li>
                <li>Mejor valor para uso continuo</li>
                <li>Un solo acceso para todo el stack premium</li>
              </ul>
              <Button asChild className="mt-6 rounded-full">
                <Link href="#pago">Suscribirme anual</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y bg-secondary/40">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Proceso</p>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Como funciona la compra y activacion
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                  <Download className="h-5 w-5 text-primary" />
                  1. Prueba el instalador
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  Si quieres revisar primero el entorno BIMtools, descarga e instala la version de prueba.
                </p>
                <Button asChild variant="outline" size="sm" className="mt-5 rounded-full">
                  <Link href="/download">Descargar prueba</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                  <CreditCard className="h-5 w-5 text-primary" />
                  2. Paga con PayPal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  En el pago debes indicar si quieres el acceso <strong>mensual de USD 20</strong> o el acceso{" "}
                  <strong>anual de USD 100</strong>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/70">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline text-2xl">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  3. Solicita la activacion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-7 text-muted-foreground">
                  Despues del pago, envia un correo a {activationEmail} solicitando la activacion de tu acceso premium.
                </p>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="mt-5 rounded-full px-0 text-primary hover:text-primary"
                >
                  <Link href={`mailto:${activationEmail}?subject=Activacion%20BIMtools%20Premium`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar correo de activacion
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pago" className="container mx-auto scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Pago</p>
            <h2 className="mt-3 font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Compra tu acceso premium
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Antes de completar el pago, deja claro que plan vas a solicitar:
            </p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted-foreground">
              <li>
                <strong>Mensual:</strong> USD 20
              </li>
              <li>
                <strong>Anual:</strong> USD 100
              </li>
              <li>Despues del pago, envia el correo de activacion a {activationEmail}</li>
            </ul>
          </div>

          <Card className="border-primary/30 bg-card/85 shadow-xl lg:min-h-[32rem]">
            <CardHeader>
              <CardTitle className="font-headline text-3xl">Pagar con PayPal</CardTitle>
              <CardDescription>
                Abre PayPal, completa tu compra y luego escribe a {activationEmail} indicando si tu pago corresponde
                al plan mensual o anual.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col justify-between space-y-6">
              <div className="rounded-[1.75rem] border border-primary/20 bg-primary/10 p-6">
                <p className="text-sm font-semibold text-foreground">Antes de pagar</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>Si quieres acceso mensual, elige el plan de USD 20</li>
                  <li>Si quieres acceso anual, elige el plan de USD 100</li>
                  <li>Luego solicita la activacion por correo</li>
                </ul>
              </div>

              <div className="space-y-4">
                <Button asChild className="w-full rounded-full py-6 text-base">
                  <Link href={paypalUrl} target="_blank" rel="noreferrer">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Abrir pago en PayPal
                  </Link>
                </Button>
                <p className="text-xs leading-6 text-muted-foreground">
                  Si el pago no deja claro el plan, indicalo en el correo de activacion junto con tu comprobante.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4">
        <div className="container mx-auto flex justify-end">
          <Button asChild className="pointer-events-auto rounded-full px-6 shadow-xl">
            <Link href={paypalUrl} target="_blank" rel="noreferrer">
              <CreditCard className="mr-2 h-4 w-4" />
              Pagar con PayPal
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
