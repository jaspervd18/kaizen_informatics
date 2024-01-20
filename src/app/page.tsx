import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description:
    "Versterk je bedrijf met Kaizen Informatics - jouw partner in betaalbare en intuïtieve weboplossingen. Til moeiteloos je online aanwezigheid naar een hoger niveau met ons deskundig team, toegewijd aan continue verbetering en het leveren van kosteneffectieve websites voor kleine bedrijven, startups, particulieren,... Transformeer vandaag nog je digitale communicatie met Kaizen Informatics!",
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
