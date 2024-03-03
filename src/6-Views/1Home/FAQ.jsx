import React from 'react'
import {Box, Stack} from '@chakra-ui/react'
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import plusIcon from '../../1-Assets/icons/add-square-broken.svg'
import { BsPlusSquare } from "react-icons/bs";
const FAQ = () => {
  return (
    <Box className="w-full  bg-[#141118] py-16 px-12 lg:px-[86px] overflow-hidden">
      <Stack
        direction="column"
        spacing={"40px"}
        className="mx-auto w-full md:max-w-prose lg:max-w-[1000px] 2xl:max-w-[1240px]"
      >
        <h1
          className="text-3xl text-center text-[#F2F2F2] leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight  2xl:text-7xl 2xl:leading-tight tracking-wide"
          style={{ fontFamily: vTextStyle.iBold }}
        >
          Frequently Asked Questions
        </h1>

        <Box className="w-full mx-auto">
          <Box className="bg-[#221e27] ">
            <Box className="px-[20px] w-4/5 mx-auto flex min-h-[57px] items-center justify-between text-[#F2F2F2]">
              <p>What is Nyati Motion Pictures?</p>
              <Box className=" h-4 w-4">
                <BsPlusSquare size={20} />
              </Box>
            </Box>
          </Box>
          <Box className="bg-[#221e27] ">
            <Box className="px-[20px] w-4/5 mx-auto flex min-h-[57px] items-center justify-between text-[#F2F2F2]">
              <p>What is Nyati Motion Pictures?</p>
              <Box className=" h-4 w-4">
                <BsPlusSquare size={20} />
              </Box>
            </Box>
          </Box>
          <Box className="bg-[#221e27] ">
            <Box className="px-[20px] w-4/5 mx-auto flex min-h-[57px] items-center justify-between text-[#F2F2F2]">
              <p>What is Nyati Motion Pictures?</p>
              <Box className=" h-4 w-4">
                <BsPlusSquare size={20} />
              </Box>
            </Box>
          </Box>
          
        </Box>
      </Stack>
    </Box>
  );
}

export default FAQ