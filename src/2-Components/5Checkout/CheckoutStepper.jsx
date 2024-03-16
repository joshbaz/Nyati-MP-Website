import React from "react";
import "./CheckoutStepper.css";
import styled from "styled-components";
import { Box, Stack } from "@chakra-ui/react";
import { vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { GiCheckMark } from "react-icons/gi";
import ImageTest from "../../1-Assets/images/Tickets/Fate.png";

const CheckoutStepper = ({ stepperData, currentStep, stepsAllComplete }) => {
  const [currentIndex, setCurrentIndex] = React.useState(null);

  React.useEffect(() => {
    let getcurrentIndex =
      currentStep !== null
        ? stepperData.findIndex((data) => data?.title === currentStep)
        : null;
    setCurrentIndex(() => getcurrentIndex);

    return () => {
      //second
    };
  }, [currentStep]);
  return (
    <Box className="flex flex-row  w-full items-center justify-center gap-[0%] relative">
      {stepperData?.map((step, index) => {
        return (
          <Box
            key={index}
            className={`step-items ${currentStep === step?.title && "active"} ${
              index + 1 < currentIndex + 1 || stepsAllComplete ? "complete" : ""
            }`}
          >
            <Box
              className={`text-[#f2f2f2] text-[14px] title`}
              style={{ fontFamily: vTextStyle.rMedium }}
            >
              {step.title}
            </Box>
            <Box className="steps">
              <div className="outerSteps">
                <div className="innerSteps"></div>
              </div>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CheckoutStepper;
