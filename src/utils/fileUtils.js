const { readFile } = require('./readAndWrite');

const findById = async (id) => {
const talkers = await readFile();
const foundTalker = talkers.find((talker) => talker.id === id);
return foundTalker;
};

// const main = async () => {
//   const result = await findById(4);
//   console.log(result);
// };

// main();

module.exports = {
  findById,
};