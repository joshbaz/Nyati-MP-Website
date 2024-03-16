import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CheckoutStepperContext } from "../../5-Store/Contexts/Checkout";
import { Formik, Form } from "formik";
import { Stack, Box } from "@chakra-ui/react";
import { vTextStyle } from "../../1-Assets/themes/StyleVariables";
import styled from "styled-components";
import * as yup from "yup";
import MTNImage from "../../1-Assets/images/Checkout/MTN.png";
import AirtelImage from "../../1-Assets/images/Checkout/Airtel.png";
import StepperControlsCheckout from "../../2-Components/5Checkout/StepperControlsCheckout";

const MoMoPay = [
  {
    title: `Simply dial *165*3#`,
  },
  {
    title: `Enter our Merchant Code,`,
  },
  {
    title: `Enter the amount to pay,`,
  },
  {
    title: `You will be prompted to enter your Mobile Money PIN,`,
  },
  {
    title: `Once you enter your PIN, you will receive an MTN Notification of your Payment`,
  },
];

const FormPaymentDetails2 = ({
  innerref,
  handleStepNext,
  stepperData,
  currentStep,
  handleStepPrev,
  handleFormSubmit,
}) => {
  const { paymentData, setPaymentData, personalData } = useContext(
    CheckoutStepperContext
  );

  const validationSchema = yup.object().shape({
    transactionId: yup.string().required("required"),
  });

  return (
    <Container spacing={"0"} className="w-full h-full grow relative m-0 p-0">
      <Formik
        innerRef={innerref}
        initialValues={paymentData}
        validationSchema={validationSchema}
        onSubmit={(values, helpers) => {
          setPaymentData({ ...paymentData, ...values });
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
              {/** payment Details && buttons */}
              <Stack
                h="unset"
                direction="column"
                className="w-full h border-r-2 px-[7%] py-[3%] "
              >
                <Stack direction="column" spacing={"19px"}>
                  <h1
                    className="text-[#101828] text-[21px]"
                    style={{ fontFamily: vTextStyle.iSemiBold }}
                  >
                    Payment Details
                  </h1>
                  {/** Merchant Code */}
                  <Stack direction="row" spacing={'20px'} >
                    <Stack direction="column" w="50%" spacing={"12px"}>
                      <h1
                        className="text-[#101828] text-[17px]"
                        style={{ fontFamily: vTextStyle.iMedium }}
                      >
                        Pay Now using Momo
                      </h1>

                      <Stack
                        direction="column"
                        className="list-decimal text-[16px]"
                        style={{ fontFamily: vTextStyle.iRegular }}
                      >
                        {MoMoPay.map((data, indexM) => {
                          return <li key={indexM}>{data.title}</li>;
                        })}
                      </Stack>
                    </Stack>

                    <Stack
                      direction="column"
                      w="50%"
                      spacing={"15px"}
                      className="bg-[#FFCB05] min-h-[210px] justify-center px-[34px]"
                    >
                      <Stack spacing="10px">
                        <h1
                          className="text-[#3C3A3B] text-[18px]"
                          style={{ fontFamily: vTextStyle.iBold }}
                        >
                          Merchant Code
                        </h1>
                        <Stack
                          direction="row"
                          className="text-[#FFFFFF] text-[24px] list-none"
                          style={{ fontFamily: vTextStyle.iSemiBold }}
                        >
                          {[...Array(5)].map((d, i) => {
                            return (
                              <li
                                key={i}
                                className="flex bg-[#004F71] w-[48px] h-[55px] items-center justify-center"
                              >
                                2
                              </li>
                            );
                          })}
                        </Stack>
                      </Stack>
                      <Stack spacing="10px">
                        <p
                          className="text-[#3C3A3B] text-[18px]"
                          style={{ fontFamily: vTextStyle.iBold }}
                        >
                          Amount To Pay :{" "}
                        </p>
                        <p
                          className="text-[#3C3A3B] text-[23px]"
                          style={{ fontFamily: vTextStyle.iSemiBold }}
                        >
                          50,000 UGX
                        </p>
                      </Stack>
                    </Stack>
                  </Stack>

                  <Stack direction="column" spacing={"20px"}>
                    {/** Transaction Id */}
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
                        <p className="">ie. YHHSA</p>
                      </FormContainer>
                    </SingleWrapper>
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

                    {personalData.paymentMethod === "MTN MOMO" && (
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
                    )}

                    {personalData.paymentMethod === "Airtel Money" && (
                      <Stack
                        direction="column"
                        spacing={"10px"}
                        style={{ fontFamily: vTextStyle.iSemiBold }}
                        className="text-[17px] text-[#808080] leading-tight"
                      >
                        <Box className="flex">
                          <p className="w-[170px]">Method of Payment</p>:{" "}
                          <p className="ticketText">Airtel Money</p>
                        </Box>

                        <Box className="flex w-[99px] h-[58px]">
                          <img src={AirtelImage} alt={"Airtel Money"} />
                        </Box>
                      </Stack>
                    )}
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

export default FormPaymentDetails2;

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
