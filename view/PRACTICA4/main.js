$(document).ready(function(){
    $("#mensaje_img1").hide();
    $("#imagen1").hover(muestra,oculta);
});
function muestra(){
    $("#mensaje_img1").show();
}
function oculta(){
    $("#mensaje_img1").hide();
}

