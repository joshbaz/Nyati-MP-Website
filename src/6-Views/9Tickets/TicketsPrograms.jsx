import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";

import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import TicketStepper from "../../2-Components/4Tickets/TicketStepper";
import posterImage1 from "../../1-Assets/images/Tickets/current.png";
import posterImage2 from "../../1-Assets/images/Tickets/Fate.png";
import posterImage3 from '../../1-Assets/images/Tickets/FairPlay.png'
import posterImage4 from "../../1-Assets/images/Tickets/WindowsOfHope.png";


const TicketsPrograms = () => {
  const stepperArray = [
    {
      date: "21-feb-2024",
      poster: posterImage1,
    },
    
    ];
    
      const stepperArray2 = [
        {
          date: "24-feb-2024",
          poster: posterImage2,
        },
        {
          date: "24-feb-2024",
          poster: posterImage3,
        },
        {
          date: "24-feb-2024",
          poster: posterImage4,
        },
      ];
  return (
    <Container className="w-full bg-[#141118] py-6 pb-24  overflow-hidden">
      <Box className="w-full mx-auto grid md:grid-cols-2 md:gap-10 lg:gap-16  xl:gap-24 items-start xl:px-[10%] ">
        {/** In Theatres */}
        <Stack direction="column" spacing={"38px"} className=" items-center">
          <Stack spacing={"10px"} className="w-max">
            <h1
              className="text-[#F2F2F2] text-[24px] text-center select-none"
              style={{ fontFamily: vTextStyle.iSemiBold }}
            >
              In Theaters
            </h1>
            <p
              className="text-[#F2F2F2] text-[15px] text-center select-none"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Get tickets to these films now!
            </p>
          </Stack>

          <Box>
            <TicketStepper stepperData={stepperArray} />
          </Box>
        </Stack>
        {/** Past Releases */}
        <Stack direction="column" spacing={"38px"} className="items-center">
          <Stack spacing={"10px"} className="w-max">
            <h1
              className="text-[#F2F2F2] text-[24px] text-center select-none"
              style={{ fontFamily: vTextStyle.iSemiBold }}
            >
              Past Releases
            </h1>
            <p
              className="text-[#F2F2F2] text-[15px] text-center select-none"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Stream from the comfort of your home today.
            </p>
          </Stack>

          <Box>
            <TicketStepper stepperData={stepperArray2} />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default TicketsPrograms;

const Container = styled.section`
  min-height: 54vh;

  background-size: cover;

  .ticketPoster {
    height: 330px;
  }

  img {
    height: 100%;
    width: 100%;
    image-rendering: high-quality;
    object-fit: fill;
  }
`;
