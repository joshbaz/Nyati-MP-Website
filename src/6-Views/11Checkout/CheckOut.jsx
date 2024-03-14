import React from "react";
import { Stack, Box, Divider, VStack } from "@chakra-ui/react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import Footer from "../../2-Components/2Footer/Footer";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import CheckoutStepper from "../../2-Components/5Checkout/CheckoutStepper";
import FormPersonalInfo from "./FormPersonalInfo";
import FormPaymentDetails from "./FormPaymentDetails";
import { CheckoutStepperContext } from "../../5-Store/Contexts/Checkout";
import StepperControlsCheckout from "../../2-Components/5Checkout/StepperControlsCheckout";
import MTNImage from '../../1-Assets/images/Checkout/MTN.png'

const CheckOut = () => {
  const stepperArray = [
    {
      title: "Personal Info.",
    },
    {
      title: "Payment",
    },
    {
      title: "Confirmation",
    },
  ];

  const [currentStep, setCurrentStep] = React.useState(null);
  const [stepsAllComplete, setStepsAllComplete] = React.useState(false);

  const [personalData, setPersonalData] = React.useState({
    firstname: "",
    lastname: "",

    mobilenumber: "",

    email: "",
    address: "",
  });

  const [paymentData, setPaymentData] = React.useState({
    transactionId: "",
  });

  const formRef = React.useRef();

  React.useEffect(() => {
    setCurrentStep(() => stepperArray?.[0].title);

    return () => {
      //second
    };
  }, []);

  const handleFormSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  /** handle next step */
  const handleStepNext = () => {
    let getcurrentIndex =
      currentStep !== null
        ? stepperArray.findIndex((data) => data?.title === currentStep)
        : null;

    if (
      getcurrentIndex !== null &&
      getcurrentIndex + 1 < stepperArray?.length
    ) {
      let nextCurrentIndex = getcurrentIndex + 1;
      if (nextCurrentIndex < stepperArray?.length) {
        setCurrentStep(() => stepperArray?.[nextCurrentIndex].title);
      }
    } else if (getcurrentIndex + 1 === stepperArray?.length) {
      setStepsAllComplete(() => true);
    }
  };
  /** handle prev step */
  const handleStepPrev = () => {
    let getcurrentIndex =
      currentStep !== null
        ? stepperArray.findIndex((data) => data?.title === currentStep)
        : null;

    if (getcurrentIndex !== null && getcurrentIndex > 0) {
      let prevCurrentIndex = getcurrentIndex - 1;
      // alert(prevCurrentIndex);

      setCurrentStep(() => stepperArray?.[prevCurrentIndex].title);
      if (stepsAllComplete) {
        setStepsAllComplete(() => false);
      }
    }
  };

  /** form display */
  const FormDisplay = (step) => {
    switch (step) {
      case "Personal Info.":
        return (
          <FormPersonalInfo
            innerref={formRef}
            handleStepNext={handleStepNext}
          />
        );
      case "Payment":
        return (
          <FormPaymentDetails
            innerref={formRef}
            handleStepNext={handleStepNext}
          />
        );
      case "Confirmation":
        return (
          <FormPersonalInfo
            innerref={formRef}
            handleStepNext={handleStepNext}
          />
        );
      default:
        return null;
    }
  };
  return (
    <Container spacing={"0"}>
      <WebNavigation />

      <StackContainer direction="column" spacing={"0"} className="bg-green-400">
        {/** top stepper */}
        <Box className="pt-[90px] bg-[#18161C]">
          <Box className="h-[70px] flex justify-center w-full bg-[#1C1921] items-center text-center">
            <CheckoutStepper
              stepperData={stepperArray}
              currentStep={currentStep}
              stepsAllComplete={stepsAllComplete}
            />
          </Box>
        </Box>

        <Stack
          direction="row"
          spacing={"0"}
          className="w-full h-full grow relative m-0 p-0"
        >
          {/** forms */}
          <Stack
            h="unset"
            direction="column"
            className="w-full h border-r-2 px-[10%] py-[3%] "
          >
            <Box className="w-full">
              <CheckoutStepperContext.Provider
                value={{
                  personalData,
                  setPersonalData,
                  paymentData,
                  setPaymentData,
                }}
              >
                {FormDisplay(stepsAllComplete ? "Complete" : currentStep)}
              </CheckoutStepperContext.Provider>
            </Box>

            {/** stepper controls */}
            <Box className="w-full flex justify-end">
              <Box className="w-max">
                <StepperControlsCheckout
                  handleStepNext={handleStepNext}
                  stepperData={stepperArray}
                  currentStep={currentStep}
                  handleStepPrev={handleStepPrev}
                  handleFormSubmit={handleFormSubmit}
                />
              </Box>
            </Box>
          </Stack>

          {/** summary of booking */}
          <Stack
            direction="column"
            spacing={"20px"}
            className="min-w-[484px] px-[5%] py-[3%] m-0 p-0 2xl:px-[1%] 2xl:py-[1%]"
          >
            <h1
              className="text-[#141118] text-[21px]"
              style={{ fontFamily: vTextStyle.iSemiBold }}
            >
              Summary of your Booking
            </h1>

            <Stack direction="column">
              <Stack
                direction="column"
                className="max-w-[378px] rounded-[7px] bg-[#f2f2f2] items-left px-[35px] py-[25px] "
              >
                <h1
                  className="text-[21px] text-[#151118]"
                  style={{ fontFamily: vTextStyle.iSemiBold }}
                >
                  About your ticket
                </h1>

                <Stack
                  direction="column"
                  spacing={"10px"}
                  style={{ fontFamily: vTextStyle.iSemiBold }}
                  className="text-[17px] text-[#808080] leading-tight"
                >
                  <Box className="flex">
                    <p className="w-[93px]">Film </p>:{" "}
                    <p className="ticketText">Tuko Pamoja</p>
                  </Box>
                  <Box className="flex">
                    <p className="w-[93px]">Segment </p> :
                    <p className="ticketText">Bunyoro-Kitara</p>
                  </Box>
                  <Box className="flex">
                    <p className="w-[93px]">Location </p> :
                    <p className="ticketText">National Theatre</p>
                  </Box>
                </Stack>
              </Stack>
            </Stack>

            {/** About payment */}
            <Stack direction="column">
              <Stack
                direction="column"
                className="max-w-[378px] rounded-[7px] bg-[#f2f2f2] items-left px-[35px] py-[25px] "
              >
                <h1
                  className="text-[21px] text-[#151118]"
                  style={{ fontFamily: vTextStyle.iSemiBold }}
                >
                  About your payment
                </h1>

                <Stack
                  direction="column"
                  spacing={"10px"}
                  style={{ fontFamily: vTextStyle.iSemiBold }}
                  className="text-[17px] text-[#808080] leading-tight"
                >
                  <Box className="flex">
                    <p className="w-[170px]">Method of Payment</p>:{" "}
                    <p className="ticketText">MTN</p>
                  </Box>

                  <Box className="flex w-[99px] h-[58px]">
                    <img src={MTNImage} alt={"MTN MoMo"} />
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </StackContainer>
      <Footer />
    </Container>
  );
};

export default CheckOut;

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

const StackContainer = styled(Stack)`
  height: 100% !important;
  min-height: 100vh;
  background: #ffffff;
  margin-bottom: 0;
  padding-bottom: 0;
  position: relative;
  overflow: hidden;

  .ticketText {
    padding-left: 5px;
    font-family: ${vTextStyle.iMedium};
  }
`;
