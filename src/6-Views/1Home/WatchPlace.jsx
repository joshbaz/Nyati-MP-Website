import React from "react";
import Bgwatch from "../../1-Assets/images/bgwatchtime.png";

const WatchPlace = () => {
  return (
    <div className="w-full bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid grid-rows-subgrid md:grid-cols-2 md:grid-rows-1 md:gap-10 lg:gap-16 lg:max-w-[1000px] xl:gap-28">
        <div className="text-white flex flex-col justify-center row-start-2 mx-auto my-4 text-center md:text-left md:row-start-auto">
          <h1 className="text-3xl  font-bold leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight  2xl:text-7xl 2xl:leading-tight tracking-wide">
            Watch
            <span className="ps-2 md:px-0 md:block">Everywhere</span>
          </h1>
          <p className="text-[#FFFAF6] mx-auto mt-4 max-w-3xl sm:px-0 md:px-0 lg:px-0 font-medium sm:text-xl/relaxed  lg:text-2xl tracking-tight">
            Stream unlimited Ugandan movies and TV shows on your phone, tablet
            and laptop.
          </p>
        </div>

        <img className="w-[500px] mx-auto my-4" src={Bgwatch} alt={"apps"} />
      </div>
    </div>
  );
};

export default WatchPlace;
