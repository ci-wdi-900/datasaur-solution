const makeDino = function(species, period, carnivore, extinct = false) {
  return {
    species: species,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  }
}

const makeSingular = function(dinosaur) {
  const newDino = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct);

  if (newDino.species.endsWith('us')) {
    newDino.species = newDino.species.slice(0, -2);
  }

  return newDino;
}

const truncateSpecies = function(dinosaur) {
  const newDino = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct);

  if (newDino.species.length > 10) {
    newDino.species = newDino.species.slice(0, 7) + '...';
  }

  return newDino;
}

const makeExtinct = function(dinosaur) {
  const newDino = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, true);

  return newDino;

  // or, more cleanly:
  // return makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, true);

}

const isCarnivore = function(dinosaur) {
  if (dinosaur.carnivore === true) {
    return true;
  } else {
    return false;
  }

  // or, more succinctly:
  // return dinosaur.carnivore === true;

  // or, even MORE succinctly:
//   return dinosaur.carnivore
}

const isHerbivore = function(dinosaur) {
  return dinosaur.carnivore === false;
  // or, with a not:
  // return !dinosaur.carnivore;
}

const isExtinct = function(dinosaur) {
  return dinosaur.extinct === true;
}

const isNotExtinct = function(dinosaur) {
  return dinosaur.extinct === false;

  // or, with a not:
  // return !dinosaur.extinct;
}

const isTriassic = function(dinosaur) {
  return dinosaur.period === 'Triassic';
}

const isJurassic = function(dinosaur) {
  return dinosaur.period === 'Jurassic';
}

const isCretaceous = function(dinosaur) {
  return dinosaur.period === 'Cretaceous';
}

const singularizeDinos = function(dinos) {
  const newDinos = [];
  for (const dino of dinos) {
    newDinos.push(makeSingular(dino));
  }

  return newDinos;
}

const truncateDinos = function(dinos) {
  const newDinos = [];
  for (const dino of dinos) {
    newDinos.push(truncateSpecies(dino));
  }

  return newDinos;
}

const makeAllExtinct = function(dinos) {
  const newDinos = [];
  for (const dino of dinos) {
    newDinos.push(makeExtinct(dino));
  }

  return newDinos;
}

const carnivoresOnly = function(dinos) {
  const newDinos = [];
  for (const dino of dinos) {
    if (isCarnivore(dino)) {
      newDinos.push(dino);
    }
  }

  return newDinos;
}

const herbivoresOnly = function(dinos) {
  const newDinos = [];
  for (const dino of dinos) {
    if (isHerbivore(dino)) {
      newDinos.push(dino);
    }
  }

  return newDinos;
}

const extinctOnly = function(dinos) {
  const newDinos = [];
  for (const dino of dinos) {
    if (isExtinct(dino)) {
      newDinos.push(dino);
    }
  }

  return newDinos;
}

const notExtinct = function(dinos) {
  const newDinos = [];
  for (const dino of dinos) {
    if (isNotExtinct(dino)) {
      newDinos.push(dino);
    }
  }

  return newDinos;
}

const triassicOnly = function(dinos) {
  const newDinos = [];
  for (const dino of dinos) {
    if (isTriassic(dino)) {
      newDinos.push(dino);
    }
  }

  return newDinos;
}

const notTriassic = function(dinos) {
  const newDinos = [];
  for (const dino of dinos) {
    if (!isTriassic(dino)) {
      newDinos.push(dino);
    }
  }

    return newDinos;
}









/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isHerbivore === 'undefined') {
    isHerbivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isNotExtinct === 'undefined') {
    isNotExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isHerbivore,
  isExtinct,
  isNotExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
}
