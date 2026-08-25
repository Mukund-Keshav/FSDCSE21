function sum(a, b) {
    return a + b;
}

function sumWithMsg(a, b, sumFunc) {
    return "The sum of "+a+" & "+b+" is "+sumFunc(a, b)+".";
}

console.log(sumWithMsg(10, 20, sum));