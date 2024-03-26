// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

const destructivelyAppendCat = (name) => {
  cats.push(name);
};

const destructivelyPrependCat = (name) => {
  cats.unshift(name);
};

const destructivelyRemoveLastCat = () => {
  cats.pop();
};

const destructivelyRemoveFirstCat = () => {
  cats.shift();
};

const appendCat = (name) => {
  const newCats = [...cats, name];
  return newCats;
};

const prependCat = (name) => {
  const newCats = [name, ...cats];
  return newCats;
};

const removeLastCat = () => {
  const newCats = cats.slice(0, cats.length - 1);
  return newCats;
};

const removeFirstCat = () => {
  const newCats = cats.slice(1);
  return newCats;
};