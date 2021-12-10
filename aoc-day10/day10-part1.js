const fs = require("fs");
const file = fs.readFileSync("./input.txt").toString().split(`\r\n`);

const openChars = ["(","[","{","<"];

const validCombinations = {
  "(":")",
  "[":"]",
  "{":"}",
  "<":">"
}

const charValues = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>':25137
}

const isOpenChar = (item) =>{
  for(let i = 0; i < openChars.length; i++){
    if(item === openChars[i]){
      return true;
    }
  }
  return false;
}

const solve = (list) =>{
  let totalScore = 0;
  let tempOpenCharList = [];
  for(let i = 0; i < list.length; i++){
     tempOpenCharList.length = 0;
    for(let j = 0; j <list[i].length; j++){
      if(isOpenChar(list[i][j]) && !list[i][j+1]) {break}
      if(isOpenChar(list[i][j])){
        tempOpenCharList.push(list[i][j]);
      }
      else {
        if (tempOpenCharList.length === 0 || validCombinations[tempOpenCharList.pop()] != list[i][j]){
          totalScore += charValues[list[i][j]];
          break;
        }
      }
    }
  }
  console.log(totalScore);
}

solve(file);
//215229 totalScore
