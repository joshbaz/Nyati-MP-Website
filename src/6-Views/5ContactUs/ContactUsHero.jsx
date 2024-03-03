import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";
//import HeroBg from "../../1-Assets/images/Hero.svg";
import HeroBg from "../../1-Assets/images/netflixtrail.jpg";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { TfiArrowCircleDown } from "react-icons/tfi";

const ContactUsHero = () => {
  return (
    <HeroContent className="flex justify-center items-center">
      <Stack spacing={"54px"} className="text-center items-center ">
        <h1
          className="text-[#F2F2F2] text-[60px] text-center select-none capitalize"
          style={{ fontFamily: vTextStyle.iBold }}
        >
          Connect with us
        </h1>
      </Stack>
      <Box
        className="text-white font-regular text-wrap absolute  left-0 right-0 flex flex-col items-center gap-[10px] text-center px-4 mx-auto w-[121px]"
        style={{ position: "absolute", bottom: "20px" }}
      >
        <p>Scroll Down</p>
        <Box size={20}>
          <TfiArrowCircleDown />
        </Box>
      </Box>
    </HeroContent>
  );
};

export default ContactUsHero;

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

const ImageContainer = styled(Stack)`
  opacity: 1;
  img {
    height: 100%;
  }
`;
