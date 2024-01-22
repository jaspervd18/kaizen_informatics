import Image from "next/image";
import missionStatement from "../../public/mission-statement.jpg";

export async function Mission() {
  return (
    <div className="flex flex-col md:flex-row mx-auto py-8">
      <div className="w-1/2">
        <Image
          src={missionStatement}
          alt="mission-statement"
          className="rounded w-full h-auto shadow-lg"
        />
      </div>
      <div className="w-1/2 bg-secondary p-4 my-8 rounded-r-lg shadow-lg">
        <h2 className="text-2xl font-light mb-4">MISSIE</h2>
        <p className="text-3xl font-semibold">
          Kaizen Informatics is toegewijd aan het versterken van kleine
          bedrijven en individuen door betaalbare en gebruiksvriendelijke
          weboplossingen te leveren. Het vestigen van een online aanwezigheid is
          niet simpel. Onze missie is om dit proces te vereenvoudigen en een
          digitale nadruk achter te laten.
        </p>
      </div>
    </div>
  );
}
