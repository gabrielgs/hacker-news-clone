import React, { useState } from 'react';
import styled from 'styled-components';
import Tabs from './Tabs';
import DropdownSelect from './DropdownSelect';
import Posts from './Posts';

const Wrapper = styled.main`
  padding: 0 32px 32px;
  @media (min-width: 760px) {
    padding: 0 48px 48px;
  }
  @media (min-width: 1024px) {
    padding: 0 92px 54px;
  }
`;

const Main = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedFramework, setSelectedFramework] = useState('');
  return (
    <Wrapper>
      <Tabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <DropdownSelect
        setSelectedFramework={setSelectedFramework}
      />
      <Posts
        selectedFramework={selectedFramework}
        activeTab={activeTab}
      />
    </Wrapper>
  );
};

export default Main;
