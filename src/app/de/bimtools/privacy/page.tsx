import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { BimtoolsPrivacyView, PrivacySection } from "@/components/pages/bimtools-privacy-view";
import { localeAlternates } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Datenschutzerklärung BIMtools | Frata",
  description:
    "Datenschutzerklärung der BIMtools-Addins für Revit von Frata Ingenieros: welche Daten erhoben werden, wie sie verwendet werden, mit wem sie geteilt werden und wie ihre Löschung beantragt werden kann.",
  alternates: {
    canonical: "https://www.frataingenieros.com/de/bimtools/privacy",
    languages: localeAlternates("/bimtools/privacy"),
  },
};

const activationEmail = "info@frataingenieros.com";

export default function BimtoolsPrivacyPageDe() {
  return (
    <BimtoolsPrivacyView
      locale="de"
      strings={{
        backToBimtools: "Zurück zu BIMtools",
        eyebrow: "Datenschutzerklärung",
        heading: "Datenschutz bei BIMtools.",
        intro: (
          <>
            Diese Richtlinie gilt für alle Addins der BIMtools-Suite für Revit, entwickelt
            und veröffentlicht von Frata Ingenieros (&quot;Frata&quot;, &quot;wir&quot;),
            sowohl in der kostenlosen als auch in der Premium-Version, unabhängig davon, ob
            sie über diese Website oder den Autodesk App Store bezogen werden.
          </>
        ),
        lastUpdated: "Letzte Aktualisierung: 26. August 2026.",
      }}
    >
      <Reveal>
        <PrivacySection index="01" title="Welche Daten wir erheben, wie und wofür">
          <p>
            BIMtools erhebt nur die minimal notwendigen Informationen, um Ihre Lizenz zu
            aktivieren, Support zu leisten und die unbefugte Nutzung der Software zu
            verhindern. Welche Daten das sind, hängt davon ab, wie Sie das Addin erworben
            haben:
          </p>
          <p>
            <strong className="text-foreground">E-Mail-Adresse (Direktkauf).</strong> Wenn
            Sie ein Premium-Abo über diese Website und PayPal kaufen, bitten wir Sie, eine
            E-Mail an {activationEmail} zu senden, um die Aktivierung zu beantragen. Wir
            verwenden diese E-Mail-Adresse zusammen mit der Zahlungsbestätigung
            ausschließlich, um Ihren Kauf zu überprüfen, Ihre Lizenz zu erstellen und
            Support-Anfragen zu beantworten.
          </p>
          <p>
            <strong className="text-foreground">Zahlungsdaten (PayPal).</strong> Die Zahlung
            erfolgt direkt über PayPal über einen Zahlungslink (&quot;PayPal
            Checkout&quot;). Frata erhält oder speichert keine Karten- oder Bankdaten; wir
            erhalten lediglich eine Transaktionsbestätigung und die zugehörige
            E-Mail-Adresse.
          </p>
          <p>
            <strong className="text-foreground">
              Lizenzschlüssel und Geräte-ID (Aktivierung außerhalb von Autodesk).
            </strong>{" "}
            Wenn das Addin außerhalb des Autodesk App Store aktiviert wird (direkte
            Lizenzierung durch Frata), sendet die Software Ihren Lizenzschlüssel oder Ihre
            Aktivierungs-E-Mail zusammen mit einer Hardware-Kennung Ihres Geräts (ein aus
            PC-Komponenten abgeleiteter Wert) an unseren Lizenzserver. Diese Daten dienen
            ausschließlich dazu, zu prüfen, ob die Lizenz aktiv ist, und sie mit einer
            begrenzten Anzahl von Geräten zu verknüpfen, um eine unbefugte gleichzeitige
            Nutzung zu verhindern.
          </p>
          <p>
            <strong className="text-foreground">
              Lizenzierung über den Autodesk App Store.
            </strong>{" "}
            Wenn Sie BIMtools über den Autodesk App Store oder Ihr Autodesk-Konto
            installieren oder aktivieren, werden Kauf, Kontoidentität und Nutzungsrecht
            (&quot;Entitlement&quot;) direkt von Autodesk gemäß dessen eigener
            Datenschutzerklärung verwaltet. In diesem Fall erhält Frata von Autodesk nur die
            für den Support erforderlichen Verkaufs-/Entitlement-Informationen und erhebt
            weder Ihre E-Mail-Adresse noch eine Geräte-ID selbst.
          </p>
          <p>
            <strong className="text-foreground">Was wir nicht erheben.</strong> BIMtools
            enthält keine Nutzungstelemetrie, keine Cloud-Fehlerberichte, keine Analysen und
            keine Werbe-SDKs. Es greift außerdem nicht auf die Geometrie, Pläne oder Inhalte
            Ihrer Revit-Modelle zu; die gesamte Addin-Logik läuft lokal auf Ihrem Gerät.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={80}>
        <PrivacySection index="02" title="Dritte, mit denen wir Daten teilen">
          <p>
            Frata verkauft Ihre personenbezogenen Daten nicht. Die einzigen Dritten, die am
            Betrieb von BIMtools beteiligt sind:
          </p>
          <ul className="space-y-3">
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">PayPal</strong> (Zahlungsdienstleister),
              das als eigenständig verantwortliche Stelle für die Zahlungsdaten fungiert,
              die Sie ihm direkt zur Verfügung stellen, gemäß seiner eigenen
              Datenschutzerklärung.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Autodesk</strong>, wenn Sie das Addin
              über den Autodesk App Store erwerben oder aktivieren; Autodesk verarbeitet
              Ihre Konto- und Kaufdaten gemäß seiner eigenen Datenschutzerklärung.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Infrastrukturanbieter</strong> (Hosting
              der Website und des Lizenzservers), die Daten ausschließlich in unserem Namen
              und nach unseren Anweisungen verarbeiten, mit demselben in dieser Richtlinie
              beschriebenen Schutzniveau.
            </li>
          </ul>
          <p>
            Wir nutzen keine Web-Analyse-Tools, Werbenetzwerke oder Drittanbieter-SDKs
            innerhalb der Addins oder auf den BIMtools-Seiten. Sollten wir künftig solche
            einsetzen, aktualisieren wir diese Richtlinie vorab und verlangen von jedem
            Dritten, mit dem wir Daten teilen, mindestens das hier beschriebene
            Schutzniveau.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={160}>
        <PrivacySection index="03" title="Aufbewahrung und Löschung von Daten">
          <p>
            Wir bewahren Ihre Aktivierungs-E-Mail und Ihren Lizenzdatensatz auf, solange Ihr
            Abo aktiv ist, zuzüglich eines angemessenen weiteren Zeitraums (bis zu 24
            Monate), der für Support, Verlängerungen sowie steuer- und buchhaltungsrechtliche
            Pflichten erforderlich ist. Danach löschen oder anonymisieren wir nicht mehr
            benötigte Daten.
          </p>
          <p>
            Zahlungstransaktionsdaten werden von PayPal gemäß dessen eigener
            Aufbewahrungsrichtlinie verwaltet; Frata behält nur die für Support und
            Buchhaltung nötige Zahlungsreferenz.
          </p>
          <p>
            Die zur Lizenzvalidierung verwendete Hardware-Kennung wird nur so lange
            aufbewahrt, wie die Lizenz an dieses Gerät gebunden ist, und wird bei
            Deaktivierung oder Übertragung der Lizenz gelöscht.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={240}>
        <PrivacySection
          index="04"
          title="Wie Sie Ihre Einwilligung widerrufen oder die Löschung Ihrer Daten beantragen"
        >
          <p>
            Sie können Ihre Einwilligung jederzeit widerrufen oder die Löschung der von
            Frata verwalteten Daten beantragen, indem Sie an{" "}
            <a href={`mailto:${activationEmail}`} className="text-primary underline underline-offset-4">
              {activationEmail}
            </a>{" "}
            schreiben und die mit Ihrer Lizenz verknüpfte E-Mail-Adresse angeben. Wir
            überprüfen Ihre Identität und löschen oder anonymisieren Ihre Daten innerhalb
            einer angemessenen Frist (bis zu 30 Tage), außer bei Informationen, die wir aus
            rechtlichen oder buchhalterischen Gründen aufbewahren müssen (z. B.
            Zahlungsbelege).
          </p>
          <p>
            Die Beantragung der Löschung Ihrer Daten deaktiviert Ihre Premium-Lizenz; Sie
            können das Addin auch jederzeit deinstallieren, wodurch jede lokale
            Lizenzprüfung gegenüber unserem Server sofort gestoppt wird.
          </p>
          <p>
            Wenn Ihr Kauf oder Konto über PayPal oder den Autodesk App Store abgewickelt
            wurde, wenden Sie sich für die Löschung dieser Daten bitte direkt an PayPal bzw.
            Autodesk, da diese als eigenständig verantwortliche Stellen für diese
            Informationen fungieren.
          </p>
          <p>
            Für alle weiteren Fragen zu dieser Richtlinie schreiben Sie uns an{" "}
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
