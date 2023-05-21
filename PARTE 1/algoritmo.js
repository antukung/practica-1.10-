const select1 = document.querySelector ("select");
const parrafo= document.querySelector ("#precio");
const parrafoTotal= document.querySelector ("#total");
const lista= document.querySelector ("#lista");
const imagenProducto= document.querySelector ("#imagen-producto");
const IMG_2= "https://www.shutterstock.com/image-photo/fresh-variation-food-beverages-260nw-281333147.jpg"
const productoNombre= document.querySelector ("#producto");
productoNombre.innerHTML=NOMBRE_PRODUCTO_1;
parrafo.innerHTML=PRECIO_PRODUCTO_1;


const NOMBRE_PRODUCTO_1= "Producto (1)"
const PRECIO_PRODUCTO_1= 500;
const NOMBRE_PRODUCTO_2= "Producto (2)"
const PRECIO_PRODUCTO_2= 800;
const DESCUENTO_PRODUCTO_1_3=10;
const DESCUENTO_PRODUCTO_1_7=25;
const DESCUENTO_PRODUCTO_2_1=15;
const DESCUENTO_PRODUCTO_2_7=30;

let precioProductoActual= PRECIO_PRODUCTO_1;
let nombreProductoActual= NOMBRE_PRODUCTO_1;

let total = 0;

function agregarAlCarrito() {
let descuentoDetectado= 0
     
    switch (nombreProductoActual) {
        case "Producto (1)":
            switch (parseInt(select1.value)){
            case 3:
                descuentoDetectado= DESCUENTO_PRODUCTO_1_3;
                break;
            case 7:
                descuentoDetectado= DESCUENTO_PRODUCTO_1_7;
                break;
        
        }
            break;
        case "Producto (2)":
            switch (parseInt(select1.value)){
            case 1:
                descuentoDetectado= DESCUENTO_PRODUCTO_2_1;
                break;
            case 7:
                descuentoDetectado= DESCUENTO_PRODUCTO_2_7;
                break;
        
            }
       }
    total+=precioProductoActual *((100-descuentoDetectado)/100)*(parseInt(select1.value));
    parrafoTotal.innerHTML= "$"+total;

    lista.innerHTML+= `<li>"${nombreProductoActual+ "("+(select1.value)+")" }"</li>`
      
}


function siguienteProducto() {
    imagenProducto.src= IMG_2;
    productoNombre.innerHTML= NOMBRE_PRODUCTO_2;
    parrafo.innerHTML= PRECIO_PRODUCTO_2;
    nombreProductoActual= NOMBRE_PRODUCTO_2;
    precioProductoActual=PRECIO_PRODUCTO_2;
}
