import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PDFViewer from "./components/PDFViewer";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PDFViewer />
    </ChakraProvider>
  )
}

export default MyApp