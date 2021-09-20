import React from "react";
import { Flex, Box, Spacer, Heading, HStack } from "@chakra-ui/react";
import { SettingsDrawer } from "./SettingsDrawer";
import { FileUploadButton } from "./FileUploadButton";

import "./Navbar.css";

const NavBar = ({ onFileChange }) => {
  return (
    <div className={"sticky"}>
      <Flex m={4}>
        <Box>
          <Heading size="md">Dr.Teck</Heading>
        </Box>
        <Spacer />
        <HStack spacing={2}>
          <FileUploadButton onFileChange={onFileChange} />
          <SettingsDrawer />
        </HStack>
      </Flex>
    </div>
  );
};

export default NavBar;
