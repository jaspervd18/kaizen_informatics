import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import { ReactNode, Suspense } from "react";
import Footer from "@/components/layout/footer";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const { SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="nl">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar />
        <Suspense>
          <Suspense>
            <main className="container grow">{children}</main>
          </Suspense>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
