// $(document).ready(function(){
//     $("#mensaje_img1").hide();
//     $("#imagen1").hover(muestra,oculta); //hide sirve para ocultar
// });

// function muestra(){
//     $("#mensaje_img1").show(); //show es para mostrar
// }
// function oculta(){
//     $("#mensaje_img1").hide();
// }



//SEGUNDO EJERCICIO
// $(document).ready(function(){
//     $("#submenu1").hide();
//     $("#Archivo").on("click",function(){
//         $("#submenu1").toggle(); //TOGGLE SIRVE PARA MOSTRAR Y OCULTAR SIN NECESIDAD DE DECLARAR
//     });
// });

// TERCER EJERCICIO
// $(document).ready(function(){
//     $('.respuesta').hide();
//     $('.principal h3').on("click",function(){
//         $(this).next('.respuesta').toggle();
//     });
// });


//CUARTO EJERCICIO
// $(Document).ready(function(){
//     $(document).click(coordenada);
// });
// function coordenada(e){
//     alert("coordenada en el eje x" + e.clientX + 
//     "coordenada en el eje y " + e.clientY);
// }

//QUINTO EJERCICIO

$(document).ready(function(){
    var dir=$("#imagen1").attr("src");//la propieda attr remueve propiedades del html
    $("#imagen_grande").hide();
    $("#imagen1").bind("click",dir,abrir)// bind funcion que permite capturar un evento o dato, solo recibe 2
});

function abrir(e){
    $("#imagen_grande").fadeIn(1000);
    $("#img_cambia").replaceWith("<img src='"+e.data+
    "' width='700' height='405'>")
}