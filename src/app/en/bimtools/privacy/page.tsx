import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { BimtoolsPrivacyView, PrivacySection } from "@/components/pages/bimtools-privacy-view";
import { localeAlternates } from "@/lib/locale";

export const metadata: Metadata = {
  title: "BIMtools Privacy Policy | Frata",
  description:
    "Privacy policy for Frata Ingenieros' BIMtools Revit add-ins: what data is collected, how it is used, who it is shared with, and how to request its deletion.",
  alternates: {
    canonical: "https://www.frataingenieros.com/en/bimtools/privacy",
    languages: localeAlternates("/bimtools/privacy"),
  },
};

const activationEmail = "info@frataingenieros.com";

export default function BimtoolsPrivacyPageEn() {
  return (
    <BimtoolsPrivacyView
      locale="en"
      strings={{
        backToBimtools: "Back to BIMtools",
        eyebrow: "Privacy policy",
        heading: "BIMtools privacy.",
        intro: (
          <>
            This policy applies to every add-in in the BIMtools suite for Revit developed
            and published by Frata Ingenieros (&quot;Frata&quot;, &quot;we&quot;), both free
            and premium, whether distributed from this site or from the Autodesk App Store.
          </>
        ),
        lastUpdated: "Last updated: August 26, 2026.",
      }}
    >
      <Reveal>
        <PrivacySection index="01" title="What data we collect, how, and what for">
          <p>
            BIMtools collects the minimum information needed to activate your license,
            provide support, and prevent unauthorized use of the software. What we
            collect depends on how you obtained the add-in:
          </p>
          <p>
            <strong className="text-foreground">Email address (direct purchase).</strong>{" "}
            When you buy a premium subscription through this site and PayPal, we ask you
            to send an email to {activationEmail} requesting activation. We use that
            email address, together with the payment confirmation, solely to verify your
            purchase, generate your license, and respond to support requests.
          </p>
          <p>
            <strong className="text-foreground">Payment data (PayPal).</strong> Payment is
            processed directly on PayPal through a payment link (&quot;PayPal
            Checkout&quot;). Frata does not receive or store your card or bank account
            details; we only receive a transaction confirmation and the email associated
            with it.
          </p>
          <p>
            <strong className="text-foreground">
              License key and device identifier (activation outside Autodesk).
            </strong>{" "}
            When the add-in is activated outside the Autodesk App Store (Frata&apos;s
            direct licensing), the software sends your license key or activation email
            together with a hardware identifier for your machine (a value derived from
            your PC&apos;s components) to our license server. This is used exclusively to
            validate that the license is active and bind it to a limited number of
            devices, preventing unauthorized simultaneous use.
          </p>
          <p>
            <strong className="text-foreground">Licensing inside the Autodesk App Store.</strong>{" "}
            If you install or activate BIMtools through the Autodesk App Store or your
            Autodesk account, the purchase, your account identity, and the entitlement
            are handled directly by Autodesk under Autodesk&apos;s own privacy policy. In
            that case, Frata only receives from Autodesk the sales/entitlement
            information needed to provide support, and does not independently collect
            your email or a device identifier.
          </p>
          <p>
            <strong className="text-foreground">What we don&apos;t collect.</strong>{" "}
            BIMtools does not include usage telemetry, cloud crash reporting, analytics,
            or advertising SDKs. It also does not access the geometry, drawings, or
            content of your Revit models; all add-in logic runs locally on your machine.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={80}>
        <PrivacySection index="02" title="Third parties we share data with">
          <p>
            Frata does not sell your personal data. The only third parties involved in
            running BIMtools are:
          </p>
          <ul className="space-y-3">
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">PayPal</strong> (payment processor),
              which acts as an independent controller of the payment data you provide to
              it directly, under its own privacy policy.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Autodesk</strong>, when you purchase or
              activate the add-in through the Autodesk App Store; Autodesk handles your
              account and purchase data under its own privacy policy.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Infrastructure providers</strong>{" "}
              (website and license-server hosting), which process data only on our
              behalf and under our instructions, with the same level of protection
              described in this policy.
            </li>
          </ul>
          <p>
            We do not use web analytics tools, advertising networks, or third-party SDKs
            inside the add-ins or on the BIMtools pages. If we add any in the future, we
            will update this policy first, and we require any third party we share data
            with to provide, at minimum, the same level of protection described here.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={160}>
        <PrivacySection index="03" title="Data retention and deletion">
          <p>
            We keep your activation email and license record while your subscription is
            active, plus a reasonable additional period (up to 24 months) needed to
            provide support, manage renewals, and comply with accounting and tax
            obligations. After that period, we delete or anonymize data that is no
            longer needed.
          </p>
          <p>
            Payment transaction records are retained by PayPal under its own retention
            policy; Frata only keeps the payment reference needed for support and
            accounting.
          </p>
          <p>
            The hardware identifier used to validate the license is kept only while the
            license remains bound to that device, and is removed when the license is
            deactivated or transferred.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={240}>
        <PrivacySection index="04" title="How to revoke consent or request deletion of your data">
          <p>
            You can revoke your consent or request deletion of the data Frata controls
            at any time by writing to{" "}
            <a href={`mailto:${activationEmail}`} className="text-primary underline underline-offset-4">
              {activationEmail}
            </a>{" "}
            with the email associated with your license. We will verify your identity and
            delete or anonymize your data within a reasonable time (up to 30 days),
            except for information we must keep under legal or accounting obligations
            (for example, payment receipts).
          </p>
          <p>
            Requesting deletion of your data will deactivate your premium license; you
            can also uninstall the add-in at any time, which immediately stops any local
            license validation against our server.
          </p>
          <p>
            If your purchase or account was handled by PayPal or the Autodesk App Store,
            request deletion of that data directly from PayPal or Autodesk, as
            applicable, since they act as independent controllers of that information.
          </p>
          <p>
            For any other question about this policy, write to us at{" "}
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
