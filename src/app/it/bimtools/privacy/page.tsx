import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { BimtoolsPrivacyView, PrivacySection } from "@/components/pages/bimtools-privacy-view";
import { localeAlternates } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Informativa sulla privacy BIMtools | Frata",
  description:
    "Informativa sulla privacy degli addin BIMtools per Revit di Frata Ingenieros: quali dati vengono raccolti, come vengono utilizzati, con chi vengono condivisi e come richiederne l'eliminazione.",
  alternates: {
    canonical: "https://www.frataingenieros.com/it/bimtools/privacy",
    languages: localeAlternates("/bimtools/privacy"),
  },
};

const activationEmail = "info@frataingenieros.com";

export default function BimtoolsPrivacyPageIt() {
  return (
    <BimtoolsPrivacyView
      locale="it"
      strings={{
        backToBimtools: "Torna a BIMtools",
        eyebrow: "Informativa sulla privacy",
        heading: "Privacy di BIMtools.",
        intro: (
          <>
            Questa informativa si applica a tutti gli addin della suite BIMtools per Revit
            sviluppati e pubblicati da Frata Ingenieros (&quot;Frata&quot;,
            &quot;noi&quot;), sia nella versione gratuita che premium, distribuiti da questo
            sito o dall&apos;Autodesk App Store.
          </>
        ),
        lastUpdated: "Ultimo aggiornamento: 26 agosto 2026.",
      }}
    >
      <Reveal>
        <PrivacySection index="01" title="Quali dati raccogliamo, come e per quale scopo">
          <p>
            BIMtools raccoglie solo le informazioni minime necessarie per attivare la tua
            licenza, fornire assistenza e prevenire l&apos;uso non autorizzato del
            software. I dati variano in base a come hai ottenuto l&apos;addin:
          </p>
          <p>
            <strong className="text-foreground">Indirizzo email (acquisto diretto).</strong>{" "}
            Quando acquisti un abbonamento premium tramite questo sito e PayPal, ti
            chiediamo di inviare un&apos;email a {activationEmail} per richiedere
            l&apos;attivazione. Utilizziamo questo indirizzo email, insieme alla conferma
            di pagamento, esclusivamente per verificare il tuo acquisto, generare la tua
            licenza e rispondere alle richieste di assistenza.
          </p>
          <p>
            <strong className="text-foreground">Dati di pagamento (PayPal).</strong> Il
            pagamento viene elaborato direttamente su PayPal tramite un link di pagamento
            (&quot;PayPal Checkout&quot;). Frata non riceve né conserva i dati della tua
            carta o del tuo conto bancario; riceviamo solo una conferma della transazione e
            l&apos;email associata.
          </p>
          <p>
            <strong className="text-foreground">
              Chiave di licenza e identificatore del dispositivo (attivazione fuori da
              Autodesk).
            </strong>{" "}
            Quando l&apos;addin viene attivato al di fuori dell&apos;Autodesk App Store
            (licenza diretta di Frata), il software invia la tua chiave di licenza o email
            di attivazione insieme a un identificatore hardware del tuo dispositivo (un
            valore derivato dai componenti del tuo PC) al nostro server di licenze. Questi
            dati vengono utilizzati esclusivamente per verificare che la licenza sia attiva
            e collegarla a un numero limitato di dispositivi, prevenendo un uso simultaneo
            non autorizzato.
          </p>
          <p>
            <strong className="text-foreground">Licenza tramite Autodesk App Store.</strong>{" "}
            Se installi o attivi BIMtools tramite l&apos;Autodesk App Store o il tuo
            account Autodesk, l&apos;acquisto, l&apos;identità del tuo account e il diritto
            d&apos;uso (&quot;entitlement&quot;) sono gestiti direttamente da Autodesk
            secondo la propria informativa sulla privacy. In questo caso, Frata riceve da
            Autodesk solo le informazioni di vendita/entitlement necessarie per fornire
            assistenza, e non raccoglie autonomamente né la tua email né un identificatore
            del dispositivo.
          </p>
          <p>
            <strong className="text-foreground">Cosa non raccogliamo.</strong> BIMtools non
            include telemetria d&apos;uso, segnalazione errori nel cloud, analisi né SDK
            pubblicitari. Inoltre non accede alla geometria, ai disegni o al contenuto dei
            tuoi modelli Revit; tutta la logica degli addin viene eseguita localmente sul
            tuo dispositivo.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={80}>
        <PrivacySection index="02" title="Terze parti con cui condividiamo i dati">
          <p>
            Frata non vende i tuoi dati personali. Le uniche terze parti coinvolte nel
            funzionamento di BIMtools sono:
          </p>
          <ul className="space-y-3">
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">PayPal</strong> (elaboratore di
              pagamenti), che agisce come titolare indipendente dei dati di pagamento che
              gli fornisci direttamente, secondo la propria informativa sulla privacy.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Autodesk</strong>, quando acquisti o
              attivi l&apos;addin tramite l&apos;Autodesk App Store; Autodesk tratta i dati
              del tuo account e dell&apos;acquisto secondo la propria informativa sulla
              privacy.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Fornitori di infrastruttura</strong>{" "}
              (hosting del sito web e del server di licenze), che trattano i dati
              esclusivamente per nostro conto e secondo le nostre istruzioni, con lo stesso
              livello di protezione descritto in questa informativa.
            </li>
          </ul>
          <p>
            Non utilizziamo strumenti di analisi web, reti pubblicitarie o SDK di terze
            parti all&apos;interno degli addin o sulle pagine BIMtools. Se in futuro ne
            integrassimo qualcuno, aggiorneremo prima questa informativa e richiederemo a
            qualsiasi terza parte con cui condividiamo dati di offrire, come minimo, il
            livello di protezione qui descritto.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={160}>
        <PrivacySection index="03" title="Conservazione ed eliminazione dei dati">
          <p>
            Conserviamo la tua email di attivazione e il registro della tua licenza per
            tutta la durata dell&apos;abbonamento attivo, più un periodo ragionevole
            aggiuntivo (fino a 24 mesi) necessario per fornire assistenza, gestire i
            rinnovi e adempiere agli obblighi contabili e fiscali. Trascorso tale periodo,
            eliminiamo o anonimizziamo i dati non più necessari.
          </p>
          <p>
            I registri delle transazioni di pagamento sono conservati da PayPal secondo la
            propria politica di conservazione; Frata conserva solo il riferimento di
            pagamento necessario per assistenza e contabilità.
          </p>
          <p>
            L&apos;identificatore hardware utilizzato per convalidare la licenza viene
            conservato solo finché la licenza rimane collegata a quel dispositivo, e viene
            eliminato alla disattivazione o al trasferimento della licenza.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={240}>
        <PrivacySection
          index="04"
          title="Come revocare il consenso o richiedere l'eliminazione dei tuoi dati"
        >
          <p>
            Puoi revocare il tuo consenso o richiedere l&apos;eliminazione dei dati
            controllati da Frata in qualsiasi momento scrivendo a{" "}
            <a href={`mailto:${activationEmail}`} className="text-primary underline underline-offset-4">
              {activationEmail}
            </a>
            , indicando l&apos;email associata alla tua licenza. Verificheremo la tua
            identità ed elimineremo o anonimizzeremo i tuoi dati entro un termine
            ragionevole (fino a 30 giorni), ad eccezione delle informazioni che dobbiamo
            conservare per obblighi legali o contabili (ad esempio, le ricevute di
            pagamento).
          </p>
          <p>
            Richiedere l&apos;eliminazione dei tuoi dati disattiverà la tua licenza
            premium; puoi anche disinstallare l&apos;addin in qualsiasi momento, il che
            interrompe immediatamente qualsiasi convalida locale della licenza rispetto al
            nostro server.
          </p>
          <p>
            Se il tuo acquisto o account è stato gestito da PayPal o dall&apos;Autodesk App
            Store, richiedi l&apos;eliminazione di tali dati direttamente a PayPal o
            Autodesk, a seconda dei casi, poiché agiscono come titolari indipendenti di
            tali informazioni.
          </p>
          <p>
            Per qualsiasi altra domanda su questa informativa, scrivici a{" "}
            <a href={`mailto:${activationEmail}`} className="text-primary underline underline-offset-4">
              {activationEmail}
            </a>
            .
          </p>
        </PrivacySection>
      </Reveal>
    </BimtoolsPrivacyView>
  );
}
