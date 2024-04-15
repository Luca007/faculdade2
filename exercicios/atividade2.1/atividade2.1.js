var fs = require('fs');

// Lê os valores de entrada do arquivo 'stdin'
var input = fs.readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Extrai os valores da entrada, assumindo que o valor do combustível pode usar vírgula como separador decimal
var X = parseFloat(lines[0]); // Distância total percorrida (em Km)
var Y = parseFloat(lines[1].replace(',', '.')); // Total de combustível gasto (em litros), convertendo vírgula em ponto

// Calcula o consumo médio
var consumoMedio = X / Y;

// Imprime o consumo médio com 3 casas decimais seguido de "km/l"
console.log(`${consumoMedio.toFixed(3)} km/l`);
