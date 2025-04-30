// Array(map,filter,reduce)
const arr = [1,2,3.5,"a",false];
console.log(arr);
arr.push("end");
console.log(arr);
arr.unshift("start")
console.log(arr);
console.log(arr.length);
console.log(arr[0]);

let array = [1, 2, 3, 4, 5];
for( let i=0 ; i<array.length ; i++){
    const element = array[i];
    console.log(element);
      
};

// map : return modified version of data

const newArr =  array.map(function(element){
    return element*10;
    
});
console.log(newArr);

const product = [
  {
    productName: "Iphone",
    price: 100000,
  },
  {
    productName: "Sansung",
    price: 105000,
  },
  {
    productName: "realme",
    price: 20000,
  }
];
console.log("product details:");

product.map((element) => {
    console.log(element.productName,element.price);
    // console.log(element);
});

// filter
const res = array.filter((element)=>{
    return element>=3;
});
console.log(res);

//reduce : to reduce an array in single value
function sum(array){
  let sum  = 0;
  for (let index = 0; index < array.length; index++) {
    sum += array[i];
    
  }

}
const answer = array.reduce((accumulator , element)=>{
  return accumulator + element;
  // 0+1=1,1+2=3,3+3=6,6+4=10,10+5=15
})
console.log(answer);


