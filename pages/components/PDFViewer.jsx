import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Navbar from "./Navbar";
import { NotesDrawer } from "./NotesDrawer";
import styles from "./PDFViewer.module.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
};

export default function PDFViewer() {
  const [file, setFile] = useState("./sample2.pdf");
  const [numPages, setNumPages] = useState(null);
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState("");

  function onFileChange(event) {
    if (event.target.files[0] != null) {
      setFile(event.target.files[0]);
    }
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  function putTooltipAtSelectedText() {
    {
      let selection = document.getSelection();
      if (!selection.isCollapsed) {
        setCurrentNote(selection + "");
      }
    }
  }

  function onChangeCurrentNote(event) {
    setCurrentNote(event.target.value);
  }

  function onSaveNote() {
    setNotes([...notes, currentNote]);
  }

  return (
    <Box className={styles.main}>
      <Navbar fileName={file.name} onFileChange={onFileChange} />
      <Grid templateColumns="repeat(5, 1fr)" gap={1}>
        <GridItem colSpan={3}>
          <Center>
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  className={styles.pdfPage}
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  onMouseUp={() => putTooltipAtSelectedText()}
                ></Page>
              ))}
            </Document>
          </Center>
        </GridItem>
        <GridItem colSpan={2} p={4}>
          <NotesDrawer
            notes={notes}
            currentNote={currentNote}
            onChangeCurrentNote={onChangeCurrentNote}
            onSaveNote={onSaveNote}
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
