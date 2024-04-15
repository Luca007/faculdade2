var fs = require('fs');

// Lê o valor de entrada do arquivo 'stdin'
var input = fs.readFileSync('stdin', 'utf8');
var R = parseFloat(input);  // Converte o valor lido para ponto flutuante

// Define o valor de Pi
var pi = 3.14159;

// Calcula o volume da esfera
var volume = (4.0/3) * pi * R * R * R;

// Imprime o volume com 3 casas decimais
console.log(`VOLUME = ${volume.toFixed(3)}`);
