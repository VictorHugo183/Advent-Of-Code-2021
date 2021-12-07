const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(",");
list = input.map(num => parseInt(num));

const findMedian = (list) => {
  list.sort(function (a, b) { return a - b });
  let halfwayPoint = Math.floor(list.length / 2);
  if (list.length % 2){
    return list[halfwayPoint];
  }
  else{
    return (list[halfwayPoint - 1] + list[halfwayPoint]) / 2.0
  }
}

const calculateFuel = (list,median) =>{
  let totalFuel = 0;
  for(let i = 0; i < list.length; i++){
    if(list[i] > median){
      totalFuel += list[i] - median;
    }
    else if(list[i] < median){
      totalFuel += median - list[i];
    }
  }
  return totalFuel;
}

const optimalPosition = (list) =>{
  let median = findMedian(list);
  let fuelCost = calculateFuel(list,median);
  console.log("Median position: ",median);
  console.log("total fuel cost: ", fuelCost);
}
optimalPosition(list);
//optimalPosition(list); 
//median = 341, total fuel cost = 349357
