//Getting data from text file to set up numbers and cardList variables
const fs = require("fs");
const file = fs.readFileSync("./input.txt").toString();
let input = file.split(/\r?\n/);
let numbers = input[0].split(',').map(n => parseInt(n));

const fullCardList = file.replace(/\n/g, "").toString().split(`\r`);
fullCardList.splice(0, 2);
const fullCardList2 = fullCardList.filter(num => num != "");
let valuePerArray = 5;
const cardList = fullCardList2.reduce((acc, num, i) => {
  const chunkIndex = Math.floor(i / valuePerArray);
  if (!acc[chunkIndex]) {
    acc[chunkIndex] = []
  }
  acc[chunkIndex].push(num)
  return acc;
}, []);

for (let o = 0; o < cardList.length; o++) {
  for (let p = 0; p < cardList[o].length; p++) {
    cardList[o][p] = cardList[o][p].split(" ");
    cardList[o][p] = cardList[o][p].filter(num => num != "")
    cardList[o][p] = cardList[o][p].map(num => parseInt(num));
  }
}
//End of data fetching

const bingo = (numbers, list) =>{
  for(let i = 0; i < numbers.length; i++){ 
    for(let j = 0; j < list.length; j++){ //[[[]]]
      for(let k = 0; k < list[j].length; k++){ //[[]]
        if (columnBingo(list[j]) == true) {
          console.log(list[j])
          console.log("Column Bingo ", numbers[i])
          calculateUnmarked(list[j], numbers[i]);
          return numbers[i];
        }
        else if(rowBingo(list[j][k]) == true){
          console.log(list[j]);
          console.log("Row Bingo: ",numbers[i]);
          calculateUnmarked(list[j], numbers[i]);
          return numbers[i];
        }
        for(let l=0; l< list[j][k].length; l++){ //[]
          if(list[j][k][l] == numbers[i]){ //num
            list[j][k][l] = "X";
          }
        }
      }
    }
  }
}

const rowBingo = (data) => {
  const bingo = data.reduce((acc, item) => {
    if (item === "X") { acc++ }
    return acc;
  }, 0)
  if (bingo == 5) {
    return true
  } else{
    return false;
  }
}

const columnBingo = (data) => {
  let x = 0;
  let count = 0;
  while(count < 5){
    for(i = 0; i < data.length;i++){
      if(data[i][count] == "X"){
        x +=1;
      }
    }
    if(x == 5){return true}
    x = 0;
    count++;
  }
  return false;
}

const calculateUnmarked = (data, bingoNum) => {
  let unmarkedSum = 0;
  let answer = 0;
  for(let i = 0; i < data.length; i++){
    for(let j = 0; j <data[i].length; j++){
      if(data[i][j] != "X"){
        unmarkedSum += data[i][j];
      }
    }
  }
  answer = unmarkedSum * bingoNum;
  console.log("sum of all unmarked: ", unmarkedSum);
  console.log("Answer: ", answer);
  return answer;
}

bingo(numbers,cardList);

//44088 answer/ last number 66/ unmarked sum 668