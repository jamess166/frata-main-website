import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { BimtoolsPrivacyView, PrivacySection } from "@/components/pages/bimtools-privacy-view";
import { localeAlternates } from "@/lib/locale";

export const metadata: Metadata = {
  title: "Política de Privacidade BIMtools | Frata",
  description:
    "Política de privacidade dos addins BIMtools para Revit da Frata Ingenieros: quais dados são coletados, como são usados, com quem são compartilhados e como solicitar sua exclusão.",
  alternates: {
    canonical: "https://www.frataingenieros.com/pt/bimtools/privacy",
    languages: localeAlternates("/bimtools/privacy"),
  },
};

const activationEmail = "info@frataingenieros.com";

export default function BimtoolsPrivacyPagePt() {
  return (
    <BimtoolsPrivacyView
      locale="pt"
      strings={{
        backToBimtools: "Voltar ao BIMtools",
        eyebrow: "Política de privacidade",
        heading: "Privacidade do BIMtools.",
        intro: (
          <>
            Esta política se aplica a todos os addins da suíte BIMtools para Revit
            desenvolvidos e publicados pela Frata Ingenieros (&quot;Frata&quot;,
            &quot;nós&quot;), tanto na versão gratuita quanto premium, distribuídos a
            partir deste site ou da Autodesk App Store.
          </>
        ),
        lastUpdated: "Última atualização: 26 de agosto de 2026.",
      }}
    >
      <Reveal>
        <PrivacySection index="01" title="Quais dados coletamos, como e para quê">
          <p>
            O BIMtools coleta apenas as informações mínimas necessárias para ativar sua
            licença, oferecer suporte e evitar o uso não autorizado do software. Os dados
            variam conforme a forma como você obteve o addin:
          </p>
          <p>
            <strong className="text-foreground">Endereço de e-mail (compra direta).</strong>{" "}
            Ao comprar uma assinatura premium por meio deste site e do PayPal, pedimos que
            você envie um e-mail para {activationEmail} solicitando a ativação. Usamos esse
            endereço de e-mail, junto com a confirmação de pagamento, exclusivamente para
            verificar sua compra, gerar sua licença e responder a solicitações de suporte.
          </p>
          <p>
            <strong className="text-foreground">Dados de pagamento (PayPal).</strong> O
            pagamento é processado diretamente no PayPal por meio de um link de pagamento
            (&quot;PayPal Checkout&quot;). A Frata não recebe nem armazena os dados do seu
            cartão ou conta bancária; recebemos apenas uma confirmação da transação e o
            e-mail associado a ela.
          </p>
          <p>
            <strong className="text-foreground">
              Chave de licença e identificador do dispositivo (ativação fora da Autodesk).
            </strong>{" "}
            Quando o addin é ativado fora da Autodesk App Store (licenciamento direto da
            Frata), o software envia sua chave de licença ou e-mail de ativação, junto com
            um identificador de hardware do seu dispositivo (um valor derivado de
            componentes do seu PC), ao nosso servidor de licenças. Esses dados são usados
            exclusivamente para validar que a licença está ativa e vinculá-la a um número
            limitado de dispositivos, evitando uso simultâneo não autorizado.
          </p>
          <p>
            <strong className="text-foreground">Licenciamento pela Autodesk App Store.</strong>{" "}
            Se você instalar ou ativar o BIMtools por meio da Autodesk App Store ou da sua
            conta Autodesk, a compra, a identidade da sua conta e o direito de uso
            (&quot;entitlement&quot;) são gerenciados diretamente pela Autodesk, conforme
            sua própria política de privacidade. Nesse caso, a Frata recebe da Autodesk
            apenas as informações de venda/entitlement necessárias para prestar suporte, e
            não coleta seu e-mail nem um identificador de dispositivo por conta própria.
          </p>
          <p>
            <strong className="text-foreground">O que não coletamos.</strong> O BIMtools
            não inclui telemetria de uso, relatórios de erro na nuvem, análises nem SDKs de
            publicidade. Também não acessa a geometria, os desenhos ou o conteúdo dos seus
            modelos do Revit; toda a lógica dos addins é executada localmente no seu
            dispositivo.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={80}>
        <PrivacySection index="02" title="Terceiros com quem compartilhamos dados">
          <p>
            A Frata não vende seus dados pessoais. Os únicos terceiros envolvidos no
            funcionamento do BIMtools são:
          </p>
          <ul className="space-y-3">
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">PayPal</strong> (processador de
              pagamentos), que atua como controlador independente dos dados de pagamento
              que você fornece diretamente a ele, conforme sua própria política de
              privacidade.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Autodesk</strong>, quando você compra ou
              ativa o addin por meio da Autodesk App Store; a Autodesk trata os dados da
              sua conta e da sua compra conforme sua própria política de privacidade.
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Provedores de infraestrutura</strong>{" "}
              (hospedagem do site e do servidor de licenças), que processam dados
              exclusivamente em nosso nome e conforme nossas instruções, com o mesmo nível
              de proteção descrito nesta política.
            </li>
          </ul>
          <p>
            Não usamos ferramentas de análise da web, redes de publicidade ou SDKs de
            terceiros dentro dos addins ou nas páginas do BIMtools. Se, no futuro,
            incorporarmos algum, atualizaremos esta política antes disso e exigiremos que
            qualquer terceiro com quem compartilhemos dados ofereça, no mínimo, o nível de
            proteção aqui descrito.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={160}>
        <PrivacySection index="03" title="Retenção e exclusão de dados">
          <p>
            Mantemos seu e-mail de ativação e o registro da sua licença enquanto sua
            assinatura estiver ativa, mais um período razoável adicional (até 24 meses)
            necessário para prestar suporte, gerenciar renovações e cumprir obrigações
            contábeis e fiscais. Após esse período, excluímos ou anonimizamos os dados que
            não forem mais necessários.
          </p>
          <p>
            Os registros de transações de pagamento são mantidos pelo PayPal conforme sua
            própria política de retenção; a Frata mantém apenas a referência de pagamento
            necessária para suporte e contabilidade.
          </p>
          <p>
            O identificador de hardware usado para validar a licença é mantido apenas
            enquanto a licença estiver vinculada a esse dispositivo, e é removido ao
            desativar ou transferir a licença.
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={240}>
        <PrivacySection
          index="04"
          title="Como revogar seu consentimento ou solicitar a exclusão dos seus dados"
        >
          <p>
            Você pode revogar seu consentimento ou solicitar a exclusão dos dados
            controlados pela Frata a qualquer momento escrevendo para{" "}
            <a href={`mailto:${activationEmail}`} className="text-primary underline underline-offset-4">
              {activationEmail}
            </a>
            , informando o e-mail associado à sua licença. Verificaremos sua identidade e
            excluiremos ou anonimizaremos seus dados dentro de um prazo razoável (até 30
            dias), exceto as informações que devemos manter por obrigação legal ou contábil
            (por exemplo, comprovantes de pagamento).
          </p>
          <p>
            Solicitar a exclusão dos seus dados desativará sua licença premium; você também
            pode desinstalar o addin a qualquer momento, o que interrompe imediatamente
            qualquer validação local de licença junto ao nosso servidor.
          </p>
          <p>
            Se sua compra ou conta foi gerenciada pelo PayPal ou pela Autodesk App Store,
            solicite a exclusão desses dados diretamente ao PayPal ou à Autodesk, conforme
            o caso, já que eles atuam como controladores independentes dessas informações.
          </p>
          <p>
            Para qualquer outra dúvida sobre esta política, escreva para nós em{" "}
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
