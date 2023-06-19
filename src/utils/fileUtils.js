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

// const main = async () => {
//   const result = await createTalker({
//     "name": "Danielle Santos",
//     "age": 56,
//     "talk": {
//       "watchedAt": "22/10/2019",
//       "rate": 5
//     }
//   });
//   console.log(result);
// };

// main();

module.exports = {
  findById,
  createTalker,
};