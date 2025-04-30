//functions

function sum(num1,num2){
    console.log(num1+num2);
};
sum(100,200);

// func expression: jb funcn ko kisi variable me initialize kr do toh usee function expression bolte hai

const mulOfTwoNumbers = function mul(num1, num2) {
  return num1 * num2;
};

console.log(mulOfTwoNumbers(10, 20)); // Output: 200

//anonymous funcn: don't have any funcn name
let subOfTwoNum = function (num1,num2){
    console.log(num1-num2);
    
};
subOfTwoNum(200,300);

// callback: A callback function in JavaScript is a function that is passed as an argument to another function, and is executed later, often after some task completes.

const doSomething = function(callback){
    console.log("samose ban rhe hai ....");
    setTimeout(function(){
        callback();
    },3000);
};
// callback funcn
const callback = function(){
    console.log("samose ready hai..");
    
};
doSomething(callback);

//higer order function

const radius = [1,2,3,4];

const area = function(radiusArray){
    const result = [];
    for(let i=0 ; i<radiusArray.length ; i++){
        const a= Math.PI*radiusArray[i]**2;
        result.push(a);
    };
    return result;
};


console.log(area(radius));

const circumference = function(radiusArray){
    const result = [];
    for(let i=0 ; i<radiusArray.length ; i++){
        const a= 2*Math.PI*radiusArray[i];
        result.push(a);
    };
    return result;
};


console.log(circumference(radius));

// higher order : jb hum ek funcn ko dusre function me as an argument pass krte hai toh woh hiigher order function hota hai

const formulaOfArea = function(r){ 
    //higher order funcn
    return Math.PI * r**2;
};
const formulaOfCircumference = function(r){ 
    //higher order funcn
    return 2 * Math.PI * r;
};


const calculate = function(radiusArray,formula){
    const result = [];
    for (let i = 0; i < radiusArray.length; i++) {
      const a = formula(radiusArray[i]);
      result.push(a);
    }
    return result;
    
};
const ans1 = calculate(radius,formulaOfArea);
console.log(ans1);
const ans2 = calculate(radius,formulaOfCircumference);
console.log(ans2);

// Arrow function

// const multiply = (n1,n2) => {
//  return n1*n2;
// };
// console.log(multiply(2,3));

const multiply = (n1,n2) => n1*n2;
console.log(multiply(2,3));


