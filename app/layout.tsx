import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Partner Hub | Connecting Families & Care Providers",
    template: "%s | Partner Hub",
  },
  description:
    "Partner Hub connects families and early childhood care providers in North Carolina. Apply for NC Pre-K programs, find childcare, manage attendance and payments — all in one place.",
  keywords: [
    "Partner Hub",
    "childcare North Carolina",
    "NC Pre-K",
    "Smart Start Forsyth County",
    "early childhood education",
    "CCR&R map",
    "childcare providers",
    "family care resources",
    "Pre-K scholarships",
  ],
  authors: [{ name: "Partner Hub" }],
  openGraph: {
    type: "website",
    title: "Partner Hub | Connecting Families & Care Providers",
    description:
      "One platform connecting families and care providers in North Carolina. Apply for programs, find care, manage attendance and payments.",
    siteName: "Partner Hub",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Partner Hub | Connecting Families & Care Providers",
    description:
      "One platform connecting families and care providers in North Carolina. Apply for programs, find care, manage attendance and payments.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Partner Hub",
  description:
    "Partner Hub connects families and early childhood care providers in North Carolina through a modern digital platform.",
  areaServed: {
    "@type": "State",
    name: "North Carolina",
  },
  audience: [
    { "@type": "Audience", audienceType: "Families" },
    { "@type": "Audience", audienceType: "Childcare Providers" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
