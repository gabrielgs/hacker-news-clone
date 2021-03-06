import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
import useLocalStorage from '../../hooks/useLocalStorage';

const Container = styled.div`
  margin-top: 24px;
  @media (min-width: 1024px) {
    margin-top: 42px;
  }
  @media (min-width: 1280px) {
    margin-top: 63px;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
  }
`;
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
const CustomSelect = styled(Select)`
  @media (min-width: 1024px) {
    max-width: 240px;
  }
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
      case 'reactjs':
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
    /* eslint-disable-next-line react/jsx-props-no-spreading */
    <components.Option {...props}>
      <IconContainer>{getIcon()}</IconContainer>
      {children}
    </components.Option>
  );
};

Option.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node.isRequired,
};

const DropdownSelect = ({ setSelectedFramework }) => {
  const [filterFramework, setFilterFramework] = useLocalStorage(
    'selectedFramework',
    '',
  );
  const options = [
    {
      value: 'angular',
      label: 'Angular',
    },
    {
      value: 'reactjs',
      label: 'Reactjs',
    },
    {
      value: 'vuejs',
      label: 'Vuejs',
    },
  ];

  const handleChange = (option) => {
    setFilterFramework(option.value);
    setSelectedFramework(option.value);
  };

  useEffect(() => {
    setSelectedFramework(filterFramework);
  }, []);

  return (
    <Container>
      <CustomSelect
        options={options}
        components={{ Option }}
        styles={customStyles}
        placeholder="Select your news"
        onChange={handleChange}
        value={options.find(({ value }) => value === filterFramework)}
      />
    </Container>
  );
};

DropdownSelect.propTypes = {
  setSelectedFramework: PropTypes.func.isRequired,
};

export default DropdownSelect;
