## ACESSO PELO = http://192.168.99.100:8080/?pgsql=postgres 
## Sistema  = PostgreSQL
## Servidor = postgres
## Usuário  = nilson
## Senha    = 361190
## Base de dados = heroes               

docker run \
--name postgres \ 
  -e POSTGRES_USER=nilson \
  -e POSTGRES_PASSWORD=361190 \
  -e POSTGRES_DB=heroes \
  -p 5432:5432 \
  -d \
  postgres
  
  docker ps
  docker exec -it postgres /bin/bash

  docker  run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

## ----MONGODB
## http://192.168.99.100:3000

    docker  run \
     --name mongodb \
     -p 27017:27017 \
     -e MONGO_INITDB_ROOT_USERNAME=admin \
     -e MONGO_INITDB_ROOT_PASSWORD=361190 \
     -d \
     mongo:4

     docker  run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

  docker exec -it mongodb \
    mongo --host localhost -u admin -p 361190 --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'nilja', pwd: '361190', roles: [{role: 'readWrite', db: 'herois'}]})"
    