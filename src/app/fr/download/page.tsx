import type { Metadata } from "next";
import { LatestReleaseRedirect } from "@/components/download/latest-release-redirect";
import { downloadContent } from "@/content/download";

export const metadata: Metadata = {
  title: downloadContent.fr.metaTitle,
  robots: {
    index: false,
    follow: false,
  },
};

export default function DownloadPageFr() {
  return <LatestReleaseRedirect locale="fr" />;
}
