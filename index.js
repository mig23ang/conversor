//  Convertir un número en base 10 a base octal, hexadecimal y binaria.


document.querySelector('#enviar').addEventListener('click', function () {
    // Base 10:
    let decimal = parseFloat(document.querySelector('#valor').value);
    // Base 8:
    let octal = decimal.toString(8);

    // Base 16:
    let hexadecimal = decimal.toString(16);

    // Base 2:
    let binario = decimal.toString(2);
    document.getElementById("octal").value = octal;
    document.getElementById("hexadecimal").value = hexadecimal;
    document.getElementById("binario").value = binario;

})
