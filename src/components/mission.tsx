import Image from "next/image";
import missionStatement from "../../public/mission-statement.jpg";

export async function Mission() {
  return (
    <div className="flex flex-col md:flex-row py-8">
      <div className="md:w-1/2 lg:w-2/3 relative overflow-hidden hover-enlarge shadow-lg">
        <div className="rounded overflow-hidden shadow-lg">
          <Image
            src={missionStatement}
            alt="mission-statement"
            className="w-full h-auto transition-transform transform-gpu"
          />
        </div>
      </div>
      <div className="md:w-1/2 lg:w-1/3 bg-secondary p-4 md:p-8 md:my-8 md:rounded-r-lg max-md:rounded-b-lg shadow-lg">
        <h2 className="text-base md:text-lg lg:text-xl font-light mb-4 text-gray-500">
          MISSIE
        </h2>
        <p className="text-base lg:text-2xl font-semibold text-gray-700">
          Kaizen Informatics is toegewijd aan het versterken van individuen en
          bedrijven door betaalbare en gebruiksvriendelijke weboplossingen te
          leveren.
        </p>
      </div>
    </div>
  );
}
