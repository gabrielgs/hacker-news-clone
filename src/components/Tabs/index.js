import React from 'react';
import styled from 'styled-components';
import Tab from './Tab';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;
const Group = styled.div``;

const Tabs = ({ activeTab, setActiveTab }) => (
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

export default Tabs;
