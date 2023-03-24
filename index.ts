import * as yargs from "yargs";
import Note from "./models/Note";
import Store from "./models/Store";

const store = new Store("./storage");

yargs
  .command({
    command: ["create", "cr"],
    describe: "Create a new note",
    builder: {
      title: {
        type: "string",
        describe: "Title of notes should be unique",
        demandOption: true,
      },
      body: {
        type: "string",
        describe: "Body of a note",
        demandOption: true,
      },
    },
    handler: (argv) => {
      const newNote = new Note(argv.title, argv.body);
      store.saveNote(newNote);
    },
  })
  .parse();
