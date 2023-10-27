// Definindo as notas dos alunos
var notas = [8, 7, 9, 6, 10];

// Calculando a soma de todas as notas
var soma = 0;
for (var i = 0; i < notas.length; i++) {
  soma += notas[i];
}

// Calculando a média das notas
var media = soma / notas.length;

// Exibindo a média das notas
console.log("A média das notas é: " + media);