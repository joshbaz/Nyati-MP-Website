import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";

import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import bgBack from "../../1-Assets/images/About/vision.svg";

const AboutVision = () => {
    return (
      <Container>
        <Box
          className="max-w-[1240px] h-[80vh] my-[100px] mx-auto grid md:grid-cols-2 md:gap-10 lg:gap-16 lg:max-w-[1000px] xl:gap-24 "
          style={{
            position: "relative",
            minHeight: "100% !important",
            width: "100%",
          }}
        >
          <Box className="text-left absolute top-0 left-0">
            <Stack spacing={"10px"} className="w-[484px]">
              <h5
                className="text-[#FFFAF6] opacity-[100%] text-[28px]"
                style={{ fontFamily: vTextStyle.iSemiBold }}
              >
                Our Vision
              </h5>
              <h1
                className="text-[#FFFAF6] opacity-[100%] text-[46px]"
                style={{ fontFamily: vTextStyle.iBold }}
              >
                We’re Creating authentic stories.
              </h1>
              <p
                className="text-[#FFFAF6] opacity-[70%] text-[19px] "
                style={{ fontFamily: vTextStyle.iRegular }}
              >
                To become the leading local ‘authentic’ Film and Video
                Production Company in Uganda.
              </p>
            </Stack>
          </Box>
          <Box className="text-right absolute bottom-0 right-0">
            <Stack spacing={"10px"} className="w-[485px]">
              <h5
                className="text-[#FFFAF6] opacity-[100%] text-[28px]"
                style={{ fontFamily: vTextStyle.iSemiBold }}
              >
                Our Mission
              </h5>
              <h1
                className="text-[#FFFAF6] opacity-[100%] text-[46px]"
                style={{ fontFamily: vTextStyle.iBold }}
              >
                Becoming a powerhouse in Eastern Africa.
              </h1>
              <p
                className="text-[#FFFAF6] opacity-[70%] text-[19px] "
                style={{ fontFamily: vTextStyle.iRegular }}
              >
                To be the leading high-quality Film and Video Production
                powerhouse in Eastern Africa capable of satisfying local and
                international consumer demands.
              </p>
            </Stack>
          </Box>
        </Box>
      </Container>
    );
};

export default AboutVision;

const Container = styled.section`

  min-height: 90vh;
  background: linear-gradient(
      to top,
      rgba(20, 17, 24, 0.926),
      rgba(20, 17, 24, 0.729)
    ),
    url(${bgBack}) top/cover no-repeat;
  background-size: cover;

  .HeroText {
    text-align: center;
    font-family: ${vTextStyle.sRegular};
    font-size: 26px;
    width: 55%;
  }
`;

const HeroContent = styled.section`
height:100%;
`;
