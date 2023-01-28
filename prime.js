function isPrime(input) {
    const number = Number(input);

    validateInputForIsPrime(number);

    if (number === 2) {
        return true;
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function validateInputForIsPrime(number) {
    if (isNaN(number) || number < 2) {
        throw new Error("wrong input");
    }
}
