document.addEventListener('DOMContentLoaded', function () {
    // Generar dos números aleatorios
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
  
    // Calcular la suma
    const sum = num1 + num2;
  
    // Mostrar la pregunta en el HTML
    const questionElement = document.getElementById('question');
    questionElement.textContent = `¿𝘾𝙪𝙖𝙣𝙩𝙤 𝙚𝙨 ${num1} + ${num2}?`;
  
    // Generar tres opciones aleatorias
    const correctAnswer = sum;
    const wrongAnswer1 = generateWrongAnswer(correctAnswer);
    const wrongAnswer2 = generateWrongAnswer(correctAnswer);
  
    // Agregar las opciones al HTML
    const optionsElement = document.getElementById('options');
    optionsElement.innerHTML = `
      <button onclick="checkAnswer(${correctAnswer})">${correctAnswer}</button>
      <button onclick="checkAnswer(${wrongAnswer1})">${wrongAnswer1}</button>
      <button onclick="checkAnswer(${wrongAnswer2})">${wrongAnswer2}</button>
    `;
  });
  
  function generateWrongAnswer(correctAnswer) {
    // Generar un número incorrecto diferente de la respuesta correcta
    let wrongAnswer;
    do {
      wrongAnswer = Math.floor(Math.random() * 20) + 1;
    } while (wrongAnswer === correctAnswer);
  
    return wrongAnswer;
  }
  
  function checkAnswer(selectedAnswer) {
    // Obtener solo los números de la pregunta
    const questionText = document.getElementById('question').textContent;
    const numbers = questionText.match(/\d+/g);
    const correctAnswer = parseInt(numbers[0]) + parseInt(numbers[1]);
  
    // Comprobar si la respuesta seleccionada es correcta
    const resultMessage = (parseInt(selectedAnswer) === correctAnswer) ? '¡Correcto!' : '¡Incorrecto!';
    alert(resultMessage);
    location.reload(); // Recargar la página para generar una nueva pregunta
  }
  