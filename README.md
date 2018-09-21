# Instructions

## Prisma setup
```
npm i -g prisma
docker-compose up -d
prisma deploy
```

## Prisma DB wipe
```
prisma reset
```

## Getting schema
```
npm i -g graphql-cli
graphql get-schema --project database
graphql codegen --project database
```

## Running project
`npm run start`