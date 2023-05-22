const recuadroInformativo= document.querySelector("#recuadro-informacion");
const selectCamas= document.querySelector("#select-camas");
const selectDias= "select-dias";
const selectIngreso="select-ingreso";
const selectServiciosExtra= "select-servicios-extra";
const divTipo= document.querySelector ("#div-tipo")

contadorClick= 0;
function clickIngreso() {
contadorClick= ++contadorClick;
    switch (contadorClick) {
        case 1:
    divTipo.innerHTML=`<legend>Dias</legend>`
    selectCamas.innerHTML=<select name="Dias" id="select-dias">
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="7">7</option>
        </select>
    
            
            break;
        case 2:
            divTipo.innerHTML=`<legend> Ingresan</legend>}`
            selectCamas.innerHTML=<select name="Ingresan" id="select-ingreso">
                <option value="Lunes">Lunes</option>
                <option value="Miercoles">Miercoles</option>
                <option value="Sabado">Sabado</option>
            </select>
               
                        
            break;
        case 3:
        divTipo.innerHTML=`<legend> Sevicios extra</legend>`
        selectCamas.innerHTML=<select name="Servicios Extra" id="select-servicios-extra">
            <option value=" Desayuno">Desayuno</option>
            <option value=" Desayuno y almuerzo">Desayuno y almuerzo</option>
            <option value=" Desayuno, almuerzo y cena">Desayuno, almuerzo y cena</option>
        </select>
        
                        break;

                
        default:
        break;
    }
recuadroInformativo.innerHTML+= `<p> cantidad de camas"${(selectCamas.value)}", cantidad de dias"${(selectDias.value)}",dia de ingreso "${(selectIngreso.value)}", servicios extra${(selectServiciosExtra.value)} </p>`  
} 