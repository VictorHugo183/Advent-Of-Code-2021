//This solution assumes the data is input as an array of numbers.

//part 1
const count = (array) =>{
const increased = array.filter((item, i, arr)=>{
  return item > arr[i-1];
})
console.log(increased);
const answer = increased.length + 1;
return answer;
}

//part 2
const slidingWindow = (arr, size) => {
  let result = [];
  let lastWindow = arr.length - size;
  for (let i = 0; i <= lastWindow; i++) {
    result.push(arr.slice(i, i + size));
  }
  console.log(result);
  const sumOfValues = result.map(num => num.reduce((acc,num)=>{
    return acc = acc + parseInt(num);
  },0));
  console.log(sumOfValues);
  const increased = sumOfValues.filter((num, i, arr)=>{
    return num > arr[i-1];
  });
  console.log(increased);
  const answer = increased.length;
  return answer;
};