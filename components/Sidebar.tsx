"use client";

import { updateOpen } from "@/lib/features/navSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";

const Sidebar = () => {
  const open = useAppSelector((state) => state.nav.open);
  const dispatch = useAppDispatch();

  return (
    <div
      className={`h-screen flex flex-col items-center justify-center fixed top-0 z-20 transition-all duration-300 transform ${
        open ? "w-20 z-40" : "w-20 hidden md:block"
      } bg-[#15140f] text-white z-10`}
    >
      <div className="flex flex-col items-center">
        {/* <img
          src="/logo.png"
          alt="logo"
          style={{ height: "35px", width: "50px" }}
          className="mb-10 mt-5"
        /> */}

        <h2 className="font-Pressstart text-[#DAB785] text-3xl lg:pt-5 lg:pb-5">
          GQ
        </h2>

        <Link href="/" onClick={() => dispatch(updateOpen(false))}>
          <img src="/icon1.png" alt="icon" className="mb-8 h-[25px] w-[25px]" />
        </Link>

        <img
          src="/icon2.png"
          alt="icon"
          style={{ height: "25px", width: "25px" }}
          className="mb-8"
        />
        <img
          src="/icon3.png"
          alt="icon"
          style={{ height: "25px", width: "25px" }}
          className="mb-8"
        />
        <img
          src="/icon4.png"
          alt="icon"
          style={{ height: "25px", width: "25px" }}
          className="mb-8"
        />
        <img
          src="/icon5.png"
          alt="icon"
          style={{ height: "25px", width: "25px" }}
          className="mb-8"
        />
        <img
          src="/icon6.png"
          alt="icon"
          style={{ height: "25px", width: "25px" }}
          className="mb-8"
        />
        <img
          src="/icon7.png"
          alt="icon"
          style={{ height: "25px", width: "25px" }}
          className="mb-8"
        />
        <img
          src="/icon8.png"
          alt="icon"
          style={{ height: "25px", width: "25px" }}
          className="mb-8"
        />
      </div>

      <button
        className={`p-2 absolute top-4 rounded-md md:hidden ${
          !open ? "left-8" : "right-0"
        }`}
        onClick={() => dispatch(updateOpen(!open))}
      >
        {open ? (
          <img src="/leftarrow.svg" className="text-white w-4 h-4" />
        ) : (
          <img src="/arrow.svg" className="text-white w-4 h-4 ml-4" />
        )}{" "}
      </button>
    </div>
  );
};

export default Sidebar;
