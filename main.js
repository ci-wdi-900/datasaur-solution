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

}

const isCarnivore = function(dinosaur) {
  return dinosaur.carnivore === true;

  // Or, more simply:
//   return dinosaur.carnivore
}

const isExtinct = function(dinosaur) {
  return dinosaur.extinct === true;

  // Or, more simply:
  // return dinosaur.extinct
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
  return dinos.map(makeSingular);
}

const truncateDinos = function(dinos) {
  return dinos.map(truncateSpecies);
}

const makeAllExtinct = function(dinos) {
  return dinos.map(makeExtinct);
}

const carnivoresOnly = function(dinos) {
  return dinos.filter(isCarnivore);
}

const herbivoresOnly = function(dinos) {
  return dinos.filter((dino) => !isCarnivore(dino));
}

const extinctOnly = function(dinos) {
  return dinos.filter(isExtinct);
}

const notExtinct = function(dinos) {
  return dinos.filter((dino) => !isExtinct(dino));
}

const triassicOnly = function(dinos) {
  return dinos.filter(isTriassic);
}

const notTriassic = function(dinos) {
  return dinos.filter((dino) => !isTriassic(dino))
}


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
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
