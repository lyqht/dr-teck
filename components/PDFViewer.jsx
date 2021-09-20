import { Box, Center, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Navbar from "./Navbar";
import NoteClipper from "./NoteClipper";
import "./PDFViewer.css";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

const startVirtualReference = {
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      width: 0,
      height: 0,
    };
  },
};

export default function PDFViewer() {
  const [file, setFile] = useState("./sample2.pdf");
  const [numPages, setNumPages] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [virtualReference, setVirtualReference] = useState(
    startVirtualReference
  );

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  function putTooltipAtSelectedText() {
    {
      let selection = document.getSelection();
      if (!selection.isCollapsed) {
        setVirtualReference(selection.getRangeAt(0));
        setShowTooltip(true);
      }
    }
  }

  function hideTooltip() {
    if (showTooltip) {
      setShowTooltip(false);
    }
  }

  const isProduction = process.env.NODE_ENV === "production";

  return (
    <Box className="main" onMouseDown={() => hideTooltip()}>
      <NoteClipper virtualReference={virtualReference} toShow={showTooltip} />
      <Navbar onFileChange={onFileChange} />
      <Center>
        <Flex>
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(isProduction ? numPages : 1), (el, index) => (
              <Page
                className={"pdf-page"}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                onMouseUp={() => putTooltipAtSelectedText()}
              ></Page>
            ))}
          </Document>
        </Flex>
      </Center>
    </Box>
  );
}
