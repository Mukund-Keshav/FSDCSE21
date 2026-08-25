function sum(a, b) {
    return a + b;
}

function sumWithMsg(a, b, callback) {
    const result="The sum of "+a+" & "+b+" is "+callback(a, b)+".";
    return result;
}

console.log(sumWithMsg(10, 20, sum));