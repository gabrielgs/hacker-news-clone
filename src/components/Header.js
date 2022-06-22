import React from 'react';
import styled from 'styled-components';
import HackerNewsLogo from '../assets/logos/hacker-news-logo.svg';

const Wrapper = styled.header`
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.gray1} -32%, ${theme.colors.white} 124%)`};
  box-shadow: 0 1px 4px 0 rgb(0 21 41 / 12%);
  display: flex;
  height: 56px;
  justify-content: center;
  @media (min-width: 760px) {
    height: 72px;
  }
  @media (min-width: 1024px) {
    height: 88px;
    padding: 0 92px;
  }
  @media (min-width: 1280px) {
    height: 114px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
  @media (min-width: 1280px) {
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  width: 120px;
  @media (min-width: 760px) {
    width: 142px;
  }
  @media (min-width: 1024px) {
    width: 168px;
  }
  @media (min-width: 1280px) {
    width: 208px;
  }
`;
const Logo = styled.img`
  width: 100%;
`;

const Header = () => (
  <Wrapper>
    <Container>
      <LogoContainer>
        <Logo src={HackerNewsLogo} alt="Hacker News Logo" />
      </LogoContainer>
    </Container>
  </Wrapper>
);

export default Header;
