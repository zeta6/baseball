"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkBallCount = function (answerSheet, answerNumbers) {
    var strike = 0;
    var ball = 0;
    var nothing = 0;
    for (var i = 0; i < answerSheet.length; i++) {
        if (answerSheet[i] === answerNumbers[i]) {
            strike += 1;
        }
        else if (answerNumbers.includes(answerSheet[i])) {
            ball += 1;
        }
        else {
            nothing += 1;
        }
    }
    var ballCount = {
        strike: strike,
        ball: ball,
        nothing: nothing,
    };
    return ballCount;
};
exports.default = checkBallCount;
