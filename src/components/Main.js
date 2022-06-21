import React from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import DropdownSelect from './DropdownSelect';

const Wrapper = styled.main`
  padding: 0 32px;
`;

const Main = () => (
  <Wrapper>
    <Tabs />
    <DropdownSelect />
  </Wrapper>
);

export default Main;
