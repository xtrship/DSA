function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            // Opening bracket - push to stack
            stack.push(char);
        } else {
            // Closing bracket - check if it matches the most recent opening
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    
    // Valid if all brackets were matched (stack is empty)
    return stack.length === 0;
}

// Test cases
console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true  
console.log(isValid("(]"));        // false
console.log(isValid("([)]"));      // false
console.log(isValid("{[]}"));      // true
