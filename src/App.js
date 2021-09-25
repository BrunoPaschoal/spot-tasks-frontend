import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global/GlobalStyle';
import dark from './global/theme/dark';
import { ChakraProvider } from "@chakra-ui/react"

//components
import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <ChakraProvider>
        <GlobalStyles/>
        <Routes/>
      </ChakraProvider>
    </ThemeProvider>
  );
};

export default App;
