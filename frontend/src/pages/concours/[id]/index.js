import NavBar from "@/components/NavBar";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

import { contests } from "@/assets/mockdata";

import getServerSidePropsasync from "@/utils/getUser";

export const getServerSideProps = getServerSidePropsasync;

export default function Concour({ user }) {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [firstBac, setFirstBac] = useState("");
  const [secondBac, setSecondBac] = useState("");
  const [licentiate, setLicentiate] = useState("");
  const [licentiateDoc, setLicentiateDoc] = useState("");
  const [bacDoc, setBacDoc] = useState("");
  const [cinDoc, setCinDoc] = useState("");

  // get param id from url next router
  const router = useRouter();

  const concour = contests.find((concour) => concour.id === router.query.id);

  async function handleRegister(e) {
    e.preventDefault();
    // const data = await axios.post(
    //   `http://localhost:5000/api/contests/${router.query.id}/registrations`,
    //   {
    //     firstName,
    //     secondName,
    //     firstBacGrade: firstBac,
    //     secondBacGrade: secondBac,
    //     person: user,
    //     contest: concour,
    //     documents: [
    //       {
    //         docLink:
    //           "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    //         docType: "BACCALAUREATE",
    //       },
    //     ],
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     withCredentials: true,
    //   }
    // );
    router.push(`/concours/${router.query.id}/exam`);
  }
  return (
    <div className="relative pt-6 pb-16 sm:pb-24">
      <NavBar user={user} />
      <div className="text-center">
        <h1 className=" font-medium mt-10 tracking-tight text-gray-900 sm:text-xs md:text-2xl">
          <span className="block xl:inline">{concour?.contestName}</span>
        </h1>
      </div>
      <div className="container mx-auto mt-16 px-48">
        <form className="space-y-6" onSubmit={handleRegister}>
          <div className="px-4 py-5 sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Personal Information
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  The section is for contest registration.
                </p>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="firstname"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      pattern="^[A-Za-z]+(?:\\s+[A-Za-z]+)*$"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="secondname"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Second Name
                    </label>
                    <input
                      type="text"
                      name="secondname"
                      id="secondname"
                      value={secondName}
                      onChange={(e) => setSecondName(e.target.value)}
                      required
                      pattern="^[A-Za-z]+(?:\\s+[A-Za-z]+)*$"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="2nd"
                      className="block text-sm font-medium text-gray-700"
                    >
                      2nd year baccalaureate mark
                    </label>
                    <input
                      type="text"
                      name="2nd"
                      id="2nd"
                      value={secondBac}
                      onChange={(e) => setSecondBac(Number(e.target.value))}
                      pattern="^[0-9]{1,2}(\.[0-9]{1,2})?$"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="1st"
                      className="block text-sm font-medium text-gray-700"
                    >
                      1st year baccalaureate mark
                    </label>
                    <input
                      type="text"
                      name="1st"
                      id="1st"
                      value={firstBac}
                      onChange={(e) => setFirstBac(Number(e.target.value))}
                      pattern="^[0-9]{1,2}(\.[0-9]{1,2})?$"
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {concour?.type === "MASTER" && (
                    <>
                      <div className="col-span-6 sm:col-span-4">
                        <label
                          htmlFor="licentiate"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Average mark of licentiate
                        </label>
                        <input
                          type="text"
                          name="licentiate"
                          id="licentiate"
                          value={licentiate}
                          onChange={(e) => setLicentiate(e.target.value)}
                          pattern="^[0-9]{1,2}(\.[0-9]{1,2})?$"
                          required
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                      <div className="col-span-6 ">
                        <label
                          htmlFor="file-input"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Licentiate Document
                        </label>
                        <input
                          type="file"
                          name="file-input"
                          value={licentiateDoc}
                          onChange={(e) => setLicentiateDoc(e.target.value)}
                          id="file-input"
                          className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-300 dark:text-gray-800
    file:bg-transparent file:border-0
    file:bg-gray-100 file:mr-4
    file:py-3 file:px-4
    dark:file:bg-indigo-600 dark:file:text-white"
                        />
                        <p
                          className="mt-1 text-sm text-gray-800 dark:text-gray-500"
                          id="file_input_help"
                        >
                          Only PDF (MAX 2MB).
                        </p>
                      </div>
                    </>
                  )}

                  <div className="col-span-6 ">
                    <label
                      htmlFor="file-input"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Baccalaureate Document
                    </label>
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      value={bacDoc}
                      onChange={(e) => setBacDoc(e.target.value)}
                      className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-300 dark:text-gray-800
    file:bg-transparent file:border-0
    file:bg-gray-100 file:mr-4
    file:py-3 file:px-4
    dark:file:bg-indigo-600 dark:file:text-white"
                    />
                    <p
                      className="mt-1 text-sm text-gray-800 dark:text-gray-500"
                      id="file_input_help"
                    >
                      Only PDF (MAX 2MB).
                    </p>
                  </div>

                  <div className="col-span-6 ">
                    <label
                      htmlFor="file-input"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      CIN Document
                    </label>
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      value={cinDoc}
                      onChange={(e) => setCinDoc(e.target.value)}
                      className="block w-full border border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-white dark:border-gray-300 dark:text-gray-800 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 dark:file:bg-indigo-600 dark:file:text-white"
                    />
                    <p
                      className="mt-1 text-sm text-gray-800 dark:text-gray-500"
                      id="file_input_help"
                    >
                      Only PDF (MAX 2MB).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
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
  );
}
