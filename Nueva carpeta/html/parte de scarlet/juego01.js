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

    const isEven = randomNumber % 2 === 0;

    if ((userChoice === 'par' && isEven) || (userChoice === 'impar' && !isEven)) {
        document.getElementById('result').innerHTML = '¡Correcto!';
    } else {
        document.getElementById('result').innerHTML = 'Incorrecto. Intenta de nuevo.';
    }
}
