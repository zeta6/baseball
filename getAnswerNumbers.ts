const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getAnswerNumbers = () => {
  const arr: Array<number> = [];
  while (arr.length < 3) {
    const number = getRandomInt(1, 10);
    if (!arr.includes(number)) {
      arr.push(number);
    }
  }
  return arr;
};

export default getAnswerNumbers;
