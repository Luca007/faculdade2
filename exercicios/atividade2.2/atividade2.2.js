var fs = require('fs');

// Lê o valor da distância do arquivo 'stdin'
var input = fs.readFileSync('stdin', 'utf8');
var distancia = parseInt(input);  // Converte o valor lido para inteiro

// Calcula o tempo necessário em minutos
var tempo = distancia * 2;  // Cada quilômetro leva 2 minutos

// Imprime o tempo necessário seguido de "minutos"
console.log(`${tempo} minutos`);
