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
let producto4= new Producto (4, "ceramico","ceramico");

let producto5= new Producto (5, "Pileta","ceramico");
Productos.push(producto2);
Productos.push(producto3);
Productos.push(producto1);
Productos.push(producto4);




async function insertarProducto(Eliminar) {

  
    return new Promise((resolve,reject)=>{
       
        let encotrado=false;
        for (let consultaProducto of Productos) {
            if (consultaProducto.id === Eliminar.id) {
              encotrado=true;
            }
        }
        if(encotrado){
            let posicionProducto = Productos.indexOf(Eliminar);
        Productos.splice(posicionProducto, 1);
            resolve(`El producto ${Eliminar.nombre} se eliminó correctamente.`);
            
        }
        else{
            reject(`El producto ${Eliminar.nombre} no se encentra en la lista`);
        }
    })

}
async function ejecutar() { 
    try {
        let mensaje =await insertarProducto(producto2);
        console.log(mensaje);
    } catch (error) {
        console.error(error);
    }
    
}

ejecutar();