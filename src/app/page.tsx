import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description:
    "High-performance ecommerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default async function HomePage() {
  return (
    <>
      <div className="min-h-screen p-16 font-bold text-center">
        Hier komt mijn f*cking nice website
      </div>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
}
