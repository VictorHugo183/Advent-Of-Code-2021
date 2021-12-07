const fs = require("fs");
const input = fs.readFileSync("./input.txt").toString().split(",");
list = input.map(num => parseInt(num));

const findMean = (list) => {
  const sum = list.reduce((total, item) => {
    return total += item;
  }, 0)
  const mean = Math.floor(sum / list.length);
  return mean;
}

const crabFuelCost = (list, mean) => {
  let totalFuel = 0;
  for (let i = 0; i < list.length; i++) {
    let count = 1;
    while (list[i] != mean) {
      if (list[i] < mean) {
        totalFuel += count;
        list[i]++;
      }
      if (list[i] > mean) {
        totalFuel += count;
        list[i]--;
      }
      count++;
    }
  }
  return totalFuel;
}

const optimalPosition = (list) => {
  let mean = findMean(list);
  let fuelCost = crabFuelCost(list, mean);
  console.log("Mean position: ", mean);
  console.log("total fuel cost: ", fuelCost);
}

optimalPosition(list);
//96708205 right answer (floor of mean = 480)
//96708215 too high (ceiling of mean = 481) 