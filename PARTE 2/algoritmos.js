const recuadroInformativo= document.querySelector("#recuadro-informacion");
const selectCamas= document.querySelector("#select-camas");
const selectDias=document.querySelector("#select-dias");
const selectIngreso=document.querySelector("#select-ingreso");
const selectServiciosExtra= document.querySelector("#select-servicios-extra");

function clickIngreso() {
    recuadroInformativo.innerHTML+= `<p> cantidad de camas"${(selectCamas.value)}", cantidad de dias"${(selectDias.value)}",dia de ingreso "${(selectIngreso.value)}", servicios extra${(selectServiciosExtra.value)} </p>`
}
