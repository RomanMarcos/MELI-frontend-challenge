# Test de aptitudes técnicas para Mercado Libre

La aplicación consta de tres componentes principales: la caja de búsqueda, la visualización de resultados, y la descripción del detalle del producto.

## Clonar el proyecto

- git clone git@github.com:RomanMarcos/MELI-frontend-challenge.git
- cd MELI-frontend-challenge

## Levantar proyecto usando docker (pre-requisito tener docker & docker-compose instalado): 

- cp backend-application/.env.sample backend-application/.env
- docker-compose run --rm backend-application npm install
- docker-compose run --rm frontend-application npm install
- docker-compose up

## Levantar proyecto con npm:

- cp backend-application/.env.sample backend-application/.env

- cd backend-application
- npm install
- npm start

- cd ..
- cd frontend-application
- npm install
- npm start

## TESTS

- cd frontend-application
- npm test

- cd backend-application
- npm test
