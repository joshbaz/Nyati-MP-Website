import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import styled from "styled-components";
import WebNavigation from "../../2-Components/1Navigation/WebNavigation";
import Footer from "../../2-Components/2Footer/Footer";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import CheckoutStepper from "../../2-Components/5Checkout/CheckoutStepper";
import FormPersonalInfo from "./FormPersonalInfo";
import FormPaymentDetails from "./FormPaymentDetails";
import { CheckoutStepperContext } from "../../5-Store/Contexts/Checkout";
import StepperControlsCheckout from "../../2-Components/5Checkout/StepperControlsCheckout";

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

      <StackContainer direction="column" spacing={"0"}>
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
        <Stack direction="row" spacing={"0"} className="w-full h-full">
          {/** forms */}
          <Stack direction="column" className="w-full">
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
  height: 100%;
  min-height: 100vh;
  background: #ffffff;
`;
