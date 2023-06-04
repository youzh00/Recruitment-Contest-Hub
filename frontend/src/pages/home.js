import { contests } from "@/assets/mockdata";
import Concour from "@/components/Concour";
import NavBar from "@/components/NavBar";
import axios from "axios";
import getServerSidePropsasync from "@/utils/getUser";

export const getServerSideProps = getServerSidePropsasync;

export default function home({ user }) {
  console.log(user);
  return (
    <div className="relative pt-6 pb-16 sm:pb-24">
      <NavBar user={user} />
      <div className="container mx-auto mt-16 px-48">
        <h2 className="text-4xl font-bold leading-7 text-gray-900 mb-16">
          Concours
        </h2>
        <div className="space-y-5">
          {contests.map((concour, i) => (
            <Concour concour={concour} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
