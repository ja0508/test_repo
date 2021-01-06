function calc(op, a, b) {
    if (op === 'add') {
        return a + b;
    }
}

function init() {
    console.log(calc('add', 3, 4));
}

init();