function myFunc1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Function 1 complete");
        }, 1000);
    });
}

function myFunc2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Function 2 complete");
        }, 1000);
    });
}

async function test() {
    const result1 = await myFunc1();
    console.log(result1);
    const result2 = await myFunc2();
    console.log(result2);
}

test();