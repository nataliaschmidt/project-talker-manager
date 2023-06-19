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

const writeFile = async (content) => {
try {
  const contentToWriteInFile = JSON.stringify(content, null, 2);
  await fs.writeFile(PATHFILE, contentToWriteInFile);
} catch (error) {
  console.error(`Erro na escrita do arquivo, erro: ${error}`);
}
};

module.exports = {
  readFile,
  writeFile,
};