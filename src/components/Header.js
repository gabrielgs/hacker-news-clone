import React from 'react';
import styled from 'styled-components';
import HackerNewsLogo from '../assets/logos/hacker-news-logo.svg';

const Wrapper = styled.header`
  background-image: linear-gradient(to bottom, #ececec -32%, #fff 124%);
  box-shadow: 0 1px 4px 0 rgb(0 21 41 / 12%);
  display: flex;
  height: 56px;
  justify-content: center;
`;
const LogoContainer = styled.div`
  display: flex;
  width: 120px;
`;
const Logo = styled.img`
  width: 100%;
`;

function Header() {
  return (
    <Wrapper>
      <LogoContainer>
        <Logo src={HackerNewsLogo} alt="Hacker News Logo" />
      </LogoContainer>
    </Wrapper>
  );
}

export default Header;
