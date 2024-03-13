import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { CheckoutStepperContext } from "../../5-Store/Contexts/Checkout";
import { Formik, Form } from "formik";
import { Stack, Box } from "@chakra-ui/react";
import { vTextStyle } from "../../1-Assets/themes/StyleVariables";
import styled from "styled-components";
import * as yup from "yup";

const FormPaymentDetails = ({ innerref, handleStepNext }) => {
     const { paymentData, setPaymentData } = useContext(CheckoutStepperContext);
    
    const validationSchema = yup.object().shape({
      transactionId: yup.string().required("required"),
      
    });
  return (
    <Formik
      innerRef={innerref}
      initialValues={paymentData}
      validationSchema={validationSchema}
      onSubmit={(values, helpers) => {
        setPaymentData({ ...paymentData, ...values });
        handleStepNext();
      }}
    >
      {({ values, handleChange, errors, touched }) => (
        <Form>
          <Stack>
            <h1
              className="text-[#101828] text-[18px]"
              style={{ fontFamily: vTextStyle.sSemiBold }}
            >
              Payment Details
            </h1>
            <Stack direction="column" spacing={"20px"}>
              {/** email */}
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
        </Form>
      )}
    </Formik>
  );
};

export default FormPaymentDetails;

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

