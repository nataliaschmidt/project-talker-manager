const { readFile, writeFile } = require('./readAndWrite');

const findById = async (id) => {
const talkers = await readFile();
const foundTalker = talkers.find((talker) => talker.id === id);
return foundTalker;
};

const createTalker = async (talker) => {
const talkers = await readFile();
const id = talkers[talkers.length - 1].id + 1;
const newTalker = {
  id,
  ...talker,
};
const allTalkers = [...talkers, newTalker];
await writeFile(allTalkers);
return newTalker;
};

const updateTalker = async (id, talkerToUpdate) => {
const talkers = await readFile();
const newUpdateTalker = { id, ...talkerToUpdate };

const updateTalkers = talkers.reduce((talkerList, currentTalker) => {
  if (currentTalker.id === newUpdateTalker.id) {
    return [...talkerList, newUpdateTalker];
  } return [...talkerList, currentTalker];
}, []);
await writeFile(updateTalkers);
return newUpdateTalker;
};

const deleteTalker = async (id) => {
const talkers = await readFile();
const newTalkers = talkers.filter((talker) => talker.id !== id);
await writeFile(newTalkers);
};

const searchTalker = async (q) => {
const talkers = await readFile();
const regex = new RegExp(q, 'i');

const filteredTalker = talkers.filter((talker) => regex.test(talker.name));

return filteredTalker;
};

// const main = async () => {
//   const result = await searchTalker('ri');
//   console.log(result);
// };

//  main();

module.exports = {
  findById,
  createTalker,
  updateTalker,
  deleteTalker,
  searchTalker,
};