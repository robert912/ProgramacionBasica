/*
alert("yeaa!!!");
var z;

for (var i = 0; i < 10; i++)
{
    z = aleatorio(0, 10);
    document.write(z + ", ");
}
*/

var vk = document.getElementById("villaKof");
var papel = vk.getContext("2d");



var fondo = {
    url: "tile.png",
    cargaOk: false
}

var vaca = {
    url: "vaca.png",
    cargaOk: false
}
var cerdo = {
    url: "cerdo.png",
    cargaOk: false
}
var pollo = {
    url: "pollo.png",
    cargaOk: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()  {
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()  {
    vaca.cargaOk = true;
    dibujar();
}

function cargarCerdos() {
    cerdo.cargaOk = true;
    dibujar();
}

function cargarPollos() {
    pollo.cargaOk = true;
    dibujar();
}

var xvaca = [];
var yvaca = [];

var xpollo = [];
var ypollo = [];

var xcerdo = 0;
var ycerdo = 0;

var cantidad = 10;

function dibujar() {
    if (fondo.cargaOk)
        papel.drawImage(fondo.imagen, 0, 0);

    if (vaca.cargaOk)
        for (var v = 0; v < cantidad; v++) {
            xvaca[v] = 50 * aleatorio(0, 7);
            yvaca[v] = 50 * aleatorio(0, 7);
            papel.drawImage(vaca.imagen, xvaca[v], yvaca[v]);
        }

    if (pollo.cargaOk)
        for (var v = 0; v < cantidad; v++) {
            xpollo[v] = 50 * aleatorio(0, 7);
            ypollo[v] = 50 * aleatorio(0, 7);
            papel.drawImage(pollo.imagen, xpollo[v], ypollo[v]);
        }
    if (cerdo.cargaOk) {
        xcerdo = aleatorio(0, 420);
        yverdo = aleatorio(0, 420);
        papel.drawImage(cerdo.imagen, xcerdo, ycerdo);


    }
}

function dibujarMovimiento(xcerdo, ycerdo) {
    if (fondo.cargaOk)
        papel.drawImage(fondo.imagen, 0, 0);

    if (cerdo.cargaOk) {
        //console.log("llego hasta el cerdo");
        papel.drawImage(cerdo.imagen, xcerdo, ycerdo);
    }

    if (vaca.cargaOk)
        for (var i = 0; i < cantidad; i++)
        papel.drawImage(vaca.imagen, xvaca[i], yvaca[i]);

    if (pollo.cargaOk)
        for (var i = 0; i < cantidad; i++)
        papel.drawImage(pollo.imagen, xpollo[i], ypollo[i]);
}



function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) +min;
    return resultado;
}

document.addEventListener("keydown", dibujarTeclado);

function dibujarTeclado(evento)
{
    var movimiento = 50;
    var teclas = {
        LEFT: 37,
        RIGHT: 39,
        UP: 38,
        DOWN: 40
    };

    switch (evento.keyCode) {
        case teclas.UP:

            ycerdo = ycerdo - movimiento;
            dibujarMovimiento(xcerdo, ycerdo);
            break;

        case teclas.DOWN:

            ycerdo = ycerdo + movimiento;
            dibujarMovimiento(xcerdo, ycerdo);
            //console.log("abajo"); 
            break;

        case teclas.LEFT:

            xcerdo = xcerdo - movimiento;
            dibujarMovimiento(xcerdo, ycerdo);
            //console.log("Izquierda"); 
            break;

        case teclas.RIGHT:

            xcerdo = xcerdo + movimiento;
            dibujarMovimiento(xcerdo, ycerdo);
            //console.log("Derecha"); 
            break;

        default:
            break;
    }
}
