# Dev Log

## 17 September 2021

- Start of Project - initialized using the sample webpack5 repository from react-pdf
- Added react-popper to create a note clipper

## 20 September 2021

**Features:**

- Added Chakra UI and restyled the app

- Added Notes Drawer for adding and displaying in-memory notes

🐛 **Bugs** discovered while testing with different PDF:

- [ ] If the PDF is in horizontal mode, the PDF display will block everything on screen 😆
- [ ] Hyperlinksin the Table of contents do not redirect the user to those sections. Although if it is a hyperlink that directs to a website, they will work.
- [x] If you choose to select pdf and exit without selecting a pdf, the app will crash. [FIXED]
  - This happens because of a missing null check.

**Misc:**

- Archived the old NoteClipper.jsx made using Popper.js, as the new design layout for saving the notes does not require a pop up.

## 25 September 2021

Tried to add Notion to the app, but just realized that Notion does not support CORS, so I would have to migrate to a NextJS structure instead.
