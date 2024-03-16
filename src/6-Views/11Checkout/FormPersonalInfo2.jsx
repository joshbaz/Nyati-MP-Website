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

const FormPersonalInfo2 = ({
  innerref,
  handleStepNext,
  stepperData,
  currentStep,
  handleStepPrev,
  handleFormSubmit,
}) => {
  const { personalData, setPersonalData } = useContext(CheckoutStepperContext);
  const validationSchema = yup.object().shape({
    firstname: yup.string().required("required"),
    lastname: yup.string().required("required"),
    mobilenumber: yup.string().required("required"),
    email: yup.string().required("required"),
    address: yup.string().required("required"),
    paymentMethod: yup.string().required("required"),
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
            <Stack
              direction="row"
              spacing={"0"}
              className="w-full h-full grow relative m-0 p-0"
            >
              {/** Checkout Details && buttons */}
              <Stack
                h="unset"
                direction="column"
                className="w-full h border-r-2 px-[10%] py-[3%] "
              >
                <Stack direction="column">
                  {/**Details*/}
                  <Stack>
                    <h1
                      className="text-[#101828] text-[21px]"
                      style={{ fontFamily: vTextStyle.iSemiBold }}
                    >
                      Checkout Details
                    </h1>
                    <Stack direction="column" spacing={"20px"}>
                      {/** names */}
                      <DoubleWrapper className="flex w-full h-max  gap-[20px]">
                        <FormContainer className="flex flex-col h-full">
                          <label>First Name (Required)</label>
                          <input
                            name="firstname"
                            value={values.firstname}
                            onChange={handleChange}
                          />
                          {errors && errors.firstname ? (
                            <p
                              className="text-red-600 text-[15px]"
                              style={{ fontFamily: vTextStyle.sRegular }}
                            >
                              {errors.firstname}
                            </p>
                          ) : null}
                        </FormContainer>

                        <FormContainer>
                          <label>Last Name (Required)</label>
                          <input
                            name="lastname"
                            value={values.lastname}
                            onChange={handleChange}
                          />
                          {errors && errors.lastname ? (
                            <p
                              className="text-red-600 text-[15px]"
                              style={{ fontFamily: vTextStyle.sRegular }}
                            >
                              {errors.lastname}
                            </p>
                          ) : null}
                        </FormContainer>
                      </DoubleWrapper>

                      {/** email */}
                      <SingleWrapper>
                        <FormContainer className="flex flex-col ">
                          <label>Email</label>
                          <input
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                          {errors && errors.email ? (
                            <p
                              className="text-red-600 text-[15px]"
                              style={{ fontFamily: vTextStyle.sRegular }}
                            >
                              {errors.email}
                            </p>
                          ) : null}
                        </FormContainer>
                      </SingleWrapper>
                      {/** profile */}
                      <SingleWrapper>
                        <FormContainer className="flex flex-col ">
                          <label>Address (if applicable)</label>
                          <input
                            name="address"
                            value={values.address}
                            onChange={handleChange}
                          />
                        </FormContainer>
                      </SingleWrapper>

                      {/** mobile number */}
                      <SingleWrapper>
                        <FormContainer className="flex flex-col ">
                          <label>Mobile Number (Required)</label>
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
                    </Stack>
                  </Stack>
                  {/** buttons */}
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
                      Select Payment Method
                    </h1>

                    <RadioGroup
                      colorScheme="red"
                      value={values.paymentMethod}
                      name="paymentMethod"
                      onChange={(e) => {
                       setFieldValue("paymentMethod", e);
                      }}
                    >
                      <Stack
                        direction="column"
                        spacing={"10px"}
                        style={{ fontFamily: vTextStyle.iSemiBold }}
                        className="text-[17px] text-[#808080] leading-tight"
                      >
                        <Radio value="MTN MOMO">
                          <Box className="flex gap-3 items-center">
                            <p className="ticketText">MTN MOMO</p>
                            <Box className="flex w-[99px] h-[58px] fill-teal-500">
                              <img
                                className=""
                                src={MTNImage}
                                alt={"MTN MoMo"}
                              />
                            </Box>
                          </Box>
                        </Radio>

                        <Radio value="Airtel Money">
                          <Box className="flex gap-3 items-center">
                            <p className="ticketText">Airtel Money</p>
                            <Box className="flex w-[99px] h-[58px]">
                              <img src={AirtelImage} alt={"MTN MoMo"} />
                            </Box>
                          </Box>
                        </Radio>
                      </Stack>
                    </RadioGroup>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormPersonalInfo2;

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
