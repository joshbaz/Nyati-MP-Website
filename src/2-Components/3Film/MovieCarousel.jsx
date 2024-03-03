import React from "react";

import styled from "styled-components";
import { Stack, Box } from "@chakra-ui/react";

import useEmblaCarousel from "embla-carousel-react";
import { vCOLORS, vTextStyle } from "../../1-Assets/themes/StyleVariables";
import HeroBg from "../../1-Assets/images/About/image 6.svg";
import "./MovieSlide.css";

const TWEEN_FACTOR_BASE = 0.2;

const MovieCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({dragFree:true});
 
  return (
    
      <Box className="emblaA">
        <Box className="embla__viewportA" ref={emblaRef}>
          <Box className="embla__containerA gap-7">
            {[...Array(15)].map((data, index) => {
              return (
                <Box
                  key={index}
                  className="embla__slideA h-full w-full"
                >
                  <Box className="embla__slide__movie">
                    <MovieContainer className="h-[250px] w-[292px]">
                      <img
                        src={HeroBg}
                        alt={"movie"}
                        className="object-cover h-full w-full"
                      />
                      <p
                        className="text-[#F8FAEC] text-[20px] text-center select-none relative bottom-[37px]"
                        style={{ fontFamily: vTextStyle.iSemiBold }}
                      >
                        Fate Poster
                      </p>
                    </MovieContainer>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
   
  );
};

export default MovieCarousel;

const Container = styled(Box)``;

const MovieContainer = styled(Box)`

`;
