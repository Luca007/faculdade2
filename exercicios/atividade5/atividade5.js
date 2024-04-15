const fs = require('fs');

// Lê os valores de entrada do arquivo 'stdin'
const input = fs.readFileSync('stdin', 'utf8');
const lines = input.split('\n');

// Função auxiliar para converter data e hora em objeto Date
function parseDateTime(dayLine, timeLine) {
    const day = parseInt(dayLine.split(' ')[1], 10);
    const [hour, minute, second] = timeLine.split(':').map(num => parseInt(num, 10));
    // Criando uma data de referência para abril (mês do evento)
    return new Date(2021, 3, day, hour, minute, second);
}

const startTime = parseDateTime(lines[0], lines[1]);
const endTime = parseDateTime(lines[2], lines[3]);

// Calcula a diferença em segundos
let diffInSeconds = Math.floor((endTime - startTime) / 1000);
const days = Math.floor(diffInSeconds / (24 * 3600));
diffInSeconds -= days * 24 * 3600;
const hours = Math.floor(diffInSeconds / 3600);
diffInSeconds -= hours * 3600;
const minutes = Math.floor(diffInSeconds / 60);
const seconds = diffInSeconds % 60;

console.log(`${days} dia(s)`);
console.log(`${hours} hora(s)`);
console.log(`${minutes} minuto(s)`);
console.log(`${seconds} segundo(s)`);
