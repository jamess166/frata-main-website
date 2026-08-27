import type { Metadata } from "next";
import { Reveal } from "@/components/site/reveal";
import { BimtoolsPrivacyView, PrivacySection } from "@/components/pages/bimtools-privacy-view";
import { localeAlternates } from "@/lib/locale";

export const metadata: Metadata = {
  title: "BIMtools 隐私政策 | Frata",
  description:
    "Frata Ingenieros 旗下 BIMtools Revit 插件的隐私政策：收集哪些数据、如何使用、与谁共享，以及如何申请删除。",
  alternates: {
    canonical: "https://www.frataingenieros.com/zh/bimtools/privacy",
    languages: localeAlternates("/bimtools/privacy"),
  },
};

const activationEmail = "info@frataingenieros.com";

export default function BimtoolsPrivacyPageZh() {
  return (
    <BimtoolsPrivacyView
      locale="zh"
      strings={{
        backToBimtools: "返回 BIMtools",
        eyebrow: "隐私政策",
        heading: "BIMtools 隐私政策。",
        intro: (
          <>
            本政策适用于由 Frata Ingenieros（&quot;Frata&quot;、&quot;我们&quot;）开发并发布的所有
            BIMtools Revit 插件套件产品，无论是免费版还是高级版，也无论是通过本网站还是通过
            Autodesk App Store 分发。
          </>
        ),
        lastUpdated: "最近更新时间：2026 年 8 月 26 日。",
      }}
    >
      <Reveal>
        <PrivacySection index="01" title="我们收集哪些数据、如何收集以及用途">
          <p>
            BIMtools 仅收集激活您的许可证、提供支持以及防止软件被未经授权使用所必需的最少信息。
            具体收集的数据取决于您获取插件的方式：
          </p>
          <p>
            <strong className="text-foreground">电子邮箱地址（直接购买）。</strong>{" "}
            当您通过本网站与 PayPal 购买高级订阅时，我们会要求您发送邮件至 {activationEmail}{" "}
            申请激活。我们仅将该邮箱地址与付款确认信息用于核实您的购买、生成您的许可证以及回复支持请求。
          </p>
          <p>
            <strong className="text-foreground">付款数据（PayPal）。</strong>{" "}
            付款通过 PayPal 支付链接（&quot;PayPal Checkout&quot;）直接处理。Frata
            不会接收或存储您的银行卡或银行账户信息；我们仅收到交易确认及与之关联的邮箱地址。
          </p>
          <p>
            <strong className="text-foreground">
              许可证密钥与设备标识符（Autodesk 之外的激活方式）。
            </strong>{" "}
            当插件在 Autodesk App Store 之外激活时（即由 Frata
            直接授权），软件会将您的许可证密钥或激活邮箱，连同您设备的硬件标识符（一个由电脑组件推导得出的值）发送至我们的许可证服务器。该数据仅用于验证许可证是否处于有效状态，并将其与有限数量的设备绑定，以防止未经授权的同时使用。
          </p>
          <p>
            <strong className="text-foreground">通过 Autodesk App Store 授权。</strong>{" "}
            如果您通过 Autodesk App Store 或您的 Autodesk
            账户安装或激活 BIMtools，购买信息、账户身份及使用权（&quot;entitlement&quot;）将直接由
            Autodesk 按照其自身的隐私政策进行管理。在这种情况下，Frata 仅从 Autodesk
            获取提供支持所需的销售/权益信息，不会自行收集您的邮箱或设备标识符。
          </p>
          <p>
            <strong className="text-foreground">我们不会收集的内容。</strong>{" "}
            BIMtools 不包含使用遥测、云端错误报告、分析工具或广告 SDK，也不会访问您 Revit
            模型的几何图形、图纸或内容；所有插件逻辑均在您的设备本地运行。
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={80}>
        <PrivacySection index="02" title="我们共享数据的第三方">
          <p>Frata 不会出售您的个人数据。参与 BIMtools 运行的第三方仅包括：</p>
          <ul className="space-y-3">
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">PayPal</strong>{" "}
              （支付服务商），作为您直接提供的付款数据的独立处理方，依据其自身的隐私政策运作。
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">Autodesk</strong>，当您通过 Autodesk App
              Store 购买或激活插件时；Autodesk 依据其自身的隐私政策处理您的账户与购买数据。
            </li>
            <li className="border-t border-border pt-3">
              <strong className="text-foreground">基础设施提供商</strong>
              （网站与许可证服务器的托管方），仅代表我们并按照我们的指示处理数据，保护级别与本政策所述一致。
            </li>
          </ul>
          <p>
            我们不会在插件内部或 BIMtools 页面上使用网页分析工具、广告网络或第三方
            SDK。若未来引入此类工具，我们将提前更新本政策，并要求任何与我们共享数据的第三方至少提供本政策所述的保护水平。
          </p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={160}>
        <PrivacySection index="03" title="数据的保留与删除">
          <p>
            只要您的订阅处于有效状态，我们就会保留您的激活邮箱和许可证记录，此外还会额外保留一段合理时间（最长
            24 个月），用于提供支持、管理续订以及履行会计与税务义务。此期限过后，我们会删除或匿名化不再需要的数据。
          </p>
          <p>
            付款交易记录由 PayPal 按照其自身的保留政策保存；Frata 仅保留用于支持与会计所需的付款参考信息。
          </p>
          <p>用于验证许可证的硬件标识符仅在许可证与该设备绑定期间保留，并在许可证停用或转移时予以删除。</p>
        </PrivacySection>
      </Reveal>

      <Reveal delay={240}>
        <PrivacySection index="04" title="如何撤回同意或申请删除您的数据">
          <p>
            您可以随时通过发送邮件至{" "}
            <a href={`mailto:${activationEmail}`} className="text-primary underline underline-offset-4">
              {activationEmail}
            </a>{" "}
            撤回同意或申请删除 Frata
            控制的数据，并注明与您许可证相关联的邮箱地址。我们会核实您的身份，并在合理期限内（最长
            30 天）删除或匿名化您的数据，但因法律或会计义务须保留的信息（例如付款凭证）除外。
          </p>
          <p>
            申请删除您的数据将停用您的高级许可证；您也可以随时卸载该插件，这将立即停止针对我们服务器的任何本地许可证验证。
          </p>
          <p>
            如果您的购买或账户由 PayPal 或 Autodesk App Store 管理，请直接向 PayPal 或
            Autodesk（视具体情况而定）申请删除该数据，因为它们是这些信息的独立处理方。
          </p>
          <p>
            如对本政策有其他任何疑问，请通过{" "}
            <a href={`mailto:${activationEmail}`} className="text-primary underline underline-offset-4">
              {activationEmail}
            </a>{" "}
            与我们联系。
          </p>
        </PrivacySection>
      </Reveal>
    </BimtoolsPrivacyView>
  );
}
