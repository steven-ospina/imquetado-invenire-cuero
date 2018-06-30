window.addEventListener('load', function(){
    console.log('el documento a cargado');
    
    var imagenes = [];

    imagenes[0] = 'file_img/imagenes_fondo/fondo_lading_3.jpg';
    imagenes[1] = 'file_img/imagenes_fondo/fondo_lading_6.jpg';
    imagenes[2] = 'file_img/imagenes_fondo/fondo_lading_7.jpg';
    imagenes[3] = 'file_img/imagenes_fondo/fondo_lading_5.jpg';

    var indiceImagenes = 0;
    var tiempo = 2000;

    function cambiarImagenes() {

        document.slider.src = imagenes[indiceImagenes];
         if( indiceImagenes < 3){
            indiceImagenes++;
         }else{
             indiceImagenes = 0;
         }
    }
    setInterval(cambiarImagenes, tiempo)

});