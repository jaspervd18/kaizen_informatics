import { InfiniteCarousel } from "@/components/infinite-carousel";
import Footer from "@/components/layout/footer";
import { Mission } from "@/components/mission";
import { Vission } from "@/components/vission";
import { Suspense } from "react";

export const runtime = "edge";

export const metadata = {
  description:
    "Versterk je bedrijf met Kaizen Informatics - jouw partner in betaalbare en intuïtieve weboplossingen. Til moeiteloos je online aanwezigheid naar een hoger niveau met ons deskundig team, toegewijd aan continue verbetering en het leveren van kosteneffectieve websites voor kleine bedrijven, startups, particulieren,... Transformeer vandaag nog je digitale communicatie met Kaizen Informatics!",
};

export default async function HomePage() {
  return (
    <>
      <InfiniteCarousel />
      <Suspense>
        <Mission />
        <Vission />
      </Suspense>
    </>
  );
}
