const connection = require('./connection');

const findAllDb = async () => {
  const [talkers] = await connection.execute('SELECT * FROM TalkerDB.talkers');
 const arrayTalkers = talkers.map((talker) => ({
      name: talker.name,
      age: talker.age,
      id: talker.id,
      talk: {
        watchedAt: talker.talk_watched_at,
        rate: talker.talk_rate,
      },
    }));
  return arrayTalkers;
};

module.exports = findAllDb;
