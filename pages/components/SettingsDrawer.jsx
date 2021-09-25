import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const SettingsDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Settings
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Settings</DrawerHeader>

          <DrawerBody>
            <FormControl display="flex" alignItems="center">
              <FormLabel mb="0">Dark Mode</FormLabel>
              <Switch
                isChecked={colorMode == "dark"}
                onChange={toggleColorMode}
              />
            </FormControl>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
