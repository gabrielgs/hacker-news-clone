import React, { useState } from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const Group = styled.div``;

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <Wrapper>
      <Group>
        <Tab
          label="All"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Tab
          label="My faves"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Group>
    </Wrapper>
  );
};

export default Tabs;
