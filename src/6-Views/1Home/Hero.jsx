import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";
import HeroBg from "../../1-Assets/images/Hero.svg";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { TfiArrowCircleDown } from "react-icons/tfi";


const Hero = () => {
  return (
    <HeroContent>
      <Box className="text-white mx-auto h-screen  px-4 py-32 flex items-center lg:flex lg:h-screen lg:items-center  ">
        <Box className="mx-auto max-w-3xl  text-center md:max-w-full lg:max-w-full">
          <h1 className="text-3xl  leading-tight md:text-6xl md:leading-tight lg:text-6xl lg:leading-tight 2xl:text-7xl 2xl:leading-tight font-extrabold">
            Join Us In Empowering{" "}
            <span className="block">Humanity Through Media</span>{" "}
          </h1>
          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed lg:text-2xl">
            Stream Originals like Fate, FairPlay and many more.
          </p>  

          <Box className="mt-8 flex flex-wrap justify-center gap-5">
            <Box
              as="button"
              className="block w-full rounded-full border border-[#EE5170] bg-[#EE5170] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto lg:px-16"
            >
              Sign Up for Free
            </Box>
            <Box
              as="button"
              className="block w-full rounded-full border border-[#FFFFFE] bg-transparent px-12 py-3 text-sm font-medium text-white hover:bg-[#EE5170] hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto lg:px-16 custombtn"
            >
              Watch Now
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="text-white font-regular text-wrap absolute  left-0 right-0 flex flex-col items-center gap-[10px] text-center px-4 mx-auto w-[121px]" style={{position: 'absolute', bottom: '20px',}}>
        <p>learn more</p>
        <Box size={20}>
          <TfiArrowCircleDown />
        </Box>
      </Box>
    </HeroContent>
  );
};

export default Hero;

const HeroContent = styled.section`
  height: 100vh;
  display: flex;
  background: linear-gradient(
      180deg,
      rgba(54, 50, 62, 0.462),
      rgba(10, 1, 16, 1)
    ),
    url(${HeroBg});
  background: linear-gradient(
      to top,
      rgba(20, 17, 24, 1),
      rgba(20, 17, 24, 0.729)
    ),
    url(${HeroBg}) center/cover no-repeat;

  overflow: hidden;
  position: relative;

  .custombtn {
    background: transparent;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
`;
