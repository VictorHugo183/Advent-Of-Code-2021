const fs = require("fs");

//PART 1
const navigate = () =>{
	fs.readFile("./Directions.txt", (err, data) =>{
		const directions = data.toString().replace(/\n/g,"").toString().split(`\r`);
		console.log(directions);
		let horizontalPos = 0;
		let depth = 0;
		let tempValue = 0;
		for(let i =0; i < directions.length; i++){
			tempValue = parseInt(directions[i].split(" ")[1]);
			if(directions[i].includes("forward")){
				horizontalPos += tempValue;
			}
				else if(directions[i].includes("down")){
					depth += tempValue;
				}
					else if(directions[i].includes("up")){
						depth -= tempValue;
					}
			}
			console.log(horizontalPos, depth);
			console.log(horizontalPos * depth);
			return horizontalPos * depth;
		}
	);
}
navigate();

//PART 2
const adjustAim = () => {
	fs.readFile("./Directions.txt", (err, data) =>{
		const directions = data.toString().replace(/\n/g,"").toString().split(`\r`);
		let horizontalPos = 0;
		let depth = 0;
		let aim = 0;
		let tempValue = 0;
		for(let i =0; i < directions.length; i++){
			tempValue = parseInt(directions[i].split(" ")[1]);
			if(directions[i].includes("forward")){
				horizontalPos += tempValue;
				depth += aim * tempValue;
			}
			else if(directions[i].includes("down")){
				aim += tempValue;
			}
			else if(directions[i].includes("up")){
				aim -= tempValue;
			}
		}
		console.log(horizontalPos, depth);
		console.log(horizontalPos * depth);
		return horizontalPos * depth;
});}

adjustAim();