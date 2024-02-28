//funcion de que valida campos numericos
function validarNumero(input) {
  // Obtén el valor actual del input
  var valor = input.value;

  // Reemplaza cualquier caracter no numérico con una cadena vacía
  var nuevoValor = valor.replace(/[^0-9]/g, '');

  // Si el nuevo valor es diferente, actualiza el valor del input
  if (nuevoValor !== valor) {
    input.value = nuevoValor;
  }
}