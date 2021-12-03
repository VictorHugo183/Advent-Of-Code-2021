const fs = require('fs');

function ratings() {
  fs.readFile("./binary-diagnostic.txt", (err, data) => {
    const binaryData = data.toString().replace(/\n/g, "").toString().split(`\r`);
    const oxygenData = oxygenRating(binaryData);
    const co2Data = co2Rating(binaryData);
    const answer = parseInt(oxygenData, 2) * parseInt(co2Data, 2);
    console.log("ratings answer: ", answer); //6940518
  })
}

const oxygenRating = (data) => {
  let temp0 = 0;
  let temp1 = 0;
  let popularBit = 0;
  let length = 0;
  while (data.length > 1) {
    for (let i = 0; i < data.length; i++) {
      data[i][length] == 0 ? temp0 += 1 : temp1 += 1;
    }
    temp0 > temp1 ? popularBit = 0 : popularBit = 1;
    if (temp0 === temp1) { popularBit = 1 }
    data = data.filter(num => {
      return num[length] == popularBit;
    });
    temp0 = 0;
    temp1 = 0;
    length++;
  }
  return data[0];
}

const co2Rating = (data) => {
  let temp0 = 0;
  let temp1 = 0;
  let unpopularBit = 0;
  let length = 0;
  while (data.length > 1) {
    for (let i = 0; i < data.length; i++) {
      data[i][length] == 0 ? temp0 += 1 : temp1 += 1;
    }
    if (temp0 == 0 || temp1 == 0) {
      temp0 = 0;
      temp1 = 0;
      length++;
    }
    else {
      temp0 > temp1 ? unpopularBit = 1 : unpopularBit = 0;
      if (temp0 === temp1) { unpopularBit = 0; }
      data = data.filter(num => {
        return num[length] == unpopularBit;
      })
      temp0 = 0;
      temp1 = 0;
      length++;
    }
  }
  return data[0];
}
ratings();