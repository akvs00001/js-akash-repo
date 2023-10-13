

//let score = 33
let score = "33"

console.log(typeof (score)); // o/p- string
console.log(score)          // o/p 33 ,but that is string
// console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // will come number
console.log(valueInNumber) // o/p 33 means number


let score1 = "33abc"   // mixture of number & string, now what it will convert in number ? let's see 

console.log(typeof (score1));

let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);// got score as number in out put but that can be wrong lets check the output

console.log(valueInNumber1); //  O/P NaN - not a number 

// so keep your self aware about the coversion of values 


let score2 = null  //  

console.log(typeof (score2));

let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);

console.log(valueInNumber2);    //  O/P  - Zero 


let score3 = undefined //  

console.log(typeof (score3));

let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);

console.log(valueInNumber3);      //  O/P  - NaN 



let score4 = true //  boolean

console.log(typeof (score4));

let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);

console.log(valueInNumber4);      //  O/P  - 1  and for false o/p - 0



let score5 = "Akash"    //  string

console.log(typeof (score5));

let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);

console.log(valueInNumber5);      //  O/P  - NaN 

/*
    convert in number

    "33"     => 33 
    "33abc"  => NaN 
    true     => 1
    false    => 0
    "Akash"  => NaN
    null     => 0
 undefined   => NaN


*/



//converion in boolean 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)             //   o/p-- true

let isLoggedIn1 = ""

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)             //  o/p-- false

let isLoggedIn2 = "Akash"

let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)             //  o/p-- false




/* 
    in Boolean conversion

     1        => true 
     0        => false
     ""       => false
 "akash"      => true

     
*/



// converion in string

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)       //  converted in string but lookwise number 
console.log(stringNumber)             //  o/p-- 33


// ********************************************* Operations *******************************************************


















