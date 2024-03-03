import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";
import HeroBg from "../../1-Assets/images/About/image 6.svg";
//import HeroBg from "../../1-Assets/images/netflixtrail.jpg";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";

const AboutShows = () => {
  return (
    <Container className="w-full bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <Box className="max-w-[1240px] mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16 lg:max-w-[1000px] xl:gap-24 items-start">
        <Stack spacing={'20px'}>
          <h1
            className="text-[#FFFAF6] opacity-[100%] text-[46px] text-center"
            style={{ fontFamily: vTextStyle.iSemiBold }}
          >
            Our Movies + Shows
          </h1>

          <Stack direction="row" className="flex flex-wrap gap-0 items-center justify-center mx-auto">
            {[...Array(5)].map((data, index) => {
              return (
                <MovieContainer key={index} className="h-[350px] w-[250px]">
                  <img src={HeroBg} alt={"movie"} className="object-cover h-full w-full" />
                  <p
                    className="text-[#F8FAEC] text-[20px] text-center select-none relative bottom-[37px]"
                    style={{ fontFamily: vTextStyle.iSemiBold }}
                  >
                    Fate Poster
                  </p>
                </MovieContainer>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutShows;

const Container = styled.section`
  min-height: 54vh;
  background-size: cover;
`;

const MovieContainer = styled(Box)`
`
