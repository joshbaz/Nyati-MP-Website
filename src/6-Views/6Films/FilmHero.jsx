import React from "react";
import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";
//import HeroBg from "../../1-Assets/images/Hero.svg";
import HeroBg from "../../1-Assets/images/netflixtrail.jpg";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import { TfiArrowCircleDown } from "react-icons/tfi";
import HeroCarousel from "../../2-Components/3Film/HeroCarousel";

const FilmHero = () => {


  return (
    <HeroContent className="flex justify-center items-center">
      <Stack spacing={"54px"} className="text-center items-center w-full">
        <HeroCarousel />    
      </Stack>
    </HeroContent>
  );
};

export default FilmHero;

const HeroContent = styled.section`
  height: 80vh;
  display: flex;

  background: rgba(20, 17, 24, 1);

  overflow: hidden;
  position: relative;

  .custombtn {
    background: transparent;
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
`;
