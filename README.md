# Talker Manager

O objetivo do projeto é construir uma aplicação de cadastros de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e exluir as informações.

Neste projeto:

- Desenvolvi uma API de um CRUD (Create, Read, Update e Delete) de palestrantes (talkers);
- Desenvolvi alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo fs.
- Desenvolvi um endpoint que retorna a lista de palestrantes de um banco de dados MySQL.

## Tecnologias Utilizadas
<hr>

- Docker
- Node.js
- Express
- SQL

## Instruções
<hr>

- Clone este repositório.

```bash
git clone git@github.com:nataliaschmidt/project-talker-manager.git
```
- Acesse o diretório do porjeto e instale suas dependências
```bash
npm install
```
- Crie o arquivo .env e configure as variáveis de ambiente conforme o arquivo env.example

- Execute o seguinte comando para rodar os serviços node e db:
```bash
docker-compose up -d
```

```bash
docker exec -it talker_manager bash
npm start
```