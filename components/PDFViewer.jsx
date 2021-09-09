import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import NoteClipper from "./NoteClipper";

import "./PDFViewer.less";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

const virtualReference = {
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
  const [virtualReference, setVirtualReference] = useState(null);
  const [notes, setNotes] = useState([]);

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
    <div className="main" onMouseDown={() => hideTooltip()}>
      <NoteClipper virtualReference={virtualReference} toShow={showTooltip} />
      <header>
        <h1>Dr.Teck</h1>
      </header>
      <div className="main__container">
        <div className="main__container__load">
          <label htmlFor="file">Load from file:</label>{" "}
          <input onChange={onFileChange} type="file" />
        </div>
        <div className="main__container__document">
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(isProduction ? numPages : 1), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                onMouseUp={() => putTooltipAtSelectedText()}
              ></Page>
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
