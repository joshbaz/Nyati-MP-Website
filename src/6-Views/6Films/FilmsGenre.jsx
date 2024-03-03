import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";

import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import MovieCarousel from "../../2-Components/3Film/MovieCarousel";

const FilmsGenre = () => {
  return (
    <Container className="w-full bg-[#141118] py-16  overflow-hidden">
      {" "}
      <Box className="w-full mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16  xl:gap-24 items-start">
        <Stack spacing={"40px"} className="pl-16">
          <Box>
            {" "}
            <h1
              className="text-[#FFFAF6] opacity-[100%] text-[40px] text-left"
              style={{ fontFamily: vTextStyle.iSemiBold }}
            >
              Genre
            </h1>
          </Box>

          <Stack direction="column" spacing={"30px"}>
            {/** genre 1 */}
            <Stack
              direction="column"
              spacing="20px"
              className="flex w-full  gap-0 items-start justify-center mx-auto"
            >
              <h1
                className="text-[#FFFAF6] opacity-[100%] text-[22px] text-left"
                style={{ fontFamily: vTextStyle.iSemiBold }}
              >
                Inspirational
              </h1>
              <MovieCarousel />
            </Stack>
            {/** genre 2 */}
            <Stack
              direction="column"
              spacing="20px"
              className="flex w-full  gap-0 items-start justify-center mx-auto"
            >
              <h1
                className="text-[#FFFAF6] opacity-[100%] text-[22px] text-left"
                style={{ fontFamily: vTextStyle.iSemiBold }}
              >
                Family
              </h1>
              <MovieCarousel />
            </Stack>

            {/** genre 3 */}
            <Stack
              direction="column"
              spacing="20px"
              className="flex w-full  gap-0 items-start justify-center mx-auto"
            >
              <h1
                className="text-[#FFFAF6] opacity-[100%] text-[22px] text-left"
                style={{ fontFamily: vTextStyle.iSemiBold }}
              >
                Comedy
              </h1>
              <MovieCarousel />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default FilmsGenre;

const Container = styled.section`
  min-height: 44vh;

  background-size: cover;
`;
