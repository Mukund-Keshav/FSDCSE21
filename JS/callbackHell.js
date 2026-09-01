function t1(cb) {
    setTimeout(() => {
        console.log("test 1");
        cb(t1);
    }, 1000);
}

function t2(cb) {
    setTimeout(() => {
        console.log("test 2");
        cb(t2);
    }, 1000);
}

t1(t2);