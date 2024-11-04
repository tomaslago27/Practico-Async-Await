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
let producto2= new Producto (2, "puerta","madera",10);
let producto3= new Producto (3, "ventana","metal",500);
let producto4= new Producto (4, "ceramico","ceramico",400);

let producto5= new Producto (5, "Pileta","ceramico",2000);
Productos.push(producto2);
Productos.push(producto3);
Productos.push(producto1);
Productos.push(producto4);
function cambiar(pr){
    let nombreAnterior= pr.nombre;
    pr.nombre= "Mesa-modificada";
    console.log(`EL nombre a modificar es ${nombreAnterior}.
El nuevo nombre es ${pr.nombre}` );
    
}

async function actualizarNombreSiBarato(producto, limite) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    if (producto.precio < limite) {
        resolve(cambiar(producto))
    ;
    } else {
    reject("El producto es demasiado caro");
    
    }
    }, 500);
    });
    }
    async function ejecutarAgregado() {
    try {
    const mensaje = await actualizarNombreSiBarato(producto2, 30);
    console.log(mensaje);
    } catch (error) {
    console.error(error);
    }
    }

    ejecutarAgregado();