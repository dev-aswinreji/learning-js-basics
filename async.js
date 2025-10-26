async function test() {
    try {
        return Promise.reject("Error!");
    } catch (error) {
        return "Caught!";
    }
}

test().then(console.log);

