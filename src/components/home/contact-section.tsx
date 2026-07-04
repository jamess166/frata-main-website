"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function HomeContactSection({ locale = "es" }: { locale?: "es" | "en" }) {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mblplrvv");
  const formRef = useRef<HTMLFormElement>(null);
  const copy =
    locale === "en"
      ? {
          title: "Let’s talk about BIM consulting, modeling or custom development.",
          description:
            "If you need to strengthen your BIM operation, automate processes in Revit or build solutions for Tekla, this is the best place to start.",
          services:
            "Core services: BIM implementation, modeling, coordination, Revit add-ins and technical applications.",
          response: "Expected response: initial proposal, technical scope and next commercial step.",
          name: "Name",
          email: "Email",
          message: "Tell us what you need",
          placeholder:
            "Example: we need BIM consulting for a project, structural modeling or an add-in for Revit/Tekla.",
          submit: "Request proposal",
          submitting: "Sending...",
          successTitle: "Message sent",
          successDescription:
            "We will get back to you soon to review your BIM or software development requirement.",
        }
      : {
          title: "Conversemos sobre consultoria BIM, modelado o desarrollo a medida.",
          description:
            "Si necesitas reforzar tu operacion BIM, automatizar procesos en Revit o desarrollar soluciones para Tekla, esta es la mejor forma de iniciar.",
          services:
            "Servicios clave: implementacion BIM, modelado, coordinacion, addins para Revit y aplicaciones tecnicas.",
          response: "Respuesta esperada: propuesta inicial, alcance tecnico y siguiente paso comercial.",
          name: "Nombre",
          email: "Correo",
          message: "Cuéntanos tu necesidad",
          placeholder:
            "Ejemplo: necesitamos consultoria BIM para una obra, modelado estructural o un addin para Revit/Tekla.",
          submit: "Solicitar propuesta",
          submitting: "Enviando...",
          successTitle: "Mensaje enviado",
          successDescription:
            "Te responderemos a la brevedad para revisar tu necesidad BIM o de desarrollo.",
        };

  useEffect(() => {
    if (!state.succeeded) return;

    toast({
      title: copy.successTitle,
      description: copy.successDescription,
    });
    formRef.current?.reset();
  }, [copy.successDescription, copy.successTitle, state.succeeded, toast]);

  return (
    <section id="contact" className="border-t bg-[linear-gradient(180deg,_transparent,_hsl(var(--primary)/0.06))]">
      <div className="container mx-auto grid gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Contacto</p>
          <h2 className="mt-4 font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            {copy.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {copy.description}
          </p>
          <div className="mt-8 space-y-4 text-sm text-muted-foreground">
            <p>{copy.services}</p>
            <p>{copy.response}</p>
          </div>
        </div>

        <Card className="border-primary/15 bg-card/85 shadow-2xl shadow-primary/10">
          <CardContent className="p-6 sm:p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">{copy.name}</Label>
                  <Input id="name" name="name" type="text" autoComplete="name" required />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-destructive" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">{copy.email}</Label>
                  <Input id="email" name="email" type="email" autoComplete="email" required />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-destructive" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">{copy.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder={copy.placeholder}
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-destructive" />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={state.submitting}>
                {state.submitting ? copy.submitting : copy.submit}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
