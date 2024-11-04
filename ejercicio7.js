class Producto {
    constructor(id, nombre, tipo, precio) {
        this.tipo = tipo
        this.nombre = nombre
        this.id = id
        this.precio=precio
    }
}
let producto1 ={
    tipo : "madera",
    nombre: "mesa",
    id:1,
    precio: 300
}

let Productos= [];
let producto2= new Producto (2, "puerta","madera",1000);
let producto3= new Producto (3, "ventana","metal",500);
let producto4= new Producto (4, "ceramico","ceramico",400);

let producto5= new Producto (5, "Pileta","ceramico",2000);
Productos.push(producto2);
Productos.push(producto3);
Productos.push(producto1);
Productos.push(producto4);

async function verificarPreciosAltos(productos, limite) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        let c=0;
    productos.forEach(element => {
        if(element.precio>limite)
        {
            c=c+1;
        }     
        
    });
    if(c==productos.length){
        resolve(`Todos los productos tienen precios mayor que del limite ${limite}.`);
    }
    else{
        reject(`NO TODO LOS PRECIOS DE LOS PRODUCTOS SUPERAN EL LIMITE${limite}.`);
    }
    }, 500);
    });
    }
    async function ejecutar() {
    try {
    const mensaje = await verificarPreciosAltos(Productos, 100);
    console.log(mensaje);
    } catch (error) {
    console.error(error);
    }
    }

    ejecutar();