import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";
//import HeroBg from "../../1-Assets/images/Hero.svg";
import HeroBg from "../../1-Assets/images/netflixtrail.jpg";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";

const AboutImpact = () => {
  return (
    <Container className="w-full bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <Box className="max-w-[1240px] mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16 lg:max-w-[1000px] xl:gap-24 items-start">
        <Stack>
          <h1
            className="text-[#FFFAF6] opacity-[100%] text-[46px] text-center"
            style={{ fontFamily: vTextStyle.iSemiBold }}
          >
            Our Impact
          </h1>

          <Stack spacing={"30px"}>
            <p
              className="text-[#FFFAF6] opacity-[70%] text-[19px] text-justify"
              style={{ fontFamily: vTextStyle.iRegular }}
            >
              Film is a very powerful and effective medium for the transmission
              of messages in society. In the last decade, Nyati Motion Pictures
              (NMP) has managed to produce educative and entertaining films that
              have affected our society positively.
            </p>
            <p
              className="text-[#FFFAF6] opacity-[70%] text-[19px] text-justify"
              style={{ fontFamily: vTextStyle.iRegular }}
            >
              The Nyati Motion Pictures is motivated by ‘art for man’s sake’. As
              a result, the Nyati team is committed to telling authentic African
              stories that bring the artistic reality close to the people. Our
              films are inspired by real-life experiences that are specific to
              the special and temporal setting, yet with universal themes. Our
              films represent Uganda’s culture and experience to the whole world
              with the primary purpose of contributing to the socio-economic
              development of our country and Africa at large.
            </p>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutImpact;

const Container = styled.section`
  min-height: 54vh;
  background-size: cover;
`;
