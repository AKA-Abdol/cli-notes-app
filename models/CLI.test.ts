import CLI from "./CLI";
import Note from "./Note";

const cli = new CLI(30);
cli.showNote(
  new Note(
    "hasan Kachal in wonderland",
    "once upon a time in wonderland there was a hasan kachal that went to school when it was weekend and not weekdays"
  )
);
