"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchPage from "./SearchPage";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updateOpen } from "@/lib/features/navSlice";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.nav.open);

  const onKeydownOperation = (e: React.KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "Enter") {
      setNavbar(!navbar);
    }
  };

  return (
    <nav className="w-full bg-black fixed top-0 left-0 right-0 z-30 md:z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 relative">
        <div>
          <div className="flex items-center justify-between py-3  md:block">
            {/* LOGO */}
            <div
              className={`text-white rounded-full md:hidden ${
                navbar ? "hidden" : "block"
              }`}
              onClick={() => {
                dispatch(updateOpen(!open));
              }}
            >
              <img src="/arrow.svg" className="w-8 h-8" />
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? "p-12 md:p-0 block" : "hidden"
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex">
                  <li
                    style={{ color: "#d0d0cf" }}
                    className="pb-6 text-xl py-4 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-orange-300  border-orange-300  md:hover:text-orange-300 md:hover:bg-transparent"
                  >
                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                      Home
                    </Link>
                  </li>

                  <div className="hidden lg:block h-10 w-[1px] bg-[#5b5a57]"></div>

                  <li
                    style={{ color: "#d0d0cf" }}
                    className="pb-6 text-xl py-4 px-6 text-center  border-b-2 md:border-b-0  hover:bg-orange-300  border-orange-300  md:hover:text-orange-300 md:hover:bg-transparent"
                  >
                    <Link href="/products" onClick={() => setNavbar(!navbar)}>
                      Products
                    </Link>
                  </li>

                  <div className="hidden lg:block h-10 w-[1px] bg-[#5b5a57]"></div>
                  <li
                    className="pb-6 text-xl  py-4 px-6 text-center  border-b-2 md:border-b-0  hover:bg-orange-300  border-orange-300  md:hover:text-orange-300 md:hover:bg-transparent"
                    style={{ color: "#d0d0cf" }}
                  >
                    <Link href="/products" onClick={() => setNavbar(!navbar)}>
                      Leaderboard
                    </Link>
                  </li>
                  <li className="md:hidden mt-8" onKeyDown={onKeydownOperation}>
                    <SearchPage />
                  </li>
                </ul>
              </div>
            </div>
            {/* HAMBURGER BUTTON FOR MOBILE */}
            <div className="md:hidden absolute md:relative right-2 top-2 transition-all duration-300">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <Image
                    src="/CloseMenu.png"
                    width={30}
                    height={30}
                    alt="logo"
                  />
                ) : (
                  <Image
                    src="/OpenMenu.png"
                    width={30}
                    height={30}
                    alt="logo"
                    className="focus:border-none active:border-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "p-12 md:p-0 block" : "hidden"
            }`}
          >
            <ul className="h-screen md:h-auto items-center justify-center flex ">
              <li className="pb-6 text-xl py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-orange-300  border-orange-300  md:hover:text-orange-300 md:hover:bg-transparent">
                <SearchPage />
              </li>
              <div
                style={{
                  height: "40px",
                  width: "1px",
                  backgroundColor: "#5b5a57",
                }}
              ></div>
              <li className="pb-6 text-xl py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-orange-300  border-orange-300  md:hover:text-orange-300 md:hover:bg-transparent">
                <img src="/icon9.png" alt="icon" />
              </li>

              <div
                style={{
                  height: "40px",
                  width: "1px",
                  backgroundColor: "#5b5a57",
                }}
              ></div>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-orange-300  border-orange-300  md:hover:text-orange-300 md:hover:bg-transparent">
                <img src="/icon10.png" alt="icon" />
              </li>
              <div
                style={{
                  height: "40px",
                  width: "1px",
                  backgroundColor: "#5b5a57",
                }}
              ></div>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-orange-300  border-orange-300  md:hover:text-orange-300 md:hover:bg-transparent">
                <img src="/icon11.png" alt="icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
