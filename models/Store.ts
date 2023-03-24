import fs from "fs";
import { readFile, writeFile } from "../utils/fileHandling";
import Note from "./Note";

const FREE_INDEX = 0,
  TITLE_INDEX = 1,
  POSTFIX_INDEX = 2;

const DELIM = "__";
class Store {
  private _dir: string;
  private _notes: Array<Note>;
  private makeNoteFileName(title: string): string {
    return `${DELIM}${title}${DELIM}.txt`;
  }
  private isNoteFileName(filename: string): boolean {
    const parts = filename.split(DELIM);
    if (
      parts.length === 3 &&
      parts[FREE_INDEX] === "" &&
      parts[POSTFIX_INDEX] === ".txt"
    )
      return true;
    return false;
  }
  private getTitleFromNoteFileName(filename: string): string {
    return filename.split(DELIM)[TITLE_INDEX];
  }

  constructor(dir: string) {
    this._dir = dir;
    this._notes = fs
      .readdirSync(dir)
      .filter((filename) => this.isNoteFileName(filename))
      .map(
        (noteFileName) =>
          new Note(
            this.getTitleFromNoteFileName(noteFileName),
            readFile(`${dir}/${noteFileName}`)
          )
      );
  }

  public saveNote(note: Note) {
    // note.
  }
}
