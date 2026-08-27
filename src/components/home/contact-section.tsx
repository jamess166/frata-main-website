"use client";

import { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Eyebrow } from "@/components/site/eyebrow";
import type { Locale } from "@/lib/locale";

interface ContactCopy {
  eyebrow: string;
  title: string;
  description: string;
  name: string;
  email: string;
  message: string;
  placeholder: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successDescription: string;
}

const COPY: Record<Locale, ContactCopy> = {
  es: {
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
    successDescription: "Te responderemos a la brevedad para revisar tu necesidad BIM o de desarrollo.",
  },
  en: {
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
    successDescription: "We will get back to you soon to review your BIM or software development requirement.",
  },
  de: {
    eyebrow: "Kontakt",
    title: "Erzählen Sie uns, was Sie bauen möchten.",
    description:
      "BIM-Beratung, Modellierung, Unterstützung vor Ort oder eine maßgeschneiderte Lösung für Revit oder Tekla. Schreiben Sie uns und wir melden uns mit einem konkreten Vorschlag.",
    name: "Name",
    email: "E-Mail",
    message: "Ihr Projekt",
    placeholder:
      "Beispiel: Wir benötigen BIM-Beratung für ein Projekt, statische Modellierung oder ein Add-in für Revit/Tekla.",
    submit: "Angebot anfordern",
    submitting: "Wird gesendet...",
    successTitle: "Nachricht gesendet",
    successDescription: "Wir melden uns in Kürze bei Ihnen, um Ihren BIM- oder Softwareentwicklungsbedarf zu besprechen.",
  },
  fr: {
    eyebrow: "Contact",
    title: "Dites-nous ce que vous devez construire.",
    description:
      "Conseil BIM, modélisation, support sur site ou un outil sur mesure pour Revit ou Tekla. Écrivez-nous et nous reviendrons avec une proposition concrète.",
    name: "Nom",
    email: "E-mail",
    message: "Votre projet",
    placeholder:
      "Exemple : nous avons besoin de conseil BIM pour un projet, de modélisation structurelle ou d'un addin pour Revit/Tekla.",
    submit: "Demander une proposition",
    submitting: "Envoi en cours...",
    successTitle: "Message envoyé",
    successDescription: "Nous vous répondrons rapidement pour étudier votre besoin BIM ou de développement logiciel.",
  },
  it: {
    eyebrow: "Contatti",
    title: "Raccontaci cosa devi costruire.",
    description:
      "Consulenza BIM, modellazione, supporto in cantiere o uno strumento su misura per Revit o Tekla. Scrivici e torneremo con una proposta concreta.",
    name: "Nome",
    email: "Email",
    message: "Il tuo progetto",
    placeholder:
      "Esempio: abbiamo bisogno di consulenza BIM per un progetto, modellazione strutturale o un addin per Revit/Tekla.",
    submit: "Richiedi una proposta",
    submitting: "Invio in corso...",
    successTitle: "Messaggio inviato",
    successDescription: "Ti risponderemo a breve per valutare la tua esigenza BIM o di sviluppo software.",
  },
  pt: {
    eyebrow: "Contato",
    title: "Conte-nos o que você precisa construir.",
    description:
      "Consultoria BIM, modelagem, suporte em obra ou uma ferramenta personalizada para Revit ou Tekla. Escreva para nós e retornaremos com uma proposta concreta.",
    name: "Nome",
    email: "E-mail",
    message: "Seu projeto",
    placeholder:
      "Exemplo: precisamos de consultoria BIM para uma obra, modelagem estrutural ou um addin para Revit/Tekla.",
    submit: "Solicitar proposta",
    submitting: "Enviando...",
    successTitle: "Mensagem enviada",
    successDescription: "Retornaremos em breve para avaliar sua necessidade de BIM ou desenvolvimento de software.",
  },
  ru: {
    eyebrow: "Контакты",
    title: "Расскажите, что вам нужно построить.",
    description:
      "BIM-консалтинг, моделирование, поддержка на объекте или индивидуальный инструмент для Revit или Tekla. Напишите нам, и мы вернёмся с конкретным предложением.",
    name: "Имя",
    email: "Эл. почта",
    message: "Ваш проект",
    placeholder: "Например: нужен BIM-консалтинг для проекта, конструктивное моделирование или аддин для Revit/Tekla.",
    submit: "Запросить предложение",
    submitting: "Отправка...",
    successTitle: "Сообщение отправлено",
    successDescription: "Мы скоро свяжемся с вами, чтобы обсудить ваш запрос по BIM или разработке ПО.",
  },
  zh: {
    eyebrow: "联系方式",
    title: "告诉我们您需要构建什么。",
    description: "BIM 咨询、建模、现场支持，或为 Revit 或 Tekla 定制工具。给我们留言，我们会带着具体方案与您联系。",
    name: "姓名",
    email: "邮箱",
    message: "您的项目",
    placeholder: "例如：我们需要项目的 BIM 咨询、结构建模，或 Revit/Tekla 插件。",
    submit: "申请方案",
    submitting: "发送中...",
    successTitle: "消息已发送",
    successDescription: "我们会尽快与您联系，了解您的 BIM 或软件开发需求。",
  },
};

export function HomeContactSection({ locale = "es" }: { locale?: Locale }) {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("mblplrvv");
  const formRef = useRef<HTMLFormElement>(null);
  const copy = COPY[locale];

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
