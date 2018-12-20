//alert("Todo Bien!!")
document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("area_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;
var teclas = {
  LEFT: 37,
  RIGHT: 39,
  UP: 38,
  DOWN: 40
};

dibujarlinea("red", 149, 149, 151, 151, papel);

function dibujarTeclado(evento)
{
  var color = "blue";
  var movimiento = 10;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarlinea(color, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      //console.log("Arriba");
    break;

    case teclas.DOWN:
      dibujarlinea(color, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      //console.log("abajo");
    break;

    case teclas.LEFT:
      dibujarlinea(color, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      //console.log("Izquierda");
    break;

    case teclas.RIGHT:
      dibujarlinea(color, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      //console.log("Derecha");
    break;

    default:
    break;
  }
}

function dibujarlinea(color, xI, yI, xF, yF, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle =color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xI,yI);
  lienzo.lineTo(xF,yF);
  lienzo.stroke();
  lienzo.closePath();

}
