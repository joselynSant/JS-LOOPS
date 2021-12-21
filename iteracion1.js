//**Iteración #1: Usa includes**

//Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//Usa la función .***includes*** de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
    function buscarCami(camisetas) {
        for (let i = 0; i < camisetas.length; i++) {
            if (camisetas[i].includes('Camiseta')) {
                console.log(camisetas[i])
            }
        }
    }
    buscarCami(products)
