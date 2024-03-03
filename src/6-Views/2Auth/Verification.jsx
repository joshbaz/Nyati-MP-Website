import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { Stack, Box } from "@chakra-ui/react";
import Footer from "../../2-Components/2Footer/Footer";
import HeroBg from "../../1-Assets/images/netflixtrail.jpg";
import logo from "../../1-Assets/logos/Logo.svg";


const Verification = () => {
  const otp0 = React.useRef(null);
  const otp1 = React.useRef(null);
  const otp2 = React.useRef(null);
  const otp3 = React.useRef(null);

  const [otpnum, setOtpNum] = React.useState(["", "", "", ""]);
  const [emailToVerify, setEmailToVerify] = React.useState("");
  const [isSubmittingResend, setIsSubmittingResend] = React.useState(false);
  const [isSubmittingp, setSubmittingp] = React.useState(false);

  React.useEffect(() => {
    otp0.current.focus();
  }, []);

  /** handle opt input */
  const handleInputOtp = (position, value) => {
    console.log(value, "bavalue");
    let otpArray = [...otpnum];
    otpArray[position] = value;
      setOtpNum(() => otpArray);
      if (position === 0 && otpArray[position] !== "" && value !== "") {
          otp1.current.focus();
      } else if (position === 0 && value == "") {
          otp0.current.focus()
      }
       if (position === 1 && otpArray[position] !== "" && value !== "") {
         otp2.current.focus();
       } else if (position === 1 && value == "") {
         otp0.current.focus();
       }
       if (position === 2 && otpArray[position] !== "" && value !== "") {
         otp3.current.focus();
       } else if (position === 2 && value == "") {
         otp1.current.focus();
       }
       if (position === 3 && value == "") {
         otp2.current.focus();
       }
  };
  /** handle otp submission */
    const handleSubmitOtp = () => {
      alert("submission of otp success")
  };

  /** handle resend otp */
  const handleResendOtp = () => {};

  return (
    <Container>
      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <HeroContent className="flex justify-center items-center ">
          <Stack
            direction="column"
            spacing="70px"
            className="max-w-[317px] mx-auto"
          >
            {/** logo */}
            <ImageContainer className="absolute top-[34px] left-10">
              <img src={logo} alt={"Nyati Films"} />
            </ImageContainer>

            <Stack spacing={"30px"} className="w-full">
              {/** form title */}
              <Stack className="w-full">
                <p
                  className="text-[#F2F2F2] text-[14px] text-center select-none"
                  style={{ fontFamily: vTextStyle.iRegular }}
                >
                  Code has been sent to e***@gmail.com
                </p>
              </Stack>

              {/** forms */}
              <Stack spacing={"30px"} className="w-full">
                <SingleWrapper>
                  <FormContainer>
                    <Stack
                      w="100%"
                      direction="row"
                      spacing={"16px"}
                      className="h-[65px] justify-between items-center padding-0"
                    >
                      {[...Array(4)].map((data, index) => {
                        let otpRef;

                        if (index === 0) {
                          otpRef = otp0;
                        }
                        if (index === 1) {
                          otpRef = otp1;
                        }
                        if (index === 2) {
                          otpRef = otp2;
                        }
                        if (index === 3) {
                          otpRef = otp3;
                        }

                        return (
                          <input
                            key={index}
                            ref={otpRef}
                            autoFocus={index === 0 ? true : false}
                            maxLength={1}
                            value={otpnum[index]}
                            onChange={(e) => {
                              e.preventDefault();
                              handleInputOtp(index, e.target.value);
                            }}
                            className="w-[65px] h-full text-[#ffffff] text-[20px] text-center"
                            style={{ fontFamily: vTextStyle.iMedium }}
                          />
                        );
                      })}
                    </Stack>
                  </FormContainer>
                </SingleWrapper>
                <SingleWrapper>
                  <p
                    className="text-[#F2F2F2] text-[14px] text-center select-none"
                    style={{ fontFamily: vTextStyle.iRegular }}
                  >
                    Resend code in{" "}
                    <span className="text-[#ED3F62] underline underline-offset-2 cursor-pointer">
                      56
                    </span>{" "}
                    s
                  </p>
                </SingleWrapper>
              </Stack>
            </Stack>

            {/** form buttons */}
            <Stack spacing="18px">
              <Box
                onClick={otpnum?.includes("") ? null : handleSubmitOtp}
                as="button"
                className={`block w-full rounded-full border border-[#EE5170] bg-[#EE5170] px-12 py-3 text-sm font-medium text-white text-[14.35px] hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto lg:px-16 ${
                  otpnum?.includes("") ? "disabled" : ""
                }`}
                style={{ fontFamily: vTextStyle.iSemiBold }}
              >
                Continue
              </Box>
            </Stack>
          </Stack>
        </HeroContent>
        <Footer />
      </Stack>
    </Container>
  );
};

export default Verification;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;

const HeroContent = styled.section`
  height: 100vh;
  background: linear-gradient(
      180deg,
      rgba(54, 50, 62, 0.462),
      rgba(10, 1, 16, 1)
    ),
    url(${HeroBg});
  background-size: cover;

  .disabled {
    color: #ffffff;
    background: #ee5170;
    opacity: 50%;

    ::hover {
      background: #ee5170 !important;

    }
  }
`;

const SingleWrapper = styled(Box)``;
const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  input {
    background: #36323e;
    border: 1px solid rgba(238, 241, 244, 0.3);
    border-radius: 6px;
  }
`;

const ImageContainer = styled(Stack)`
  height: 102px;
  width: 102px;
  opacity: 1;
  img {
    height: 100%;
  }
`;
