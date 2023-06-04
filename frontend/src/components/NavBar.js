import { cn } from "@/utils/cn";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment } from "react";

const navigations = [
  { name: "Concours", href: "#" },
  { name: "Features", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact us", href: "#" },
];

const userNavigations = [
  { name: "Registrations", href: "/registrations" },
  { name: "Profile", href: "/profile" },
];

const NavBar = () => {
  const router = useRouter();

  return (
    <div>
      <Popover>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:justify-center"
            aria-label="Global"
          >
            <div className="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0">
              <div className="flex w-full items-center justify-between md:w-auto">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-10 w-auto sm:h-10"
                    src="/assets/logo.png"
                    alt=""
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              {navigations.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center justify-end">
              <Menu as="div" className="relative ml-4 flex-shrink-0">
                <div>
                  <Menu.Button className="flex rounded-full text-sm p-1 text-white focus:outline-none ">
                    <span className="sr-only">Open user menu</span>
                    <div className="relative h-8 w-8 rounded-full">
                      <UserCircleIcon className="h-8 w-8 rounded-full text-gray-900" />
                    </div>
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {userNavigations.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={cn(
                              active ? "bg-gray-100" : "",
                              "block py-2 px-4 text-sm text-gray-700"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                    <Menu.Item key={"signout"}>
                      {({ active }) => (
                        <Link
                          href="#"
                          onClick={async (e) => {
                            e.preventDefault();
                            await axios.post(
                              "http://localhost:5000/api/auth/signout",
                              null,
                              {
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                withCredentials: true,
                              }
                            );
                            router.push("/login");
                          }}
                          className={cn(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </Link>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </nav>
        </div>
      </Popover>
    </div>
  );
};

export default NavBar;
