import type { Metadata } from "next";
import { LatestReleaseRedirect } from "@/components/download/latest-release-redirect";
import { downloadContent } from "@/content/download";

export const metadata: Metadata = {
  title: downloadContent.pt.metaTitle,
  robots: {
    index: false,
    follow: false,
  },
};

export default function DownloadPagePt() {
  return <LatestReleaseRedirect locale="pt" />;
}
