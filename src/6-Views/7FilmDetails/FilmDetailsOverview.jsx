import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";

import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";

const FilmDetailsOverview = () => {
  return (
    <Container className="w-full bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <Box className="max-w-[1240px] mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16 lg:max-w-[1056px] xl:gap-24 items-start">
        <Stack spacing={"20px"}>
          <h1
            className="text-[#FFFAF6] opacity-[100%] text-[32px] text-left capitalize"
            style={{ fontFamily: vTextStyle.iSemiBold }}
          >
            Overview
          </h1>

          <p
            className="text-[#F2F2F2] text-[18px] text-justify select-none leading-tight tracking-wider opacity-[80%]"
            style={{ fontFamily: vTextStyle.iExtraLight }}
          >
            A group of young men (Itwara Anthony, Kafuruka Peter, Collin Asiimwe
            and Godfrey K.) in rural Ugandan town decide to be more involved in
            the political process after their football pitch has been allocated
            to a private investor with the help of their local councillor. They
            take advantage of the upcoming by-election to look for a candidate
            who can save their football pitch. The club captain Kato (Peter
            Kafuruka), stands as a compromise candidate of Citizens Empowerment
            Party (CEP). However, Kato’s conservative parents belong to
            different parties and are not amused, and they do not even support
            him. Can Kato, a barber and teacher manage the tough game of
            politics?
          </p>
        </Stack>
      </Box>
    </Container>
  );
};

export default FilmDetailsOverview;

const Container = styled.section`
  min-height: 54vh;

  background-size: cover;
`;
