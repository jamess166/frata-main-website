import type { Metadata } from "next";
import { LatestReleaseRedirect } from "@/components/download/latest-release-redirect";

export const metadata: Metadata = {
  title: "Descarga BIMtools",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DownloadPage() {
  return <LatestReleaseRedirect locale="es" />;
}
