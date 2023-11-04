// let var const  used to declare variables
const accountId = 1412;
let accountEmail = "abc@gmail.com" 
/*
Don't use var as it causes issues in block scope and functional scope 
*/
var name = "Kshitij"
let accountstate;     //undefined
console.log(name+" "+accountEmail)
console.table([accountId,accountEmail,name,accountstate]) //to print in tabular format