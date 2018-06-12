function validar(){
    var CajaNsu = document.getElementById("nombre").value;
    var CajaApe = document.getElementById("apellidos").value;
    var CajaDoc = document.getElementById("documento").value;
    var CajaGen = document.getElementById("browsers").value;
    var CajaEma = document.getElementById("email").value;
    var CajaCar = document.getElementById("browsers2").value;
    var CajaCon = document.getElementById("contrasena").value;
    var CajaReCon = document.getElementById("repecontrasena").value;
    if(CajaNsu.length == 0){
        $('#mensan').text("El DOCUMENTO no puede quedar vacio");
        document.getElementById('alertn').style.color = 'red'; 
        return false;
    }
    else if(CajaApe.length == 0){
        /*alert("El campo contraseña no puede quedar vacio")*/
        $('#mensaa').text("La CONTRASEÑA no puede quedar vacio");
        document.getElementById('alerta').style.color = 'red'; 
        return false;
    }
    return true;
}   
