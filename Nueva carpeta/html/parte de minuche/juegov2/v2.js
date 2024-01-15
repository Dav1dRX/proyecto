// script.js
let correctWord;
let correctNumber;

function generateRandomNumber() {
    correctNumber = Math.floor(Math.random() * 20) + 1;
    correctWord = getNumberWord(correctNumber);

    document.getElementById('randomNumber').innerHTML = `Guess the word for number ${correctNumber}:`;

    const options = document.getElementById('options');
    options.innerHTML = ''; // Clear previous options

    // Generate and append buttons for options
    const randomIndex = Math.floor(Math.random() * 3); // Random index for correct option
    for (let i = 0; i < 3; i++) {
        const optionNumber = (i === randomIndex) ? correctNumber : generateUniqueNumber();
        const optionWord = getNumberWord(optionNumber);
        
        const button = document.createElement('button');
        button.textContent = optionWord;
        button.onclick = function() {
            checkResult(optionWord);
        };

        options.appendChild(button);
    }

    document.getElementById('result').innerHTML = '';
}

function generateUniqueNumber() {
    let uniqueNumber;
    do {
        uniqueNumber = Math.floor(Math.random() * 20) + 1;
    } while (uniqueNumber === correctNumber);
    return uniqueNumber;
}

function checkResult(userChoice) {
    if (userChoice === correctWord) {
        document.getElementById('result').innerHTML = 'Correct! Well done!';
    } else {
        document.getElementById('result').innerHTML = 'Oops! Try again.';
    }
}

function getNumberWord(number) {
    switch (number) {
        case 1:
            return 'One';
        case 2:
            return 'Two';
        case 3:
            return 'Three';
        case 4:
            return 'Four';
        case 5:
            return 'Five';
        case 6:
            return 'Six';
        case 7:
            return 'Seven';
        case 8:
            return 'Eight';
        case 9:
            return 'Nine';
        case 10:
            return 'Ten';
        case 11:
            return 'Eleven';
        case 12:
            return 'Twelve';
        case 13:
            return 'Thirteen';
        case 14:
            return 'Fourteen';
        case 15:
            return 'Fifteen';
        case 16:
            return 'Sixteen';
        case 17:
            return 'Seventeen';
        case 18:
            return 'Eighteen';
        case 19:
            return 'Nineteen';
        case 20:
            return 'Twenty';
        default:
            return '';
    }
}

