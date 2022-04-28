"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};
var getAnswerNumbers = function () {
    var arr = [];
    while (arr.length < 3) {
        var number = getRandomInt(1, 10);
        if (!arr.includes(number)) {
            arr.push(number);
        }
    }
    return arr;
};
exports.default = getAnswerNumbers;
