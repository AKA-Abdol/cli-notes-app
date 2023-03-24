import { writeFile } from "../utils/fileHandling";
class Note {
  private _title: string;
  private _data: string;

  constructor(title: string, data: string) {
    this._data = data;
    this._title = title;
  }

  public get data(): string {
    return this._data;
  }

  public get title(): string {
    return this._title;
  }

  public isExact(note: Note): boolean {
    return note.title === this.title;
  }
}

export default Note;
