import { writeFile } from "../utils/fileHandling";
class Note {
  private _title: string;
  private _data: string;
  private getNoteFileName(): string {
    return `__${this._title}__.txt`;
  }

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

  public save(storeAddress: string): void {
    writeFile(`${storeAddress}/${this.getNoteFileName()}`, this._data);
  }

  public isExact(title: string): boolean {
    return title === this._title;
  }
}

export default Note;
