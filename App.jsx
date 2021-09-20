import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PDFViewer from "./components/PDFViewer";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <PDFViewer />
    </ChakraProvider>
  );
};

export default App;
