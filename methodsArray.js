let arr1 = ["A" , true , 2 ] ; 

// Push and pop 
console.log("\n*******Push and pop *******\n");
console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop()); //Remove last value
console.log(arr1);

// Shift and unshift
console.log("\n*******Shift and unshift*******\n");
console.log(arr1.unshift("new value"));
console.log(arr1);
console.log(arr1.shift()); //Remove first value
console.log(arr1);

// Concat
console.log("\n*******Concat*******\n");
let arr2 = ["B" , false , 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1,2,3]);
console.log(newArr);
console.log(newArr2);

let arr4 = ["chanwit", "kenwong", 2];
connsole.log(arr4);
console.log(arr4.push("Green"));
console.log(arr4);
console.log(arr4.pop());
console.log(arr4);