import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { contest, contests } from "../../../assets/mockdata";
import NavBar from "@/components/NavBar";
import Question from "@/components/Question";
import dynamic from "next/dynamic";
const Countdown = dynamic(() => import("react-countdown"), {
  ssr: false,
});
import getServerSidePropsasync from "@/utils/getUser";
import { useRouter } from "next/router";

export const getServerSideProps = getServerSidePropsasync;

async function getContest(id) {
  const { data } = await axios.get(`http://localhost:5000/api/contests/${id}`);
  return data.contest;
}

export default function exam({ user }) {
  const router = useRouter();
  const concour = contests.find((concour) => concour.id === router.query.id);

  return (
    <div className="pt-6 pb-16 sm:pb-24">
      <NavBar user={user} />

      <div className="text-center">
        <h1 className="font-medium mt-10 tracking-tight text-gray-900 sm:text-xs md:text-2xl">
          <span className="block xl:inline">{contest.contestName}</span>
        </h1>
      </div>
      <div className="flex justify-center items-center mt-4 sticky top-10 right-5">
        <div className="border border-slate-700	bg-indigo-500 rounded-xl w-28  h-12 flex justify-center items-center">
          <Countdown
            date={
              new Date(
                new Date(contest.startingTime).getTime() + contest.duration
              )
            }
            renderer={({ hours, minutes, seconds }) => (
              <span className="text-white font-medium text-lg">
                {hours}:{minutes}:{seconds}
              </span>
            )}
          />
        </div>
      </div>
      <div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <form>
              <div>
                {contest.questions.map((question, index) => (
                  <Question
                    question={question.question}
                    options={question.options}
                    key={question.question}
                    index={index + 1}
                  />
                ))}
              </div>
              <div className="flex justify-end mt-10">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
