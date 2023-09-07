Ejercicio 2
Crear un servidor http utilizando el módulo nativo http
de Node.JS. Este deberá escuchar peticiones en el
puerto 8080 y responderá con un “Hola Mundo” en el
caso de un requerimiento a su ruta raíz.
En otra ruta llamada fyh, responderá con la fecha y
hora en formato dd/mm/yyyy hh:mm:ss
Si el servidor recibe algún otro requerimiento fuera de
esas dos rutas, contestará con un mensaje de error en
formato HTML, con status http error 404, a través de
un elemento de título h2, en color rojo, mostrando la
ruta
no válida