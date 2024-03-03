import React from "react";
import { Box } from "@chakra-ui/react";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";
import Bgwatch from "../../1-Assets/images/bgwatchtime.png";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";

const ContactWatch = () => {
  return (
    <div className="w-full bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 md:gap-10 md:items-center lg:gap-16 lg:max-w-[1000px] lg:items-center xl:gap-28">
        <img className="w-[500px] mx-auto my-4" src={Bgwatch} alt={"apps"} />

        <div className="text-white flex flex-col justify-center  mx-auto my-4 text-center md:text-left">
          <h1 className="text-3xl font-bold leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight  2xl:text-5xl 2xl:leading-tight tracking-wider">
            Watch Anytime.
            <span className="ps-2 md:px-0 md:block ">Anywhere.</span>
          </h1>
         
          <div className="mx-auto md:w-full">
            
            {/** buttons */}
            <Box className="flex gap-x-[20px] mt-[20px]">
              <button className="flex gap-[6px] items-center h-[52px] justify-center px-[12px] rounded-md border">
                <Box className="my-0 mx-0">
                  <IoLogoApple size={40} />
                </Box>

                <Box className="leading-tight ">
                  <p
                    className={"text-[#F2F2F2] font-regular text-[12px]"}
                    style={{ fontFamily: vTextStyle.iRegular }}
                  >
                    Download on the
                  </p>
                  <h1
                    className="text-[#F2F2F2] text-[20px]"
                    style={{ fontFamily: vTextStyle.iMedium }}
                  >
                    App Store
                  </h1>
                </Box>
              </button>
              <button className="flex gap-[6px] items-center h-[52px] justify-center px-[12px] rounded-md border">
                <Box>
                  <IoLogoGooglePlaystore size={40} />
                </Box>
                <Box className="leading-tight text-left ">
                  <p
                    className={"text-[#F2F2F2] font-regular text-[12px]"}
                    style={{ fontFamily: vTextStyle.iRegular }}
                  >
                    GET IT ON
                  </p>
                  <h1
                    className="text-[#F2F2F2] text-[20px] font-sans font-medium"
                    style={{ fontFamily: vTextStyle.iMedium }}
                  >
                    Google Play
                  </h1>
                </Box>
              </button>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactWatch;
