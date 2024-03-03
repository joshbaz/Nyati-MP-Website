import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";

import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import newImage from "../../1-Assets/images/Press/Press.svg";

const PressFeatured = () => {
  return (
    <Container className="w-full bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <Box className="max-w-[1240px] mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16 lg:max-w-[1240px] xl:gap-24 items-start">
        <Stack spacing={"20px"}>
          <h1
            className="text-[#FFFAF6] opacity-[100%] text-[32px] text-center"
            style={{ fontFamily: vTextStyle.iSemiBold }}
          >
            Featured News
          </h1>

          <Stack
            direction="row"
            className="flex flex-wrap gap-0 items-center justify-center mx-auto"
          >
            {[...Array(4)].map((data, index) => {
              return (
                <NewsContainer
                  key={index}
                  className={
                    "w-[280px] bg-[#141118] border border-[#FFFFFE] h-[446px] rounded-xl overflow-hidden"
                  }
                >
                  <Stack spacing={"0"} className="h-full w-full">
                    <ImageContainer className="w-full h-[200px] object-contain">
                      <img
                        src={newImage}
                        alt={"Nyati Films"}
                        className="object-cover h-full w-full"
                      />
                    </ImageContainer>

                    <Stack
                      direction="column"
                      spacing={"12px"}
                      className="px-[24px] py-[24px]"
                    >
                      <h1
                        className="text-[#ffffff] text-[16px] text-left tracking-wider select-none"
                        style={{ fontFamily: vTextStyle.iBold }}
                      >
                        Docuseries, Tuko Pamoja to premiere starting next month
                      </h1>

                      <p
                        className="text-[#ffffff] opacity-[70%] text-[13.5px] text-left tracking-widest select-none"
                        style={{
                          fontFamily: vTextStyle.iExtraLight,
                        }}
                      >
                        Tuko Pamoja (We Are One) docuseries by Evelyn Cindy
                        Magara (PhD) and Nyati Motion Pictures will go to
                        cinemas with 13 premieres starting
                      </p>
                    </Stack>
                  </Stack>
                </NewsContainer>
              );
            })}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default PressFeatured;

const Container = styled.section`
  min-height: 54vh;

  background-size: cover;
`;

const NewsContainer = styled(Box)``;

const ImageContainer = styled(Stack)`
  opacity: 1;
  img {
    height: 100%;
  }
`;
