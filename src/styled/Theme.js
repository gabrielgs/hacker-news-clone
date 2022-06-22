import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import colors from './colors';

const theme = {
  colors,
  fonts: {
    font1: '"Roboto", sans-serif',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
