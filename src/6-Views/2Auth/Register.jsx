import React from "react";
import styled from "styled-components";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { Stack, Box } from "@chakra-ui/react";
import Footer from "../../2-Components/2Footer/Footer";
import HeroBg from "../../1-Assets/images/netflixtrail.jpg";
import logo from "../../1-Assets/logos/Logo.svg";
import * as yup from "yup";
import { Formik, Form } from "formik";

const Register = () => {
     const initialValues = {
       email: "",
         fullname: "",
         username: "",
       password:""
     };
     const validationSchema = yup.object().shape({
         username: yup.string().required("required"),
         fullname: yup.string().required("required"),
         email: yup.string().required("required"),
       password: yup.string().required("required"),
     });
  return (
    <Container>
      <Stack direction="column" spacing={"0"} w="100%" h="100%">
        <HeroContent className="flex justify-center items-center">
          <Formik
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={(values, helpers) => {
              //set dialog
              alert("completed registration");
            }}
          >
            {({ values, handleChange, errors, handleSubmit }) => (
              <Form>
                <Stack
                  direction="column"
                  spacing="22px"
                  className="max-w-[304px] mx-auto"
                >
                  {/** logo */}
                  <ImageContainer className="absolute top-[34px] left-10">
                    <img src={logo} alt={"Nyati Films"} />
                  </ImageContainer>
                  {/** form title */}
                  <Stack>
                    <h1
                      className="text-[#F2F2F2] text-[26px] text-center select-none"
                      style={{ fontFamily: vTextStyle.iBold }}
                    >
                      {" "}
                      Create account
                    </h1>
                    <p
                      className="text-[#F2F2F2] text-[14px] text-center select-none"
                      style={{ fontFamily: vTextStyle.iRegular }}
                    >
                      Enter your account details below or{" "}
                      <span
                        className="text-[#ED3F62] underline underline-offset-2 cursor-pointer"
                        style={{ fontFamily: vTextStyle.iSemiBold }}
                      >
                        create an account
                      </span>
                    </p>
                  </Stack>
                  {/** forms */}
                  <Stack spacing={"17px"}>
                    <SingleWrapper>
                      <FormContainer className="flex flex-col ">
                        <label className="text-[#bdb8b8] text-[12.56px]">
                          Mobile Number or Email
                        </label>
                        <input
                          name="email"
                          value={values.email}
                          className="text-[#ffffff] text-[14.35px]"
                          onChange={handleChange}
                          style={{ fontFamily: vTextStyle.iMedium }}
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
                    <SingleWrapper>
                      <FormContainer>
                        <label className="text-[#bdb8b8] text-[12.56px]">
                          Full Name
                        </label>
                        <input
                          type={"string"}
                          name="fullname"
                          value={values.fullname}
                          onChange={handleChange}
                          className="text-[#ffffff] text-[14.35px]"
                          style={{ fontFamily: vTextStyle.iMedium }}
                        />
                        {errors && errors.fullname ? (
                          <p
                            className="text-red-600 text-[15px]"
                            style={{ fontFamily: vTextStyle.sRegular }}
                          >
                            {errors.fullname}
                          </p>
                        ) : null}
                      </FormContainer>
                    </SingleWrapper>

                    <SingleWrapper>
                      <FormContainer>
                        <label className="text-[#bdb8b8] text-[12.56px]">
                          Username
                        </label>
                        <input
                          type={"string"}
                          name="username"
                          value={values.username}
                          onChange={handleChange}
                          className="text-[#ffffff] text-[14.35px]"
                          style={{ fontFamily: vTextStyle.iMedium }}
                        />
                        {errors && errors.username ? (
                          <p
                            className="text-red-600 text-[15px]"
                            style={{ fontFamily: vTextStyle.sRegular }}
                          >
                            {errors.username}
                          </p>
                        ) : null}
                      </FormContainer>
                    </SingleWrapper>

                    <SingleWrapper>
                      <FormContainer>
                        <label className="text-[#bdb8b8] text-[12.56px]">
                          Password
                        </label>
                        <input
                          type={"string"}
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          className="text-[#ffffff] text-[14.35px]"
                          style={{ fontFamily: vTextStyle.iMedium }}
                        />
                        {errors && errors.password ? (
                          <p
                            className="text-red-600 text-[15px]"
                            style={{ fontFamily: vTextStyle.sRegular }}
                          >
                            {errors.password}
                          </p>
                        ) : null}
                      </FormContainer>
                    </SingleWrapper>
                  </Stack>
                  {/** form buttons */}
                  <Stack spacing="18px">
                    <Box
                      onClick={handleSubmit}
                      as="button"
                      className="block w-full rounded-full border border-[#EE5170] bg-[#EE5170] px-12 py-3 text-sm font-medium text-white text-[14.35px] hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto lg:px-16"
                      style={{ fontFamily: vTextStyle.iSemiBold }}
                    >
                      Create account
                    </Box>
                  </Stack>
                </Stack>
              </Form>
            )}
          </Formik>
        </HeroContent>
      </Stack>
    </Container>
  );
};

export default Register;

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
`;

const SingleWrapper = styled(Box)``;
const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 4px;

  input {
    height: 48px;
    background: #36323e;
    border: 1px solid rgba(238, 241, 244, 0.3);
    border-radius: 6px;
    // font-family: ${vTextStyle.sRegular};
    text-indent: 10px;
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
