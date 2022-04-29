//problem #1

const arrowMyFunction = (num1,num2)=> num1 + num2;

console.log(arrowMyFunction(4,20)); //returns 24


//problem #2
const arrowAdd100 = money => money +100;

console.log(arrowAdd100(160)); // returns 260

//problem #3
const arrowCharacterCount = (str , chr) => {
    const answer = (str.split(chr).length - 1);
    // to explain what I did here, split splits up a string into an array. inside split, is called the seperator. The seperator tells split where to seperate the string into new array values. when empty, split seperates each character into a seperate index of the array. what I did was tell it to add a split every time it encounters the chr (character) value. in the below case it was 'l'. it then measures that array - 1 (to take into account the other characters in the array) and that is the answer!
return answer }

    console.log(arrowCharacterCount('heldldlgalo','l')); //returns 4