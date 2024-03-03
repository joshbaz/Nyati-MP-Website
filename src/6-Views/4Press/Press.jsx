import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import PressHero from "./PressHero";
import PressFeatured from "./PressFeatured";
import Footer from "../../2-Components/2Footer/Footer";

const Press = () => {
  return (
    <Container spacing={"0"}>
          <WebNavigation />
          
          <Stack direction="column" spacing={'0'} w="100%" h="100%">
              <PressHero />
              <PressFeatured />
          </Stack>
          <Footer />
    </Container>
  );
};

export default Press;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
