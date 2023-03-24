import * as fs from "fs";
const writeFile = (fileAddress: string, data: string) => {
  fs.writeFileSync(fileAddress, data);
};

const readFile = (fileAddress: string) => {
  const fileBuffer = fs.readFileSync(fileAddress);
  return fileBuffer.toString();
};

const appendFile = (fileAddress: string, appendData: string) => {
  fs.appendFileSync(fileAddress, appendData);
};

export {
  writeFile,
  readFile,
  appendFile,
};
