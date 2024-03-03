import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { Stack, Box } from "@chakra-ui/react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const RegisteredSuccess = () => {
    const [isSubmittingp, setIsSubmittingp] = React.useState(false);
      React.useEffect(() => {
        if (isSubmittingp) {
          setTimeout(() => {
            setIsSubmittingp(() => false);
              // navigation.navigate("Signin");
              alert('navigate to signin')
          }, 5000);
        } else {
          setTimeout(() => {
            setIsSubmittingp(() => true);
          }, 2000);
        }
      }, [isSubmittingp]);
  return (
    <Container>
      {" "}
      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <HeroContent className="flex justify-center items-center">
          <Stack
            direction="column"
            spacing="70px"
            className="max-w-[408px] mx-auto"
          >
            <Stack spacing={"30px"} className="w-full">
              <Stack className="mx-auto items-center">
                <Box className="w-max text-[#06CC6B]">
                  <IoMdCheckmarkCircleOutline size={"68px"} />
                </Box>
                <h1
                  className="text-[35px] text-[#06CC6B] text-center"
                  style={{ fontFamily: vTextStyle.iSemiBold }}
                >
                  Congratulations!
                </h1>
              </Stack>
              <Stack spacing={"30px"}>
                <p
                  className="text-[20px] text-[#d0cbca] text-center"
                  style={{ fontFamily: vTextStyle.iRegular }}
                >
                  Thank you, your account has successfully been created
                </p>
                <p
                  className="text-[20px] text-[#d0cbca] text-center"
                  style={{ fontFamily: vTextStyle.iRegular }}
                >
                  A confirmation email has been sent to{" "}
                  <span className="text-[#F2F2F2]">email@gmail.com</span>
                </p>
              </Stack>
            </Stack>
          </Stack>
        </HeroContent>
      </Stack>
    </Container>
  );
};

export default RegisteredSuccess;

const Container = styled(Stack)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;

const HeroContent = styled.section`
  height: 100vh;
  background: rgba(10, 1, 16, 1);
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
