const getAnswerSheetFromInput = (line: string) => {
  const answerSheet = line.split("").map((el) => parseInt(el));
  return answerSheet;
};

export default getAnswerSheetFromInput;
