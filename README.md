# Readme Car Service
CarService, es un software de gestion de estacionamiento, que permite modernizar mediante la tecnologia la gestion del ingreso y salida y cobro por concepto del estacionamiento.

Link de despliegue en produccion Vercel-- [Car Service](https://car-service.vercel.app/).
link https://car-service.vercel.app/(https://car-service.vercel.app/)

### `Credenciales de acceso` 

Para efectos de prueba, se disponibilizo un usuario con un solo estacionamiento asignado
Usuario: jvaldes
Password: 12345678

### `API CarService`
La plataforma se conecta a la Api https://car.rakidwam.cl/car_service/api_rest/ \
la API es de creacion propia de la empresa [Rakidwam](https://www.rakidwam.cl/) \
Lo servicios rest son de creacion propia debido a eso aun no tiene documentacion en produccion. 
La API al hacer login proporciona un token el cual es necesario para conectar a los diferentes endPoint disponibilizados por la API.

**Principales Servicios **
`Login`
`IngresarTicket`
`SacarTicket`
`IngresarTicket`
`PagarTicket`
`ListAllTicket`
`TicketsAbiertos`
`CambiarPatente`

Los servicios mencionados anteriormente son lo que ocupa CarService en ReactJs

### `Patron de Arquitectura`

CarService esta diseñado bajo la arquitectura React Redux \
Redux es un manejador de estados globales basado en el patron de diseño `FLUX` 
Flux propone un flujo unidireccional de los datos y la necesidad de solicitar cambios en los mismos por medio de acciones

En base a lo anterior es que la estructura de las carpetas y archivos toma un orden y estructura establecida que responda y facilite el entendimiento del protron redux. 

