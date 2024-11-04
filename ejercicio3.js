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
async function ActualizarPrecio(Producto,Precio1) {
    return new Promise ((resolve, reject)=>{
        for (let Producto1 of Productos)
            {
                if(Producto1.id===Producto.id){
                    Producto.precio=Precio1;
                    resolve(`El nuevo precio del producto ${Producto.nombre} es:${Producto.precio}.`);
                }
                else{
                    reject(`El Producto ${Producto.nombre} no se encontró.`);
                }
            }
    })
    
}
async function CambiarPrecio(ProductoCab,PrecioCab) {
    try {
        let mensaje= await ActualizarPrecio(ProductoCab,PrecioCab);
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
}
CambiarPrecio(producto5,1500);