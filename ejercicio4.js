
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
function MostrarProducto(c){
    console.log(`
         Id_producto :     ${c.id}
         Nombre_producto:  ${c.nombre}
         Tipo_producto:    ${c.tipo}
         Precio_producto:  ${c.precio}                   `);
}

async function BuscarProducto(idP) {
    return new Promise ((resolve, reject)=>{
        let ProductoEncontrado = Productos.find(Producto=> Producto.id === idP);
        if(ProductoEncontrado){
           
            resolve(MostrarProducto(ProductoEncontrado));
            
        }
        else{
            reject(`El producto con la id ${idP} no se encuentra en la lista`);
        }
    })
    
}
async function ejecutar(R) { 
    try {
        let mensaje =await BuscarProducto(R);
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
    
}

ejecutar(1);
ejecutar(6);
