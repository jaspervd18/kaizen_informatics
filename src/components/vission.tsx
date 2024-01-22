import Image from "next/image";
import missionStatement from "../../public/mission-statement.jpg";

export async function Vission() {
  return (
    <div className="flex flex-col md:flex-row py-8">
      <div className="md:w-1/2 lg:w-1/3 bg-secondary p-4 md:p-8 md:my-8 md:rounded-l-lg max-md:rounded-t-lg shadow-lg">
        <h2 className="text-base md:text-lg lg:text-xl font-light mb-4 text-gray-500">
          VISIE
        </h2>
        <p className="text-base lg:text-2xl font-semibold text-gray-700">
          We streven ernaar om onze klanten in staat te stellen naadloos
          verbinding te maken met hun doelgroep door middel van effectieve
          digitale oplossingen.
        </p>
      </div>
      <div className="md:w-1/2 lg:w-2/3 relative overflow-hidden hover-enlarge shadow-lg">
        <div className="rounded overflow-hidden">
          <Image
            src={missionStatement}
            alt="mission-statement"
            className="w-full h-auto transition-transform transform-gpu"
          />
        </div>
      </div>
    </div>
  );
}
