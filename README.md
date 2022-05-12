# Proyecto Final de React
### _por Nahuel de los Santos_

Para este proyecto se replicó un e-commerce y sus funcionalidades tales como:

- Visualizar productos y sus detalles
- Interactuar con un carrito de compras
- Completar un formulario de datos del cliente

### Instalacion
Para la instalacion de React se requiere como minimo [Node.js](https://nodejs.org/).

Instalar la libreria deste una terminar CLI.

```sh
cd ecommercedls
npx install react
```

Luego para la ejecucion del proyecyo

```sh
npm start
```
### Funciones  
Como primer pantalla se muestra el componente 
```sh
<ItemListContainer />
```
junto con el componente
```sh
<NavBar />
```
en el primero se muestran los productos cargados en la base de datos de Firebase y en el segundo se muestran las categorias a las que pertenecen estos productos.

### Items

En los items visibles en <ItemListContainer /> se ve su nombre, una imagen de referencia, su precio y un botón que dice "Ver detalles". 
Al hacer click en este boton nos direccionara a una pestaña donde se pueden ver los detalles del producto y un contador que será la cantidad que querramos agregar al carrito.


### Carrito

El carrito cuenta con su icono en el NavBar y a su lado un contador de los items que tengamos agregados, este se ira actualizando a medida que agreguemos items.


Si clickeamos en el carrito, nos llevara a el y nos mostrara la cantidad de productos agregados junto con un botón "Eliminar Producto" por si desearamos eliminar agun producto en particular, por debajo se encuentran 2 botones mas, "Vaciar Carrito" que elimina todos los productos que esten dentro del carrito y "Generar Orden" que nos enviara al formulario de cliente para completar con los datos y asi finalizar la compra.

### Formulario 
En este formulario se requieren 4 datos :

- El nombre del comprador
- Un número de telefono
- Una casilla de correo electrónico
- Una dirección para la entrega

Luego de completar estos 4 datos, al clickear el boton de "Finalizar Compra" aparecera en pantalla una alerta con el ID de su pedido y se subira a la base de datos, ademas el carrito volvera a 0. 

Como final del proceso de compra se abrira una ventana modal con una agradecimiento por utilizar la plataforma y un boton que redirige a la pantalla principal.

## Recursos
Para la realizacion de este proyecto se utilizo la version 17 de React.js y una base de datos hecha en Firebase.

Se utilizaron hooks de React como useState y useEffect, useContext y Context Provider para poder utilizar los datos del carrito en todos los hijos que nosotros envolvamos con las etiquetas y herramientas de navegacion como Browser Router, Routes y Link, para que nuestra aplicación siga siendo una SPA y poder navegar en ella. 
