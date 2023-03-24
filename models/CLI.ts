import { stdout } from "process";
import Note from "./Note";
import { cloneString, splitWordsByCount } from "../utils/stringUtils";

class CLI {
  private _maxLineCharCount: number;
  private _dividerChar: string = "*";
  private _outputInterface: typeof stdout = stdout;

  constructor(
    maxLineCharCount: number,
    divideChar?: string,
    outputInterface?: typeof stdout
  ) {
    if (divideChar) this._dividerChar = divideChar;
    if (outputInterface) this._outputInterface = outputInterface;
    this._maxLineCharCount = maxLineCharCount;
  }

  private inlineLog(str: string) {
    this._outputInterface.write(str);
  }
  private log(str: string) {
    this._outputInterface.write(`${str}\n`);
  }

  private showTitle(title: string) {
    const dividerCount = Math.floor(
      (this._maxLineCharCount - title.length) / 2
    );
    this.inlineLog(cloneString(this._dividerChar, dividerCount));
    this.inlineLog(title);
    this.log(cloneString(this._dividerChar, dividerCount));
  }

  private showBody(body: string) {
    // const lineSplittedWords = splitWordsByCount()
  }

  public showNote(note: Note) {

  }
}
