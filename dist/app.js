"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = __importDefault(require("readline"));
var getAnswerNumbers_1 = __importDefault(require("./getAnswerNumbers"));
var getAnswerSheetFromInput_1 = __importDefault(require("./getAnswerSheetFromInput"));
var checkBallCount_1 = __importDefault(require("./checkBallCount"));
var getBallCountText_1 = __importDefault(require("./getBallCountText"));
var islineLen_3 = function (line) {
    if (line.length !== 3) {
        console.log("입력숫자는 3개여야 합니다.");
        return false;
    }
    return true;
};
var isWin = function (ballCount) {
    if (ballCount.strike === 3) {
        return true;
    }
    return false;
};
var answerNumbers = getAnswerNumbers_1.default();
var isGaming = true;
var rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var app = function () {
    console.log("# 숫자를 입력해주세요");
    rl.on("line", function (line) {
        if (isGaming === false) {
            if (line === "1") {
                isGaming = true;
                answerNumbers = getAnswerNumbers_1.default();
            }
            else if (line === "2") {
                rl.close();
            }
            else {
                console.log("1 이나 2를 입력하세요.");
            }
        }
        if (!islineLen_3(line)) {
            console.log("# 숫자를 입력해주세요");
        }
        else {
            var answerSheet = getAnswerSheetFromInput_1.default(line);
            var ballCount = checkBallCount_1.default(answerSheet, answerNumbers);
            var judgeText = getBallCountText_1.default(ballCount);
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
