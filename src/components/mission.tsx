import Image from "next/image";
import missionStatement from "../../public/mission-statement.jpg";

export async function Mission() {
  return (
    <div className="flex flex-col md:flex-row py-8">
      <div className="md:w-1/2">
        <Image
          src={missionStatement}
          alt="mission-statement"
          className="rounded w-full h-auto shadow-2xl"
        />
      </div>
      <div className="md:w-1/2 bg-secondary max-md:mx-4 p-4 md:p-4 md:my-8 md:rounded-r-lg max-md:rounded-b-lg shadow-lg">
        <h2 className="text-base md:text-lg lg:text-xl font-light mb-4">
          MISSIE
        </h2>
        <p className="text-base lg:text-2xl font-semibold">
          Kaizen Informatics is toegewijd aan het versterken van individuen en
          bedrijven door betaalbare en gebruiksvriendelijke weboplossingen te
          leveren.
        </p>
      </div>
    </div>
  );
}
