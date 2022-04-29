//problem #1

const arrowMyFunction = (num1,num2)=> num1 + num2;

console.log(arrowMyFunction(4,20)); //returns 24


//problem #2
const arrowAdd100 = money => money +100;

console.log(arrowAdd100(160)); // returns 260

//problem #3
const arrowCharacterCount = (str , chr) => {
    const answer = (str.split(chr).length - 1) 
return answer }

    console.log(arrowCharacterCount('hellllo','l')); //returns 4