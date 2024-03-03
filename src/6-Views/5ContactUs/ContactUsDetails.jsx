import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";

import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";

const ContactUsDetails = () => {
  return (
    <Container className="w-full bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <Box className="max-w-[1240px] mx-auto grid md:grid-cols-1 md:gap-10 lg:gap-16 lg:max-w-[1240px] xl:gap-24 items-start">
        <Stack spacing={"20px"}>
          <h1
            className="text-[#FFFAF6] opacity-[100%] text-[32px] text-center capitalize"
            style={{ fontFamily: vTextStyle.iSemiBold }}
          >
            For more information <span className="block"> contact us</span>{" "}
          </h1>

          <Stack
            direction="column"
            spacing={"20px"}
            className="items-center text-center"
          >
            <Stack
              spacing={"0"}
              className="text-[#F2F2F2] opacity-[80%] text-[17px]"
            >
              <h5
                className="text-[#F2F2F2] opacity-[80%] text-[18px]"
                style={{ fontFamily: vTextStyle.iMedium }}
              >
                Call
              </h5>
              <p>+256 778 787 660</p>
              <p>+256 702 074337</p>
            </Stack>
            <Stack
              spacing={"0"}
              className="text-[#F2F2F2] opacity-[80%] text-[17px]"
            >
              <h5
                className="text-[#F2F2F2] opacity-[80%] text-[18px]"
                style={{ fontFamily: vTextStyle.iMedium }}
              >
                Whatsapp
              </h5>
              <p>+256 791 896 110</p>
            </Stack>
            <Stack
              spacing={"0"}
              className="text-[#F2F2F2] opacity-[80%] text-[17px]"
            >
              <p>P.o Box 74733, Kampala</p>
            </Stack>
            <Stack
              spacing={"0"}
              className="text-[#F2F2F2] opacity-[80%] text-[17px]"
            >
              <h5
                className="text-[#F2F2F2] opacity-[80%] text-[18px]"
                style={{ fontFamily: vTextStyle.iMedium }}
              >
                E-mail:
              </h5>
              <p style={{ fontFamily: vTextStyle.iMedium }}>
                info@nyatimotionpictures.com
              </p>
              <p style={{ fontFamily: vTextStyle.iMedium }}>
                nyatimotionpictures@gmail.com
              </p>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default ContactUsDetails;

const Container = styled.section`
  min-height: 54vh;

  background-size: cover;
`;
