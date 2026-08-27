import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { BimtoolsPrivacyView, PrivacySection } from "@/components/pages/bimtools-privacy-view";
import { localeAlternates } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Política de privacidad BIMtools | Frata",
  description:
    "Política de privacidad de los addins BIMtools para Revit de Frata Ingenieros: qué datos se recopilan, cómo se usan, con quién se comparten y cómo solicitar su eliminación.",
  alternates: {
    canonical: "https://www.frataingenieros.com/bimtools/privacy",
    languages: localeAlternates("/bimtools/privacy"),
  },
};

const activationEmail = "info@frataingenieros.com";

export default function BimtoolsPrivacyPage() {
  return (
    <BimtoolsPrivacyView
      locale="es"
      strings={{
        backToBimtools: "Volver a BIMtools",
        eyebrow: "Política de privacidad",
        heading: "Privacidad de BIMtools.",
        intro: (
          <>
            Esta política aplica a todos los addins de la suite BIMtools para Revit
            desarrollados y publicados por Frata Ingenieros (&quot;Frata&quot;,
            &quot;nosotros&quot;), tanto en su versión gratuita como premium, distribuidos
            desde este sitio o desde el Autodesk App Store.
          </>
        ),
        lastUpdated: "Última actualización: 26 de agosto de 2026.",
      }}
    >
      <Reveal>
        <PrivacySection index="01" title="Qué datos recopilamos, cómo y para qué">
          <p>
            BIMtools recopila la mínima información necesaria para activar tu licencia,
            dar soporte y prevenir el uso no autorizado del software. Los datos varían
            según cómo obtuviste el add-in:
          </p>
          <p>
            <strong className="text-foreground">Correo electrónico (compra directa).</strong>{" "}
            Cuando compras una suscripción premium a través de este sitio y PayPal, te
            pedimos que envíes un correo a {activationEmail} solicitando la activación.
            Usamos esa dirección de correo, junto con la confirmación de pago, únicamente
            para verificar tu compra, generar tu licencia y responder a tus consultas de
            soporte.
          </p>
          <p>
            <strong className="text-foreground">Datos de pago (PayPal).</strong> El pago se
            procesa directamente en PayPal a través de un enlace de pago (&quot;PayPal
            Checkout&quot;). Frata no recibe ni almacena tus datos de tarjeta o cuenta
            bancaria; solo recibimos una confirmación de la transacción y el correo
            asociado a ella.
          </p>
          <p>
            <strong className="text-foreground">
              Clave de licencia e identificador de equipo (activación fuera de Autodesk).
            </strong>{" "}
            Cuando el add-in se activa fuera del Autodesk App Store (licenciamiento
            directo de Frata), el software envía tu clave de licencia o correo de
            activación junto con un identificador de hardware de tu equipo (un valor
            derivado de componentes de tu PC) a nuestro servidor de licencias. Este dato
            se usa exclusivamente para validar que la licencia está activa y vincularla a
            un número limitado de equipos, evitando el uso simultáneo no autorizado.
          </p>
          <p>
            <strong className="text-foreground">
              Licenciamiento dentro de Autodesk App Store.
            </strong>{" "}
            Si instalas o activas BIMtools a través del Autodesk App Store o tu cuenta de
            Autodesk, la compra, la identidad de tu cuenta y el derecho de uso
            (&quot;entitlement&quot;) son gestionados directamente por Autodesk conforme a
            la política de privacidad de Autodesk. En ese caso, Frata solo recibe de
            Autodesk la información de ventas/entitlement necesaria para prestarte
            soporte, y no recopila tu correo ni un identificador de equipo por su cuenta.
          </p>
          <p>
            <strong className="text-foreground">Lo que no recopilamos.</strong> BIMtools no
            incluye telemetría de uso, reporte de errores en la nube, analítica ni SDKs de
            publicidad. Tampoco accede a la geometría, planos o contenido de tus modelos
            de Revit; toda la lógica de los addins se ejecuta localmente en tu equipo.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={80}>
        <PrivacySection index="02" title="Terceros con los que compartimos datos">
          <p>
            Frata no vende tus datos personales. Los únicos terceros involucrados en el
            funcionamiento de BIMtools son:
          </p>
          <ul className="space-y-3">
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">PayPal</strong> (procesador de pagos),
              que actúa como responsable independiente de los datos de pago que le
              entregas directamente, bajo su propia política de privacidad.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Autodesk</strong>, cuando adquieres o
              activas el add-in a través del Autodesk App Store; Autodesk trata los datos
              de tu cuenta y compra conforme a su propia política de privacidad.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Proveedores de infraestructura</strong>{" "}
              (hosting del sitio web y del servidor de licencias), que procesan datos
              únicamente en nuestro nombre y bajo instrucciones nuestras, con el mismo
              nivel de protección descrito en esta política.
            </li>
          </ul>
          <p>
            No usamos herramientas de analítica web, redes publicitarias ni SDKs de
            terceros dentro de los addins ni en las páginas de BIMtools. Si en el futuro
            incorporamos alguna, actualizaremos esta política antes de hacerlo y exigimos
            contractualmente a cualquier tercero con quien compartamos datos que ofrezca,
            como mínimo, el mismo nivel de protección aquí descrito.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={160}>
        <PrivacySection index="03" title="Retención y eliminación de datos">
          <p>
            Conservamos tu correo de activación y el registro de tu licencia mientras tu
            suscripción esté activa, más un período razonable adicional (hasta 24 meses)
            necesario para brindarte soporte, gestionar renovaciones y cumplir con
            obligaciones contables y tributarias. Pasado ese período, eliminamos o
            anonimizamos los datos que ya no sean necesarios.
          </p>
          <p>
            Los registros de transacciones de pago son conservados por PayPal según su
            propia política de retención; Frata solo conserva la referencia de pago
            necesaria para soporte y contabilidad.
          </p>
          <p>
            El identificador de hardware usado para validar la licencia se conserva
            únicamente mientras la licencia esté vinculada a ese equipo, y se elimina al
            desactivar o transferir la licencia.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={240}>
        <PrivacySection
          index="04"
          title="Cómo revocar tu consentimiento o solicitar la eliminación de tus datos"
        >
          <p>
            Puedes revocar tu consentimiento o solicitar la eliminación de los datos que
            Frata controla en cualquier momento escribiendo a{" "}
            <a href={`mailto:${activationEmail}`} className="text-primary underline underline-offset-4">
              {activationEmail}
            </a>{" "}
            indicando el correo asociado a tu licencia. Verificaremos tu identidad y
            eliminaremos o anonimizaremos tus datos en un plazo razonable (hasta 30 días),
            salvo la información que debamos conservar por obligación legal o contable
            (por ejemplo, comprobantes de pago).
          </p>
          <p>
            Al solicitar la eliminación de tus datos se desactivará tu licencia premium;
            puedes también desinstalar el add-in en cualquier momento, lo que detiene de
            inmediato cualquier validación local de licencia contra nuestro servidor.
          </p>
          <p>
            Si tu compra o cuenta fue gestionada por PayPal o por el Autodesk App Store,
            gestiona la eliminación de esos datos directamente con PayPal o con Autodesk,
            según corresponda, ya que actúan como responsables independientes de esa
            información.
          </p>
          <p>
            Para cualquier otra consulta sobre esta política, escríbenos a{" "}
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
