import type { Locale } from "@/lib/locale";

export const activationEmail = "info@frataingenieros.com";
export const paypalUrl = "https://www.paypal.com/ncp/payment/Y38JM4SMMDME2";

export interface SubscriptionPlanCard {
  badge: string;
  price: string;
  period: string;
  items: string[];
  cta: string;
  highlight: boolean;
}

export interface SubscriptionPageContent {
  meta: { title: string; description: string };
  backToBimtools: string;
  eyebrow: string;
  heading: { line1: string; line2: string };
  intro: string;
  payWithPaypalCta: string;
  seeProcessCta: string;
  plans: { monthly: SubscriptionPlanCard; quarterly: SubscriptionPlanCard; yearly: SubscriptionPlanCard };
  process: {
    eyebrow: string;
    heading: string;
    steps: { title: string; description: string }[];
  };
  payment: {
    anchorId: string;
    eyebrow: string;
    heading: string;
    summary: { monthlyLabel: string; quarterlyLabel: string; yearlyLabel: string; afterPayment: string };
    card: {
      heading: string;
      intro: string;
      bullets: string[];
      cta: string;
      disclaimer: string;
      privacyLabel: string;
    };
  };
}

export const subscriptionContent: Record<Locale, SubscriptionPageContent> = {
  es: {
    meta: {
      title: "Suscripcion Premium BIMtools | Frata",
      description:
        "Suscripcion premium BIMtools para Revit. Accede a todos los addins premium por USD 20 al mes, USD 40 al trimestre o USD 100 al año.",
    },
    backToBimtools: "Volver a BIMtools",
    eyebrow: "Suscripción premium",
    heading: { line1: "Todos los addins premium.", line2: "Una sola suscripción." },
    intro:
      "Para profesionales y equipos que quieren automatización real en Revit, más velocidad en producción y acceso completo al ecosistema premium.",
    payWithPaypalCta: "Pagar con PayPal",
    seeProcessCta: "Ver proceso completo",
    plans: {
      monthly: {
        badge: "Plan mensual",
        price: "USD 20",
        period: "por mes",
        items: [
          "Acceso a todos los addins premium",
          "Ideal para empezar sin compromiso anual",
          "Mismo ecosistema premium completo",
        ],
        cta: "Suscribirme mensual",
        highlight: false,
      },
      quarterly: {
        badge: "Plan trimestral",
        price: "USD 40",
        period: "cada 3 meses",
        items: [
          "Acceso a todos los addins premium",
          "Ahorra frente al pago mensual",
          "Mismo ecosistema premium completo",
        ],
        cta: "Suscribirme trimestral",
        highlight: false,
      },
      yearly: {
        badge: "Plan anual · Mejor valor",
        price: "USD 100",
        period: "por año",
        items: [
          "Acceso a todos los addins premium",
          "Mejor valor para uso continuo",
          "Un solo acceso para todo el stack premium",
        ],
        cta: "Suscribirme anual",
        highlight: true,
      },
    },
    process: {
      eyebrow: "Proceso",
      heading: "Cómo funciona la compra y activación.",
      steps: [
        {
          title: "Prueba el instalador",
          description:
            "Si quieres revisar primero el entorno BIMtools, descarga e instala la versión de prueba desde /download.",
        },
        {
          title: "Paga con PayPal",
          description:
            "En el pago debes indicar si quieres el acceso mensual de USD 20, el trimestral de USD 40 o el acceso anual de USD 100.",
        },
        {
          title: "Solicita la activación",
          description: `Después del pago, envía un correo a ${activationEmail} solicitando la activación de tu acceso premium.`,
        },
      ],
    },
    payment: {
      anchorId: "pago",
      eyebrow: "Pago",
      heading: "Compra tu acceso premium.",
      summary: {
        monthlyLabel: "Mensual:",
        quarterlyLabel: "Trimestral:",
        yearlyLabel: "Anual:",
        afterPayment: `Después del pago, envía el correo de activación a ${activationEmail}`,
      },
      card: {
        heading: "Pagar con PayPal",
        intro: `Abre PayPal, completa tu compra y luego escribe a ${activationEmail} indicando si tu pago corresponde al plan mensual o anual.`,
        bullets: [
          "Si quieres acceso mensual, elige el plan de USD 20",
          "Si quieres acceso trimestral, elige el plan de USD 40",
          "Si quieres acceso anual, elige el plan de USD 100",
          "Luego solicita la activación por correo",
        ],
        cta: "Abrir pago en PayPal",
        disclaimer: "Si el pago no deja claro el plan, indícalo en el correo de activación junto con tu comprobante.",
        privacyLabel: "Política de privacidad de BIMtools",
      },
    },
  },
  en: {
    meta: {
      title: "BIMtools Premium Subscription | Frata",
      description:
        "BIMtools Premium subscription for Revit. Access every premium add-in for USD 20 per month, USD 40 per quarter or USD 100 per year.",
    },
    backToBimtools: "Back to BIMtools",
    eyebrow: "Premium subscription",
    heading: { line1: "Every premium add-in.", line2: "One subscription." },
    intro:
      "For professionals and teams who want real automation in Revit, faster production and full access to the premium ecosystem.",
    payWithPaypalCta: "Pay with PayPal",
    seeProcessCta: "See full process",
    plans: {
      monthly: {
        badge: "Monthly plan",
        price: "USD 20",
        period: "per month",
        items: [
          "Access to every premium add-in",
          "Great for starting without a yearly commitment",
          "Same full premium ecosystem",
        ],
        cta: "Subscribe monthly",
        highlight: false,
      },
      quarterly: {
        badge: "Quarterly plan",
        price: "USD 40",
        period: "every 3 months",
        items: ["Access to every premium add-in", "Save compared to paying monthly", "Same full premium ecosystem"],
        cta: "Subscribe quarterly",
        highlight: false,
      },
      yearly: {
        badge: "Yearly plan · Best value",
        price: "USD 100",
        period: "per year",
        items: [
          "Access to every premium add-in",
          "Best value for continuous use",
          "One access for the whole premium stack",
        ],
        cta: "Subscribe yearly",
        highlight: true,
      },
    },
    process: {
      eyebrow: "Process",
      heading: "How purchase and activation work.",
      steps: [
        {
          title: "Try the installer",
          description: "If you want to review the BIMtools environment first, download and install the trial version.",
        },
        {
          title: "Pay with PayPal",
          description:
            "During payment, indicate whether you want monthly access at USD 20, quarterly access at USD 40, or yearly access at USD 100.",
        },
        {
          title: "Request activation",
          description: `After payment, send an email to ${activationEmail} requesting activation of your premium access.`,
        },
      ],
    },
    payment: {
      anchorId: "payment",
      eyebrow: "Payment",
      heading: "Buy your premium access.",
      summary: {
        monthlyLabel: "Monthly:",
        quarterlyLabel: "Quarterly:",
        yearlyLabel: "Yearly:",
        afterPayment: `After payment, send the activation email to ${activationEmail}`,
      },
      card: {
        heading: "Pay with PayPal",
        intro: `Open PayPal, complete your purchase, then write to ${activationEmail} indicating whether your payment corresponds to the monthly or yearly plan.`,
        bullets: [
          "For monthly access, choose the USD 20 plan",
          "For quarterly access, choose the USD 40 plan",
          "For yearly access, choose the USD 100 plan",
          "Then request activation by email",
        ],
        cta: "Open PayPal payment",
        disclaimer: "If the payment doesn't make the plan clear, mention it in the activation email along with your receipt.",
        privacyLabel: "BIMtools privacy policy",
      },
    },
  },
  de: {
    meta: {
      title: "Premium-Abo BIMtools | Frata",
      description:
        "BIMtools Premium-Abo für Revit. Zugang zu allen Premium-Addins für USD 20 im Monat, USD 40 im Quartal oder USD 100 im Jahr.",
    },
    backToBimtools: "Zurück zu BIMtools",
    eyebrow: "Premium-Abo",
    heading: { line1: "Alle Premium-Addins.", line2: "Ein einziges Abo." },
    intro:
      "Für Fachleute und Teams, die echte Automatisierung in Revit, höhere Produktionsgeschwindigkeit und vollen Zugang zum Premium-Ökosystem wollen.",
    payWithPaypalCta: "Mit PayPal bezahlen",
    seeProcessCta: "Gesamten Ablauf ansehen",
    plans: {
      monthly: {
        badge: "Monatsplan",
        price: "USD 20",
        period: "pro Monat",
        items: [
          "Zugang zu allen Premium-Addins",
          "Ideal für den Einstieg ohne Jahresbindung",
          "Gleiches vollständiges Premium-Ökosystem",
        ],
        cta: "Monatlich abonnieren",
        highlight: false,
      },
      quarterly: {
        badge: "Quartalsplan",
        price: "USD 40",
        period: "alle 3 Monate",
        items: [
          "Zugang zu allen Premium-Addins",
          "Günstiger als die monatliche Zahlung",
          "Gleiches vollständiges Premium-Ökosystem",
        ],
        cta: "Vierteljährlich abonnieren",
        highlight: false,
      },
      yearly: {
        badge: "Jahresplan · Bestes Preis-Leistungs-Verhältnis",
        price: "USD 100",
        period: "pro Jahr",
        items: [
          "Zugang zu allen Premium-Addins",
          "Bestes Preis-Leistungs-Verhältnis bei dauerhafter Nutzung",
          "Ein einziger Zugang für den gesamten Premium-Stack",
        ],
        cta: "Jährlich abonnieren",
        highlight: true,
      },
    },
    process: {
      eyebrow: "Ablauf",
      heading: "So funktionieren Kauf und Aktivierung.",
      steps: [
        {
          title: "Installer testen",
          description:
            "Wenn Sie zuerst die BIMtools-Umgebung prüfen möchten, laden Sie die Testversion von /download herunter und installieren Sie sie.",
        },
        {
          title: "Mit PayPal bezahlen",
          description:
            "Geben Sie bei der Zahlung an, ob Sie den monatlichen Zugang für USD 20, den vierteljährlichen für USD 40 oder den jährlichen für USD 100 möchten.",
        },
        {
          title: "Aktivierung anfragen",
          description: `Senden Sie nach der Zahlung eine E-Mail an ${activationEmail} und beantragen Sie die Aktivierung Ihres Premium-Zugangs.`,
        },
      ],
    },
    payment: {
      anchorId: "zahlung",
      eyebrow: "Zahlung",
      heading: "Kaufen Sie Ihren Premium-Zugang.",
      summary: {
        monthlyLabel: "Monatlich:",
        quarterlyLabel: "Vierteljährlich:",
        yearlyLabel: "Jährlich:",
        afterPayment: `Senden Sie nach der Zahlung die Aktivierungs-E-Mail an ${activationEmail}`,
      },
      card: {
        heading: "Mit PayPal bezahlen",
        intro: `Öffnen Sie PayPal, schließen Sie Ihren Kauf ab und schreiben Sie dann an ${activationEmail} mit dem Hinweis, ob Ihre Zahlung dem Monats- oder Jahresplan entspricht.`,
        bullets: [
          "Für monatlichen Zugang wählen Sie den USD-20-Plan",
          "Für vierteljährlichen Zugang wählen Sie den USD-40-Plan",
          "Für jährlichen Zugang wählen Sie den USD-100-Plan",
          "Beantragen Sie anschließend die Aktivierung per E-Mail",
        ],
        cta: "PayPal-Zahlung öffnen",
        disclaimer:
          "Falls die Zahlung den Plan nicht eindeutig erkennen lässt, geben Sie ihn zusammen mit Ihrem Beleg in der Aktivierungs-E-Mail an.",
        privacyLabel: "Datenschutzerklärung von BIMtools",
      },
    },
  },
  fr: {
    meta: {
      title: "Abonnement Premium BIMtools | Frata",
      description:
        "Abonnement premium BIMtools pour Revit. Accédez à tous les addins premium pour 20 USD par mois, 40 USD par trimestre ou 100 USD par an.",
    },
    backToBimtools: "Retour à BIMtools",
    eyebrow: "Abonnement premium",
    heading: { line1: "Tous les addins premium.", line2: "Un seul abonnement." },
    intro:
      "Pour les professionnels et les équipes qui veulent une véritable automatisation dans Revit, plus de rapidité en production et un accès complet à l'écosystème premium.",
    payWithPaypalCta: "Payer avec PayPal",
    seeProcessCta: "Voir le processus complet",
    plans: {
      monthly: {
        badge: "Forfait mensuel",
        price: "20 USD",
        period: "par mois",
        items: [
          "Accès à tous les addins premium",
          "Idéal pour commencer sans engagement annuel",
          "Le même écosystème premium complet",
        ],
        cta: "M'abonner au mois",
        highlight: false,
      },
      quarterly: {
        badge: "Forfait trimestriel",
        price: "40 USD",
        period: "tous les 3 mois",
        items: [
          "Accès à tous les addins premium",
          "Économies par rapport au paiement mensuel",
          "Le même écosystème premium complet",
        ],
        cta: "M'abonner au trimestre",
        highlight: false,
      },
      yearly: {
        badge: "Forfait annuel · Meilleur rapport qualité-prix",
        price: "100 USD",
        period: "par an",
        items: [
          "Accès à tous les addins premium",
          "Meilleur rapport qualité-prix pour un usage continu",
          "Un seul accès pour toute la suite premium",
        ],
        cta: "M'abonner à l'année",
        highlight: true,
      },
    },
    process: {
      eyebrow: "Processus",
      heading: "Comment fonctionnent l'achat et l'activation.",
      steps: [
        {
          title: "Essayez l'installateur",
          description:
            "Si vous souhaitez d'abord découvrir l'environnement BIMtools, téléchargez et installez la version d'essai depuis /download.",
        },
        {
          title: "Payez avec PayPal",
          description:
            "Lors du paiement, indiquez si vous souhaitez l'accès mensuel à 20 USD, trimestriel à 40 USD ou annuel à 100 USD.",
        },
        {
          title: "Demandez l'activation",
          description: `Après le paiement, envoyez un e-mail à ${activationEmail} pour demander l'activation de votre accès premium.`,
        },
      ],
    },
    payment: {
      anchorId: "paiement",
      eyebrow: "Paiement",
      heading: "Achetez votre accès premium.",
      summary: {
        monthlyLabel: "Mensuel :",
        quarterlyLabel: "Trimestriel :",
        yearlyLabel: "Annuel :",
        afterPayment: `Après le paiement, envoyez l'e-mail d'activation à ${activationEmail}`,
      },
      card: {
        heading: "Payer avec PayPal",
        intro: `Ouvrez PayPal, finalisez votre achat, puis écrivez à ${activationEmail} en indiquant si votre paiement correspond au forfait mensuel ou annuel.`,
        bullets: [
          "Pour un accès mensuel, choisissez le forfait à 20 USD",
          "Pour un accès trimestriel, choisissez le forfait à 40 USD",
          "Pour un accès annuel, choisissez le forfait à 100 USD",
          "Demandez ensuite l'activation par e-mail",
        ],
        cta: "Ouvrir le paiement PayPal",
        disclaimer: "Si le paiement ne précise pas clairement le forfait, indiquez-le dans l'e-mail d'activation avec votre reçu.",
        privacyLabel: "Politique de confidentialité de BIMtools",
      },
    },
  },
  it: {
    meta: {
      title: "Abbonamento Premium BIMtools | Frata",
      description:
        "Abbonamento premium BIMtools per Revit. Accedi a tutti gli addin premium per USD 20 al mese, USD 40 al trimestre o USD 100 all'anno.",
    },
    backToBimtools: "Torna a BIMtools",
    eyebrow: "Abbonamento premium",
    heading: { line1: "Tutti gli addin premium.", line2: "Un solo abbonamento." },
    intro:
      "Per professionisti e team che vogliono una vera automazione in Revit, maggiore velocità in produzione e accesso completo all'ecosistema premium.",
    payWithPaypalCta: "Paga con PayPal",
    seeProcessCta: "Vedi il processo completo",
    plans: {
      monthly: {
        badge: "Piano mensile",
        price: "USD 20",
        period: "al mese",
        items: [
          "Accesso a tutti gli addin premium",
          "Ideale per iniziare senza impegno annuale",
          "Stesso ecosistema premium completo",
        ],
        cta: "Abbonati mensilmente",
        highlight: false,
      },
      quarterly: {
        badge: "Piano trimestrale",
        price: "USD 40",
        period: "ogni 3 mesi",
        items: [
          "Accesso a tutti gli addin premium",
          "Risparmi rispetto al pagamento mensile",
          "Stesso ecosistema premium completo",
        ],
        cta: "Abbonati trimestralmente",
        highlight: false,
      },
      yearly: {
        badge: "Piano annuale · Miglior valore",
        price: "USD 100",
        period: "all'anno",
        items: [
          "Accesso a tutti gli addin premium",
          "Miglior valore per un uso continuativo",
          "Un unico accesso per tutto lo stack premium",
        ],
        cta: "Abbonati annualmente",
        highlight: true,
      },
    },
    process: {
      eyebrow: "Processo",
      heading: "Come funzionano acquisto e attivazione.",
      steps: [
        {
          title: "Prova l'installer",
          description:
            "Se vuoi prima esaminare l'ambiente BIMtools, scarica e installa la versione di prova da /download.",
        },
        {
          title: "Paga con PayPal",
          description:
            "Al momento del pagamento indica se desideri l'accesso mensile a USD 20, trimestrale a USD 40 o annuale a USD 100.",
        },
        {
          title: "Richiedi l'attivazione",
          description: `Dopo il pagamento, invia un'email a ${activationEmail} richiedendo l'attivazione del tuo accesso premium.`,
        },
      ],
    },
    payment: {
      anchorId: "pagamento",
      eyebrow: "Pagamento",
      heading: "Acquista il tuo accesso premium.",
      summary: {
        monthlyLabel: "Mensile:",
        quarterlyLabel: "Trimestrale:",
        yearlyLabel: "Annuale:",
        afterPayment: `Dopo il pagamento, invia l'email di attivazione a ${activationEmail}`,
      },
      card: {
        heading: "Paga con PayPal",
        intro: `Apri PayPal, completa l'acquisto e poi scrivi a ${activationEmail} indicando se il pagamento corrisponde al piano mensile o annuale.`,
        bullets: [
          "Per l'accesso mensile, scegli il piano da USD 20",
          "Per l'accesso trimestrale, scegli il piano da USD 40",
          "Per l'accesso annuale, scegli il piano da USD 100",
          "Poi richiedi l'attivazione via email",
        ],
        cta: "Apri il pagamento PayPal",
        disclaimer: "Se il pagamento non rende chiaro il piano, indicalo nell'email di attivazione insieme alla tua ricevuta.",
        privacyLabel: "Informativa sulla privacy di BIMtools",
      },
    },
  },
  pt: {
    meta: {
      title: "Assinatura Premium BIMtools | Frata",
      description:
        "Assinatura premium do BIMtools para Revit. Acesse todos os addins premium por USD 20 por mês, USD 40 por trimestre ou USD 100 por ano.",
    },
    backToBimtools: "Voltar ao BIMtools",
    eyebrow: "Assinatura premium",
    heading: { line1: "Todos os addins premium.", line2: "Uma única assinatura." },
    intro:
      "Para profissionais e equipes que querem automação real no Revit, mais velocidade na produção e acesso completo ao ecossistema premium.",
    payWithPaypalCta: "Pagar com PayPal",
    seeProcessCta: "Ver processo completo",
    plans: {
      monthly: {
        badge: "Plano mensal",
        price: "USD 20",
        period: "por mês",
        items: [
          "Acesso a todos os addins premium",
          "Ideal para começar sem compromisso anual",
          "Mesmo ecossistema premium completo",
        ],
        cta: "Assinar mensalmente",
        highlight: false,
      },
      quarterly: {
        badge: "Plano trimestral",
        price: "USD 40",
        period: "a cada 3 meses",
        items: [
          "Acesso a todos os addins premium",
          "Economize em relação ao pagamento mensal",
          "Mesmo ecossistema premium completo",
        ],
        cta: "Assinar trimestralmente",
        highlight: false,
      },
      yearly: {
        badge: "Plano anual · Melhor custo-benefício",
        price: "USD 100",
        period: "por ano",
        items: [
          "Acesso a todos os addins premium",
          "Melhor custo-benefício para uso contínuo",
          "Um único acesso para todo o stack premium",
        ],
        cta: "Assinar anualmente",
        highlight: true,
      },
    },
    process: {
      eyebrow: "Processo",
      heading: "Como funcionam a compra e a ativação.",
      steps: [
        {
          title: "Experimente o instalador",
          description:
            "Se quiser revisar primeiro o ambiente BIMtools, baixe e instale a versão de teste em /download.",
        },
        {
          title: "Pague com PayPal",
          description:
            "No pagamento, indique se deseja o acesso mensal de USD 20, trimestral de USD 40 ou anual de USD 100.",
        },
        {
          title: "Solicite a ativação",
          description: `Após o pagamento, envie um e-mail para ${activationEmail} solicitando a ativação do seu acesso premium.`,
        },
      ],
    },
    payment: {
      anchorId: "pagamento",
      eyebrow: "Pagamento",
      heading: "Compre seu acesso premium.",
      summary: {
        monthlyLabel: "Mensal:",
        quarterlyLabel: "Trimestral:",
        yearlyLabel: "Anual:",
        afterPayment: `Após o pagamento, envie o e-mail de ativação para ${activationEmail}`,
      },
      card: {
        heading: "Pagar com PayPal",
        intro: `Abra o PayPal, conclua sua compra e depois escreva para ${activationEmail} indicando se o pagamento corresponde ao plano mensal ou anual.`,
        bullets: [
          "Para acesso mensal, escolha o plano de USD 20",
          "Para acesso trimestral, escolha o plano de USD 40",
          "Para acesso anual, escolha o plano de USD 100",
          "Depois solicite a ativação por e-mail",
        ],
        cta: "Abrir pagamento no PayPal",
        disclaimer: "Se o pagamento não deixar claro o plano, informe isso no e-mail de ativação junto com seu comprovante.",
        privacyLabel: "Política de privacidade do BIMtools",
      },
    },
  },
  ru: {
    meta: {
      title: "Премиум-подписка BIMtools | Frata",
      description:
        "Премиум-подписка BIMtools для Revit. Доступ ко всем премиум-аддинам за 20 USD в месяц, 40 USD в квартал или 100 USD в год.",
    },
    backToBimtools: "Назад к BIMtools",
    eyebrow: "Премиум-подписка",
    heading: { line1: "Все премиум-аддины.", line2: "Единая подписка." },
    intro:
      "Для специалистов и команд, которым нужна настоящая автоматизация в Revit, более высокая скорость производства и полный доступ к премиум-экосистеме.",
    payWithPaypalCta: "Оплатить через PayPal",
    seeProcessCta: "Смотреть весь процесс",
    plans: {
      monthly: {
        badge: "Месячный план",
        price: "20 USD",
        period: "в месяц",
        items: [
          "Доступ ко всем премиум-аддинам",
          "Отлично подходит для старта без годовых обязательств",
          "Та же полная премиум-экосистема",
        ],
        cta: "Оформить месячную подписку",
        highlight: false,
      },
      quarterly: {
        badge: "Квартальный план",
        price: "40 USD",
        period: "каждые 3 месяца",
        items: [
          "Доступ ко всем премиум-аддинам",
          "Выгоднее ежемесячной оплаты",
          "Та же полная премиум-экосистема",
        ],
        cta: "Оформить квартальную подписку",
        highlight: false,
      },
      yearly: {
        badge: "Годовой план · Лучшая цена",
        price: "100 USD",
        period: "в год",
        items: [
          "Доступ ко всем премиум-аддинам",
          "Лучшая цена при постоянном использовании",
          "Единый доступ ко всему премиум-пакету",
        ],
        cta: "Оформить годовую подписку",
        highlight: true,
      },
    },
    process: {
      eyebrow: "Процесс",
      heading: "Как проходит покупка и активация.",
      steps: [
        {
          title: "Попробуйте установщик",
          description:
            "Если вы хотите сначала изучить среду BIMtools, скачайте и установите пробную версию с /download.",
        },
        {
          title: "Оплатите через PayPal",
          description:
            "При оплате укажите, нужен ли вам месячный доступ за 20 USD, квартальный за 40 USD или годовой за 100 USD.",
        },
        {
          title: "Запросите активацию",
          description: `После оплаты отправьте письмо на ${activationEmail} с запросом на активацию премиум-доступа.`,
        },
      ],
    },
    payment: {
      anchorId: "oplata",
      eyebrow: "Оплата",
      heading: "Купите премиум-доступ.",
      summary: {
        monthlyLabel: "Месячно:",
        quarterlyLabel: "Квартально:",
        yearlyLabel: "Годовой:",
        afterPayment: `После оплаты отправьте письмо для активации на ${activationEmail}`,
      },
      card: {
        heading: "Оплатить через PayPal",
        intro: `Откройте PayPal, завершите покупку, а затем напишите на ${activationEmail}, указав, соответствует ли ваш платёж месячному или годовому плану.`,
        bullets: [
          "Для месячного доступа выберите план за 20 USD",
          "Для квартального доступа выберите план за 40 USD",
          "Для годового доступа выберите план за 100 USD",
          "Затем запросите активацию по электронной почте",
        ],
        cta: "Открыть оплату в PayPal",
        disclaimer: "Если платёж не проясняет выбранный план, укажите это в письме на активацию вместе с квитанцией.",
        privacyLabel: "Политика конфиденциальности BIMtools",
      },
    },
  },
  zh: {
    meta: {
      title: "BIMtools 高级订阅 | Frata",
      description: "适用于 Revit 的 BIMtools 高级订阅。每月 20 美元、每季度 40 美元或每年 100 美元即可使用全部高级插件。",
    },
    backToBimtools: "返回 BIMtools",
    eyebrow: "高级订阅",
    heading: { line1: "全部高级插件。", line2: "只需一份订阅。" },
    intro: "面向希望在 Revit 中实现真正自动化、提升生产效率并完整访问高级生态系统的专业人士与团队。",
    payWithPaypalCta: "使用 PayPal 支付",
    seeProcessCta: "查看完整流程",
    plans: {
      monthly: {
        badge: "月度方案",
        price: "20 美元",
        period: "每月",
        items: ["访问全部高级插件", "无需年度承诺，适合入门", "同样完整的高级生态系统"],
        cta: "订阅月度方案",
        highlight: false,
      },
      quarterly: {
        badge: "季度方案",
        price: "40 美元",
        period: "每 3 个月",
        items: ["访问全部高级插件", "比按月付费更划算", "同样完整的高级生态系统"],
        cta: "订阅季度方案",
        highlight: false,
      },
      yearly: {
        badge: "年度方案 · 最划算",
        price: "100 美元",
        period: "每年",
        items: ["访问全部高级插件", "长期使用性价比最高", "一次访问即可使用完整高级功能集"],
        cta: "订阅年度方案",
        highlight: true,
      },
    },
    process: {
      eyebrow: "流程",
      heading: "购买与激活流程说明。",
      steps: [
        {
          title: "先试用安装程序",
          description: "如果您想先了解 BIMtools 环境，请从 /download 下载并安装试用版。",
        },
        {
          title: "使用 PayPal 支付",
          description: "支付时请注明您需要的是每月 20 美元、每季度 40 美元还是每年 100 美元的访问权限。",
        },
        {
          title: "申请激活",
          description: `支付完成后，请发送邮件至 ${activationEmail} 申请激活您的高级权限。`,
        },
      ],
    },
    payment: {
      anchorId: "payment",
      eyebrow: "支付",
      heading: "购买您的高级权限。",
      summary: {
        monthlyLabel: "月度：",
        quarterlyLabel: "季度：",
        yearlyLabel: "年度：",
        afterPayment: `支付完成后，请将激活邮件发送至 ${activationEmail}`,
      },
      card: {
        heading: "使用 PayPal 支付",
        intro: `打开 PayPal 完成购买，然后发送邮件至 ${activationEmail}，并注明您的付款对应月度方案还是年度方案。`,
        bullets: [
          "如需月度访问权限，请选择 20 美元方案",
          "如需季度访问权限，请选择 40 美元方案",
          "如需年度访问权限，请选择 100 美元方案",
          "随后通过邮件申请激活",
        ],
        cta: "打开 PayPal 支付页面",
        disclaimer: "如果付款未能明确说明所选方案，请在激活邮件中连同付款凭证一并说明。",
        privacyLabel: "BIMtools 隐私政策",
      },
    },
  },
};
