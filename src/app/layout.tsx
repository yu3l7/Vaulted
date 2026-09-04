import type { Metadata, Viewport } from "next";
import { Unbounded, JetBrains_Mono } from "next/font/google";
import { Scrollspy } from "@/components/Scrollspy";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vaulted-rose.vercel.app"),
  title: {
    default: "VAULTED.SYS — Fortnite supply, verified",
    template: "%s · VAULTED.SYS",
  },
  description:
    "Stacked accounts, V-Bucks, rare skins, boosting, coaching. Hand-vetted, Discord-direct, delivered in minutes.",
  openGraph: {
    type: "website",
    siteName: "VAULTED.SYS",
    locale: "en_US",
    title: "VAULTED.SYS — Fortnite supply, verified",
    description:
      "Stacked accounts, V-Bucks, rare skins, boosting, and coaching. Verified by hand, delivered to your Discord.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${unbounded.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-bg text-fg min-h-screen flex flex-col antialiased">
        <div className="scroll-progress" aria-hidden="true" />
        <Scrollspy />
        {children}
      </body>
    </html>
  );
}
