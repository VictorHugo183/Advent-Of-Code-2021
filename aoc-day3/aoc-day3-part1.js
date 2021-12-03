const fs = require('fs');

function powerConsumption(){
  fs.readFile("./binary-diagnostic.txt", (err, data) =>{
    const binaryData = data.toString().replace(/\n/g, "").toString().split(`\r`);
    let gammaRate = "";
    let epsilonRate = "";
    let temp0 = 0;
    let temp1 = 1;
    let length = 0;
    while(length < 12){
      for(let i = 0; i < binaryData.length; i++){
        if(binaryData[i][length] == 0){
          temp0 += 1;
        } else{
          temp1 +=1;
        }
      }
      if(temp0 > temp1){
        gammaRate = `${gammaRate}0`;
        epsilonRate = `${epsilonRate}1`;
      } else{
        gammaRate = `${gammaRate}1`;
        epsilonRate = `${epsilonRate}0`;
      }
      temp0 = 0;
      temp1 = 1;
      length++;
    }
    let answer = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
    console.log("power consumption answer: ",answer);
    //3009600
  });
}
powerConsumption();