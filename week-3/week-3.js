
var space = function () {
    console.log("");                                            // a program to make spaces in the console
    console.log("=======================================");
    console.log("");
}
space();
// Step 1

let divisibleBy3 = x => {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log(x + " is divisible by 3 and 5.");
    } else if (x % 3 === 0 ) {
        console.log(x + " is divisible by 3.")
    }
};
let divisibleBy5 = x => {
    if (x % 5 === 0 && x % 3 === 0) {
        console.log(x + " is divisible by 5 and 3.")
    } else if (x % 5 === 0) {
        console.log(x + " is divisible by 5.")
    }
};
let myFunction = (startVal, endVal, x, y) => {
    let myArray = [];
    for (let i = startVal; i <= endVal; i++) {
        myArray.push(startVal);
        startVal++;
    }
    console.log(myArray);
    myArray.forEach(x);
    myArray.forEach(y);
}
myFunction(15, 25, divisibleBy3, divisibleBy5);

space();
// Step 2,3,4,5


function doLoop(str, num) {                 // using a do loop 
    let myStr = "";
    let i = 0;
    do {
        myStr += str;
        i++;
    }
    while (i < num);
    return myStr;
}
console.log(doLoop("abc", 5));


function whileLoop(str, num) {                  // using a while loop 
    let myStr = "";
    let i = 0;
    while (i < num) {
        myStr += str;
        i++;
    };
    return myStr;
}
console.log(whileLoop("abc", 2));

function forLoop(str, num) {                    // using a for loop 
    let myStr = "";
    for (let i = 0; i < num; i++) {
        myStr += str;
    }
    return myStr;
}
console.log(forLoop("abc", 3));

space();
// Step 8


let arr = [[1, 2], [3, 4], [5, 6]];
arr.forEach(x => {                          // using forEach method to show aal the items in the array
    console.log(x);
})

space();
// Step 9

let x = 9;
function f1(val) {
    val = val + 1;
    return val;                         // Javascript is always pass by value, but when a variable refers to an object 
}                                       // (including arrays), the "value" is a reference to the object.                                                                
f1(x);                                  // Changing the value of a variable never changes the underlying primitive or object,  
console.log(x);                         // it just points the variable to a new primitive or object.                        
                                        // However, changing a property of an object referenced by a 
                                        // variable does change the underlying object.
let y = { x: 9 };
function f2(val) {

    val.x = val.x + 1;
    return val;
}    
f2(y);
console.log(y);
