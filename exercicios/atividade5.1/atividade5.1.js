const fs = require('fs');

try {
  const input = fs.readFileSync('stdin', 'utf8');
  const lines = input.split('\n').map(line => line.trim());
  const [tipoAnimal, classeAnimal, dietaAnimal] = lines;

  let animal;

  if (tipoAnimal === 'vertebrado') {
      if (classeAnimal === 'ave') {
          animal = (dietaAnimal === 'carnivoro') ? 'aguia' : 'pomba';
      } else if (classeAnimal === 'mamifero') {
          animal = (dietaAnimal === 'onivoro') ? 'homem' : 'vaca';
      }
  } else if (tipoAnimal === 'invertebrado') {
      if (classeAnimal === 'inseto') {
          animal = (dietaAnimal === 'hematofago') ? 'pulga' : 'lagarta';
      } else if (classeAnimal === 'anelideo') {
          animal = (dietaAnimal === 'hematofago') ? 'sanguessuga' : 'minhoca';
      }
  }

  console.log(animal);
} catch (err) {
  console.error('Erro ao ler o arquivo:', err);
}
