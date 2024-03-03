import React, {useState} from 'react'
import styled from "styled-components";
import logo from "../../1-Assets/logos/Logo.svg";
import { Stack, Box } from "@chakra-ui/react";
import { vCOLORS, vTextStyle } from '../../1-Assets/themes/StyleVariables';
import { NavLink } from 'react-router-dom';
import { MENUDATA } from '../../1-Assets/data/MenuItems';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const WebNavigation = () => {
  const [nav, setNav] = useState(false)


  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <NavContainer
      direction="row"
      className=" items-center h-[85px] max-w-[100vw] mx-auto px-[20px] lg:px-[86px] overflow-hidden z-10"
    >
      <Stack
        direction="row"
        w="100%"
        className="flex justify-between items-center max-w-[1280px] mx-auto overflow-hidden"
      >
        <Stack direction="row" alignItems={"center"} spacing={"83px"}>
          {/** logo */}
          <ImageContainer>
            <img src={logo} alt={"Nyati Films"} />
          </ImageContainer>

          {/** menu items */}
          <Box className="container flex space-x-[10px] hidden md:flex">
            {MENUDATA.map((data, index) => {
              return (
                <NavItems key={index} className="">
                  <NavLink
                    to={data.path}
                    end={data.path === "/" ? true : false}
                    className={({ isActive }) =>
                      isActive
                        ? "menuwrap activeItem p-4 h-14"
                        : "menuwrap p-4 h-14"
                    }
                  >
                    {data.title}
                  </NavLink>
                </NavItems>
              );
            })}
          </Box>
        </Stack>

        {/** Action Button */}
        <Box className="flex hidden md:flex">
          <ActionButton as={"button"}>
            <span>Sign In</span>
          </ActionButton>
        </Box>

        {/** Mobile hamburger */}
        <Box className="text-white block md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </Box>

        {/** Mobile Menu */}
        <Box
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] h-full border-r border-r-gray-900 overflow-hidden flex flex-col justify-around bg-[#141118]  ease-in-out duration-500 md:hidden"
              : "fixed left-[-100%] top-0 w-[70%] h-full border-r border-r-gray-900 overflow-hidden flex flex-col justify-around bg-[#141118]  ease-linear duration-500 md:hidden"
          }
        >
          <Box className="h-full space-y-6">
            <ImageContainer className="mx-5 mt-2 select-none">
              <img src={logo} alt={"Nyati Films"} />
            </ImageContainer>

            <ul className="uppercase p-4 text-white w-full h-[60%] items-start space-y-auto  overflow-hidden flex  flex-col justify-evenly ">
              {MENUDATA.map((data, index) => {
                return (
                  <NavItems
                    key={index}
                    className="flex items-center justify-center mb-2 h-[100%] w-[50%] hover:bg-[#ee5170]"
                  >
                    <NavLink
                      to={data.path}
                      end={data.path === "/" ? true : false}
                      className={({ isActive }) =>
                        isActive
                          ? "  h-[100%] w-[100%] bg-red-600 px-3 flex items-center select-none"
                          : "  h-[100%] w-[100%] flex items-center px-3 select-none"
                      }
                    >
                      {data.title}
                    </NavLink>
                  </NavItems>
                );
              })}
            </ul>
          </Box>

          <Box className="h-[10%] w-full flex items-center justify-center  mb-[10%] select-none">
            <Box className="flex ">
              <MobileButton as={"button"}>
                <span>Sign In</span>
              </MobileButton>
            </Box>
          </Box>
        </Box>
      </Stack>
    </NavContainer>
  );
}

export default WebNavigation

const NavContainer = styled(Stack)`
  
  width: 100vw;
  position: absolute;
  background: transparent;
  top: 0;
  align-items: center;
  justify-content: space-between;
  
`;

const ImageContainer = styled(Stack)`
  height: 66.02px;
  width: 65.74px;
  opacity: 1;
  img {
    height: 100%;
  }
`;

const NavItems = styled(Box)`
  transition: all 0.3s ease;

  .menuwrap {
    
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid transparent;
    font-family: ${vTextStyle.iRegular};
    color: ${vCOLORS.mTextLinks};
    font-size: 16px;

    &:hover {
      border-bottom: 2px solid ${vCOLORS.mTextBorderHover};
      font-family: ${vTextStyle.iSemiBold};
    }
  }
  .activeItem {
    border-bottom: 2px solid ${vCOLORS.mTextBorderHover};
    font-family: ${vTextStyle.iSemiBold};
    background-color: transparent;
  }

  .mobileMenu {

  }
`;

const ActionButton = styled(Box)`
  display: inline-block;
  position: relative;
  overflow: hidden;

  border-radius: 100px;
  border: 1px solid #fffffe;
  height: 40px;
  width: 140px;
  font-family: ${vTextStyle.iRegular};
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  background: transparent;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
 
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  span {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    transform: translateY(-50%);
    z-index: 9;
  }

  &:hover {
    background: transparent;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
`;

const MobileButton = styled(Box)`
  display: inline-block;
  position: relative;
  overflow: hidden;

  border-radius: 100px;
  border: 1px solid #fffffe;
  height: 40px;
  width: 140px;
  font-family: ${vTextStyle.iRegular};
  font-size: 18px;
  color: #ffffff;
  cursor: pointer;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  background: transparent;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
 
  transition: all 0.3s ease;

  &:focus {
    outline: none;
  }

  span {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    transform: translateY(-50%);
    z-index: 9;
  }

  &:hover {
    background: transparent;
    background: #ee5170;
    backdrop-filter: blur(0px);
    -webkit-backdrop-filter: blur(0px);
  }
`;