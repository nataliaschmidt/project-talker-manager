const fs = require('fs').promises;
const path = require('path');

const pathTalkerJson = '../talker.json';
const PATHFILE = path.resolve(__dirname, pathTalkerJson);

const readFile = async () => {
  try {
    const file = await fs.readFile(PATHFILE);
    const data = JSON.parse(file);
    return data;
  } catch (error) {
    console.error(`Erro na leitura do arquivo, erro: ${error}`);
  }
};

// const main = async () => {
//   const data = await readFile()
//   console.log(data);
// }

// main()