class Producto {
    constructor(id, nombre, tipo) {
        this.tipo = tipo
        this.nombre = nombre
        this.id = id
    }
}
let producto1 ={
    tipo : "madera",
    nombre: "mesa",
    id:1
}

let Productos= [];
let producto2= new Producto (2, "puerta","madera");
let producto3= new Producto (3, "ventana","metal");
let producto4= new Producto (2, "ceramico","ceramico");
Productos.push(producto2);
Productos.push(producto3);

async function insertarProducto(P) {

  
    return new Promise((resolve,reject)=>{
       
        let encotrado=true;
        for (let consultaProducto of Productos) {
            if (consultaProducto.id === P.id) {
              encotrado=false;
            }
        }
        if(encotrado){
            Productos.push(P);
            resolve(`El producto ${P.nombre} no se encuentra en la lista y se agregó correctamente.`);
            
        }
        else{
            reject(`El producto ${P.nombre} tiene la misma id que otro en la lista`);
        }
    })

}

async function ejecutar(pr) { 
    try {
        let mensaje =await insertarProducto(pr);
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
    
}
//Si quiere pruebe 1 a la vez.
ejecutar(producto1);
ejecutar(producto4);
