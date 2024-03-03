import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";

import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import DrCindy from '../../1-Assets/images/About/Dr_cindy.svg'

const AboutIntro = () => {
  return (
    <Container className="w-full bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <Box className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:gap-10 lg:gap-16 lg:max-w-[1000px] xl:gap-24 items-start">
        <Stack spacing={"10px"}>
          <img
            className="w-[495px] object-cover mx-auto my-0"
            src={DrCindy}
            alt={"Dr.Cindy"}
          />
          <p
            className="text-[#FFFAF6] opacity-[70%] text-[18px]"
            style={{ fontFamily: vTextStyle.iRegular }}
          >
            Dr. Evelyn Cindy Magara
          </p>
        </Stack>
        <Stack spacing={'20px'}>
          <h5
            className="text-[#FFFAF6] opacity-[100%] text-[28px]"
            style={{ fontFamily: vTextStyle.iSemiBold }}
          >
            About
          </h5>
          <h1
            className="text-[#FFFAF6] opacity-[100%] text-[46px]"
            style={{ fontFamily: vTextStyle.iBold }}
          >
            We are Based In Uganda
          </h1>
          <p
            className="text-[#FFFAF6] opacity-[70%] text-[19px] text-justify"
            style={{ fontFamily: vTextStyle.iRegular }}
          >
            Nyati Motion Pictures was formed in 2005 as a Film and Video
            Production Company. Nyati Motion Pictures was registered as a
            company in February 2006. The company started operations by
            co-producing short documentaries and films to perfect the skills.
            Nyati Motion Pictures is proud to be part of the creative companies
            that are developing the film industry to reckon with in Uganda and
            Africa at large.
          </p>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutIntro;

const Container = styled.section`
  min-height: 54vh;

  background-size: cover;

  .HeroText {
    text-align: center;
    font-family: ${vTextStyle.sRegular};
    font-size: 26px;
    width: 55%;
  }
`;
