import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import Footer from "../../2-Components/2Footer/Footer";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";

const TicketBooking = () => {
  return (
    <Container spacing={"0"}>
      <WebNavigation />
      <Stack direction={"column"} spacing={"0"} w="100%" h="100%">
        <Box className="pt-[90px] bg-[#18161C]">
          <Box className="h-[70px] flex justify-center w-full bg-[#1C1921] items-center text-center">
            <h1
              className="text-[16px] text-center text-[#F2F2F2] uppercase"
              style={{ fontFamily: vTextStyle.iRegular }}
            >
              premiereS, Tickets & Showtimes{" "}
            </h1>
          </Box>
        </Box>
        <Stack direction="row" spacing={"0"} className="w-full h-full">
          {/** trailer section */}
          <Stack
            spacing={"6px"}
            className="bg-[#141118] pt-[50px] pl-[10%] pr-[40px] w-max"
          >
            <h1
              className="h-[40px] items-center justify-between  text-[21px] text-[#F2F2F2] max-w-max"
              style={{ fontFamily: vTextStyle.iSemiBold }}
            >
              Watch trailer
            </h1>
            <Box className="w-[360px] h-[260px] overflow-hidden bg-[#000000]">
              <video className="h-full w-full" controls>
                <source
                  src="https://docs.material-tailwind.com/demo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Stack>
          {/** booking section  */}
          <Stack direction="column" className="min-h-[100vh] h-full">
            <Stack
              spacing={"56px"}
              direction="column"
              className="w-full min-h-[80vh] px-[10%] py-[8%] items-start bg-[#ffffff]"
            >
              {/** calendar slider */}
              <Stack
                direction="row"
                spacing={"25px"}
                className="gap-[25px] w-full"
              >
                {[...Array(5)].map((data, index) => {
                  return (
                    <Stack
                      key={index}
                      direction="column"
                      spacing={"0px"}
                      className="w-[99px] h-[126.03px] rounded-[9.07px] bg-[#F2F2F2] text-[#18161C] items-center justify-center text-center select-none leading-tight "
                      style={{ fontFamily: vTextStyle.iSemiBold }}
                    >
                      <p className="text-[17px]">FEB</p>
                      <p className="text-[38px]">3</p>
                      <p className="text-[17px]">2024</p>
                    </Stack>
                  );
                })}
              </Stack>
              {/** ticket section */}
              <Stack direction="column" className="w-full " spacing={"20px"}>
                <h1
                  className="text-[#18161C] text-[24px]"
                  style={{ fontFamily: vTextStyle.iSemiBold }}
                >
                  Tuko Pamoja Tickets & Showtimes
                </h1>
                {/** ticket Card */}
                <Stack
                  spacing={"12px"}
                  direction="column"
                  className="h-[177px] w-full border border-[#D5D5D5] rounded-[9.06px] justify-center px-[24px]"
                >
                  <Stack spacing={"6px"} className="leading-tight ">
                    <h1
                      className="text-[#151118] text-[21px]"
                      style={{ fontFamily: vTextStyle.iSemiBold }}
                    >
                      National Theatre
                    </h1>
                    <p
                      className="text-[#808080] text-[17px]"
                      style={{ fontFamily: vTextStyle.iMedium }}
                    >
                      De winton Street, Kampala, Uganda
                    </p>
                  </Stack>

                  <p
                    className="text-[#000000] text-[17px]"
                    style={{ fontFamily: vTextStyle.iMedium }}
                  >
                    Segment: Bunyoro-Kitara
                  </p>
                  <Box
                    className="bg-[#EE5170] w-max text-[#FFFFFF] text-[17px] rounded-[6px] px-[12px] py-[10px]"
                    style={{ fontFamily: vTextStyle.iSemiBold }}
                  >
                    3:00 PM
                  </Box>
                </Stack>
              </Stack>
            </Stack>
            <Footer />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default TicketBooking;

const Container = styled(Stack)`
  width: 100vw;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  background: rgba(20, 17, 24, 1);

  video {
    object-fit: cover;
  }
`;
