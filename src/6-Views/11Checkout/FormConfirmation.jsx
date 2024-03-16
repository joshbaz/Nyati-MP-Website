import React from "react";
import { useContext } from "react";
import { CheckoutStepperContext } from "../../5-Store/Contexts/Checkout";
import { Formik, Form } from "formik";
import {
  Stack,
  Box,
  Divider,
  VStack,
  RadioGroup,
  Radio,
} from "@chakra-ui/react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import * as yup from "yup";
import StepperControlsCheckout from "../../2-Components/5Checkout/StepperControlsCheckout";
import MTNImage from "../../1-Assets/images/Checkout/MTN.png";
import AirtelImage from "../../1-Assets/images/Checkout/Airtel.png";

const FormConfirmation = ({
  innerref,
  handleStepNext,
  stepperData,
  currentStep,
  handleStepPrev,
  handleFormSubmit,
}) => {
  const { personalData, setPersonalData } = useContext(CheckoutStepperContext);
  const validationSchema = yup.object().shape({
    transactionId: yup.string().required("required"),
  });

  return (
    <Container spacing={"0"} className="w-full h-full grow relative m-0 p-0">
      <Formik
        innerRef={innerref}
        initialValues={personalData}
        validationSchema={validationSchema}
        onSubmit={(values, helpers) => {
          setPersonalData({ ...personalData, ...values });
          handleStepNext();
        }}
      >
        {({ values, handleChange, errors, touched, setFieldValue }) => (
          <Form>
            {" "}
            <Stack
              direction="column"
              spacing={"0"}
              className="w-full h-full grow relative m-0 p-0 items-center"
            >
              <Stack
                h="unset"
                direction="column"
                className="w-full max-w-[1000px]  px-[7%] py-[3%] "
              >
                <Stack direction="column">
                  {" "}
                  <Stack>
                    <Stack>
                      <h1
                        className="text-[#101828] text-[21px]"
                        style={{ fontFamily: vTextStyle.iSemiBold }}
                      >
                        Payment Confirmation
                      </h1>
                      <Stack
                        spacing={"0"}
                        className="bg-[#DDEFD7] p-[17px] text-[#1F5F00]"
                        style={{ fontFamily: vTextStyle.iSemiBold }}
                      >
                        <p>
                          Thank you for making payment! Please confirm your
                          details below.
                        </p>
                        <p>
                          We will notify you via email when we have received
                          your payment
                        </p>
                      </Stack>
                    </Stack>

                    <Stack direction="column" spacing={"20px"}>
                      <h1
                        className="text-[#101828] text-[17px]"
                        style={{ fontFamily: vTextStyle.iMedium }}
                      >
                        Details with Momo
                      </h1>
                      <Stack direction="column" spacing={"20px"}>
                        {/** mobile */}
                        <SingleWrapper>
                          <FormContainer className="flex flex-col ">
                            <label>Mobile Number</label>
                            <input
                              name="mobilenumber"
                              value={values.mobilenumber}
                              onChange={handleChange}
                            />
                            {errors && errors.mobilenumber ? (
                              <p
                                className="text-red-600 text-[15px]"
                                style={{ fontFamily: vTextStyle.sRegular }}
                              >
                                {errors.mobilenumber}
                              </p>
                            ) : null}
                           
                          </FormContainer>
                        </SingleWrapper>
                        <SingleWrapper>
                          <FormContainer className="flex flex-col ">
                            <label>Transaction ID (Required)</label>
                            <input
                              name="transactionId"
                              value={values.transactionId}
                              onChange={handleChange}
                            />
                            {errors && errors.transactionId ? (
                              <p
                                className="text-red-600 text-[15px]"
                                style={{ fontFamily: vTextStyle.sRegular }}
                              >
                                {errors.transactionId}
                              </p>
                            ) : null}
                          </FormContainer>
                        </SingleWrapper>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>

                {/** stepper controls */}
                <Box className="w-full flex justify-end">
                  <Box className="w-max">
                    <StepperControlsCheckout
                      handleStepNext={handleStepNext}
                      stepperData={stepperData}
                      currentStep={currentStep}
                      handleStepPrev={handleStepPrev}
                      handleFormSubmit={handleFormSubmit}
                    />
                  </Box>
                </Box>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormConfirmation;

const Container = styled(Stack)`
  .chakra-radio {
    direction: rtl;
    justify-content: space-between;
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;

    span {
      padding: 0;
      margin: 0;
    }
  }

  .chakra-radio__control {
    border-color: red;
  }
`;
const DoubleWrapper = styled(Box)``;
const SingleWrapper = styled(Box)``;
const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 4px;
  label {
    color: #0b4251;
    font-size: 14px;
    font-family: ${vTextStyle.sSemiBold};
  }

  input {
    height: 48px;
    border: 1px solid #0b4251;
    border-radius: 6px;
    font-family: ${vTextStyle.sRegular};
    text-indent: 10px;
  }
`;
