let funiture = ['Table','Chairs','Couch'];

let iterator = funiture[Symbol.iterator]();

for (let name of funiture){
    for (let names of name){
        console.log(names);
    } 
} 
    