const checkBallCount = (answerSheet: number[], answerNumbers: number[]) => {
  let strike: number = 0;
  let ball: number = 0;
  for (let i = 0; i < answerSheet.length; i++) {
    if (answerSheet[i] === answerNumbers[i]) {
      strike += 1;
    } else if (answerNumbers.includes(answerSheet[i])) {
      ball += 1;
    }
  }
  const ballCount = {
    strike: strike,
    ball: ball,
  };
  return ballCount;
};

export default checkBallCount;
