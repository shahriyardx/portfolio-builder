# Portfolio Builder 

A modern **Portfolio Builder** that lets anyone easily create, customize, and publish a professional developer portfolio — no design skills required.

This project is built for developers, designers, and students who want to showcase their work, skills, and experience in a clean and customizable way.

# Install & Run
First clone the repository and then run the following commands

```sh
yarn install # install dependencies
```

```sh
docker compose up -d # start a local database server
# this is optional you can use cloud database
```

```sh
yarn prisma db push # apply database migrations
yarn prisma generate # generates the models
```

```sh
yarn dev # runs the project
```
