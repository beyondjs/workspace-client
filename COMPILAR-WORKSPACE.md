#Para compilar el workspace

si se utilizan versiones mayores a la 0.1.7 del paquete @beyond-js/kernel
hay que agregar en el archivo bundle.js de la compilacion generada la siguiente linea

- const amd_require = require;
- comentar la declaracion de la variable require de la linea 7
- // const require = () => void 0;

esto motivado a que luego de la version @beyond-js/kernel@0.1.8 no se le da soporte