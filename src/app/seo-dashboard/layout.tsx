import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Performance & Monitoring Dashboard | MOMO IT Technologies",
  description: "Internal SEO tracking, keyword matrix, and Search Console monitoring dashboard for MOMO IT TECHNOLOGIES.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SeoDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
