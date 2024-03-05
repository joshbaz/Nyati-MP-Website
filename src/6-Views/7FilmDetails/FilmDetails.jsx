import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import FilmDetailsHero from "./FilmDetailsHero";
import Footer from "../../2-Components/2Footer/Footer";
import FilmDetailsOverview from "./FilmDetailsOverview";

const FilmDetails = () => {
  return (
    <Container spacing={"0"}>
      <WebNavigation />
      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <FilmDetailsHero />
        <FilmDetailsOverview />
      </Stack>
      <Footer />
    </Container>
  );
};

export default FilmDetails;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
