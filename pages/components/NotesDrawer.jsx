import { Box, VStack } from "@chakra-ui/layout";
import { Button, FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import React from "react";
import styles from "./NotesDrawer.module.css";

export const NoteSnippet = ({ note }) => {
  return (
    <Box w={"100%"} borderWidth="1px" borderRadius="lg" p={8}>
      {note}
    </Box>
  );
};

export const SaveNoteForm = ({
  currentNote,
  onChangeCurrentNote,
  onSaveNote,
}) => {
  return (
    <Box w={"100%"} borderWidth="1px" borderRadius="lg" p={8}>
      <FormControl id="new-note">
        <FormLabel>New Note</FormLabel>
        <Textarea
          placeholder="You can select any text from the PDF and it will appear here until you remove the popup."
          type="text-area"
          value={currentNote}
          onChange={onChangeCurrentNote}
          minH={"20vh"}
          resize={"vertical"}
        />
        <Button mt={4} onClick={onSaveNote}>
          Save
        </Button>
      </FormControl>
    </Box>
  );
};

export const NotesDrawer = ({
  notes = [],
  currentNote = "",
  onChangeCurrentNote,
  onSaveNote,
}) => {
  return (
    <VStack
      h={"100vh"}
      w={"35%"}
      mb={16}
      overflowY={"auto"}
      className={styles.fixed}
    >
      <SaveNoteForm
        currentNote={currentNote}
        onChangeCurrentNote={onChangeCurrentNote}
        onSaveNote={onSaveNote}
      />
      {notes.map((note, index) => (
        <NoteSnippet key={`note-snippet-${index}`} note={note} />
      ))}
    </VStack>
  );
};
