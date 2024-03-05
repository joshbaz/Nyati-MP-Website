import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";
import HeroBg from "../../1-Assets/images/netflixtrail.jpg";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { PiPlayCircleThin } from "react-icons/pi";
import { HiOutlinePlay } from "react-icons/hi";

const FilmDetailsHero = () => {
  return (
    <HeroContent className="flex justify-center items-center">
      <Stack
        spacing={"54px"}
        className="text-center items-center mx-auto w-full max-w-[1100px] "
        style={{ position: "relative" }}
      >
        <Stack
          spacing={"30px"}
          className="left-0 w-full px-[16px]"
          style={{ position: "absolute" }}
        >
          <Stack spacing={"30px"} className="max-w-[586px]">
            <h1
              className="text-[#F2F2F2] text-[40px] text-left select-none"
              style={{ fontFamily: vTextStyle.iBold }}
            >
              Fair Play
            </h1>
            <p
              className="text-[#F2F2F2] text-[18px] text-left select-none leading-tight tracking-wider"
              style={{ fontFamily: vTextStyle.iRegular }}
            >
              A group of Ugandan youths become politically active when their
              football pitch is taken by a private investor, aided by their
              local councillor.
            </p>
            <p
              className="text-[#F2F2F2] text-[18px] text-left select-none tracking-wider"
              style={{ fontFamily: vTextStyle.iRegular }}
            >
              2010 • Film • Drama • TV-PGHD
            </p>
          </Stack>

          <Box
            className="flex items-center max-w-max rounded-full border border-[#EE5170] bg-[#EE5170] px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto lg:px-16 gap-[8px] text-[23px]"
            style={{ fontFamily: vTextStyle.iRegular }}
          >
            <Box>
              <HiOutlinePlay size={35} />
            </Box>
            <p>Play Now</p>
          </Box>
        </Stack>
      </Stack>
    </HeroContent>
  );
};

export default FilmDetailsHero;

const HeroContent = styled.section`
  height: 100vh;
  display: flex;

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
