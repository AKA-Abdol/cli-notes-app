const cloneString = (pattern: string, count: number) => {
  let clonedPattern: string = "";
  for (let i = 0; i < count; i++) clonedPattern += pattern;
  return pattern;
};

export { cloneString };
