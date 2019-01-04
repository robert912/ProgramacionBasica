//alert("quieres Plata!!!");
class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.catidad = c;
    }
}

var caja = [];
var entregado = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var b = document.getElementById("extraer");
var r = document.getElementById("resultado");
b.addEventListener("click", entregarDinero);


function descuentoCantidad() {
    
    for (var bi of caja)
    {
        for (var bie of entregado)
        {
            if (bi.valor == bie.valor) {
                bi.catidad = bi.catidad - bie.catidad;
                if(bie.catidad != 0)
                    r.innerHTML += bie.catidad + " billetes de $" + bie.valor + "<br />";
                bie.catidad = [];
            }
        }
    }
}



function entregarDinero()
{
    var t = document.getElementById("dinero")
    var retiro = parseInt(t.value);

    var saldoCa = 0
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
                    entregado.push(new Billete(bi.valor, cantidadBi));
                }
                else {
                    cantidadBi = bi.catidad;
                    entregado.push(new Billete(bi.valor, cantidadBi));
                }
            }
            else
                entregado.push(new Billete(bi.valor, cantidadBi));
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