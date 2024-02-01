import { FC } from "react";

const Section2: FC = () => {
  return (
    <div className="w-full bg-[linear-gradient(to bottom, rgb(19, 16, 10), black)] p-4 md:p-8 flex flex-col items-center md:items-stretch">
      <div className="md:text-right md:float-right mb-4 md:mb-0">
        <img
          className="mx-auto md:mx-0 md:float-right"
          src="/img7.png"
          alt="Image"
        />
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto">
        <h1 className="text-white font-bold text-4xl text-center md:text-left">
          Valorant
        </h1>

        <br />
        <br />
        <p className="text-white font-prostoOne text-base text-center md:text-left">
          Players assume the role of Deacon St. John, a former bounty hunter
          struggling to survive in a post-apocalyptic world filled with
          zombie-like creatures called Freaks. Though players are surrounded by
          death and danger on all sides, the world that they get to explore
          feels as though it's truly alive, which can encourage players to take
          risks when they probably shouldn't.
        </p>
        <div className="flex flex-col md:flex-row md:gap-10 items-center md:items-start mt-5 mb-3">
          <div className="flex flex-col mb-4 md:mb-0 md:mr-4">
            <button className="bg-orange-300 text-white rounded-full px-4 py-2 w-full md:w-40">
              Play Now
            </button>

            <p className="text-white font-bold text-sm text-center md:text-left mt-2">
              Buy now for $40 only
            </p>
          </div>

          <img className="w-full md:w-auto" src="/new4.jpeg" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Section2;
