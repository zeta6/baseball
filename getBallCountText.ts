import { BallCount } from "./interface";

const getBallCountText = (ballCount: BallCount) => {
  let text = "";
  if (ballCount.strike !== 0) {
    text += ballCount.strike + " 스트라이크";
  }
  if (ballCount.ball === 0) {
    text += ",";
  }
  if (ballCount.ball !== 0) {
    if (ballCount.strike !== 0) {
      text += ", ";
    }
    text += ballCount.ball + "볼";
  }
  if (ballCount.strike === 0 && ballCount.ball === 0) {
    text = "낫싱";
  }
  return text;
};

export default getBallCountText;
