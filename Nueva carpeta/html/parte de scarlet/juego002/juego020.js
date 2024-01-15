function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio del 1 al 100
    document.getElementById('randomNumber').innerHTML = `Número Aleatorio: ${randomNumber}`;
    document.getElementById('result').innerHTML = '';
}

function checkResult(userChoice) {
    const randomNumber = parseInt(document.getElementById('randomNumber').innerText.split(' ')[2]);

    if (isNaN(randomNumber)) {
        alert('Primero genera un número aleatorio.');
        return;
    }

    const isPrime = checkPrime(randomNumber);

    if ((userChoice === 'primo' && isPrime) || (userChoice === 'no-primo' && !isPrime)) {
        document.getElementById('result').innerHTML = '¡Correcto!';
    } else {
        document.getElementById('result').innerHTML = 'Incorrecto. Intenta de nuevo.';
    }
}

function checkPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
