import { ChevronDownIcon, StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const concour = {
  id: 1,
  schoolName: "INPT",

  deadline: "06/06/2023",

  startingTime: "06/03/2023",

  duration: 1000 * 60 * 60 * 2,

  contestName: "Concours d'entrée à l'INPT",

  description: "Concours d'entrée à l'INPT",

  type: "BAC+2",
  image: "https://picsum.photos/200/200",
};

export default function Concour({}) {
  return (
    <Link
      href={`/concours/${concour.id}`}
      className="flex gap-8 overflow-hidden rounded-md bg-white p-6 shadow-[0_0_15px_2px_rgb(0,0,0,0.1)]"
    >
      <div>
        <img className="h-52 rounded" src={concour.image} alt="concour image" />
      </div>
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-start gap-5">
          <span className="inline-flex items-center rounded bg-gray-100 px-2 py-1.5 text-sm font-medium text-gray-800">
            {concour.type}
          </span>
          <h3 className="text-lg font-semibold">{concour.contestName}</h3>
        </header>
        <div className="mt-4 mb-auto">
          <p className="text-base text-gray-900">{concour.description}</p>
        </div>
        <footer className="mt-4 flex items-center gap-4 text-sm font-semibold">
          <div className=" flex flex-1 items-center gap-6">
            <span>by {concour.schoolName}</span>
            <span>en {new Date(concour.startingTime).toDateString()}</span>
            <span>
              ouvert jusqu'à {new Date(concour.deadline).toDateString()}
            </span>
          </div>
        </footer>
      </div>
    </Link>
  );
}
