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

const searchTalkers = async (name, rate, watchedAt) => {
  let talkers = await readFile();

  if (name) {
    const regex = new RegExp(name, 'i');
    talkers = talkers.filter((talker) => regex.test(talker.name));
  }

  if (rate) {
    talkers = talkers.filter((talker) => talker.talk.rate === Number(rate));
  }

  if (watchedAt) {
    talkers = talkers.filter((talker) => talker.talk.watchedAt === watchedAt);
  }

  return talkers;
};

const updateRate = async (id, rate) => {
  const talkers = await readFile();
  
  const findTalker = await findById(id);
  const updateTalkerRate = {
    ...findTalker,
    talk: {
      ...findTalker.talk,
      rate,
    },
  };
  const talkersListUpdate = talkers.reduce((talkersList, currentTalker) => {
    if (currentTalker.id === updateTalkerRate.id) {
      return [...talkersList, updateTalkerRate];
    } return [...talkersList, currentTalker];
  }, []);
 await writeFile(talkersListUpdate);
};

// const main = async () => {
//   const result = await updateRate(2, 5);
//   console.log(result);
// };

//  main();

module.exports = {
  findById,
  createTalker,
  updateTalker,
  deleteTalker,
  searchTalkers,
  updateRate,
};