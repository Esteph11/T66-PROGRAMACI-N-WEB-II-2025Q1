const { program } = require('commander');  
const Envio = require('../models/Envio');  

// Establecer la versión del programa  
program  
  .version('1.0.0')  
  .option('-p, --peso <peso>', 'Peso del paquete en LB', parseFloat)  
  .option('-d, --distancia <distancia>', 'Distancia del envío en km', parseFloat)  
  .parse(process.argv);  

// Obtener las opciones ingresadas por el usuario  
const options = program.opts();  
const peso = options.peso;  
const distancia = options.distancia;  

if (peso && distancia) {  
    const envio = new Envio(peso, distancia);  
    envio.mostrarDetallesEnvio();  
} else {  
    console.log('Por favor, ingresar el peso del paquete y la distancia del envío.');  
}
