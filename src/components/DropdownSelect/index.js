import React from 'react';
import styled from 'styled-components';
import Select, { components } from 'react-select';
import {
  AngularIcon,
  AngularIcon2x,
  AngularIcon3x,
  ReactIcon,
  ReactIcon2x,
  ReactIcon3x,
  VueIcon,
  VueIcon2x,
  VueIcon3x,
} from '../../assets/icons/IconRepository';
import colors from '../../styled/colors';

const Container = styled.div``;
const IconContainer = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  padding: 2px;
  margin-right: 12px;
`;
const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const customStyles = {
  option: (provided) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
  }),
  menu: (provided) => ({
    ...provided,
    boxShadow: '0 2px 2px 0 #dad8d8',
    borderRadius: 0,
    marginTop: '1px',
  }),
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused
      ? colors.borderFocusSelect
      : colors.borderDefaultSelect,
    boxShadow: 'none',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.isFocused
      ? colors.borderFocusSelect
      : colors.borderDefaultSelect,
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: state.isFocused
      ? colors.text1
      : colors.borderDefaultSelect,
  }),
};

const Option = ({ data, children, ...props }) => {
  const getIcon = () => {
    switch (data.value) {
      case 'angular':
        return (
          <Icon
            src={AngularIcon}
            srcSet={`${AngularIcon2x} 2x, ${AngularIcon3x} 3x`}
            alt="Angular"
          />
        );
      case 'react':
        return (
          <Icon
            src={ReactIcon}
            srcSet={`${ReactIcon2x} 2x, ${ReactIcon3x} 3x`}
            alt="React"
          />
        );
      case 'vuejs':
        return (
          <Icon
            src={VueIcon}
            srcSet={`${VueIcon2x} 2x, ${VueIcon3x} 3x`}
            alt="Vuejs"
          />
        );
      default:
        return null;
    }
  };
  return (
    <components.Option {...props}>
      <IconContainer>
        {getIcon()}
      </IconContainer>
      {children}
    </components.Option>
  );
};

const DropdownSelect = () => {
  const options = [
    {
      value: 'angular',
      label: 'Angular',
    },
    {
      value: 'react',
      label: 'React',
    },
    {
      value: 'vuejs',
      label: 'Vuejs',
    },
  ];

  return (
    <Container>
      <Select
        options={options}
        components={{ Option }}
        styles={customStyles}
        placeholder="Select your news"
      />
    </Container>
  );
};

export default DropdownSelect;
