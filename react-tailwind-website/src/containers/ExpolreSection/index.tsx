import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Element } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Colombo from "../../images/colombo.jpg";
import Kandy from "../../images/kandy.jpg";
import Sigiriya from "../../images/sigiriya.jpg";
import Sea from "../../images/sea.jpg";
import Main from "../../images/mahanuwara.jpg";

const ExploreSection = () => {
  return (
    <ExploreSectionContainer name="Explore">
      <Title>Explore Travel Places</Title>
      <SectionInfo>
        View our tour package and find out more about the places we will visit
        together on this journey to the beautifull of indonesia, exploring so
        many historical and amazing locations with the group and having so much
        fun.
      </SectionInfo>
      <ExploreSectionWrapper>
        <Carousel dynamicHeight={false}>
          <Item>
            <img src={Colombo} />
            <Description>Gangarama Temple</Description>
          </Item>
          <Item>
            <img src={Kandy} />
            <Description>Mountain</Description>
          </Item>
          <Item>
            <img src={Sigiriya} />
            <Description>Sigiriya</Description>
          </Item>
          <Item>
            <img src={Sea} />
            <Description>Galle</Description>
          </Item>
          <Item>
            <img src={Main} />
            <Description>Dalada Maligawa</Description>
          </Item>
        </Carousel>
      </ExploreSectionWrapper>
    </ExploreSectionContainer>
  );
};

export default ExploreSection;

const ExploreSectionContainer = tw(Element)`
    w-full
    h-screen
    flex
    flex-col
    relative
    pt-1
    pb-1
    lg:pb-2
    xl:pt-2
    xl:pb-2
    items-center
`;

const Title = tw.h1`
    text-3xl
    xl:text-3xl
    2xl:text-5xl
    mt-6
    lg:mt-0
    2xl:mt-6
    2xl:mb-6
    text-gray-800
    font-bold
    text-center
`;

const SectionInfo = tw.p`
    text-base
    2xl:text-lg
    text-gray-700
    text-center
    mt-8
    2xl:mt-2
    max-w-lg
    xl:max-w-3xl
    pl-4
    pr-4
    lg:pl-8
    lg:pr-2
`;

const ExploreSectionWrapper = tw.div`
    w-full
    h-full
    flex
    flex-col
    justify-center
    items-center
    mt-3
    lg:mt-4
    xl:mt-6
    2xl:mt-10
    max-w-sm
    lg:max-w-xl
    xl:max-w-2xl
    2xl:max-w-4xl
`;

const Item = styled.div`
  ${tw`
        flex
        flex-col
    `}
  img {
    ${tw`
    lg:height[350px]
            max-w-full
            max-h-full
        `}
  }
`;

const Description = tw.p`
    text-gray-300
    text-center
    bg-black
    bottom-10
    left-1/2
    pl-4
    pr-4
    pt-2
    pb-2
    rounded-2xl
    opacity-80
    transform[translateX(-50%)]
    absolute
`;
