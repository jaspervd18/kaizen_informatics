import "./globals.css";
import Navbar from "@/components/layout/navbar/navbar";
import { ReactNode, Suspense } from "react";
import { GeistSans } from "geist/font/sans";
import Footer from "@/components/layout/footer";

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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="nl">
      <body>
        <Navbar />
        <Suspense>
          <main className="container grow">{children}</main>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
