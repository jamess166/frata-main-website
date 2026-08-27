import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { BimtoolsPrivacyView, PrivacySection } from "@/components/pages/bimtools-privacy-view";
import { localeAlternates } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Politique de confidentialité BIMtools | Frata",
  description:
    "Politique de confidentialité des addins BIMtools pour Revit de Frata Ingenieros : quelles données sont collectées, comment elles sont utilisées, avec qui elles sont partagées et comment demander leur suppression.",
  alternates: {
    canonical: "https://www.frataingenieros.com/fr/bimtools/privacy",
    languages: localeAlternates("/bimtools/privacy"),
  },
};

const activationEmail = "info@frataingenieros.com";

export default function BimtoolsPrivacyPageFr() {
  return (
    <BimtoolsPrivacyView
      locale="fr"
      strings={{
        backToBimtools: "Retour à BIMtools",
        eyebrow: "Politique de confidentialité",
        heading: "Confidentialité de BIMtools.",
        intro: (
          <>
            Cette politique s&apos;applique à tous les addins de la suite BIMtools pour
            Revit développés et publiés par Frata Ingenieros (&laquo; Frata &raquo;,
            &laquo; nous &raquo;), dans leur version gratuite comme premium, qu&apos;ils
            soient distribués depuis ce site ou depuis l&apos;Autodesk App Store.
          </>
        ),
        lastUpdated: "Dernière mise à jour : 26 août 2026.",
      }}
    >
      <Reveal>
        <PrivacySection index="01" title="Quelles données nous collectons, comment et pourquoi">
          <p>
            BIMtools collecte le minimum d&apos;informations nécessaire pour activer votre
            licence, fournir un support et empêcher toute utilisation non autorisée du
            logiciel. Les données varient selon la manière dont vous avez obtenu l&apos;addin :
          </p>
          <p>
            <strong className="text-foreground">Adresse e-mail (achat direct).</strong>{" "}
            Lorsque vous achetez un abonnement premium via ce site et PayPal, nous vous
            demandons d&apos;envoyer un e-mail à {activationEmail} pour demander
            l&apos;activation. Nous utilisons cette adresse e-mail, avec la confirmation de
            paiement, uniquement pour vérifier votre achat, générer votre licence et
            répondre à vos demandes de support.
          </p>
          <p>
            <strong className="text-foreground">Données de paiement (PayPal).</strong> Le
            paiement est traité directement sur PayPal via un lien de paiement (&laquo;
            PayPal Checkout &raquo;). Frata ne reçoit ni ne stocke vos données de carte ou
            de compte bancaire ; nous recevons uniquement une confirmation de transaction et
            l&apos;e-mail associé.
          </p>
          <p>
            <strong className="text-foreground">
              Clé de licence et identifiant de l&apos;appareil (activation hors Autodesk).
            </strong>{" "}
            Lorsque l&apos;addin est activé en dehors de l&apos;Autodesk App Store (licence
            directe de Frata), le logiciel envoie votre clé de licence ou votre e-mail
            d&apos;activation, ainsi qu&apos;un identifiant matériel de votre appareil (une
            valeur dérivée des composants de votre PC), à notre serveur de licences. Ces
            données servent exclusivement à vérifier que la licence est active et à la lier
            à un nombre limité d&apos;appareils, afin d&apos;éviter une utilisation
            simultanée non autorisée.
          </p>
          <p>
            <strong className="text-foreground">Licence via l&apos;Autodesk App Store.</strong>{" "}
            Si vous installez ou activez BIMtools via l&apos;Autodesk App Store ou votre
            compte Autodesk, l&apos;achat, l&apos;identité de votre compte et le droit
            d&apos;utilisation (&laquo; entitlement &raquo;) sont gérés directement par
            Autodesk conformément à sa propre politique de confidentialité. Dans ce cas,
            Frata ne reçoit d&apos;Autodesk que les informations de vente/entitlement
            nécessaires pour vous fournir un support, et ne collecte ni votre e-mail ni un
            identifiant d&apos;appareil de son côté.
          </p>
          <p>
            <strong className="text-foreground">Ce que nous ne collectons pas.</strong>{" "}
            BIMtools n&apos;inclut aucune télémétrie d&apos;utilisation, aucun rapport
            d&apos;erreurs dans le cloud, aucune analyse ni SDK publicitaire. Il
            n&apos;accède pas non plus à la géométrie, aux plans ou au contenu de vos
            modèles Revit ; toute la logique des addins s&apos;exécute localement sur votre
            appareil.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={80}>
        <PrivacySection index="02" title="Tiers avec lesquels nous partageons des données">
          <p>
            Frata ne vend pas vos données personnelles. Les seuls tiers impliqués dans le
            fonctionnement de BIMtools sont :
          </p>
          <ul className="space-y-3">
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">PayPal</strong> (prestataire de
              paiement), qui agit en tant que responsable indépendant des données de
              paiement que vous lui fournissez directement, conformément à sa propre
              politique de confidentialité.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Autodesk</strong>, lorsque vous achetez
              ou activez l&apos;addin via l&apos;Autodesk App Store ; Autodesk traite les
              données de votre compte et de votre achat conformément à sa propre politique
              de confidentialité.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Fournisseurs d&apos;infrastructure</strong>{" "}
              (hébergement du site et du serveur de licences), qui traitent les données
              uniquement en notre nom et selon nos instructions, avec le même niveau de
              protection décrit dans cette politique.
            </li>
          </ul>
          <p>
            Nous n&apos;utilisons aucun outil d&apos;analyse web, réseau publicitaire ni SDK
            tiers au sein des addins ou sur les pages BIMtools. Si nous en intégrons à
            l&apos;avenir, nous mettrons cette politique à jour au préalable et exigerons de
            tout tiers avec qui nous partageons des données qu&apos;il offre, au minimum, le
            niveau de protection décrit ici.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={160}>
        <PrivacySection index="03" title="Conservation et suppression des données">
          <p>
            Nous conservons votre e-mail d&apos;activation et votre enregistrement de
            licence tant que votre abonnement est actif, plus une période supplémentaire
            raisonnable (jusqu&apos;à 24 mois) nécessaire pour le support, la gestion des
            renouvellements et le respect des obligations comptables et fiscales. Passé ce
            délai, nous supprimons ou anonymisons les données qui ne sont plus nécessaires.
          </p>
          <p>
            Les enregistrements des transactions de paiement sont conservés par PayPal selon
            sa propre politique de conservation ; Frata ne conserve que la référence de
            paiement nécessaire au support et à la comptabilité.
          </p>
          <p>
            L&apos;identifiant matériel utilisé pour valider la licence n&apos;est conservé
            que tant que la licence reste liée à cet appareil, et il est supprimé lors de la
            désactivation ou du transfert de la licence.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={240}>
        <PrivacySection
          index="04"
          title="Comment révoquer votre consentement ou demander la suppression de vos données"
        >
          <p>
            Vous pouvez révoquer votre consentement ou demander la suppression des données
            contrôlées par Frata à tout moment en écrivant à{" "}
            <a href={`mailto:${activationEmail}`} className="text-primary underline underline-offset-4">
              {activationEmail}
            </a>
            , en indiquant l&apos;e-mail associé à votre licence. Nous vérifierons votre
            identité et supprimerons ou anonymiserons vos données dans un délai raisonnable
            (jusqu&apos;à 30 jours), sauf pour les informations que nous devons conserver
            pour des obligations légales ou comptables (par exemple, les reçus de
            paiement).
          </p>
          <p>
            Demander la suppression de vos données désactivera votre licence premium ; vous
            pouvez également désinstaller l&apos;addin à tout moment, ce qui arrête
            immédiatement toute validation locale de licence auprès de notre serveur.
          </p>
          <p>
            Si votre achat ou votre compte a été géré par PayPal ou l&apos;Autodesk App
            Store, demandez la suppression de ces données directement auprès de PayPal ou
            d&apos;Autodesk, selon le cas, car ils agissent en tant que responsables
            indépendants de ces informations.
          </p>
          <p>
            Pour toute autre question concernant cette politique, écrivez-nous à{" "}
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
