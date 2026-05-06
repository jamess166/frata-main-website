import type { Metadata } from "next";
import { LatestReleaseRedirect } from "@/components/download/latest-release-redirect";

export const metadata: Metadata = {
  title: "BIMtools Download",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DownloadPageEn() {
  return <LatestReleaseRedirect locale="en" />;
}
