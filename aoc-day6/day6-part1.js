const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(",");
list = input.map(num => parseInt(num))

let count = 0;
while (count < 80){
  const newFish = []
  for (let i = 0; i < list.length; i++){
    if(list[i] > 0){list[i]--;}
    else if(list[i] == 0){
      list[i] = 6;
      newFish.push(8);
    }
  }
  list = list.concat(newFish);
  count++;
}
console.log(list.length); //371379