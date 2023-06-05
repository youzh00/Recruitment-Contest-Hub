import NavBar from "@/components/NavBar";
import Question from "@/components/Question";
import getServerSidePropsasync from "@/utils/getUser";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import { contests } from "../../../assets/mockdata";
import Modal from "@/components/Modal";
const Countdown = dynamic(() => import("react-countdown"), {
  ssr: false,
});

export const getServerSideProps = getServerSidePropsasync;

async function getContest(id) {
  const { data } = await axios.get(`http://localhost:5000/api/contests/${id}`);
  return data.contest;
}

export default function exam({ user }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const concour = contests.find((concour) => concour.id === router.query.id);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(selectedOptions);
    concour.questions.forEach((question, questionIdx) => {
      question.options.forEach((option, optionIdx) => {
        if (optionIdx === selectedOptions[questionIdx] && option.isCorrect) {
          setScore((prev) => prev + 10);
        }
      });
    });
    setOpen(true);
  }

  return (
    <div className="pt-6 pb-16 sm:pb-24">
      <NavBar user={user} />

      <div className="text-center">
        <h1 className="font-medium mt-10 tracking-tight text-gray-900 sm:text-xs md:text-2xl">
          <span className="block xl:inline">{concour?.contestName}</span>
        </h1>
      </div>
      <div className="flex justify-center items-center mt-4 ">
        <div className="border border-slate-700	bg-indigo-500 rounded-xl w-28  h-12 flex justify-center items-center">
          <Countdown
            date={
              new Date(
                new Date(concour?.startingTime).getTime() + concour?.duration
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
            <form onSubmit={handleSubmit}>
              <div>
                {concour?.questions.map((question, index) => (
                  <Question
                    question={question.question}
                    options={question.options}
                    key={question.question}
                    idx={index + 1}
                    setSelectedOptions={setSelectedOptions}
                  />
                ))}
              </div>
              <div className="flex justify-end mt-10">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
                <Modal
                  open={open}
                  setOpen={setOpen}
                  score={score}
                  setScore={setScore}
                  length={concour.questions.length}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
