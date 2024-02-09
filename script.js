function calculateFactorial() {
    let input = document.getElementById("numberInput").value;

    // Verificar si el input es un número
    if (isNaN(input)) {
        alert("Please enter a valid number.");
        return;
    }

    let number = parseInt(input);

    // Calcular el factorial
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }

    // Mostrar el resultado en el DOM
    document.getElementById("result").innerText = "El Factorial de " + number + " es: " + factorial;
}
