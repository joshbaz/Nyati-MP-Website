import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import AboutHero from "./AboutHero";
import AboutIntro from "./AboutIntro";
import AboutVision from "./AboutVision";
import AboutImpact from "./AboutImpact";
import AboutFunding from "./AboutFunding";
import AboutShows from "./AboutShows";
import FAQ from "../1Home/FAQ";
import Footer from "../../2-Components/2Footer/Footer";

const About = () => {
  return (
    <Container spacing={"0"}>
      <WebNavigation />

          <Stack direction="column" spacing={"0"} w="100%" h="100%">
              <AboutHero />
              <AboutIntro />
              <AboutVision />
              <AboutImpact />
              <AboutFunding />
              <AboutShows />
              <FAQ />
          </Stack>
          <Footer />
    </Container>
  );
};

export default About;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
