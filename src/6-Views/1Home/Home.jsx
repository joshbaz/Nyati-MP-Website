import React from 'react'
import { Stack,Box } from '@chakra-ui/react'
import styled from 'styled-components';
import WebNavigation from '../../2-Components/1Navigation/WebNavigation';
import { vCOLORS, vTextStyle } from '../../1-Assets/themes/StyleVariables';
import HeroBg from '../../1-Assets/images/Hero.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Hero from './Hero';
import ContentSection from './ContentSection';
import WatchPlace from './WatchPlace';
import WatchTime from './WatchTime';
import FAQ from './FAQ';
import Footer from '../../2-Components/2Footer/Footer';

const Home = () => {
  return (
    <Container spacing={"0"}>
      <WebNavigation />

      <Stack direction={"column"} spacing={"0"} w="100%" h="100%">
        <Hero />
        <Stack
          direction={"column"}
          spacing={"0"}
          
        >
          <ContentSection />
          <WatchPlace />
          <WatchTime />
          <FAQ />
          <Footer/>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Home

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
    ), url(${HeroBg});
  background-size: cover;
`;

