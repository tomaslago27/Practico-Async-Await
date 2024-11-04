let numeros= [7,8,19,10,11,12];

async function VerificarMayoria(Nrs,N) {
    return new Promise((resolve, reject) => {
        let c=0;
        for (const numero of Nrs) {
            if(numero>N)
            {
                c=c+1;
            }
        }
        if(c > Nrs.length/2)
            {
                resolve(` La mayoria de los numeros del arreglo son mayores que el numero ${N}.`);

            }
            else{
                reject(`La mayoria de los numeros del arreglo NO SON MAYORES que el numero ${N}.`);
            }
    })
};

async function ejecutar(array,valor) { 
    try {
        let mensaje =await VerificarMayoria(array,valor);
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
    
}

ejecutar(numeros,20);

ejecutar(numeros,9);