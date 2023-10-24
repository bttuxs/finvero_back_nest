# FINVERO

Caso de pruebas para finvero

## Descripcion

Se desarrolla una aplicacion con la cual se generan ordenes de entrega

## Inicio

### Dependencias

* Node version 16.19.0
* NEST version 10.1.18
* Mysql 8.0
* Docker 24.0.6


### Instalacion
Deberemos seguir la instalacion de las herramientas necesarias con forme al manual de instalacion de cada una
* Instalacion de [node] (https://nodejs.org/es/docs)
* Instalacion de [Docker](https://docs.docker.com/desktop/)
* Instalacion de [MySQL](https://dev.mysql.com/doc/refman/8.0/en/installing.html)
* deberemos crear un archivo .env con base al env que esta en el repositorio


### Ejecucion de programa

* Teniendo instalado las herramientas necesarias podremos ejecutar el proyecto de manera local de dos maneras
* Forma 1
```
 docker compose up --build app_db //si no se instalo el servidor de mysql
 npm install
 nest start  app-usuario
 nest start  app-producto 
 nest start  app-orden
```

* Forma 2
```
 docker compose up --build //esto configura todos los servicios y los mantiene arriba mediante docker
```