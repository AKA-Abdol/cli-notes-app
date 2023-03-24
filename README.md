# CLI NOTE APP
this is an OOP designed note app written with typescript and yargs module as cli handler.

## How to Run
first install all dependency modules:
```bash
npm install
OR
yarn install
```
to find out all commands, run:
```bash
nodemon index.ts --help
```
and work with all commands.
consider that some commands need specific dependent input values, don't forget them.
### Storage
consider that you should address your storage from directory of index.ts (root) so make the storage dir with your favorite name and address it in the index.ts code.

## API
### create note
```bash
nodemon index.ts create --title="your title" --body="your note body"
```
as alias you can use "cr" instead of "create"

### show note
```bash
nodemon index.ts show --title="note title"
```
as alias you can use "sh" instead of "show"

### list all notes
```bash
nodemon index.ts list
```
as alias you can use "ls" instead of "list"

### search notes
```bash
nodemon index.ts search (opt.)--title="title search key" (opt.)--body="body search key"