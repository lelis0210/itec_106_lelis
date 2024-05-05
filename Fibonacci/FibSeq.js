function fibonacci(n) {
    const fibArray = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        fibArray.push(a);
        let num = a;
        a = b;
        b = num + b;
    }
    return fibArray;
}

function main() {
    while (true) {
        const input = prompt("Enter the number of terms in the Fibonacci sequence (less than 100):");
        if (!input) return; // Exit if the user cancels or inputs nothing
        if (!/^\d+$/.test(input)) {
            alert("Error: Please enter a whole number.");
            continue;
        }
        const n = parseInt(input);
        if (isNaN(n)) {
            alert("Error: Please enter a valid integer.");
        } else if (n >= 100) {
            alert("Error: Please enter a number less than 100.");
        } else if (n <= 0) {
            alert("Error: Please enter a positive number.");
        } else {
            const fibArray = fibonacci(n);
            alert("Fibonacci Sequence:\n" + fibArray.join(", "));
            break;
        }
    }
}

main();
