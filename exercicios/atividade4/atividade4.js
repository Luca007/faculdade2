var fs = require('fs');

// Lê os valores de entrada do arquivo 'stdin'
var input = fs.readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// Tabela de preços com índices correspondentes aos códigos dos produtos
var prices = [0, 4.00, 4.50, 5.00, 2.00, 1.50]; // índice 0 não usado

// Processa cada linha de entrada
for (var i = 0; i < lines.length; i++) {
    var items = lines[i].split(' ');
    var code = parseInt(items[0]); // Código do produto
    var quantity = parseInt(items[1]); // Quantidade do produto

    // Calcula o total a pagar
    var total = prices[code] * quantity;

    // Imprime o total formatado com duas casas decimais e substitui ponto por vírgula
    console.log(`Total: R$ ${total.toFixed(2).replace('.', ',')}`);
}
