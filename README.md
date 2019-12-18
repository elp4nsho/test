# Test Falabella

_solucion creada para el test de falabella
el cual consiste en la creación de un administrador
de productos con ciertas reglas y un simulador de estos
en el tiempo._

## Comenzando 🚀

### Pre-requisitos 📋
<a href="https://nodejs.org/en/download/">NodeJS</a>

<a href="https://www.apachefriends.org/es/download.html">Xampp (mysql)</a>


<a href="https://www.docker.com/products/docker-desktop">Docker</a> (Opcional para un rapido despliegue)

 

## Ejemplo 📌

```
POST http://localhost:3001/product/all
```

```
{
    "codigo": 200,
    "respuesta": {
        "mensaje": "OK",
        "data": [
            {
                "id": 1,
                "productName": "Full cobertura",
                "selln": "20",
                "price": 30,
                "createdAt": "2019-12-16T18:42:14.000Z",
                "updatedAt": "2019-12-16T18:42:14.000Z"
            }
        ]
    }
}
```

dentro del repositorio hay una collection postman para el resto de 
las peticiones

### Instalación 🔧


```
git clone https://github.com/elp4nsho/test.git

cd test 

npm install

npm start

```



## Despliegue 📦

```
construir la imagen, es necesario estar dentro de la carpeta db

docker build -t mysql_node .

levantar la imagen

docker run -d -p 3306:3306 --name mysql_node mysql_node

```

```
construir la imagen, es necesario estar en la carpeta base

docker build -t node_app .

levantar la imagen


docker run -d -p 3001:3001 -e MYSQL_HOST='172.17.0.2'  --name node_app node_app

```
Ojo:-e MYSQL_HOST='172.17.0.2'  hace referencia a la ip del container de la base de datos
