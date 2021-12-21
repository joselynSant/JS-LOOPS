//**Iteración #2: Condicionales avanzados**

//Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***.

//Puedes usar este array para probar tu función:


const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

//let print = (data) => console.log(data)

function approved(param) {
    debugger
    for (let i = 0; i < param.length; i++) {
        let contador = 0
        if (param[i].T1 == true) {
            contador += 1
        }
        if (param[i].T2 == true) {
            contador += 1
        }
        if (param[i].T3 == true) {
            contador += 1
        }
        if (contador >= 2) {
            param[i].isApproved = true
        } else {
            param[i].isApproved = false
        }
        return param
    }
}

let resultadoFinal = approved(alumns)
console.log(resultadoFinal)
