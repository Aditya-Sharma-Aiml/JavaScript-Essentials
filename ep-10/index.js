const age = 19;
if (age >= 18) {
    console.log("youare eligible to drive.");
    
}else{
    log("you are not eligible to drive.");
}

// ternary operator
age >= 18 ? console.log("you are eligible to drive.") : console.log("you are not eligible to drive.");

const object ={
    name : "Aditya",
    address:{
        city :"sultanpur",
        state :"up",
        country :"india"
    }
}
log(object.address.city); //sultanpur
log(object["address"]["city"]); //sultanpur 

// optional chaining
log(object?.address?.city); //sultanpur
log(object?.address?.pincode); //undefined

const str =true;
str && console.log("jb true hoga tb hi execute hoga");
