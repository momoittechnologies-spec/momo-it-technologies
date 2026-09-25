import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Client Payment | MOMO IT Technologies",
  description: "Official vendor payment and invoice settlement portal for MOMO IT TECHNOLOGIES clients.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
