function limpar(){
    alert("você limpou os campos :D")
 document.getElementById('inp').value=" ";
 document.getElementById('inp2').value=" ";
 document.getElementById('inp3').value=" ";
}
function submit(){
    var spc1 =document.getElementById('inp').value
    var spc2 =document.getElementById('inp2').value
    var spc3 =document.getElementById('inp3').value
     if (window.confirm(`${spc1}, realizaste esse formulario na data ${spc2} e seu numero é ${spc3}?`)){
         alert(`${spc1}, entrarei em contato assim que possivel`)
     }
     else( limpar)
}
const subm = document.getElementById('submit')
const limp = document.getElementById('limpar')

subm.addEventListener('click',submit)
limp.addEventListener('click',limpar)