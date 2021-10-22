import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import Navbar from '../../components/Navbar';

const TopSection = () => {
    return (
        <TopSectionContainer>
            <Navbar/>
        </TopSectionContainer>
    )
}

export default TopSection

const TopSectionContainer = styled.div`
  ${tw`
w-full
flex
flex-col
h-screen
relative
`}
`;
