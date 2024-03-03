import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { FaTwitterSquare, FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <Box className="bg-[#18151c] w-full py-16 px-12 lg:px-[86px] overflow-hidden">
      <Box className="max-w-[1240px] mx-auto grid lg:grid-cols-5 gap-8 text-gray-300">
        <Stack
          direction="column"
          spacing={"20px"}
          className="text-center mx-auto lg:text-left lg:col-span-2"
        >
          <h1
            className="text-[18px] text-[#F2F2F2] tracking-wide"
            style={{ fontFamily: vTextStyle.iBold }}
          >
            Nyati Motion Pictures
          </h1>
          <p
            className="text-[#8b8789] text-[14px] md:w-[400px] lg:w-[70%]"
            style={{ fontFamily: vTextStyle.iRegular }}
          >
            Nyati Motion Pictures (NMP) is a Ugandan film and video production
            company established in 2005 with a focus on the East African market.
          </p>
          <Stack
            spacing={"8px"}
            className="text-[#F2F2F2] text-[16px]"
            style={{ fontFamily: vTextStyle.iMedium }}
          >
            <Box>+256 778 787 660 </Box>
            <Box>P.o Box 74733, Kampala </Box>
            <Box>
              info@nyatimotionpictures.com <br />
              nyatimotionpictures@gmail.com
            </Box>
          </Stack>
        </Stack>
        
        <Stack
          direction="column"
          spacing={"20px"}
          className="text-center mx-auto lg:text-left"
        >
          {" "}
          <h1
            className="text-[18px] text-[#F2F2F2] tracking-wide"
            style={{ fontFamily: vTextStyle.iBold }}
          >
            Watch
          </h1>
          <Stack>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Tuko Pamoja{" "}
            </Box>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Tuko Pamoja{" "}
            </Box>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Tuko Pamoja{" "}
            </Box>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Tuko Pamoja{" "}
            </Box>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              View All
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          spacing={"20px"}
          className="text-center mx-auto lg:text-left"
        >
          {" "}
          <h1
            className="text-[18px] text-[#F2F2F2] tracking-wide"
            style={{ fontFamily: vTextStyle.iBold }}
          >
            About
          </h1>
          <Stack>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Company{" "}
            </Box>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Press
            </Box>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Events
            </Box>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Contact us
            </Box>
          </Stack>
        </Stack>
        <Stack
          direction="column"
          spacing={"20px"}
          className="text-center mx-auto lg:text-left"
        >
          {" "}
          <h1
            className="text-[18px] text-[#F2F2F2] tracking-wide"
            style={{ fontFamily: vTextStyle.iBold }}
          >
            Legal
          </h1>
          <Stack>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Privacy Policy{" "}
            </Box>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Terms of Use{" "}
            </Box>
            <Box
              className="text-[#8b8789] text-[16px]"
              style={{ fontFamily: vTextStyle.iMedium }}
            >
              Supported Devices
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box className="max-w-[1240px] mx-auto mt-10 flex justify-center lg:justify-start">
        <Box className=" flex items w-max max-auto text-[#F2F2F2] gap-[30px]">
          <FaFacebookSquare size={22} />
          <FaInstagram size={22} />
          <FaTwitterSquare size={22} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
