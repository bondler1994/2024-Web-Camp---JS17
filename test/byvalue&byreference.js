//test by value
//the feature is only for primitive type
//make variable a and b
let a = 10;
let b;

b = a 
a = 5 //here to change a value

console.log(a)//a will be 5
console.log(b)//expect b = 10

//test by reference
//the feature is for object, array, function
let c = {name: 'Watson'};
let d;

c.name = 'Jeremy'//here to redefine variable c object
d = c 

console.log(c);//c = 'Jeremy'
console.log(d);//d = 'Jeremy'


//by reference become to value 測試例外狀況
let e = {name: "PAC"};
let f;

f = e;
//here I change the object again
e = {name: "Bondler"};

console.log(e); //bondler
console.log(f); //PAC