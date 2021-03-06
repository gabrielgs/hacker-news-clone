import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderTab};
  color: ${({ theme }) => theme.colors.defaultTab};
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.75;
  height: 31px;
  width: 98px;
  transition: all .2s ease;
  &:nth-child(1) {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }
  &:nth-child(2) {
    border-left: none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    &:nth-child(1) {
      border-right-color: ${({ theme }) => theme.colors.borderTab};
    }
  }
  ${({ active, theme }) => active && `
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
    &:nth-child(1) {
      border-right-color: ${theme.colors.borderTab};
    }
  `}
`;

const Tab = ({
  label,
  activeTab,
  setActiveTab,
}) => {
  const handleClick = () => {
    setActiveTab(label);
  };
  return (
    <Button
      active={label === activeTab}
      onClick={handleClick}
    >
      {label}
    </Button>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default Tab;
