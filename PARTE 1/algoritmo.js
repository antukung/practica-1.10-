const select1 = document.querySelector ("select");
const parrafo= document.querySelector ("#precio");
const parrafoTotal= document.querySelector ("#total");
const lista= document.querySelector ("#lista");


const NOMBRE_PRODUCTO_1= "Producto (1)"
const PRECIO_PRODUCTO_1= 500;

let total = 0;

function agregarAlCarrito() {
    total+=PRECIO_PRODUCTO_1 *(parseInt(select1.value));
    parrafoTotal.innerHTML= "$"+total;

    lista.innerHTML+= `<li>"${NOMBRE_PRODUCTO_1+ "("+(select1.value)+")" }"</li>`
      
}



function funcionCmbiarPrecio() {
    switch (parseInt(select1.value)) {
        case 1:
            parrafo.innerHTML= PRECIO_PRODUCTO_1;
            break;
        case 3:
            parrafo.innerHTML= (PRECIO_PRODUCTO_1*3);
            break;
        case 7:
            parrafo.innerHTML= (PRECIO_PRODUCTO_1*7);
            break;
        default:
            break;
    }
  
}
