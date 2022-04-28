"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAnswerSheetFromInput = function (line) {
    var answerSheet = line.split("").map(function (el) { return parseInt(el); });
    return answerSheet;
};
exports.default = getAnswerSheetFromInput;
