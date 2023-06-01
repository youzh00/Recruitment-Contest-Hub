import Concour from "@/components/Concour";
import NavBar from "@/components/NavBar";

export default function home() {
  return (
    <div className="relative pt-6 pb-16 sm:pb-24">
      <NavBar />
      <div className="container mx-auto mt-16 px-48">
        <h2 className="text-4xl font-bold leading-7 text-gray-900 mb-16">
          Concours
        </h2>
        <div className="space-y-5">
          {new Array(10).fill(0).map((_, i) => (
            <Concour key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
