import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global/GlobalStyle';
import light from './global/theme/light';
import { ChakraProvider } from "@chakra-ui/react";

//components
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={light}>
      <ChakraProvider>
        <GlobalStyles/>
        <Routes/>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default App;
