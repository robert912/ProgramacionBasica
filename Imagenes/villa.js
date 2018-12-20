var z;
var vh = document.getElementById("villaHistol");
var papel = vh.getContext("2d");
var mapa = "tile.png";

var imagen = new Image();
imagen.src = mapa;
imagen.addEventListener("load", dibujar);

function dibujar()
{
  papel.drawImage(imagen, 0, 0);
}
/*
for (var i=0;i<10;i++)
{
  z= aleatorio(5,0);
  document.whrite(z + ", ");
}
*/

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) +min;
    return resultado;
}
