class Costos {  
    constructor() {  
        this.costoBase = 50.00;  
        this.cargoPorLBExcedente = 20.00;  
        this.costoPorKmExcedente = 10.00;  
    }  

    calcularCostoEnvio(peso, distancia) {  
        let costoTotal = this.costoBase;  
        let recargoPorPeso = 0;  
        let recargoPorDistancia = 0;  

       
        if (peso > 5) {  
            recargoPorPeso = (peso - 5) * this.cargoPorLBExcedente;  
            costoTotal += recargoPorPeso;  
        }  

       
        if (distancia > 50) {  
            recargoPorDistancia = (distancia - 50) * this.costoPorKmExcedente;  
            costoTotal += recargoPorDistancia;  
        }  

        return { costoTotal, recargoPorPeso, recargoPorDistancia };  
    }  
}  

module.exports = Costos;
