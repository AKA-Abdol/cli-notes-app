const cloneString = (pattern: string, count: number) => {
  let clonedPattern: string = "";
  for (let i = 0; i < count; i++) clonedPattern += pattern;
  return pattern;
};

const splitWordsByCount = (str: string, lineCount: number) => {
  const splittedList: Array<string> = [];
  const words = str.split(" ");
  console.log(words);
  
  let tempStr = "";
  let charCount = 0;
  words.forEach((word) => {
    if (charCount + word.length > lineCount) {
      splittedList.push(tempStr);
      tempStr = word + " ";
      charCount = word.length + 1;
    } else {
      tempStr += word + " ";
      charCount += word.length + 1;
    }
  });
  return splittedList;
};

export { cloneString, splitWordsByCount };
