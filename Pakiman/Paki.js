//alert("atrapalos yaa!");
var imagenes = [];
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var Cauchin = new Pakiman("Cauchin", 100, 30);
var Pokacho = new Pakiman("Pokacho", 80, 50);
var Tocinauro = new Pakiman("Tocinauro", 140, 40);
console.log(Cauchin, Pokacho, Tocinauro);

Cauchin.mostrar();
Pokacho.mostrar();
Tocinauro.mostrar();
