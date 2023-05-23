const recuadroInformativo= document.querySelector("#recuadro-informacion");
const select= document.querySelector("#select-camas");
const legent= document.querySelector ("#legend")
let textoComplementario="cantidad de camas";

contadorClick= 0;
function clickIngreso() {
contadorClick= ++contadorClick;
    switch (contadorClick) {
        case 1:
    legent.innerHTML=`Cantidad de dias`;
    select.innerHTML=`<select name="" id="select-dias">
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="7">7</option>
            </select>`
         textoComplementario="cantidad de dias ";
            
            break;
        case 2:
            legent.innerHTML=`Dia de la semana`;
            select.innerHTML=`<select name="" id="select-ingreso">
                <option value="Lunes">Lunes</option>
                <option value="Miercoles">Miercoles</option>
                <option value="Sabado">Sabado</option>
                </select>"
        `
         textoComplementario="dia de la semana ";
            break;
        case 3:
        legent.innerHTML=`Servicio extra`;
        select.innerHTML=`<select name="" id="select-servicios-extra">
            <option value="Desayuno">Desayuno</option>
            <option value="Desayuno y almuerzo">Desayuno y almuerzo</option>
            <option value="Desayuno, almuerzo y cena">Desayuno, almuerzo y cena</option>
            </select>}`
            textoComplementario="servicio extra ";
                               break;

                
        default:
            alert ("ya hiciste todo")
        break;
        
                
    

    }

recuadroInformativo.innerHTML+= `<p> ${textoComplementario}${(select.value)}</p>`  

} 