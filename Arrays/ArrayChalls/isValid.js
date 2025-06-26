let x = '()';

function isValid(s) {
    while(s.includes('()') || s.includes('[]') || s.includes('{}') ){
        s = s.replace('()', '');
        s = s.replace('{}', '');
        s = s.replace('[]', '');
    }
    return s === '';
}

console.log(isValid(x));


let x = '()()';

function isValid(s){
    let stack = [];
    let pairs = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };

    for(p of s){
        if (p in pairs){
            stack.push(p);
            console.log(p);
            console.log(stack);
        } else {
            if (stack.length === 0 || pairs[stack.pop()] !== p) {
                return false;
            }
        }
    }

    return stack.length === 0;

}

console.log(isValid(x));

Solution to above On and On
