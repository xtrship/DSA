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
