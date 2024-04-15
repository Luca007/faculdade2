const fs = require('fs');

// Lê os valores de entrada do arquivo 'stdin'
const input = fs.readFileSync('stdin', 'utf8');
const lines = input.split('\n');

lines.forEach(line => {
    const notas = line.replace(/,/g, '.').split(' ').map(Number);
    const N1 = notas[0], N2 = notas[1], N3 = notas[2], N4 = notas[3];

    // Calcula a média com pesos
    const media = (N1 * 2 + N2 * 3 + N3 * 4 + N4 * 1) / 10;

    console.log(`Média: ${media.toFixed(1)}`);

    if (media >= 7.0) {
        console.log("Aluno aprovado.");
    } else if (media < 5.0) {
        console.log("Aluno reprovado.");
    } else {
        console.log("Aluno em exame.");
        const notaExame = notas[4]; // A nota do exame é o quinto elemento, se presente
        console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
        const mediaFinal = (media + notaExame) / 2;
        if (mediaFinal >= 5.0) {
            console.log("Aluno aprovado.");
        } else {
            console.log("Aluno reprovado.");
        }
        console.log(`Média final: ${mediaFinal.toFixed(1)}`);
    }
});
