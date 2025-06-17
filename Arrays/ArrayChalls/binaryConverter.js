// This code is generating the first 10 powers of 2 and storing them in an array
let y = [];

let x = 1;

let i = 1;

while(i <= 10){
    y.push(x);
    x *= 2;
    i++;
}

console.log(y);

// This code converts the integer into its binary representation
function intToBin (x){
    return x.toString(2).split('').reverse().join('');
}

console.log(intToBin(75));

// This code conversts binary back to integer
function binToInt(x){
    let binArr = String(x).split('').map(Number);
    
    let int = 0;
    
    for(let i = 0; i < binArr.length; i++ ){
        if(binArr[i] == 1){
            int += y[i];
        }
    }
    
    return int;
}

console.log(binToInt(1101001));
