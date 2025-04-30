// we can destructuring in object and array
const arr = [1,2,3,4,5];
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

//destructuring
const [a,b,c,d,e] = arr;
console.log(e)

// object destructuring
const person = {
    name:"Aditya",
    age:21,
    gender:"Male",
}
//access value : \

//1.dot notation
console.log(person.gender);

//2.bracket notation:
console.log(person["age"]);

//destructuring
const {name , age , gender} = person;
console.log(name);
console.log(age);
console.log(gender);




