import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";
import HeroBg from "../../1-Assets/images/netflixtrail.jpg";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";

import { IoChevronBack } from "react-icons/io5";

const VideoWatch = () => {
  return (
    <HeroContent>
      <Stack
        spacing={"20px"}
        className="text-center items-center mx-auto w-full  mt-[99px]"
      >
        <Box
          className="w-full max-w-[1200px]"
          style={{ position: "relative" }}
        >
          <Stack
            direction="row"
            className="h-[40px] items-center justify-between min-w-[193px] text-[16px] text-[#F2F2F2] max-w-max"
            style={{ fontFamily: vTextStyle.iRegular }}
          >
            <Box>
              <IoChevronBack size={26} /> 
            </Box>
            <Box>Watch</Box>
            <Box>/</Box>
            <Box>Fair Play</Box>
          </Stack>
        </Box>

        <Box className="w-full h-full overflow-hidden bg-[#000000]">
          <video className="h-full w-full" controls>
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </Box>
      </Stack>
    </HeroContent>
  );
};

export default VideoWatch;

const HeroContent = styled.section`
  height: 100vh;
  display: flex;

  background: rgba(20, 17, 24, 1);

  overflow: hidden;
  position: relative;

  .custombtn {
    background: transparent;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
`;
