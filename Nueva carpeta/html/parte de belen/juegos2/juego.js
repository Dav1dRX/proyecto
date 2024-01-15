var imagenes = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg"];
var nombresAnimales = ["Horse", "Pig", "Cat", "Monkey", "Dog", "Cow"];
var currentImageIndex;

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
} 

function loadRandomImage() {
    currentImageIndex = Math.floor(Math.random() * imagenes.length);
    var imagePath = "imagenes/" + imagenes[currentImageIndex];
    document.getElementById("imagenes").src = imagePath;

    var correctOptionIndex = Math.floor(Math.random() * 3);

    var options = document.getElementById("options").getElementsByTagName("button");
    var nombresAnimalesAleatorios = nombresAnimales.slice();
    shuffle(nombresAnimalesAleatorios);

    nombresAnimalesAleatorios = nombresAnimalesAleatorios.filter(function (nombre, index) {
        return index !== currentImageIndex;
    });

    nombresAnimalesAleatorios.splice(correctOptionIndex, 0, nombresAnimales[currentImageIndex]);

    for (var i = 0; i < options.length; i++) {
        options[i].innerText = nombresAnimalesAleatorios[i];
        options[i].classList.remove("correct-option");
    }

    options[correctOptionIndex].classList.add("correct-option");
}

function checkAnswer(selectedOption) {
    var correctOptionIndex = nombresAnimales.indexOf(nombresAnimales[currentImageIndex]);

    if (selectedOption === nombresAnimales[correctOptionIndex]) {
        alert("¡Correcto! Esa es la imagen de un " + nombresAnimales[currentImageIndex] + "!");
    } else {
        alert("Incorrecto. Intenta de nuevo.");
    }

    loadRandomImage();
}

window.onload = loadRandomImage;
