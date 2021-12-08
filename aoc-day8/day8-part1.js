const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(/\r?\n/);
const output = input.map(item =>{
  return item.split(" | ")[1].split(" ");
})

const isUnique = (digit) =>{
  switch(digit.length){
    case 2:
      return true;
    case 4:
      return true;
    case 3:
      return true;
    case 7:
      return true;
    default:
      return false;
  }
}

let uniqueCount = 0;
for(let i = 0; i < output.length; i++){
  for(let j = 0; j < output[i].length; j++){
    if(isUnique(output[i][j])){
      uniqueCount++;
    }
  }
}
console.log(uniqueCount);
//352