import type { Metadata } from "next";
import { Shippori_Mincho_B1, Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import SmoothScroll from "@/components/SmoothScroll";
import RevealEngine from "@/components/RevealEngine";
import ScrollProgress from "@/components/ScrollProgress";
import Cursor from "@/components/Cursor";
import Loading from "@/components/Loading";

const shippori = Shippori_Mincho_B1({
  variable: "--font-shippori",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kisegaiko.vercel.app"),
  title: `${site.name} | ${site.tagline}`,
  description: site.descriptionShort,
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: site.descriptionShort,
    type: "website",
    locale: "ja_JP",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${shippori.variable} ${notoSansJP.variable} ${cormorant.variable}`}
    >
      <body>
        <Loading />
        <SmoothScroll />
        <RevealEngine />
        <ScrollProgress />
        <Cursor />
        {children}
      </body>
    </html>
  );
}
