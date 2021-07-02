# Readme Car Service
CarService, es un software de gestion de estacionamiento, que permite modernizar mediante la tecnologia la gestion del ingreso y salida y cobro por concepto del estacionamiento.

Link de despliegue en produccion Vercel-- [Car Service](https://car-service.vercel.app/).
link https://car-service.vercel.app/(https://car-service.vercel.app/)

### `Credenciales de acceso` 

Para efectos de prueba, se disponibilizo un usuario con un solo estacionamiento asignado\
Usuario: jvaldes \
Password: 12345678 


### `Principales Funciones` 
*Login \
*Ingresar Nuevo Ticket \
*Cerrar Ticket \
*Pagar Ticket \
*Ver ticket abiertos, aqui se podra ver el ticket, cambiar patente y cerrar ticket\
*VerTicket Cerrados. \
*Cerrar Sesion 

### `API CarService`
La plataforma se conecta a la Api https://car.rakidwam.cl/car_service/api_rest/ \
la API es de creacion propia de la empresa [Rakidwam](https://www.rakidwam.cl/) \
Lo servicios rest son de creacion propia debido a eso aun no tiene documentacion en produccion. 
La API al hacer login proporciona un token el cual es necesario para conectar a los diferentes endPoint disponibilizados por la API.

**Principales Servicios**
`Login` \
`IngresarTicket` \
`SacarTicket` \
`IngresarTicket` \
`PagarTicket` \
`ListAllTicket` \
`TicketsAbiertos` \
`CambiarPatente` 

Los servicios mencionados anteriormente son lo que ocupa CarService en ReactJs

### `Patron de Arquitectura`

CarService esta diseñado bajo la arquitectura React Redux \
Redux es un manejador de estados globales basado en el patron de diseño `FLUX` \
Flux propone un flujo unidireccional de los datos y la necesidad de solicitar cambios en los mismos por medio de acciones \

En base a lo anterior es que la estructura de las carpetas y archivos toma un orden y estructura establecida que responda y facilite el entendimiento del protron redux. 

### `ErrorBoundary`
En el sistema esta implementado el HOC de limite de erorres `ErrorBoundary` lo cual permite que cualquier error de JavaScript en una parte de la interfaz no rompa toda la aplicación \
Los ErrorBoundary es un componente que capturan errores de JavaScript en cualquier parte de sus hijos, registran esos errores, y muestran una interfaz que se estime conveniente en vez de el error poco amigable que rompe la aplicación.\
En en componente de `Lista Tickets Cerrados` se disponibilizo un boton el cual simula un error de renderizado para ver en accion el `ErrorBoundary`. 
### `Prop-Types`
Se utiliza prop-types para la verificaicon de tipos en las props de algun componente. \
Cuando un valor invalido se asigna a una prop, muestra una advertencia en la consola, esto facilita para saber que tipo de dato pasar al componente.

### `Despliegue de manera local `
Para poder arrancar el proyecto de manera local debido al empaquetamiento de recursos con `WebPack y Babel` se deben ejecutar los siguientes comandos \

`npm start` \
`npm run build` \
`npm run dev-server` 

### `Mejoras Fututras` 
*Dashboard para tickets \
*Creacion de usuario \
*Creacion nuevo Estacionamientos \
*Parametrizar Estacionamiento \
*Funcionalidad de cambiar empresa(Estacionamiento)

# Autor
Jorge Valdés Cáceres \
[Rakidwam](https://www.rakidwam.cl/)





