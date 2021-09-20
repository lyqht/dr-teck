import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import "./Navbar.css";

const NavBar = () => {
  return (
    <div className={"sticky"}>
      <Flex m={4}>
        <Box>
          <Heading size="md">Dr.Teck</Heading>
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
