// ==  and > ,< , >=,<=  works differently
// comparison operators other than == converts null to 0 
console.log(null == 0);   //false
console.log(null >= 0);   //true
console.log(null > 0);    //false


console.log(undefined == 0);   //false
console.log(undefined >= 0);   //false
console.log(undefined > 0);    //false

//=== strict check also checks datatype
console.log("2"==2); //true
console.log("2"===2); //false