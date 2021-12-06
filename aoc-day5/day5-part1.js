const fs = require("fs");
const file = fs.readFileSync("./input.txt").toString().split(`\r\n`);
const split = file.map(num => {
  const [first, last] = num.split(` -> `);
  return [first.split(`,`).map(num => parseInt(num)), last.split(`,`).map(num => parseInt(num))];
})

const list = [];
for(let i = 0; i < split.length; i++){
  if(split[i][0][0] == split[i][1][0] || split[i][0][1] == split[i][1][1]){ //only get results that form horizontal or vertical lines
    list.push(split[i]);
  }
}

const vents = {};
let overlaps = 0;

for(let i = 0; i < list.length; i++){ //[[[]]]
 const [start, end] = list[i];
 const [x1, y1] = start;
 const [x2, y2] = end;
 const goingHorizontal = (y1 === y2);
 const goingVertical = (x1 === x2);

 if(goingHorizontal){
  let firstX = Math.min(x1,x2);
  let lastX = Math.max(x1,x2);
  for(let k = firstX; k <= lastX; k++){
    if(vents.hasOwnProperty([[k,y1]])){
    vents[[k,y1]]++;
    if(vents[[k,y1]] == 2){
    overlaps++;}
    }
    else{
    vents[[k,y1]] = 1;
    }
  }
 }
 if(goingVertical){
   let firstY = Math.min(y1,y2);
   let lastY = Math.max(y1,y2);
   for(let j = firstY; j <= lastY; j++){
     if(vents.hasOwnProperty([[x1,j]])){
       vents[[x1,j]]++;
       if(vents[[x1,j]] == 2){
       overlaps++;}
     }
     else{
       vents[[x1,j]] = 1;
     }
   }
 }
}
console.log(overlaps);
//8622 right answer