let a = "51"
console.log(typeof a);
console.log(typeof (a)); //both prints string can be used in either of forms as a operator or a method
//to convert one datatype to another we use capital form of that datatype
//Ex number -> Number  
//   string -> String
let b = Number(a);
console.log(typeof b);
let c = String(a);
console.log(typeof c);
//but we cant rely on this completely
let d = "512abc"
let convertedvalue = Number(d);
console.log(typeof convertedvalue); //gives a number which is not possible as 512abc is not a number
console.log(convertedvalue); //Gives output NaN that is not a number