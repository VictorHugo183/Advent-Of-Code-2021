const fs = require("fs");
const file = fs.readFileSync("./input.txt").toString().split(`\r\n`);

const openChars = ["(", "[", "{", "<"];

const validCombinations = {
  "(": ")",
  "[": "]",
  "{": "}",
  "<": ">"
}

const charValues = {
  '(': 1,
  '[': 2,
  '{': 3,
  '<': 4
}

const isOpenChar = (item) => {
  for (let i = 0; i < openChars.length; i++) {
    if (item === openChars[i]) {
      return true;
    }
  }
  return false;
}

//using solution to part 1 to form the "faulty" array
const getFaulty = (list) => {
  let faultyList = [];
  let tempOpenCharList = [];
  for (let i = 0; i < list.length; i++) {
    tempOpenCharList.length = 0;
    for (let j = 0; j < list[i].length; j++) {
      if (isOpenChar(list[i][j]) && !list[i][j + 1]) { break }
      if (isOpenChar(list[i][j])) {
        tempOpenCharList.push(list[i][j]);
      }
      else {
        if (tempOpenCharList.length === 0 || validCombinations[tempOpenCharList.pop()] != list[i][j]) {
          faultyList.push(list[i]);
          break;
        }
      }
    }
  }
  return faultyList;
}

const getIncomplete = (list) => {
  const faulty = getFaulty(file);
  //get difference between full list and faulty list is the "incomplete" array
  const incomplete = list.filter(num => !faulty.includes(num));
  return incomplete;
}

const solve = (list) => {
  let totalScores = [];
  let openCharQueue = [];
  let solveList = [];
  for(let i = 0; i < list.length; i++){
    let score = 0;
    openCharQueue = [];
    solveList = [];
    for(let j = 0; j < list[i].length; j++){
      if(isOpenChar(list[i][j])){
        openCharQueue.push(list[i][j]);
      }
      else{
        openCharQueue.pop();
      }
    }
      for(let k = 0; k < openCharQueue.length; k++){
        //reverting the openCharQueue to get closing symbols in the right order
        solveList.push(openCharQueue[openCharQueue.length - (k+1)]);
      }
      for(let m = 0; m < solveList.length; m++){
        score = score * 5;
        score = score + charValues[solveList[m]];
      }
    totalScores.push(score);
  }
    totalScores.sort(function(a,b){return a-b});
    let halfwayPoint = Math.floor(totalScores.length / 2)
    return totalScores[halfwayPoint];
  }

const answer = (list) =>{
  let incomplete = getIncomplete(list);
  let answer = solve(incomplete);
  console.log(answer);
}

answer(file);
//1105996483