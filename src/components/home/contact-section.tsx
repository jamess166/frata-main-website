"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Eyebrow } from "@/components/site/eyebrow";

export function HomeContactSection({ locale = "es" }: { locale?: "es" | "en" }) {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mblplrvv");
  const formRef = useRef<HTMLFormElement>(null);
  const copy =
    locale === "en"
      ? {
          eyebrow: "Contact",
          title: "Tell us what you need to build.",
          description:
            "BIM consulting, modeling, on-site support or a custom tool for Revit or Tekla. Write to us and we'll come back with a concrete proposal.",
          name: "Name",
          email: "Email",
          message: "Your project",
          placeholder:
            "Example: we need BIM consulting for a project, structural modeling or an add-in for Revit/Tekla.",
          submit: "Request proposal",
          submitting: "Sending...",
          successTitle: "Message sent",
          successDescription:
            "We will get back to you soon to review your BIM or software development requirement.",
        }
      : {
          eyebrow: "Contacto",
          title: "Cuéntanos qué necesitas construir.",
          description:
            "Consultoría BIM, modelado, soporte en obra o una herramienta a medida para Revit o Tekla. Escríbenos y volvemos con una propuesta concreta.",
          name: "Nombre",
          email: "Correo",
          message: "Tu proyecto",
          placeholder:
            "Ejemplo: necesitamos consultoría BIM para una obra, modelado estructural o un addin para Revit/Tekla.",
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
    <section id="contact" className="border-t border-border">
      <div className="container mx-auto grid gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32">
        <div className="max-w-xl">
          <Eyebrow>{copy.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-headline text-display-md font-bold text-foreground">
            {copy.title}
          </h2>
          <p className="mt-6 text-base leading-8 text-muted-foreground">
            {copy.description}
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8 lg:pt-2">
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="space-y-3">
              <Label htmlFor="name" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {copy.name}
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary"
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-sm text-destructive" />
            </div>
            <div className="space-y-3">
              <Label htmlFor="email" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {copy.email}
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-destructive" />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="message" className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {copy.message}
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder={copy.placeholder}
              className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-destructive" />
          </div>

          <Button
            type="submit"
            size="lg"
            className="rounded-none px-10 text-xs font-medium uppercase tracking-[0.14em]"
            disabled={state.submitting}
          >
            {state.submitting ? copy.submitting : copy.submit}
          </Button>
        </form>
      </div>
    </section>
  );
}
