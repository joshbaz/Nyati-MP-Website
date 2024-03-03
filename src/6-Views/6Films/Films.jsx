import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import FilmHero from "./FilmHero";
import Footer from "../../2-Components/2Footer/Footer";
import FilmsWatchList from "./FilmsWatchList";
import FilmsTickets from "./FilmsTickets";
import FilmsGenre from "./FilmsGenre";
import ContactWatch from "../5ContactUs/ContactWatch";

const Films = () => {
  return (
    <Container spacing={"0"}>
      <WebNavigation />

      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <FilmHero />
        <FilmsWatchList />
        <FilmsTickets />
        <FilmsGenre />
        <ContactWatch />
      </Stack>
      <Footer />
    </Container>
  );
};

export default Films;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;