import readline from "readline";

import getAnswerNumbers from "./getAnswerNumbers";
import getAnswerSheetFromInput from "./getAnswerSheetFromInput";
import checkBallCount from "./checkBallCount";
import getBallCountText from "./getBallCountText";

import { BallCount } from "./interface";

const islineLen_3 = (line: string) => {
  if (line.length !== 3) {
    console.log("입력숫자는 3개여야 합니다.");
    return false;
  }
  return true;
};

const isWin = (ballCount: BallCount) => {
  if (ballCount.strike === 3) {
    return true;
  }
  return false;
};

let answerNumbers = getAnswerNumbers();
let isGaming = true;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const app = () => {
  console.log("# 숫자를 입력해주세요");
  rl.on("line", (line) => {
    if (isGaming === false) {
      if (line === "1") {
        isGaming = true;
        answerNumbers = getAnswerNumbers();
      } else if (line === "2") {
        rl.close();
      } else {
        console.log("1 이나 2를 입력하세요.");
      }
    }
    if (!islineLen_3(line)) {
      console.log("# 숫자를 입력해주세요");
    } else {
      const answerSheet = getAnswerSheetFromInput(line);
      const ballCount = checkBallCount(answerSheet, answerNumbers);
      const judgeText = getBallCountText(ballCount);
      console.log(judgeText);
      if (isWin(ballCount)) {
        console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료");
        console.log("게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.");
        isGaming = false;
      }
    }
  });
};

app();
