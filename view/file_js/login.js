function validar(){
    var CajaUsu = document.getElementById("text1").value;
    var CajaPas = document.getElementById("password1").value;
    if(CajaUsu.length == 0){
        $('#mensau').text("El DOCUMENTO no puede quedar vacio");
        document.getElementById('alertu').style.color = 'red'; 
        return false;
    }
    if(CajaPas.length == 0){
        /*alert("El campo contraseña no puede quedar vacio")*/
        $('#mensap').text("La CONTRASEÑA no puede quedar vacio");
        document.getElementById('alertp').style.color = 'red'; 
        return false;
    }
    return true;
}   

function soloNumeros(e){//la e lo que hace es capturar eventos del tecladopara eventos de captura de teclado
    key=e.keyCode || e.which;//
    tecla=String.fromCharCode(key).toLowerCase()//transfome todo lo que sea mayuscula o miniscula
    numeros="1234567890";//las letras que se permiten
    especiales="8-37-39-46";//
    tecla_especial=false
    for(var i in especiales){
        if(key==especiales[i]){
           tecla_especial=true;
           break;
           }
    }
    if(numeros.indexOf(tecla)==-1 && !tecla_especial){
        return false;
   
    }
   }