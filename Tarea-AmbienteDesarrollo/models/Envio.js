const moment = require('moment');  
const Costos = require('./Costos');  

class Envio {  
    constructor(peso = 0, distancia = 0) {  
        this.peso = peso;  
        this.distancia = distancia;  
        this.costos = new Costos();  
    }  

    calcularCosto() {  
        return this.costos.calcularCostoEnvio(this.peso, this.distancia);  
    }  

    calcularFechaEstimado() {  
        const hoy = new Date();  
        const diasDeProceso = 2; // Días de procesamiento  
        const diasPorKm = Math.ceil(this.distancia / 100); // Días de transporte  
        const diasTotales = diasDeProceso + diasPorKm;  

        return moment(hoy).add(diasTotales, 'days').format('YYYY-MM-DD'); // Formato YYYY-MM-DD  
    }  

    mostrarDetallesEnvio() {  
        const { costoTotal, recargoPorPeso, recargoPorDistancia } = this.calcularCosto();  
        console.log(`Costo base: L${this.costos.costoBase.toFixed(2)}`);  
        console.log(`Recargo por peso: L${recargoPorPeso.toFixed(2)}`);  
        console.log(`Recargo por distancia: L${recargoPorDistancia.toFixed(2)}`);  
        console.log(`Costo total: L${costoTotal.toFixed(2)}`);  
        console.log(`Fecha estimada de entrega: ${this.calcularFechaEstimado()}`);  
    }  
}  

module.exports = Envio;  
