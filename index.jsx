import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { render } from "react-dom";
import PDFViewer from "./components/PDFViewer";

render(
  <ChakraProvider>
    <PDFViewer />
  </ChakraProvider>,
  document.getElementById("react-root")
);
