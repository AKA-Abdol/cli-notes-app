import { WriteStream } from "fs";
import { stdout } from "process";
import Note from "./Note";

class CLI {
  private _maxLineCharCount: number;
  private _dividerChar: string = "*";
  private _outputInterface: typeof stdout | WriteStream = stdout;

  constructor(
    maxLineCharCount: number,
    divideChar?: string,
    outputInterface?: WriteStream
  ) {
    if (divideChar) this._dividerChar = divideChar;
    if (outputInterface) this._outputInterface = outputInterface;
    this._maxLineCharCount = maxLineCharCount;
  }

  

  private showTitle(title: string) {
    const dividerCount = Math.floor(
      (this._maxLineCharCount - title.length) / 2
    );
    
  }

  public showNote(note: Note) {}
}
