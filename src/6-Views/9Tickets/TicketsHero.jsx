import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";

import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import TicketImag from "../../1-Assets/images/film/TK.png";

const TicketsHero = () => {
  return (
    <Container className="w-full bg-[#141118] py-20 pt-28  overflow-hidden">
      <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
        <Stack
          direction="row"
          className="flex px-[2%] flex-wrap gap-0 items-center justify-center mx-auto"
        >
          <Box className="ticketPoster">
            <img src={TicketImag} alt={""} />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default TicketsHero;
const Container = styled.section`
  min-height: 54vh;

  background-size: cover;

  .ticketPoster {
    height: 330px;

    img {
    }
  }

  img {
    height: 100%;
    width: 100%;
    image-rendering: pixelated;
    object-fit: fill;
  }
`;