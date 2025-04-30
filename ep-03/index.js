//rest and spread operator : ...object/array, too much used in functions
//working :rest=> gather data ; spread=>spread the data

//make duplicate
const arr = [1, 2, 3, 4];
const duplicateArr = [...arr, 5, 6, "Apple"];
console.log(duplicateArr);

//Q. merge two array
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9];

const result = [...arr1, ...arr2];
console.log(result);

//Q. merge two objects
const obj1 = {
  N: "A",
  A: 21,
  S:"developer"
};
const obj2 = {
  N: "R",
  A: 18,
  S:"tester"
};
const objects = {...obj1,...obj2};
console.log(objects);

 /*output: {
  N: "R",
  A: 18,
  S: "tester"
}*/

// Because when you do { ...obj1, ...obj2 }, any keys that exist in both will be overwritten by the values in obj2.

const obj3 = {
  n: "A",
  a: 21,
  s: "developer",
};
const obj4 = {
  N: "R",
  A: 18,
  S: "tester",
};

const res = {...obj3,...obj4};
console.log(res);

//functions
function sum(a,b,c,d,e){
    return a+b+c+d+e;
}

console.log(sum(1,2,3,4,5));

function sum(...numbers){
    let sum =0;
    console.log(numbers);
    for(let i=0 ; i<numbers.length ; i++){
        sum += numbers[i];
    }  
    return sum;
}
console.log(sum(1, 2, 3, 4, 5));

