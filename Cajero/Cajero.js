//alert("quieres Plata!!!");

var imagenes = [];
imagenes["billete50"] = "billete50.png";
imagenes["billete20"] = "billete20.png";
imagenes["billete10"] = "billete10.png";

var caja = [];
var entregado = [];
caja.push(new Billete("billete50", 50, 3));
caja.push(new Billete("billete20", 20, 5));
caja.push(new Billete("billete10", 10, 5));

var b = document.getElementById("extraer");
var r = document.getElementById("resultado");
b.addEventListener("click", entregarDinero);


function descuentoCantidad() {
    var t = document.getElementById("dinero")
    var retiro = parseInt(t.value);
    var verificacion = 0;
    for (var bia of entregado)
    {
        verificacion += (bia.catidad * bia.valor);
    }
    if (verificacion == retiro) {
        r.innerHTML += "<p>" + " dinero entregado:";
        for (var bi of caja)
        {
            for (var bie of entregado)
            {
                if (bi.valor == bie.valor) {
                    bi.catidad = bi.catidad - bie.catidad;
                    if (bie.catidad != 0) {
                        for (var i = 0; i < bie.catidad; i++)
                            r.innerHTML += "<img src=" + bie.imagen.src + " />";
                        //r.innerHTML += bie.catidad + " billetes de $" + bie.valor + "<br />";
                    }
                    bie.catidad = [];
                }
            }
        }
        r.innerHTML += "<p><hr>";
    }
    else {
        r.innerHTML = "No tengo los billetes para esa suma, intenta otro valor";
        for (var bie of entregado)
        {
            bie.catidad = [];
        }
    }
}



function entregarDinero()
{
    var t = document.getElementById("dinero")
    var retiro = parseInt(t.value);

    var saldoCa = 0;
    for (var bi of caja)
    {
        saldoCa = saldoCa + (bi.catidad * bi.valor);
    }
    if (saldoCa >= retiro && retiro % 10 == 0) {
        for (var bi of caja) {
            var cantidadBi = 0;
            if (retiro >= bi.valor) {
                cantidadBi = Math.floor(retiro / bi.valor);

                if (cantidadBi <= bi.catidad) {
                    entregado.push(new Billete(bi.nombre, bi.valor, cantidadBi));
                }
                else {
                    cantidadBi = bi.catidad;
                    entregado.push(new Billete(bi.nombre, bi.valor, cantidadBi));
                }
            }
            else
                entregado.push(new Billete(bi.nombre, bi.valor, cantidadBi));
            retiro = retiro - (cantidadBi * bi.valor);
            cantidadBi = 0;
        }
        descuentoCantidad()
    }
    else {
        if (retiro % 10 != 0)
            r.innerHTML = "Intente con Billetes multiplos de 10";
        else
            r.innerHTML = "Saldo Insuficiente en el Cajero";
    }
}

    