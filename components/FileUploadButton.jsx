import React, { useRef } from "react";
import { Button, Box } from "@chakra-ui/react";

export const FileUploadButton = ({ onFileChange }) => {
  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };
  return (
    <Box>
      <input
        type="file"
        id="file"
        ref={inputFile}
        style={{ display: "none" }}
        onChange={onFileChange}
      />
      <Button onClick={onButtonClick}>Select PDF</Button>
    </Box>
  );
};
