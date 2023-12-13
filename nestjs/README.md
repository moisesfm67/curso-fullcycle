
# Home Broker - Back-end
🇧🇷 **Linguagem em Português:**

## Descrição
Back-end desenvolvido durante a Imersão FullCycle 16 para fazer a conexão com o Kafka e criação de rotas para o front-end. Também foram criadas rotas para a utilização de Server-Sent Events para atualização dos dados no front end em tempo real.

## Tecnologias Utilizadas
- NestJS
- TypeScript
- KafkaJS
- Mongoose
- Prisma
- @nestjs/microservices
- @nestjs/mongoose
- Nest Commander
- RxJS

## Instalação
1. Certifique-se que o [microserviço](https://github.com/moisesfm67/curso-fullcycle/tree/main/go) esteja funcionando e sendo executado
2. Clone o repositório.
3. Execute `npm install`.
4. Execute `npx prisma generate` para gerar os models do prisma
5. Execute `npx prisma db push` para atualizar o banco de dados
6. execute `npx prisma studio` para abrir um dashboard para analisar e atualizar os dados
7. Execute `npm run start:dev` para iniciar o servidor.
8. Execute `npm run command --simulate-assets-price` para rodar o script que adiciona e atualiza os dados

## Como Usar
- O back-end estará disponível em http://localhost:3000.
- Consulte a documentação para detalhes sobre as rotas e funcionalidades.

## Contribuição
Contribuições são bem-vindas! Abra uma issue para discutir alterações significativas.


# Home Broker - Back-end
🇺🇸 **Language in English:**

## Description
Back-end developed during the FullCycle 16 Immersion to connect with Kafka and create routes for the front-end. Routes were also created for the use of Server-Sent Events to update data in real-time on the front end.

## Used Technologies
- NestJS
- TypeScript
- KafkaJS
- Mongoose
- Prisma
- @nestjs/microservices
- @nestjs/mongoose
- Nest Commander
- RxJS

## Installation
1. Make sure [microservice](https://github.com/moisesfm67/curso-fullcycle/tree/main/go) is up and running
2. Clone the repository.
3. Run `npm install`.
4. Run `npx prisma generate` to generate the prism models
5. Run `npx prisma db push` to update the database
6. run `npx prisma studio` to open a dashboard to analyze and update the data
7. Run `npm run start:dev` to start the server.
8. Run `npm run command --simulate-assets-price` to run the script that adds and updates the data

## How to Use
- The back-end will be available at http://localhost:3000.
- Refer to the documentation for details on routes and functionalities.

## Contribution
Contributions are welcome! Open an issue to discuss significant changes.
